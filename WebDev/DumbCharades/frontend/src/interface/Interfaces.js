import React, { Fragment, useEffect, useState } from 'react'
import GameInterface from './GameInterface/GameInterface'
import RoomInterface from './RoomInterface/RoomInterface'

const Interfaces = ({ user , roomData , team }) => {
    
    const [started, setStart] = useState(false)

    useEffect(() => {
        user.socket.on('startGame', (roomData) => {
            console.log(roomData)
            setStart(roomData)
        })
        return () => { user.socket.off('startGame') }
    }, [])

    return (
        <Fragment>
            {!started && <RoomInterface user={user} roomData={roomData} team={team} />}
            {started && <GameInterface roomData={started} user={user} />}
        </Fragment>
    )
}

export default Interfaces