import React from 'react'
import classes from './InfoCard.module.css'

const InfoCard = (props) => {
    return(
        <div className={classes.card} style={{borderColor: props.color }}>
            <img src={require(`../../../assets/avatar/${props.avatar}.png`)}/>
            <p>{props.name}</p>
        </div>
    )
}

export default InfoCard