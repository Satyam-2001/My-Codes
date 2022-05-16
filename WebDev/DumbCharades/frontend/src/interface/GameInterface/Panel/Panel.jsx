import React, { useState, useEffect, useContext } from 'react'
import Chooser from './Chooser'
import Drawer from './Drawing/Drawer'
import Actor from './Acting/Actor'
import classes from './Panel.module.css'
import UserContext from '../../../context/user-context'
import GameEnd from './GameEnd/GameEnd'
import SocketContext from '../../../context/socket-context'
import DataContext from '../../../context/data-context'

const Panel = (props) => {

    const user  = useContext(UserContext)
    const socket = useContext(SocketContext)
    const roomData = useContext(DataContext)
    const { id: userID } = user

    const [performer, setPerformer] = useState(null)
    const [chooser, setChooser] = useState(null)
    const [gameEnd, setGameEnd] = useState(false)

    useEffect(() => {
        setChooser(roomData.status.chooser)
        setPerformer(roomData.status.performer)
        if (roomData.status.display) {}
        if (roomData.status.performer) {
            props.Connector.broadcast('perform',{ isPerforming: true, word: roomData.status.movie, initiator: roomData.status.performer.id === userID })
            // props.Connector.Provider({ isPerforming: true, word: roomData.status.movie, initiator: roomData.status.performer.id === userID })
        }
        else {
            props.Connector.broadcast('perform',{ isPerforming: false, initiator: roomData.status.chooser.id === userID })
            // props.Connector.Provider({ isPerforming: false, initiator: roomData.status.chooser.id === userID })
        }
    }, [])

    useEffect(() => {
        socket.on('getWord', (alias, word, performer) => {
            setChooser(null)
            setPerformer(performer)
            props.Connector.broadcast('perform',{ alias, isPerforming: true, word, initiator: userID === performer.id })
            // props.Connector.Provider({ alias, isPerforming: true, word, initiator: userID === performer.id })
        })
        return () => { socket.off('getWord') }
    }, [])

    useEffect(() => {
        socket.on('getChooser', (chooser, round) => {
            setChooser(chooser)
            setPerformer(null)
            props.Connector.broadcast('perform',{ isPerforming: false, initiator: userID === chooser.id })
            if (round) {
                props.setCurrentRound(round)
            }
        })
        return () => { socket.off('getChooser') }
    }, [])

    useEffect(() => {
        socket.on('gameEnd', (winner) => {
            console.log('win');
            setGameEnd(true)
            props.Connector.Provider({ isPerforming: false})
        })
        return () => { 
            socket.off('gameEnd')
            socket.removeAllListeners('gameEnd')
            socket.removeAllListeners('getChooser')
            socket.removeAllListeners('getWord')
        }
    })

    return (
        <div className={classes.panel}>
            {gameEnd ? <GameEnd /> :
                chooser ? <Chooser isChooser={chooser.id === userID} name={chooser.name} /> :
                    performer ?
                        roomData.game ? <Drawer isPerformer={performer.id === userID} /> : <Actor isPerformer={performer.id === userID} />
                        : undefined
            }
        </div>
    )
}

export default React.memo(Panel)