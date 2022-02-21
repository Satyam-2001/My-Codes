import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/user-context'
import ChatBox from './ChatBox/ChatBox'
import ControlPanel from './ControlPanel'
import classes from './GameInterface.module.css'
import Panel from './Panel/Panel'
import Header from './Utils/Header'
import UserBoard from './Utils/UserBoard'
import { addChats, getChats } from './ChatBox/DataBase/database'

let newMessageAdded = null;

const GameInterface = (props) => {

    const { user, roomData } = useContext(UserContext)

    const [movie, setMovie] = useState(null)
    const [chatBoxOpen, setChatBoxStatus] = useState(false)

    const chatBoxPressed = () => {
        setChatBoxStatus((prevProp) => !prevProp)
    }

    const {socket} = user

    const newMessage = (callback) => {
        newMessageAdded = callback
    }

    useEffect(() => {
        socket.on('recieveMessage', (name, time, message) => {
            addChats(name, time, message)
            if (newMessageAdded != null){
                newMessageAdded(getChats())
            }
        })
        return () => {socket.off('recieveMessage')}
    }, [])

    return (
        <div className={classes.page}>
            <Header movie={movie} />
            <div className={classes.content}>
                <UserBoard team='A' teamData={roomData.teamA} className={chatBoxOpen && classes.messageTaemA} />
                <Panel setMovie={setMovie} />
                <UserBoard team='B' teamData={roomData.teamB} className={chatBoxOpen && classes.messageTaemB} />
                {chatBoxOpen && <ChatBox chatBoxClose={chatBoxPressed} newMessage={newMessage}  />}
            </div>
            <ControlPanel chatBoxPressed={chatBoxPressed} />
        </div>
    )
}

export default GameInterface