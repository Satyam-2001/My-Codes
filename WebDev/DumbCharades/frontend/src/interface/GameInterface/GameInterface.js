import React, { useState } from 'react'
import ControlPanel from './ControlPanel'
import classes from './GameInterface.module.css'
import Chooser from './Overlay/Chooser'
import Panel from './Panel'
import Header from './Utils/Header'
import UserBoard from './Utils/UserBoard'

const GameInterface = (props) => {

    const isChooser = props.roomData.status.chooser.id === props.user.id
    console.log(props.roomData.status.chooser.id , props.user)


    return (
        <React.Fragment>
            {isChooser && <Chooser />}
            <div className={classes.page}>
                <Header />
                <div className={classes.content}>
                    <UserBoard teamData={props.roomData.teamA} />
                    <Panel />
                    <UserBoard teamData={props.roomData.teamB} />
                </div>
                <ControlPanel />
            </div>
        </React.Fragment>
    )
}

export default GameInterface