import React, { useContext } from 'react'
import Button from '../../components/UI/Button'
import UserCard from '../../components/Cards/UserCard'
import classes from './UserSettings.module.css'
import UserContext from '../../context/user-context'

const UserSettings = (props) => {

    const { user , roomData } = useContext(UserContext)

    const link = `http://localhost:3000/${roomData.id}`

    const copyLink = (event) => {
        navigator.clipboard.writeText(link);
    }

    return (
        <div className={classes.setting}>
            <UserCard name={user.name} avatar={user.avatar} />
            <Button width='80%' onClick={props.gameStartHandler}>{(roomData.isRunning ? 'Join Game' : 'Start Game')}</Button>
            <div className={classes.invite}>
                <p className={classes.link}>{link}</p>
                <button className={classes['link-button']} onClick={copyLink}>Copy</button>
            </div>
            {/* <div className={classes.success}>
                <p className={classes.msg}>Link Successfully Copied!!</p>
            </div> */}
        </div>
    )
}

export default UserSettings