import React, { useCallback, useContext, useEffect, useState } from 'react'
import Mic from './Mic'
import classes from './ControlPanel.module.css'
import DataContext from '../../../context/data-context'

const ControlPanel = (props) => {

    const roomData = useContext(DataContext)

    return (
        <div className={classes['control-panel']}>
            <div className={classes.start}>
                <p className={classes.round}>ROUND {props.currentRound}/{roomData.rounds}</p>
            </div>
            <div className={classes.center}>
                <Mic myStream={props.myStream} />
            </div>
            <div className={classes.end}>
                <button className='icon-button' onClick={props.chatBoxPressed}>
                    {/* <p className={classes['unread-message']}>3</p> */}
                    <i className='circle circle_hover material-icons'>chat</i>
                </button>
                <button className='icon-button' onClick={props.joiningInfoPressed}>
                    <i className='circle circle_hover material-icons'>person_add</i>
                </button>
            </div>
        </div>
    )
}

export default React.memo(ControlPanel)