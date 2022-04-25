const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const { createNewRoom, addUser, swapTeam, getRoom, createStatus, setMovieName, setChooser, setGameType, setRounds, setDuration, removeUser } = require('./utils/users')
const { nanoid } = require('nanoid')

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

const hideWord = (word) => {
    str = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') str += ' '
        else str += '_'
    }
    return str
}

const currentTime = () => {
    const today = new Date()
    const time = ((today.getHours() % 13) + (today.getHours() >= 12 ? 1 : 0)) + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + (today.getHours() >= 12 ? ' pm' : ' am')
    return time
}

io.on('connection', socket => {

    socket.on('createRoom', (user, callback) => {
        const roomId = nanoid(10)
        const { roomData, color } = createNewRoom(roomId, { id: socket.id, ...user, mic: false })
        socket.join(roomId)
        const data = { user: { id: socket.id, color, ...user, mic: false }, roomData, team: true }
        callback(data)
    })

    socket.on('joinRoom', (roomID, user, callback) => {
        const gameData = addUser(roomID, { id: socket.id, ...user, mic: false })
        if (gameData.error) {
            socket.emit('error', gameData.error)
        }
        else {
            const { roomData, team, color, allUsers } = gameData
            socket.join(roomID)
            const data = { user: { id: socket.id, color, ...user, mic: false }, roomData, team, allUsers }
            callback(data)
            if (!roomData.isRunning) {
                socket.broadcast.to(roomID).emit('userJoinedRoom', data.user, team)
            }
        }
    })

    socket.on('userJoinedGame', (roomID, user, team) => {
        socket.broadcast.to(roomID).emit('userJoinedGame', user, team)
    })

    socket.on('mic', (roomID, userID, mic) => {
        io.to(roomID).emit('mic' + String(userID), mic)
    })

    socket.on('gameType', (roomID, gameType) => {
        setGameType(roomID, gameType)
        io.to(roomID).emit('gameType', gameType)
    })

    socket.on('rounds', (roomID, round) => {
        setRounds(roomID, parseInt(round))
        io.to(roomID).emit('rounds', round)
    })

    socket.on('duration', (roomID, duration) => {
        setDuration(roomID, duration)
        io.to(roomID).emit('duration', duration)
    })

    socket.on('sending signal', (callerID, signal) => {
        io.to(callerID).emit('receiving signal', socket.id, signal)
    })

    socket.on('returning signal', (callerID, signal) => {
        io.to(callerID).emit('returned signal', socket.id, signal);
    })

    socket.on('video signal', (callerID, signal) => {
        io.to(callerID).emit('video signal', socket.id, signal);
    })

    socket.on('accept video signal', (callerID, signal) => {
        io.to(callerID).emit('video signal accepted', socket.id, signal)
    })

    socket.on('swapTeam', (roomId, team) => {
        const roomData = swapTeam(roomId, socket.id, team)
        io.to(roomId).emit('swapTeam', socket.id, team)
    })

    socket.on('startGame', (roomId) => {
        const roomData = getRoom(roomId)
        if (roomData.isRunning) {
            io.to(roomId).emit('startGame', roomData.status)
        }
        else {
            const updatedRoomData = createStatus(roomId)
            io.to(roomId).emit('startGame', updatedRoomData.status)
        }
    })

    socket.on('sendMessage', (recieversID, messageInfo) => {
        const time = currentTime()
        if (messageInfo.group) {
            messageInfo.time = time
            messageInfo.sendersID = socket.id
            if (recieversID === 'Everyone') {
                socket.broadcast.to(messageInfo.roomID).emit('recieveMessage', 'Everyone', messageInfo)
            }
            else {
                const roomData = getRoom(messageInfo.roomID)
                if (messageInfo.team) {
                    roomData.teamA.forEach(({ id }) => {
                        if (socket.id !== id)
                            io.to(id).emit('recieveMessage', 'Team', messageInfo)
                    })
                }
                else {
                    roomData.teamB.forEach(({ id }) => {
                        if (socket.id !== id)
                            io.to(id).emit('recieveMessage', 'Team', messageInfo)
                    })
                }
            }
            socket.emit('recieveMessage', recieversID, { ...messageInfo, isMe: true })
        }
        else {
            io.to(recieversID).emit('recieveMessage', socket.id, { ...messageInfo, time })
            socket.emit('recieveMessage', recieversID, { ...messageInfo, time, isMe: true })
        }
    })

    socket.on('canvasSize', (roomId, width, height) => {
        socket.broadcast.to(roomId).emit('canvasSize', width, height)
    })

    socket.on('startDrawing', (roomId, offsetX, offsetY) => {
        socket.broadcast.to(roomId).emit('startDrawing', offsetX, offsetY)
    })

    socket.on('draw', (roomId, offsetX, offsetY) => {
        socket.broadcast.to(roomId).emit('draw', offsetX, offsetY)
    })

    socket.on('finishDrawing', (roomId) => {
        socket.broadcast.to(roomId).emit('finishDrawing')
    })

    socket.on('colorChange', (roomId, color) => {
        socket.broadcast.to(roomId).emit('colorChange', color)
    })

    socket.on('lineWidthChange', (roomId, lineWidth) => {
        socket.broadcast.to(roomId).emit('lineWidthChange', lineWidth)
    })

    socket.on('floodFill', (roomId, newcolor, offsetX, offsetY) => {
        socket.broadcast.to(roomId).emit('floodFill', newcolor, offsetX, offsetY)
    })

    socket.on('clearCanvas', (roomId) => {
        socket.broadcast.to(roomId).emit('clearCanvas')
    })

    socket.on('guessedWord', (roomID, user, word) => {
        const roomData = getRoom(roomID)
        const actualWord = roomData.status.movie
        if (actualWord === word) {
            const { chooser, round, gameEnd } = setChooser(roomID)
            io.to(roomID).emit('recieveMessage', 'Admin', '', 'green', word, null, true)
            if (gameEnd) {
                console.log('win');
                io.to(roomID).emit('gameEnd', chooser)
            }
            else {
                io.to(roomID).emit('getChooser', chooser, round)
            }
        }
        else {
            io.to(roomID).emit('recieveMessage', 'Admin', '', 'red', word, null, true)
        }
    })

    socket.on('setMovie', (roomId, movie) => {
        const movieName = movie.toUpperCase()
        const roomData = setMovieName(roomId, movieName)
        const blankWord = hideWord(movieName)
        if (!roomData.status.performingTeam) {
            roomData.teamA.forEach(user => {
                io.to(user.id).emit('getWord', true, movieName, roomData.status.performer)
            });
            roomData.teamB.forEach(user => {
                if (!(roomData.status.performer.id === user.id)) {
                    io.to(user.id).emit('getWord', false, blankWord, roomData.status.performer)
                }
            })
        }
        else {
            roomData.teamB.forEach(user => {
                io.to(user.id).emit('getWord', true, movieName, roomData.status.performer)
            });
            roomData.teamA.forEach(user => {
                if (!(roomData.status.performer.id === user.id)) {
                    io.to(user.id).emit('getWord', false, blankWord, roomData.status.performer)
                }
            })
        }
        io.to(roomData.status.performer.id).emit('getWord', true, movieName, roomData.status.performer)
    })

    socket.on('time out', roomID => {
        const { chooser, round, gameEnd } = setChooser(roomID)
        if (gameEnd) {
            io.to(roomID).emit('gameEnd', chooser, round)
        }
        else {
            io.to(roomID).emit('getChooser', chooser, round)
        }
    })

    socket.on('disconnect', () => {
        const userID = socket.id
        const userInfo = removeUser(userID)
        if (userInfo) {
            const { roomID, team, onWork } = userInfo
            io.to(roomID).emit('userLeftRoom', userID, team)
            if (onWork) {
                const { chooser, round } = setChooser(roomID)
                console.log(chooser);
                io.to(roomID).emit('getChooser', chooser, round)
            }
        }
    })

})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})