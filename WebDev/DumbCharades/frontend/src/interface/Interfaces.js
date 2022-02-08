import React, { Fragment, useEffect, useState } from 'react'
import GameInterface from './GameInterface/GameInterface'
import RoomInterface from './RoomInterface/RoomInterface'

const Interfaces = ({ user }) => {
    const [roomData, setStart] = useState(null)

    useEffect(() => {
        user.socket.on('startGame', (roomData) => {
            setStart(roomData)
        })
        return () => { user.socket.off('startGame') }
    }, [])

    return (
        <Fragment>
            {!roomData && <RoomInterface user={user} />}
            {roomData && <GameInterface roomData={roomData} user={user} />}
        </Fragment>
    )
}

export default Interfaces