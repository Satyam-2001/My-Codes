import React from 'react'
import classes from './MicIcon.module.css'

const MicIcon = (props) => {
    return (
        <i style={{height: props.size || '50px' , width: props.size || '50px'}} className={`material-icons circle ${props.className} ${props.micStatus ? classes['mic_on'] : classes['mic_off']} ${props.hover ? (props.micStatus ? classes['mic_on_hover'] : classes['mic_off_hover']) : undefined }`} >
            {props.micStatus ? 'mic' : 'mic_off'}
        </i>
    )
}

export default MicIcon