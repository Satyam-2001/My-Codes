import React, { Fragment, useState, useEffect, useContext } from 'react'
import Chooser from './Chooser'
import Actor from './Actor'
import classes from './Panel.module.css'
import UserContext from '../../../context/user-context'
import StatusContext from '../../../context/status-context'

const Panel = (props) => {

    const { user, roomData } = useContext(UserContext)

    const [actor, setActor] = useState(null)
    const [chooser, setChooser] = useState(null)

    useEffect(() => {
        setChooser(roomData.status.chooser)
        setActor(roomData.status.actor)
        if (roomData.status.actor) {
            props.Connector.Provider({ isActing: true, movie: roomData.status.movie })
        }
    }, [])

    useEffect(() => {
        user.socket.on('getMovie', (alias, movie, actor) => {
            setChooser(null)
            setActor(actor)
            props.Connector.Provider({ isActing: true, movie })
        })
        return () => { user.socket.off('getMovie') }
    }, [])

    return (
        <div className={classes.panel}>
            {chooser && <Chooser isChooser={chooser.id === user.id} name={chooser.name} />}
            {actor && <Actor isActor={actor.id === user.id} actor={actor.name} />}
        </div>
    )
}

export default React.memo(Panel)