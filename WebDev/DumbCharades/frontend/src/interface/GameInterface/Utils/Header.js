import React from 'react'
import classes from './Header.module.css'
import title from '../../../assets/title.gif'
import Timer from '../../../components/Utility/Timer'

const Header = ({movie}) => {
    return (
        <header>
            {/* <img className={classes.title} src={title} alt='DumbCharades'/> */}
            {movie && <p>{movie}</p>}
            {/* <Timer time={10} timeOutHandler={props.timeOutHandler}/> */}
        </header>
    )
}

export default Header