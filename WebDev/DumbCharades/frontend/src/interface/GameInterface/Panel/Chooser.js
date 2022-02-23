import React, { Fragment, useContext, useState } from 'react'
import classes from './Chooser.module.css'
import style from './Style.module.css'
import Button from '../../../components/UI/Button'
import TextInput from '../../../components/UI/TextInput'
import UserContext from '../../../context/user-context'

const Chooser = ({ isChooser, name }) => {

    const {user , roomData} = useContext(UserContext)
    const [movieName , setMovieName] = useState('')

    const movieNameChangeHandler = (currentMovie) => {
        setMovieName(currentMovie)
    }

    const postMovie = () => {
        user.socket.emit('setMovie', roomData.id, movieName)
    }

    return (
        <Fragment>
            {isChooser &&
                <div className={classes['choose-movie']}>
                    <p className={style.text}>Choose a movie</p>
                    <TextInput name='Movie Name' valid={true} value={movieName} onChange={movieNameChangeHandler}/>
                    <Button width='60%' onClick={postMovie}>POST</Button>
                </div>
            }
            {!isChooser &&
                <p className={style.text}>{`${name} is choosing a movie...`}</p>
            }
        </Fragment>
    )
}

export default Chooser