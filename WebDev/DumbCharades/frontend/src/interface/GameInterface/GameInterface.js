import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../context/user-context'
import ChatBox from './ChatBox/ChatBox'
import ControlPanel from './ControlPanel/ControlPanel'
import classes from './GameInterface.module.css'
import Panel from './Panel/Panel'
import Header from './Header/Header'
import UserBoard from './UserBoard/UserBoard'
import { addChats, getChats, isLastElementSame } from './ChatBox/DataBase/database'
import Connector from '../../connector/Connector'
import JoiningInfoCard from './JoiningInfoCard/JoiningInfoCard'
import Peer from 'simple-peer'


let newMessageAddedEveryone = null;
let newMessageAddedTeam = null;

const connector = new Connector()
const unReadMessage = new Connector()

const addMedia = (Peers) => {
    navigator.getUserMedia({ video: true, audio: true }, (stream) => {Peers.addStream(stream)},(e) => { console.log(e); })
}

const GameInterface = (props) => {

    const { user, roomData, socket } = useContext(UserContext)
    const { id: roomId } = roomData
    const { id: userId } = user

    const [chatEveryoneBoxOpen, setChatBoxEveryoneStatus] = useState(false)
    const [chatTeamBoxOpen, setChatBoxTeamStatus] = useState(false)
    const [joiningInfoOpen, setJoiningInfoOpen] = useState(false)
    // const [stream, setStream] = useState()

    const chatBoxEveryonePressed = () => {
        setJoiningInfoOpen(false)
        setChatBoxTeamStatus(false)
        setChatBoxEveryoneStatus((prevProp) => !prevProp)
    }

    const chatBoxTeamPressed = () => {
        setJoiningInfoOpen(false)
        setChatBoxEveryoneStatus(false)
        setChatBoxTeamStatus((prevProp) => !prevProp)
    }

    const joiningInfoPressed = () => {
        setJoiningInfoOpen((prevProp) => !prevProp)
    }

    const newMessageEveryone = (callback) => {
        newMessageAddedEveryone = callback
    }

    const newMessageTeam = (callback) => {
        newMessageAddedTeam = callback
    }

    useEffect(() => {

        let timeDelay = setTimeout(() => {
            addMedia(props.Peers)
            clearTimeout(timeDelay)
        }, 5000)
        // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        // navigator.getUserMedia({ video: true, audio: true }, (stream) => {
        //     props.Peers.addStream(stream)
        //     // setStream(stream);
        // },
        //     (e) => { console.log(e); })
    }, [])

    useEffect(() => {
        socket.on('recieveMessage', (name, time, color, message, sendersId, forEveryOne) => {
            const isMe = userId === sendersId
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
        <Fragment>
            {
                // stream &&
                < div className={classes.page} >
                    <Header Connector={connector} />
                    <div className={classes.content}>
                        <UserBoard team='A' teamData={roomData.teamA} className={(chatEveryoneBoxOpen || chatTeamBoxOpen) && classes.messageTaemA} />
                        <Panel Connector={connector} />
                        <UserBoard team='B' teamData={roomData.teamB} className={(chatEveryoneBoxOpen || chatTeamBoxOpen) && classes.messageTaemB} />
                        {chatEveryoneBoxOpen && <ChatBox chatBoxClose={chatBoxEveryonePressed} newMessage={newMessageEveryone} everyone={true} />}
                        {chatTeamBoxOpen && <ChatBox chatBoxClose={chatBoxTeamPressed} newMessage={newMessageTeam} everyone={false} />}
                        {joiningInfoOpen && <JoiningInfoCard />}
                    </div>
                    <ControlPanel chatBoxEveryonePressed={chatBoxEveryonePressed} chatBoxTeamPressed={chatBoxTeamPressed} joiningInfoPressed={joiningInfoPressed} chatEveryoneBoxOpen={chatEveryoneBoxOpen} chatTeamBoxOpen={chatTeamBoxOpen} unReadMessage={unReadMessage} />
                </div >
            }
        </Fragment>
    )

}

export default GameInterface