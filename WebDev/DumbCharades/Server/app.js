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
        callback(socket.id, roomData, team)
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

    socket.on('sendMessage', (roomId, name, message) => {
        const today = new Date()
        const time = (today.getHours() % 12) + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + (today.getHours() >= 12 ? ' PM' : ' AM')
        socket.broadcast.to(roomId).emit('recieveMessage', name, time, message)
        io.to(socket.id).emit('recieveMessage', 'You', time, message)
    })

    socket.on('setMovie', (roomId, movieName) => {
        const roomData = setMovieName(roomId, movieName)
        if (roomData.status.actingTeam) {
            roomData.teamA.forEach(user => {
                io.to(user.id).emit('getMovie', movieName, roomData.status.actor)
            });
        }
        else {
            roomData.teamB.forEach(user => {
                io.to(user.id).emit('getMovie', movieName, roomData.status.actor)
            });
        }
        io.to(roomData.status.chooser.id).emit('getMovie', movieName, roomData.status.actor)
    })
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})