const users = []

const addUser = (user) => {
    // if ( user.admin ) {
    //     if( users.find(user => user.admin && user.room === user.room ) ){
    //         return { error: 'Admin exist!!' }
    //     }
    // }
    users.push(user)
}

const getUsersInRoom = (room , team) => {
    return users.filter(user => user.room === room && user.team === team)
}

const getUser = id => users.find(user => user.id === id)

const removeUser = id => {
    const index = users.findIndex(user => user.id === id)
    
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
    
const swapTeam = id => {
    const index = users.findIndex(user => user.id === id)
    if( index !== -1){
        users[index].team = !users[index].team
        return users[index].room
    }
}

module.exports = {
    addUser,
    getUsersInRoom,
    getUser,
    removeUser,
    swapTeam
}