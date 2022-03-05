import React, { Fragment, useState, useEffect, useContext } from 'react'
import Chooser from './Chooser'
import Actor from './Actor'
import classes from './Panel.module.css'
import UserContext from '../../../context/user-context'

const Panel = (props) => {

    const { user, roomData, socket } = useContext(UserContext)

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
        socket.on('getMovie', (alias, movie, actor) => {
            setChooser(null)
            setActor(actor)
            props.Connector.Provider({ alias, isActing: true, movie })
        })
        return () => { socket.off('getMovie') }
    }, [])

    useEffect(() => {
        socket.on('getChooser', (alias, chooser) => {
            setChooser(chooser)
            setActor(null)
            props.Connector.Provider({isActing: false})
        })
        return () => { socket.off('getMovie') }
    }, [])



    return (
        <div className={classes.panel}>
            {chooser && <Chooser isChooser={chooser.id === user.id} name={chooser.name} />}
            {actor && <Actor isActor={actor.id === user.id} actor={actor.name} />}
        </div>
    )
}
const Memo =  React.memo(Panel)
export default Memo