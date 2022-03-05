import React, { useContext, useState } from 'react'
import UserContext from '../../../context/user-context'
import classes from './SendMessage.module.css'

const SendMessage = (props) => {

    const { user, team, roomData, socket } = useContext(UserContext)

    const [message, setMessage] = useState('')
    const [sendActive, setSendActive] = useState(false)

    const sendMessage = () => {
        console.log( team);
        
        socket.emit('sendMessage', props.everyone, roomData.id, user.name, user.color, team, message)
        setMessage('')
        setSendActive(false)
    }

    const keyDownhandler = (event) => {

        if (event.key === 'Enter' && message.trim()) {
            sendMessage()
        }
    }

    const messageChangeHandler = (event) => {
        if (event.target.value.trim()) {
            setSendActive(true)
        }
        else {
            setSendActive(false)
        }
        setMessage(event.target.value)
    }

    return (
        <div className={classes['send-message']}>
            <input type="text" name="message" value={message} onChange={messageChangeHandler} onKeyDown={keyDownhandler} placeholder="Send a message" className={classes['input-message']} autoComplete="off" />
            <button onClick={sendMessage} className={`material-icons ${classes['send-icon']} ${sendActive && classes['send-active']}`} disabled={!sendActive}>send</button>
        </div>
    )
}

export default SendMessage