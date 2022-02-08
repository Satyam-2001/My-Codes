const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const { createNewRoom, addUser, swapTeam, getRoom, createStatus } = require('./utils/users')
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

    socket.on('createRoom', (user) => {
        const roomId = nanoid(10)
        const roomData = createNewRoom(roomId, { id: socket.id, ...user })
        socket.join(roomId)
        socket.emit('joined', roomData, true)
    })

    socket.on('joinRoom', (roomId, user) => {
        const { roomData, team } = addUser(roomId, { id: socket.id, ...user })
        socket.join(roomId)
        socket.emit('joined', roomData, team)
        socket.broadcast.to(roomId).emit('changeOccured', roomData)
    })

    socket.on('swapTeam', (roomId, team) => {
        const roomData = swapTeam(roomId, socket.id, team)
        io.to(roomId).emit('changeOccured', roomData)
    })

    socket.on('startGame', (roomId) => {
        const roomData = createStatus(roomId)
        io.to(roomId).emit('startGame', roomData)
    })
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})