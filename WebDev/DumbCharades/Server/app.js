const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const { createNewRoom, addUser, swapTeam, getRoom, createStatus, setMovieName } = require('./utils/users')
const { nanoid } = require('nanoid')

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', socket => {

    socket.on('createRoom', (user, callback) => {
        const roomId = nanoid(10)
        const { roomData, color } = createNewRoom(roomId, { id: socket.id, ...user })
        socket.join(roomId)
        callback(socket.id, roomData, true, color)
    })

    socket.on('joinRoom', (roomId, user, callback) => {
        const { roomData, team, color } = addUser(roomId, { id: socket.id, ...user })
        socket.join(roomId)
        callback(socket.id, roomData, team, color)
        socket.broadcast.to(roomId).emit('changeOccured', roomData)
    })

    socket.on('swapTeam', (roomId, team) => {
        const roomData = swapTeam(roomId, socket.id, team)
        io.to(roomId).emit('changeOccured', roomData)
    })

    socket.on('startGame', (roomId) => {
        const roomData = getRoom(roomId)
        if (roomData.isRunning) {
            io.to(roomId).emit('startGame', roomData)
        }
        else {
            const updatedRoomData = createStatus(roomId)
            io.to(roomId).emit('startGame', updatedRoomData)
        }
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

    socket.on('setMovie', (roomId, movie) => {
        const movieName = movie.toUpperCase()
        const roomData = setMovieName(roomId, movieName)
        if (!roomData.status.actingTeam) {
            roomData.teamA.forEach(user => {
                io.to(user.id).emit('getMovie', true, movieName, roomData.status.actor)
            });
            roomData.teamB.forEach(user => {
                if (!(roomData.status.actor.id === user.id)) {
                    io.to(user.id).emit('getMovie', true, movieName.length, roomData.status.actor)
                }
            })
        }
        else {
            roomData.teamB.forEach(user => {
                io.to(user.id).emit('getMovie', true, movieName, roomData.status.actor)
            });
        }
        io.to(roomData.status.actor.id).emit('getMovie', true, movieName, roomData.status.actor)
    })
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})