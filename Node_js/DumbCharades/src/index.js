const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { v4: uuidV4 } = require('uuid')
const { addUser, getUsersInRoom, getUser, removeUser, swapTeam } = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'ejs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/room', (req, res) => {
    const { username, avatar } = req.query
    res.redirect(`/${uuidV4()}?username=${username}&avatar=${avatar}&admin=${true}`)
})

app.get('/:roomId', (req, res) => {
    const { username, avatar, admin } = req.query
    if (username && avatar) {
        return res.render('room', { ...req.query, admin })
    }
    res.render('home', { roomId: req.params.roomId })

})

io.on('connection', socket => {

    socket.on('join', (user) => {
        const { username, avatar, room, admin } = user
        socket.join(room)
        addUser({ id: socket.id, ...user, team: true })
        io.to(room).emit('changes', getUsersInRoom(room, true) , getUsersInRoom(room, false))
    })

    socket.on('swapTeam', () => {
        const room = swapTeam(socket.id)
        if(room){
            io.to(room).emit('changes',getUsersInRoom(room, true),getUsersInRoom(room, false))
        }
    })

    socket.on('startGame', (room) => {
        io.to(room).emit('gameStarted')
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            io.to(user.room).emit('userLeft', getUsersInRoom(user.room, user.team), user.team)
        }
    })
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})