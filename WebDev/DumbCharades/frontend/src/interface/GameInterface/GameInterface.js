import React, { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../../context/user-context'
import ChatBox from './ChatBox/ChatBox'
import ControlPanel from './ControlPanel/ControlPanel'
import classes from './GameInterface.module.css'
import Panel from './Panel/Panel'
import Header from './Utils/Header'
import UserBoard from './Utils/UserBoard'
import { addChats, getChats, isLastElementSame } from './ChatBox/DataBase/database'
import Connector from '../../connector/Connector'

let newMessageAddedEveryone = null;
let newMessageAddedTeam = null;
let panelHeaderConnector = null;

const connector = new Connector()
const unReadMessage = new Connector()

const GameInterface = (props) => {

    const { user, roomData } = useContext(UserContext)
    const { socket, id } = user

    const [chatEveryoneBoxOpen, setChatBoxEveryoneStatus] = useState(false)
    const [chatTeamBoxOpen, setChatBoxTeamStatus] = useState(false)

    const chatBoxEveryonePressed = () => {
        setChatBoxTeamStatus(false)
        setChatBoxEveryoneStatus((prevProp) => !prevProp)
    }

    const chatBoxTeamPressed = () => {
        setChatBoxEveryoneStatus(false)
        setChatBoxTeamStatus((prevProp) => !prevProp)
    }

    const newMessageEveryone = (callback) => {
        newMessageAddedEveryone = callback
    }

    const newMessageTeam = (callback) => {
        newMessageAddedTeam = callback
    }

    useEffect(() => {
        socket.on('recieveMessage', (name, time, color, message, sendersId, forEveryOne) => {
            const isMe = id === sendersId
            const showInfo = !isMe && isLastElementSame(sendersId, forEveryOne)
            addChats(forEveryOne, name, time, color, message, sendersId, isMe, showInfo)
            if (forEveryOne) {
                if (newMessageAddedEveryone !== null) {
                    newMessageAddedEveryone(getChats(true))
                }
                if (!chatEveryoneBoxOpen) {
                    console.log(chatEveryoneBoxOpen)
                    unReadMessage.Provider(true)
                }
            }
            else {
                if (newMessageAddedTeam !== null) {
                    newMessageAddedTeam(getChats(false))
                }
                if (!chatTeamBoxOpen) {
                    unReadMessage.Provider(false)
                }
            }
        })
        return () => { socket.off('recieveMessage') }
    }, [chatEveryoneBoxOpen, chatTeamBoxOpen])

    return (
        <div className={classes.page}>
            <Header Connector={connector} />
            <div className={classes.content}>
                <UserBoard team='A' teamData={roomData.teamA} className={(chatEveryoneBoxOpen || chatTeamBoxOpen) && classes.messageTaemA} />
                <Panel Connector={connector} />
                <UserBoard team='B' teamData={roomData.teamB} className={(chatEveryoneBoxOpen || chatTeamBoxOpen) && classes.messageTaemB} />
                {chatEveryoneBoxOpen && <ChatBox chatBoxClose={chatBoxEveryonePressed} newMessage={newMessageEveryone} everyone={true} />}
                {chatTeamBoxOpen && <ChatBox chatBoxClose={chatBoxTeamPressed} newMessage={newMessageTeam} everyone={false} />}
            </div>
            <ControlPanel chatBoxEveryonePressed={chatBoxEveryonePressed} chatBoxTeamPressed={chatBoxTeamPressed} chatEveryoneBoxOpen={chatEveryoneBoxOpen} chatTeamBoxOpen={chatTeamBoxOpen} unReadMessage={unReadMessage} />
        </div>
    )
}

export default GameInterface