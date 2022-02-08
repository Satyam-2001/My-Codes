import React from 'react'
import title from '../../assets/title.gif'
import Timer from '../../components/Utility/Timer'
import ControlPanel from './ControlPanel'
import classes from './GameInterface.module.css'
import Panel from './Panel'
import UserBoard from './UserBoard'

const GameInterface = (props) => {

    return (
        <div className={classes.page}>
            <header>
                <img className={classes.title} src={title} alt='DumbCharades' />
                <Timer />
            </header>
            <div className={classes.content}>
                <UserBoard teamData={props.roomData.teamA}/>
                <Panel />
                <UserBoard teamData={props.roomData.teamB}/>
            </div>
            <ControlPanel />
        </div>
    )
}

export default GameInterface