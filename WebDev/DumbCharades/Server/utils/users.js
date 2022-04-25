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
        game: true,
        rounds: 2,
        duration: 120,
        joined: 0,
        isRunning: false,
        admin: userData.id,
        teamA: [{ ...userData, color: colorsArray[0] }],
        teamB: [],
        allUsers: [userData.id]
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
    if (index === -1) return { error: 'Room not exist' }
    users[index].allUsers.push(userData.id)
    users[index].joined = (users[index].joined + 1) % colorsArray.length
    const color = colorsArray[users[index].joined]

    if (users[index].teamA.length <= users[index].teamB.length) {
        users[index].teamA.push({ ...userData, color })
        return { roomData: users[index], team: true, color, allUsers: users[index].allUsers }
    }
    users[index].teamB.push({ ...userData, color })
    return { roomData: users[index], team: false, color, allUsers: users[index].allUsers }
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
        performingTeam: true,
        performer: null,
        chooser: users[index].teamA[0],
        movie: null,
        time: new Date(),
        performerCountA: 0,
        chooserCountA: 1,
        performerCountB: 0,
        chooserCountB: 0,
        scoreA: 0,
        scoreB: 0,
        currentRound: 1
    }
    return users[index]
}

const setMovieName = (roomId, movieName) => {
    const index = users.findIndex(room => room.id === roomId)
    users[index].status.chooser = null
    if (users[index].status.performingTeam) {
        users[index].status.performer = users[index].teamB[users[index].status.performerCountB]
        users[index].status.performerCountB = (users[index].status.performerCountB + 1) % users[index].teamB.length
    }
    else {
        users[index].status.performer = users[index].teamA[users[index].status.performerCountA]
        users[index].status.performerCountA = (users[index].status.performerCountA + 1) % users[index].teamA.length
    }
    users[index].status.movie = movieName
    users[index].status.performingTeam = !users[index].status.performingTeam
    return users[index]
}

const setChooser = (roomId) => {
    const index = users.findIndex(room => room.id === roomId)
    users[index].status.performer = null
    let roundUpdate = false
    if (users[index].status.performingTeam) {
        if (users[index].status.performerCountA === 0) {
            console.log(users[index].currentRound, users[index].rounds);
            if (parseInt(users[index].currentRound) == parseInt(users[index].rounds)) {
                return { gameEnd: true }
            }
            roundUpdate = true
            users[index].currentRound += 1
        }
        users[index].status.chooser = users[index].teamA[users[index].status.chooserCountA]
        users[index].status.chooserCountA = (users[index].status.chooserCountA + 1) % users[index].teamA.length
    }
    else {
        users[index].status.chooser = users[index].teamB[users[index].status.chooserCountB]
        users[index].status.chooserCountB = (users[index].status.chooserCountB + 1) % users[index].teamB.length
    }
    return { chooser: users[index].status.chooser, round: (roundUpdate && users[index].currentRound) }
}

const setGameType = (roomID, gameType) => {
    const index = users.findIndex(room => room.id === roomID)
    users[index].game = gameType
}

const setRounds = (roomID, rounds) => {
    const index = users.findIndex(room => room.id === roomID)
    users[index].rounds = rounds
}

const setDuration = (roomID, duration) => {
    const index = users.findIndex(room => room.id === roomID)
    users[index].duration = duration
}

const removeUser = (userID) => {
    for (let i in users) {
        const index = users[i].allUsers.findIndex(id => id === userID)
        if (index !== -1) {
            users[i].allUsers.splice(index, 1)
            let teamIndex
            team = null
            teamIndex = users[i].teamA.findIndex(user => user.id === userID)
            if (teamIndex !== -1) {
                team = true
                users[i].teamA.splice(teamIndex, 1)
            }
            else {
                teamIndex = users[i].teamB.findIndex(user => user.id === userID)
                if (teamIndex !== -1) {
                    team = false
                    users[i].teamB.splice(teamIndex, 1)
                }
            }
            // if (users[i].teamA.length < 2 || users[i].teamA.length < 2) {
            //     return {
            //         roomID: users[i].id,
            //         gameEnd: true
            //     }
            // }
            const onWork = users[i].isRunning && (userID === users[i].status?.chooser?.id || userID === users[i].status?.performer?.id)
            if (onWork && userID === users[i].status?.chooser?.id) {
                if (users[i].status.performingTeam) {
                    users[i].status.chooserCountA = (users[i].status.chooserCountA - 1)
                }
                else {
                    users[i].status.chooserCountB = (users[i].status.chooserCountB - 1)
                }
            }
            return {
                roomID: users[i].id,
                team,
                onWork
            }
        }
    }
}

module.exports = {
    createNewRoom,
    getRoom,
    addUser,
    removeUser,
    swapTeam,
    createStatus,
    setMovieName,
    setChooser,
    setGameType,
    setRounds,
    setDuration
}