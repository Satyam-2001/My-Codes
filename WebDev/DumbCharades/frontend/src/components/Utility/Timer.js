import React, { useEffect, useState } from 'react'
import classes from './Timer.module.css'

const Timer = (props) => {

    // const [time ,setTime] = useState(props.time)

    // useEffect(()=>{
    //     const timer = setTimeout(() => {
    //         if(time === 0) clearInterval(timer)
    //         setTime(time-1)
    //     })
    // }, [])

    return(
        <div className={classes.timer}>
            <img src={require('../../assets/timer.png')}/>
        </div>
    )
}

export default Timer