import React, { Fragment, useContext, useState } from 'react'
import classes from './Chooser.module.css'
import style from './Style.module.css'
import Button from '../../../components/UI/Button'
import TextInput from '../../../components/UI/TextInput'
import SocketContext from '../../../context/socket-context'
import DataContext from '../../../context/data-context'

const Chooser = ({ isChooser, name }) => {

    const socket = useContext(SocketContext)
    const roomData = useContext(DataContext)
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
                    <p className={style.text}>Choose a word</p>
                    <TextInput name='Enter a word' valid={true} value={movieName} onChange={movieNameChangeHandler} onKeyDown={keyPressHandler} />
                    <Button width='60%' onClick={postMovie} backgroundColor='rgba(27,27,27,0.5)'>POST</Button>
                </div>
            }
            {!isChooser &&
                <p className={style.text}>{`${name} is choosing a word...`}</p>
            }
        </Fragment>
    )
}

export default Chooser