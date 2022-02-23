const users = []

const colorsArray = [
    'rgb(255,51,0)',
    'rgb(204,0,102)',
    'rgb(102,102,255)',
    'rgb(255,204,0)',
    'rgb(102,255,51)',
    'rgb(255,102,102)',
    'rgb(153,0,153)',
    'rgb(0,102,0)',
    'rgb(255,251,0)',
    'rgb(255,153,102)',
    'rgb(153,0,51)',
    'rgb(51,102,153)',
    'rgb(102,102,51)',
    'rgb(153,102,0)',
    'rgb(153,153,51)',
    'rgb(51,51,204)',
]

const createNewRoom = (roomId, userData) => {
    const roomData = {
        id: roomId,
        joined: 0,
        status: null,
        isRunning: false,
        admin: userData.id,
        teamA: [{ ...userData, color: colorsArray[0] }],
        teamB: []
    }
    users.push(roomData)
    return { roomData, color: colorsArray[0] }

}

const getRoom = roomId => {
    const index = users.findIndex(room => room.id === roomId)
    return users[index]
}

const addUser = (roomId, userData) => {
    const index = users.findIndex(room => room.id === roomId)
    users[index].joined = (users[index].joined + 1) % colorsArray.length
    const color = colorsArray[users[index].joined]

    if (users[index].teamA.length <= users[index].teamB.length) {
        users[index].teamA.push({ ...userData, color })
        return { roomData: users[index], team: true, color }
    }
    users[index].teamB.push({ ...userData, color })
    return { roomData: users[index], team: false, color }
}

const removeUser = (roomId, userId) => {
    const room = getRoom(roomId)
}

const swapTeam = (roomId, userId, team) => {
    const index = users.findIndex(room => room.id === roomId)
    if (team) {
        const userIndex = users[index].teamA.findIndex(user => user.id === userId)
        if (userIndex !== -1) {
            users[index].teamB.push(users[index].teamA[userIndex])
            users[index].teamA.splice(userIndex, 1)
        }
    }
    else {
        const userIndex = users[index].teamB.findIndex(user => user.id === userId)
        if (userIndex !== -1) {
            users[index].teamA.push(users[index].teamB[userIndex])
            users[index].teamB.splice(userIndex, 1)
        }
    }
    return users[index]
}

const createStatus = (roomId) => {
    const index = users.findIndex(room => room.id === roomId)
    users[index].isRunning = true
    users[index].status = {
        actingTeam: true,
        actor: null,
        chooser: users[index].teamA[0],
        movie: null,
        time: new Date(),
        actorCountA: 0,
        chooserCountA: 1,
        actorCountB: 0,
        chooserCountB: 1
    }
    return users[index]
}

const setMovieName = (roomId, movieName) => {
    const index = users.findIndex(room => room.id === roomId)
    users[index].status.chooser = null
    if (users[index].status.actingTeam) {
        users[index].status.actor = users[index].teamB[users[index].status.actorCountB]
        users[index].status.actorCountB = (users[index].status.actorCountB + 1) % users[index].teamB.length
    }
    else {
        users[index].status.actor = users[index].teamA[users[index].status.actorCountA]
        users[index].status.actorCountA = (users[index].status.actorCountA + 1) % users[index].teamA.length
    }
    users[index].status.movie = movieName
    users[index].status.actingTeam = !users[index].status.actingTeam
    return users[index]
}

module.exports = {
    createNewRoom,
    getRoom,
    addUser,
    removeUser,
    swapTeam,
    createStatus,
    setMovieName
}