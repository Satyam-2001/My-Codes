import React, { useContext, useState } from 'react'
import UserContext from '../../../context/user-context'
import classes from './SendMessage.module.css'

const SendMessage = (props) => {

    const { user, roomData } = useContext(UserContext)

    const [message, setMessage] = useState('')
    const [sendActive, setSendActive] = useState(false)

    const sendMessage = () => {
        user.socket.emit('sendMessage', roomData.id, user.name, message)
        setMessage('')
        setSendActive(false)
    }

    const keyDownhandler = (event) => {
        if (event.key === 'Enter') {
            return sendMessage()
        }
    }

    const messageChangeHandler = (event) => {
        if (event.target.value) {
            setSendActive(true)
        }
        else {
            setSendActive(false)
        }
        setMessage(event.target.value)
    }

    return (
        <div className={classes['send-message']}>
            <input type="text" name="message" value={message} onChange={messageChangeHandler} onKeyDown={keyDownhandler} placeholder="Send a message" className={classes['input-message']} autoComplete="off"></input>
            <button onClick={sendMessage}  className={`material-icons ${classes['send-icon']} ${sendActive && classes['send-active']}`} disabled={!sendActive}>send</button>
        </div>
    )
}

export default SendMessage