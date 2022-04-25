const chats = {}

export const getChats = (recieversID) => {
    if (chats[recieversID]) {
        return chats[recieversID]
    }
    return []
}

export const addChats = (messageID, messageInfo) => {
    if (chats[messageID] === undefined) {
        chats[messageID] = []
    }
    if (messageInfo.group) {
        const length = chats[messageID].length
        messageInfo.showName = length === 0 || chats[messageID][length - 1].sendersID !== messageInfo.sendersID
    }
    chats[messageID].push(messageInfo)
}

export const lastMessage = (messageID) => {
    if (chats[messageID] === undefined) return undefined
    const length = chats[messageID].length
    return chats[messageID][length - 1]
}

export default {
    getChats,
    addChats,
    lastMessage
}
