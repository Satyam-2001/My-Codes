import React, { useContext, useEffect, useState } from 'react'
import PageDesign from '../../components/Cards/PageDesign'
import Team from './Team'
import classes from './RoomInterface.module.css'
import UserSettings from './UserSettings'
import UserContext from '../../context/user-context'

const RoomInterface = (props) => {

    const data = useContext(UserContext)
    const [roomData, setRoomData] = useState(data.roomData)
    const [team, setTeam] = useState(data.team)
    const { socket } = data.user

    useEffect(() => {
        socket.on('changeOccured', (roomData) => {
            setRoomData(roomData)
        })
        return () => { socket.off('changeOccured') }
    }, [])

    const swapTeamHandler = () => {
        socket.emit('swapTeam', roomData.id, team)
        setTeam(team => !team)
    }

    const gameStartHandler = () => {
        socket.emit('startGame', roomData.id)
    }

    return (
        <UserContext.Provider value={{ ...data , roomData: roomData }}>
            <PageDesign>
                <div className={classes.main}>
                    {roomData && <Team name='A' team={team} data={roomData.teamA} className={classes.content} swapTeam={swapTeamHandler} />}
                    <UserSettings gameStartHandler={gameStartHandler} />
                    {roomData && <Team name='B' team={!team} data={roomData.teamB} className={classes.content} swapTeam={swapTeamHandler} />}
                </div>
            </PageDesign>
        </UserContext.Provider>
    )
}

export default RoomInterface