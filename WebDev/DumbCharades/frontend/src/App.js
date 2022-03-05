import React, { Fragment, useState } from "react"
import RoomInterface from "./interface/RoomInterface/RoomInterface"
import Login from "./components/Login/Login"

const roomId = window.location.pathname.substring(1)
const gameState = roomId === '' ? 'Create Private Room' : 'Join Room'

const App = () => {

  const [join, setJoin] = useState(false)

  const joinRoom = () => {
    setJoin(true)
  }

  return (
    <Fragment>
      {!join && <Login join={joinRoom} name={gameState} />}
      {join && <RoomInterface gameState={gameState} roomId={roomId} />}
    </Fragment>
  )
}

export default App;
