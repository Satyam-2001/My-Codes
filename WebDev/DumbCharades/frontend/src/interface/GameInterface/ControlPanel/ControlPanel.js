import React, { useCallback, useEffect, useState } from 'react'
import classes from './ControlPanel.module.css'

const ControlPanel = (props) => {

    const [unreadMessageEveryone, setUnreadMessageEveryone] = useState(0)
    const [unreadMessageTeam, setUnreadMessageTeam] = useState(0)

    useEffect(() => {
        if (props.chatEveryoneBoxOpen) { setUnreadMessageEveryone(0) }
        if (props.chatTeamBoxOpen) { setUnreadMessageTeam(0) }
    }, [props.chatEveryoneBoxOpen, props.chatTeamBoxOpen])

    props.unReadMessage.Consumer((isEveryone) => {
        console.log(isEveryone)
        if (isEveryone) {
            setUnreadMessageEveryone(prevCount => prevCount + 1)
        }
        else {
            setUnreadMessageTeam(prevCount => prevCount + 1)
        }
    })

    return (
        <div className={classes['control-panel']}>
            {/* <i class="material-icons">mic</i> */}
            <div className={classes.start}>
                {/* <button className={classes['icon-button']}>
                <i className={`material-icons ${classes.circle}`}>mic</i>
            </button> */}
            </div>
            <div className={classes.center}>
                <button className={classes['icon-button']}>
                    <i className={`material-icons ${classes.circle}`}>mic</i>
                </button>
            </div>
            <div className={classes.end}>
                <button className={`${classes['chat-button']} ${props.chatEveryoneBoxOpen && classes.pressed}`} onClick={props.chatBoxEveryonePressed}>
                    <i className={`material-icons ${classes.icon}`}>chat</i>
                    <p className={classes['chat-button-name']}>Everyone</p>
                    {unreadMessageEveryone !== 0 && <p className={classes['unread-count']}>{unreadMessageEveryone}</p>}
                </button>
                <button className={`${classes['chat-button']} ${props.chatTeamBoxOpen && classes.pressed}`} onClick={props.chatBoxTeamPressed}>
                    <i className={`material-icons ${classes.icon}`}>chat</i>
                    <p className={classes['chat-button-name']}>Team</p>
                    {unreadMessageTeam !== 0 && <p className={classes['unread-count']}>{unreadMessageTeam}</p>}
                </button>
                <button className={classes['icon-button']} onClick={props.joiningInfoPressed}>
                    <i className={`material-icons ${classes.circle}`}>person_add</i>
                </button>
            </div>
        </div>
    )
}



export default React.memo(ControlPanel)