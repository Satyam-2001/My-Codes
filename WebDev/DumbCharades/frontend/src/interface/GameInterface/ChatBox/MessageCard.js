import React from 'react'
import classes from './MessageCard.module.css'

const MessageCard = ({ data }) => {
    return (
        <div className={classes['message-div']}>
            <div className={`${classes['message-card']} ${data[5] && classes.you} ${!data[6] && classes['hide-name']}`}>
                {
                    data[6] &&
                    <div className={classes.info}>
                        <p className={classes.name} style={{ color: data[2] }}>{data[0]}</p>
                        &ensp;
                        <p className={classes.date}>{data[1]}</p>
                    </div>
                }
                <p className={classes.message}>{data[3]}</p>
            </div>
        </div>
    )
}

export default MessageCard