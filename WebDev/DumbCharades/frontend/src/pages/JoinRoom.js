import React, { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/Login/Login'
import socketIOClient from "socket.io-client";
import Interfaces from '../interface/Interfaces';
const ENDPOINT = "http://localhost:4001";

const JoinRoom = (props) => {

    const roomId = useParams().roomId

    const [userData, setUserData] = useState(null)

    const joinRoom = () => {
        const socket = socketIOClient(ENDPOINT);
        const user = {
            name: localStorage.getItem('name'),
            avatar: localStorage.getItem('avatar') || 1
        }
        socket.emit('joinRoom', roomId, user)
        setUserData({ ...user, socket })
    }

    return (
        <Fragment>
            {!userData && <Login join={joinRoom} name='Join Room' />}
            {userData && <Interfaces user={userData}/>}
        </Fragment>
    )
}

export default JoinRoom