const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const { createNewRoom, addUser, swapTeam, getRoom, createStatus, setMovieName, setChooser } = require('./utils/users')
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

io.on('connection', socket => {

    socket.on('createRoom', (user, callback) => {
        const roomId = nanoid(10)
        const { roomData, color } = createNewRoom(roomId, { id: socket.id, ...user })
        socket.join(roomId)
        const data = { user: { id: socket.id, color, ...user }, roomData, team: true }
        callback(data)
    })

    socket.on('joinRoom', (roomId, user, callback) => {
        const { roomData, team, color } = addUser(roomId, { id: socket.id, ...user })
        socket.join(roomId)
        const data = { user: { id: socket.id, color, ...user }, roomData, team }
        callback(data)
        // socket.broadcast.to(roomId).emit('userJoined', roomData)
    })

    socket.on('sending signal', (user, team, callerID, signal) => {
        io.to(callerID).emit('userJoined', user, team, signal)
    })

    socket.on('returning signal', (callerID, signal) => {
        io.to(callerID).emit('returned signal', socket.id, signal);
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

    socket.on('callUser', ({ id, data }) => {
        io.to(id).emit('answerCall', { id: socket.id, data })
    })

    socket.on('answerCall', ({ id, data }) => {
        io.to(id).emit('callAccepted', data)
    })

    socket.on('sendMessage', (forEveryone, roomId, name, color, team, message) => {
        const today = new Date()
        const time = ((today.getHours() % 13) + (today.getHours() >= 12 ? 1 : 0)) + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + (today.getHours() >= 12 ? ' PM' : ' AM')
        if (forEveryone) {
            io.to(roomId).emit('recieveMessage', name, time, color, message, socket.id, true)
        }
        else {
            const roomData = getRoom(roomId)
            if (team) {
                roomData.teamA.forEach(({ id }) => {
                    io.to(id).emit('recieveMessage', name, time, color, message, socket.id, false)
                })
            }
            else {
                roomData.teamB.forEach(({ id }) => {
                    io.to(id).emit('recieveMessage', name, time, color, message, socket.id, false)
                })
            }

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

    socket.on('guessedWord', (roomId, user, word) => {
        const roomData = getRoom(roomId)
        const actualWord = roomData.status.movie
        if (actualWord === word) {
            const roomData = setChooser(roomId)
            io.to(roomId).emit('recieveMessage', 'Admin', '', 'green', word, null, true)
            io.to(roomId).emit('getChooser', roomData.status.actingTeam, roomData.status.chooser)
        }
        else {
            io.to(roomId).emit('recieveMessage', 'Admin', '', 'red', word, null, true)
        }
    })

    socket.on('setMovie', (roomId, movie) => {
        const movieName = movie.toUpperCase()
        const roomData = setMovieName(roomId, movieName)
        const blankWord = hideWord(movieName)
        if (!roomData.status.actingTeam) {
            roomData.teamA.forEach(user => {
                io.to(user.id).emit('getMovie', true, movieName, roomData.status.actor)
            });
            roomData.teamB.forEach(user => {
                if (!(roomData.status.actor.id === user.id)) {
                    io.to(user.id).emit('getMovie', false, blankWord, roomData.status.actor)
                }
            })
        }
        else {
            roomData.teamB.forEach(user => {
                io.to(user.id).emit('getMovie', true, movieName, roomData.status.actor)
            });
            roomData.teamA.forEach(user => {
                if (!(roomData.status.actor.id === user.id)) {
                    io.to(user.id).emit('getMovie', false, blankWord, roomData.status.actor)
                }
            })
        }
        io.to(roomData.status.actor.id).emit('getMovie', true, movieName, roomData.status.actor)
    })
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})