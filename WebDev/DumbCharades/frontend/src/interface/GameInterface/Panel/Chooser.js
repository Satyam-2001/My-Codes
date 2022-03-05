import React, { Fragment, useContext, useState } from 'react'
import classes from './Chooser.module.css'
import style from './Style.module.css'
import Button from '../../../components/UI/Button'
import TextInput from '../../../components/UI/TextInput'
import UserContext from '../../../context/user-context'

const Chooser = ({ isChooser, name }) => {

    const {roomData, socket} = useContext(UserContext)
    const [movieName , setMovieName] = useState('')

    const movieNameChangeHandler = (currentMovie) => {
        setMovieName(currentMovie.toUpperCase())
    }

    const postMovie = () => {
        socket.emit('setMovie', roomData.id, movieName)
    }

    const keyPressHandler = (key) => {
        if (key === 'Enter') {
            postMovie()
        }
    }

    return (
        <Fragment>
            {isChooser &&
                <div className={classes['choose-movie']}>
                    <p className={style.text}>Choose a movie</p>
                    <TextInput name='Movie Name' valid={true} value={movieName} onChange={movieNameChangeHandler} onKeyDown={keyPressHandler} />
                    <Button width='60%' onClick={postMovie} backgroundColor='rgba(27,27,27,0.5)'>POST</Button>
                </div>
            }
            {!isChooser &&
                <p className={style.text}>{`${name} is choosing a movie...`}</p>
            }
        </Fragment>
    )
}

export default Chooser