import React, { Fragment } from 'react'
import classes from './Actor.module.css'
import style from './Style.module.css'

const Actor = ({isActor,actor}) => {
    return (
        <Fragment>
            {isActor && <p className={style.text}>{`Start Acting...`}</p>}
            {!isActor && <p className={style.text}>{`Waiting for ${actor} to Act...`}</p>}
        </Fragment>
    )
}

export default Actor