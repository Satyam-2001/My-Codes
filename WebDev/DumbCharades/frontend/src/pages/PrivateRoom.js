import React, { Fragment, useState } from 'react'
import Login from '../components/Login/Login'
import socketIOClient from "socket.io-client";
import Interfaces from '../interface/Interfaces';
const ENDPOINT = "http://localhost:4001";

const PrivateRoom = (props) => {

    const [data, setData] = useState(null)

    const joinRoom = () => {
        const socket = socketIOClient(ENDPOINT);
        const user = {
            name: localStorage.getItem('name'),
            avatar: localStorage.getItem('avatar') || 1
        }
        socket.emit('createRoom', user , (id,roomData,team) => {
            setData({
                user : { id , ...user , socket },
                roomData,
                team
            })
        })
    }

    return (
        <Fragment>
            {!data && <Login join={joinRoom} name='Create Private Room' />}
            {data && <Interfaces user={data.user} roomData={data.roomData} team={data.team} />}
        </Fragment>
    )
}

export default PrivateRoom