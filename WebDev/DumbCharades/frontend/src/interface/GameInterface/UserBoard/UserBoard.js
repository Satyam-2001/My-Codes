import React from 'react'
import StyledText from '../../../components/UI/StyledText'
import InfoCard from './InfoCard'
import classes from './UserBoard.module.css'

const UserBoard = (props) => {

    console.log(props.teamData)

    const board = props.teamData.map(user => {
        return <InfoCard key={user.id} user={user} stream={props.stream} />
    })

    return(
        <div className={`${props.className} ${classes.board}`} >
            <div className={classes.title}>
                <StyledText text={`Team ${props.team}`}/>
            </div>
            <div>
                {board}
            </div>
        </div>
    )
}

export default UserBoard