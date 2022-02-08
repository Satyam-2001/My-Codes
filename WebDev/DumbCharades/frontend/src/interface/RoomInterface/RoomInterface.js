import React, { useEffect, useState } from 'react'
import PageDesign from '../../components/Cards/PageDesign'
import Team from './Team'
import classes from './RoomInterface.module.css'
import UserSettings from './UserSettings'

const RoomInterface = ({ user }) => {

    const [roomData, setRoomData] = useState(null)
    const [team, setTeam] = useState(true)

    const { socket } = user
    useEffect(() => {
        socket.on('joined', (roomData, teamData) => {
            console.log(roomData)
            setRoomData(roomData)
            setTeam(teamData)
        })
        return () => { socket.off('joined') }
    }, [socket])

    useEffect(() => {
        socket.on('changeOccured', (roomData) => {
            console.log(roomData)
            setRoomData(roomData)
        })

        return () => {socket.off('changeOccured')}
    },[])

    const swapTeamHandler = () => {
        socket.emit('swapTeam', roomData.id, team)
        setTeam(!team)
    }

    const gameStartHandler = () => {
        console.log('start')
        socket.emit('startGame',roomData.id)
    }

    return (
        <PageDesign>
            <div className={classes.main}>
                {roomData && <Team name='A' team={team} data={roomData.teamA} className={classes.content} swapTeam={swapTeamHandler} />}
                <UserSettings name={user.name} avatar={user.avatar} socket={socket} gameStartHandler={gameStartHandler} />
                {roomData && <Team name='B' team={!team} data={roomData.teamB} className={classes.content} swapTeam={swapTeamHandler} />}
            </div>
        </PageDesign>
    )
}

export default RoomInterface