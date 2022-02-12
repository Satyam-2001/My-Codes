import React, { useEffect, useState } from 'react'
import classes from './Timer.module.css'

const Timer = (props) => {

    const [time ,setTime] = useState(80)

    useEffect(()=>{
        setTime(props.time)
        const timer = setInterval(() => {
            if(time === 0) {
                props.timeOutHandler()
            }
            setTime(time => (time-1))
        },1000)
        return () => clearInterval(timer)
    }, [])

    return(
        <div className={classes.timer}>
            <img src={require('../../assets/timer.png')} className={classes.image}/>
            <p className={classes.time}>{time}</p>
        </div>
    )
}

export default Timer