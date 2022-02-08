import React from 'react'
import Button from '../../components/UI/Button'
import UserCard from '../../components/Cards/UserCard'
import classes from './UserSettings.module.css'

const UserSettings = (props) => {

    return (
        <div className={classes.setting}>
            <UserCard name={props.name} avatar={props.avatar} />
            <Button width='80%' onClick={props.gameStartHandler}>Start Game</Button>
        </div>
    )
}

export default UserSettings