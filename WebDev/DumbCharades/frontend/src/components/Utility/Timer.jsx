import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/data-context'
import SocketContext from '../../context/socket-context'
import useTimer from '../../hooks/use-timer'
import classes from './Timer.module.css'

const Timer = (props) => {

    const socket = useContext(SocketContext)
    const { id: roomID } = useContext(DataContext)

    const [time, setTime] = useTimer(props.time, () => {
        console.log(props.initiator);
        if (props.initiator) {
            socket.emit('time out', roomID)
        }
        props.setTimerStatus(null)
    })

    useEffect(() => {
        setTime(props.time)
    }, [props.time])

    return (
        <div className={classes.timer}>
            <img src={require('../../assets/timer.png')} className={classes.image} />
            <p className={classes.time}>{time}</p>
        </div>
    )
}

export default React.memo(Timer)