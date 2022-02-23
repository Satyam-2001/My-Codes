const chatsEveryone = []
const chatsTeam = []

export const getChats = (forEveryone) => {
    if (forEveryone){
        return chatsEveryone
    }
    return chatsTeam
}

export const addChats = (forEveryone, name, time, color, message, id, isMe, showName) => {
    if (forEveryone) {
        chatsEveryone.push([name, time, color, message, id, isMe, showName])
    }
    else {
        chatsTeam.push([name, time, color, message, id, isMe, showName])
    }
}

export const isLastElementSame = (id, forEveryone) => {
    if (forEveryone){
        return (chatsEveryone.length === 0 || !(chatsEveryone[chatsEveryone.length - 1][4] === id))
    }
    return (chatsTeam.length === 0 || !(chatsTeam[chatsTeam.length - 1][4] === id))
}

export default {
    getChats,
    addChats,
    isLastElementSame
}
