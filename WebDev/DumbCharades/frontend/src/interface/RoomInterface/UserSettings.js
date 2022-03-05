import React, { useContext } from 'react'
import Button from '../../components/UI/Button'
import UserCard from '../../components/Cards/UserCard'
import classes from './UserSettings.module.css'
import UserContext from '../../context/user-context'
import LinkCopy from '../../components/Utility/LinkCopy'

const UserSettings = (props) => {

    const { user , roomData } = useContext(UserContext)

    return (
        <div className={classes.setting}>
            <UserCard name={user.name} avatar={user.avatar} />
            <Button width='80%' onClick={props.gameStartHandler}>{(roomData.isRunning ? 'Join Game' : 'Start Game')}</Button>
            <LinkCopy className={classes['link-copy']}/>
        </div>
    )
}

export default UserSettings