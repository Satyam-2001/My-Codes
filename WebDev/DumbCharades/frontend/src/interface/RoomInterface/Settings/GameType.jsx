import React, { useContext, useEffect, useState } from 'react'
import SocketContext from '../../../context/socket-context'
import RoomContext from '../../../context/room-context'
import classes from './GameType.module.css'
import Template from './Template'

const GameType = (props) => {

    const socket = useContext(SocketContext)
    const roomData = useContext(RoomContext)
    
    const gameTypeChangeHandler = () => {
        console.log('hi');
        
        socket.emit('gameType', roomData.id, !roomData.game)
    }

    return (
        <Template label='GAME' disabled={props.disabled}>
            <div onClick={gameTypeChangeHandler} className={`${props.disabled ? classes.disabled : undefined} ${classes.toggle}`}>
                <p className={`${classes['toggle-label']} ${roomData.game ? classes.selected : undefined}`}>DRAWING</p>
                <p className={`${classes['toggle-label']} ${!roomData.game ? classes.selected : undefined}`}>ACTING</p>
            </div>
        </Template>
    )
}

export default GameType