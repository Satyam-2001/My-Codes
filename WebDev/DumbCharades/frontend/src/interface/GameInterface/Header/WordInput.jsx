import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../../context/user-context'
import classes from './WordInput.module.css'

const WordInput = (props) => {

    console.log(props.movie);

    const [word, setWord] = useState(props.movie)
    const { socket, user, roomData } = useContext(UserContext)
    const inputRef = useRef()

    const submitHandler = (event) => {

        console.log(event.key);
        
        if (event.key === 'Enter' && word.indexOf('_') === -1) {
            socket.emit('guessedWord', roomData.id, user, word)
            setWord(props.movie)
        }
    }

    const wordChangeHandler = (event) => {

        let guessedWord = event.target.value.toUpperCase()
        const wordLength = guessedWord.indexOf('_')
        let i = 0
        if (guessedWord.length < props.movie.length) {
            while (i<guessedWord.length) {
                if (props.movie[i] === ' ' && guessedWord[i] !== ' ') {
                    guessedWord = guessedWord.substr(0,i-1) + '_ ' + guessedWord.substr(i,guessedWord.length-1)
                    i++;
                }
                i++;
            }
            guessedWord += props.movie.substr(guessedWord.length, props.movie.length - 1)
        }
        else if (wordLength !== -1) {
            guessedWord = guessedWord.substr(0, wordLength) + props.movie.substr(wordLength, props.movie.length - 1)
        }
        setWord(guessedWord)
    }

    useEffect(() => {
        const wordLength = word.indexOf('_')
        const inp = inputRef.current
        if (inp.createTextRange) {
            const part = inp.createTextRange();
            part.move("character", wordLength);
            part.select();
        } else if (inp.setSelectionRange) {
            inp.setSelectionRange(wordLength, wordLength);
        }
    }, [word])

    useEffect(() => {
        setWord(props.movie)
    }, [])

    return (
        <div className={classes['input-word']}>
            <input autoFocus ref={inputRef} type="text" name="word" className={classes['word']} value={word} onChange={wordChangeHandler} onKeyDown={submitHandler} autoComplete="off" />
        </div>
    )
}

export default WordInput