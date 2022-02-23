import React, { useContext, useState } from 'react'
import classes from './Header.module.css'
import title from '../../../assets/title.gif'
import Timer from '../../../components/Utility/Timer'
import StatusContext from '../../../context/status-context'

const Header = (props) => {

    const [isActing, setIsActing] = useState(false)
    const [movie, setMovie] = useState(null)

    props.Connector.Consumer(({ isActing, movie }) => {
        setIsActing(isActing)
        setMovie(movie)
    })

    return (
        <header>
            <div className={classes['start-div']}>
                <img className={classes.title} src={title} alt='DumbCharades' />
            </div>
            <div className={classes['center-div']}>
                {isActing &&
                    <div className={classes['movie-div']}>
                        <p className={classes.movie}>{movie}</p>
                    </div>
                }
            </div>
            <div className={classes['end-div']}>
                {/* <Timer time={10} timeOutHandler={props.timeOutHandler}/> */}
            </div>
        </header>
    )
}

export default React.memo(Header)