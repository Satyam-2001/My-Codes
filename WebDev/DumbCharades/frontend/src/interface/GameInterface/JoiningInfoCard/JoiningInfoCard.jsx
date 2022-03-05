import React from 'react'
import LinkCopy from '../../../components/Utility/LinkCopy'
import classes from './JoiningInfoCard.module.css'

const JoiningInfoCard = (props) => {
    return (
        <div className={classes.main}>
            <p className={classes.heading}>JOINING INFO</p>
            <LinkCopy />
        </div>
    )
}

export default JoiningInfoCard