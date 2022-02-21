import React, { useState } from 'react'
import classes from './ControlPanel.module.css'

const ControlPanel = (props) => {

    return (
        <div className={classes['control-panel']}>
            {/* <i class="material-icons">mic</i> */}
            <div className={classes.start}>
                <a title='Chat with everyone' onClick={props.chatBoxPressed}>
                    <i className={`material-icons ${classes.circle}`}>mic</i>
                </a>
            </div>
            <div className={classes.end}>
                <a title='Chat with everyone' onClick={props.chatBoxPressed}>
                    <i className={`material-icons ${classes.circle}`}>chat</i>
                </a>
                <a title='Chat with everyone' onClick={props.chatBoxPressed}>
                    <i className={`material-icons ${classes.circle}`}>person_add</i>
                </a>
            </div>
        </div>
    )
}



export default React.memo(ControlPanel)