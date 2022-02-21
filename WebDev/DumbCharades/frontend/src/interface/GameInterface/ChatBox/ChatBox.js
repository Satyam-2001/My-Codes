import React from 'react'
import classes from './ChatBox.module.css'
import SendMessage from './SendMessage'
import Chats from './Chats'

const ChatBox = (props) => {
    return (
        <div className={classes['chat-box']}>
            <div className={classes.header}>
                <p className={classes.title}>Chat With Everyone</p>
                <button className={`material-icons ${classes['close-button']}`} onClick={props.chatBoxClose}>close</button>
            </div>
            <Chats newMessage={props.newMessage}/>
            <SendMessage />
        </div>
    )
}

export default ChatBox