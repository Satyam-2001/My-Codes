import React, { Fragment, useContext, useEffect, useState } from 'react'
import UserContext from '../context/user-context'
import GameInterface from './GameInterface/GameInterface'
import RoomInterface from './RoomInterface/RoomInterface'

const Interfaces = (props) => {

    const data = useContext(UserContext)

    const [started, setStart] = useState(false)
    const [roomData, setRoomData] = useState(data.roomData) 

    useEffect(() => {
        data.user.socket.on('startGame', (roomData) => {
            console.log(roomData)
            setRoomData(roomData)
            setStart(true)
        })
        return () => { data.user.socket.off('startGame') }
    }, [])

    return (
        <UserContext.Provider value={{ ...data, roomData: roomData }}>
            {!started && <RoomInterface />}
            {started && <GameInterface />}
        </UserContext.Provider>
    )
}

export default Interfaces