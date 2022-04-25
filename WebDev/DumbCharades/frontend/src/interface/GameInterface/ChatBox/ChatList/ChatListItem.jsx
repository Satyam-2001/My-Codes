import React from 'react'
import classes from './ChatListItem.module.css'
import { lastMessage } from '../DataBase/database'

const ChatListItem = (props) => {

    const userChatClickHandler = () => {
        props.setUserChatOpen(props.info)
    }

    const messageInfo = lastMessage(props.id)

    return (
        <div className={classes.item} onClick={userChatClickHandler}>
            <img className='chat-avatar' src={require(`../../../../assets/avatar/${props.info.avatar}.png`)} />
            <div className={classes['name-box']}>
                <p className={classes.name}>{props.info.name}</p>
                <p className={classes.message}>{messageInfo && messageInfo.message}</p>
            </div>
        </div>
    )
}

export default ChatListItem