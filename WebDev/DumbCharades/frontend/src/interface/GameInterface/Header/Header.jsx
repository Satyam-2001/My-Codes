import React, { useContext, useState } from 'react'
import classes from './Header.module.css'
import title from '../../../assets/title.gif'
import Timer from '../../../components/Utility/Timer'
import WordInput from './WordInput'

const Header = (props) => {

    const [isActing, setIsActing] = useState(false)
    const [movie, setMovie] = useState('')
    const [alias, setAlias] = useState(false)

    props.Connector.Consumer(({ isActing, movie, alias }) => {
        if (isActing){
            setMovie(movie)
            setAlias(alias)
        }
        setIsActing(isActing)
    })

    return (
        <header>
            <div className={classes['start-div']}>
                <img className={classes.title} src={title} alt='DumbCharades' />
            </div>
            <div className={classes['center-div']}>
                {isActing && alias &&
                    <div className={classes['movie-div']}>
                        <p className={classes.movie}>{movie}</p>
                    </div>
                }
                {isActing && !alias && <WordInput movie={movie} />}
            </div>
            <div className={classes['end-div']}>
                {/* <Timer time={10} timeOutHandler={props.timeOutHandler}/> */}
            </div>
        </header>
    )
}

export default React.memo(Header)