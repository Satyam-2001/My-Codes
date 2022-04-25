import React from 'react'
import classes from './Team.module.css'
import UserCard from '../../components/Cards/UserCard'
import Button from '../../components/UI/Button'
import StyledText from '../../components/UI/StyledText'

const Team = (props) => {

    const teamData = props.data.map(user => {
        return <UserCard key={user.id} name={user.name} avatar={user.avatar} />
    })

    return (
        <div className={`login-box ${props.className}`}>
            <StyledText text={`Team ${props.name}`}/>
            <div className={classes['grid-container']}>
                {teamData}
            </div>
            <Button
                color={props.team ? 'red' : 'lawngreen'}
                backgroundColor={props.team ? 'rgba(250,100,100,0.35)' : 'rgba(124,252,0,0.35)' }
                width='80%'
                onClick={props.swapTeam}
                >
                {props.team ? 'Exit' : 'Join'} {props.name}
            </Button>
        </div>
    )
}

export default Team