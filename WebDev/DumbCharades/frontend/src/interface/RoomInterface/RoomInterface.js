import React, { useEffect, useState, useRef, useReducer } from 'react'
import PageDesign from '../../components/Cards/PageDesign'
import Team from './Team'
import classes from './RoomInterface.module.css'
import UserSettings from './UserSettings'
import UserContext from '../../context/user-context'
import GameInterface from '../GameInterface/GameInterface'
import socketIOClient from 'socket.io-client';
import Connection from '../../peer/connection'

const ENDPOINT = 'http://localhost:4001';
const socket = socketIOClient(ENDPOINT);

const Peers = new Connection(socket)

const initialRoomState = {
    id: '',
    isRunning: false,
    teamA: [],
    teamB: []
}

const roomReducer = (roomData, action) => {
    switch (action.type) {
        case 'RESET': {
            return action.roomData
        }
        case 'ADD_USER': {
            if (action.team) {
                const teamA = [...roomData.teamA, action.user]
                return { ...roomData, teamA }
            }
            const teamB = [...roomData.teamB, action.user]
            return { ...roomData, teamB }
        }
        case 'SWAP_TEAM': {
            let teamA, teamB
            if (action.team) {
                const index = roomData.teamA.findIndex(user => user.id === action.id)
                if (index !== -1) {
                    teamB = [...roomData.teamB, roomData.teamA[index]]
                    teamA = roomData.teamA.filter(user => user.id !== action.id)
                }
            }
            else {
                const index = roomData.teamB.findIndex(user => user.id === action.id)
                if (index !== -1) {
                    teamA = [...roomData.teamA, roomData.teamB[index]]
                    teamB = roomData.teamB.filter(user => user.id !== action.id)
                }
            }
            return { ...roomData, teamA, teamB }
        }
        case 'ADD_STATUS': {
            return { ...roomData, status: action.status }
        }
    }
}

const RoomInterface = (props) => {

    const myProfile = {
        name: localStorage.getItem('name') || 'User',
        avatar: localStorage.getItem('avatar') || 1
    }

    // const audioRef = useRef()

    const [started, setStart] = useState(false)
    const [roomData, dispatchRoomData] = useReducer(roomReducer, initialRoomState)
    const [team, setTeam] = useState(true)
    const [user, setUser] = useState(myProfile)

    console.log(roomData);

    useEffect(() => {

        console.log(Peers.stream);
        if (props.gameState === 'Create Private Room') {
            socket.emit('createRoom', user, (data) => {
                setUser(data.user)
                dispatchRoomData({ type: 'RESET', roomData: data.roomData })
            })
        }
        else {
            socket.emit('joinRoom', props.roomId, user, (data) => {
                setTeam(data.team)
                setUser(data.user)

                for (const user of data.roomData.teamA) {
                    if (user.id !== data.user.id) {
                        const peer = Peers.createPeer(data.user, data.team, user.id);
                        user['peer'] = peer
                    }
                }
                for (const user of data.roomData.teamB) {
                    if (user.id !== data.user.id) {
                        const peer = Peers.createPeer(data.user, data.team, user.id);
                        user['peer'] = peer
                    }
                }
                dispatchRoomData({ type: 'RESET', roomData: data.roomData })
            })

            socket.on('returned signal', (id, signal) => {
                const item = Peers.getPeerByID(id)
                item.peer.signal(signal);
            });

            return () => { socket.off('returned signal') }
        }
    }, [])

    useEffect(() => {
        socket.on('userJoined', (user, team, incomingSignal) => {
            const peer = Peers.addPeer(incomingSignal, user.id)
            console.log('hi');
            dispatchRoomData({ type: 'ADD_USER', user: { ...user, peer }, team })
        })
        return () => { socket.off('userJoined') }
    }, [])

    useEffect(() => {
        socket.on('swapTeam', (id, team) => {
            dispatchRoomData({ type: 'SWAP_TEAM', id, team })
        })
        return () => { socket.off('swapTeam') }
    }, [])

    useEffect(() => {
        socket.on('startGame', (status) => {
            dispatchRoomData({ type: 'ADD_STATUS', status })
            setStart(true)
        })
        return () => { socket.off('startGame') }
    }, [])

    const swapTeamHandler = () => {
        socket.emit('swapTeam', roomData.id, team)
        setTeam(team => !team)
    }

    const gameStartHandler = () => {
        if (roomData.isRunning) {
            setStart(true)
        }
        else {
            socket.emit('startGame', roomData.id)
        }
    }

    return (
        <UserContext.Provider value={{ socket, user, roomData, team }}>
            {!started &&
                <PageDesign >
                    <div className={classes.main}>
                        {roomData && <Team name='A' team={team} data={roomData.teamA} className={classes.content} swapTeam={swapTeamHandler} />}
                        <UserSettings gameStartHandler={gameStartHandler} />
                        {roomData && <Team name='B' team={!team} data={roomData.teamB} className={classes.content} swapTeam={swapTeamHandler} />}
                    </div>
                </PageDesign>
            }
            {/* <video playsInline ref={audioRef} autoPlay style={{ width: "auto" }} /> */}
            {started && <GameInterface Peers={Peers} />}
        </UserContext.Provider >
    )

}

export default RoomInterface