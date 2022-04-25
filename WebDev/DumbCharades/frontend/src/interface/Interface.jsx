import React, { useEffect, useState } from 'react'
import SocketContext from '../context/socket-context'
import UserContext from '../context/user-context'
import GameInterface from './GameInterface/GameInterface'
import RoomInterface from './RoomInterface/RoomInterface'
import Error from '../error/Error'
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:4001';
const socket = socketIOClient(ENDPOINT);

const dataReducer = (roomData, action) => {
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
        case 'REMOVE_USER': {
            if (action.team) {
                const teamA = roomData.teamA.filter(user => user.id !== action.userID)
                return { ...roomData, teamA }
            }
            const teamB = roomData.teamB.filter(user => user.id !== action.userID)
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
        case 'GMAE_TYPE': {
            return { ...roomData, game: action.gameType }
        }
        case 'ROUNDS': {
            return { ...roomData, rounds: action.rounds }
        }
        case 'DURATION': {
            return { ...roomData, duration: action.duration }
        }
    }
}

const Interface = (props) => {

    const userData = {
        name: localStorage.getItem('name') || 'Guest',
        avatar: localStorage.getItem('avatar') || 1
    }

    const [error, setError] = useState(undefined)
    const [gameData, setGameData] = useState(undefined)
    const [user, setUser] = useState(userData)

    return (
        <SocketContext.Provider value={socket} >
            <UserContext.Provider value={user} >
                {error ? <Error /> : (
                    gameData ? <GameInterface dataReducer={dataReducer} gameData={gameData} /> : <RoomInterface setUser={setUser} dataReducer={dataReducer} setGameData={setGameData} gameState={props.gameState} roomID={props.roomID} setError={setError} />
                )}
            </UserContext.Provider>
        </SocketContext.Provider>
    )
}

export default Interface