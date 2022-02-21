const chats = []

export const getChats = () => {
    return chats
}

export const addChats = (name,time,message) => {
    chats.push([name,time,message])
}

export default {
    getChats,
    addChats
}
