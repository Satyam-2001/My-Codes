import React, { Fragment, useState } from 'react'
import Login from '../components/Login/Login'
import socketIOClient from "socket.io-client";
import Interfaces from '../interface/Interfaces';
const ENDPOINT = "http://localhost:4001";

const PrivateRoom = (props) => {

    const [userData, setUserData] = useState(null)

    const joinRoom = () => {
        const socket = socketIOClient(ENDPOINT);
        const user = {
            name: localStorage.getItem('name'),
            avatar: localStorage.getItem('avatar') || 1
        }
        socket.emit('createRoom', user)
        setUserData({ ...user, socket })
    }

    return (
        <Fragment>
            {!userData && <Login join={joinRoom} name='Create Private Room' />}
            {userData && <Interfaces user={userData} />}
        </Fragment>
    )
}

export default PrivateRoom