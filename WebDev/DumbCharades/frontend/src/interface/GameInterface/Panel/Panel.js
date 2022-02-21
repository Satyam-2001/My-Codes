import React, { Fragment, useState, useEffect, useContext } from 'react'
import Chooser from './Chooser'
import Actor from './Actor'
import classes from './Panel.module.css'
import UserContext from '../../../context/user-context'

const Panel = ({ setMovie }) => {

    const {user , roomData} = useContext(UserContext)

    const [gameStatus, setStatus] = useState('Chooser')
    const [actorStatus, setActorStatus] = useState(null)

    console.log(roomData.status.chooser.name)

    useEffect(() => {
        user.socket.on('getMovie', (movieName, actor) => {
            setActorStatus({ movieName, actor })
            setStatus('Actor')
            setMovie(movieName)
        })
        return () => { user.socket.off('getMovie') }
    }, [])

    return (
        <div className={classes.panel}>
            {gameStatus === 'Chooser' && <Chooser isChooser={roomData.status.chooser.id === user.id} name={roomData.status.chooser.name} roomId={roomData.id} socket={user.socket} />}
            {gameStatus === 'Actor' && <Actor isActor={actorStatus.actor.id === user.id} movieName={actorStatus.movieName} actor={actorStatus.actor.name} />}
        </div>
    )
}

export default React.memo(Panel)