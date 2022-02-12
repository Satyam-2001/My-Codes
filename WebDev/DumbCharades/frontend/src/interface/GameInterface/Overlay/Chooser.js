import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Chooser.module.css'

const OverlayChooser = (props) => {
    console.log('inside Chooser')
    return (
        <div className={classes.chooser}>
            Portal
        </div>
    )
}

const Chooser = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<OverlayChooser />,document.getElementById('overlay'))}
        </React.Fragment>
    )
}

export default Chooser