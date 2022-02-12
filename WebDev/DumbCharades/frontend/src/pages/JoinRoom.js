import React, { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/Login/Login'
import socketIOClient from "socket.io-client";
import Interfaces from '../interface/Interfaces';
const ENDPOINT = "http://localhost:4001";

const JoinRoom = (props) => {

    const roomId = useParams().roomId
    const [data, setData] = useState(null)

    const joinRoom = () => {
        const socket = socketIOClient(ENDPOINT);
        const user = {
            name: localStorage.getItem('name'),
            avatar: localStorage.getItem('avatar') || 1
        }
        socket.emit('joinRoom', roomId , user , (id,roomData,team) => {
            setData({
                user : { id , ...user , socket },
                roomData,
                team
            })
        })
    }

    return (
        <Fragment>
            {!data && <Login join={joinRoom} name='Join Room' />}
            {data && <Interfaces user={data.user} roomData={data.roomData} team={data.team} />}
        </Fragment>
    )
}

export default JoinRoom