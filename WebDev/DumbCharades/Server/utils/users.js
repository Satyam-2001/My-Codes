const users = []

const createNewRoom = (roomId,userData) => {
    const room = {
        id: roomId,
        status: null,
        admin: userData.id,
        teamA: [userData],
        teamB: []
    }
    users.push(room)
    return room
}

const getRoom = roomId => {
    return users.find(room => room.id === roomId)
}

const addUser = (roomId,userData) => {
    const index = users.findIndex(room => room.id === roomId)
    if(users[index].teamA.length <=  users[index].teamB.length){
        users[index].teamA.push(userData)
        return {roomData: users[index], team: true}
    }
    users[index].teamB.push(userData)
    return {roomData: users[index], team: false}
}

const removeUser = (roomId,userId) => {
    const room = getRoom(roomId)
}

const swapTeam = (roomId,userId,team) => {
    const index = users.findIndex(room => room.id === roomId)
    if(team){
        const userIndex = users[index].teamA.findIndex(user => user.id === userId)
        if(userIndex !== -1){
            users[index].teamB.push(users[index].teamA[userIndex])
            users[index].teamA.splice(userIndex, 1)
        }
    }
    else {
        const userIndex = users[index].teamB.findIndex(user => user.id === userId)
        if(userIndex !== -1){
            users[index].teamA.push(users[index].teamB[userIndex])
            users[index].teamB.splice(userIndex, 1)
        }
    }
    return users[index]
}

const createStatus = (roomId) => {
    const index = users.findIndex(room => room.id === roomId)
    users[index].status = {
        actingTeam : true,
        actor: users[index].teamA[0],
        chooser: users[index].teamB[0],
        time: new Date()
    }
    return users[index]
}

module.exports = {
    createNewRoom,
    getRoom,
    addUser,
    removeUser,
    swapTeam,
    createStatus
}