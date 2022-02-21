import React from 'react'
import classes from './MessageCard.module.css'

const MessageCard = ({ data }) => {
    return (
        <div className={classes['message-card']}>
            <div className={classes.info}>
                <p className={classes.name}>{data[0]}</p>
                &ensp;
                <p className={classes.date}>{data[1]}</p>
            </div>
            <p className={classes.message}>{data[2]}</p>
        </div>
    )
}

export default MessageCard