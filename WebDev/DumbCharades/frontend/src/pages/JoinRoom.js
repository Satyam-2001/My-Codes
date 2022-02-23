import React, { useState, Fragment, createContext } from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/Login/Login'
import socketIOClient from "socket.io-client";
import Interfaces from '../interface/Interfaces';
import UserContext from '../context/user-context';
const ENDPOINT = "http://localhost:4001";

const JoinRoom = (props) => {

    const roomId = useParams().roomId
    const [data, setData] = useState(null)

    const joinRoom = () => {
        const socket = socketIOClient(ENDPOINT);
        const user = {
            name: localStorage.getItem('name') || 'User',
            avatar: localStorage.getItem('avatar') || 1
        }
        socket.emit('joinRoom', roomId, user, (id, roomData, team , color) => {
            setData({
                user: { id, ...user, socket , color },
                roomData,
                team,
            })
        })
    }

    return (
        <UserContext.Provider value={data}>
            {!data && <Login join={joinRoom} name='Join Room' />}
            {data && <Interfaces />}
        </UserContext.Provider>
    )
}

export default JoinRoom