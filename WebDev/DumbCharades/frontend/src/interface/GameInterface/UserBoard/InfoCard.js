import React, { useEffect, useRef } from 'react'
import classes from './InfoCard.module.css'

const InfoCard = (props) => {

    const audioRef = useRef()

    useEffect(() => {

        if (props.user.peer) {
            console.log(props.user.peer);
            // props.user.peer.addStream(props.stream)
            // props.user.peer.on('stream', stream => {
            //     console.log(stream);
            //     audioRef.current.srcObject = stream
            // })
            // audioRef.current.srcObject = props.user.peer.streams[0]
        }
        // audioRef.current.srcObject = props.user.peer.streams[0]
        // if (props.user.peer) {
        //     // props.user.peer.addStream(props.stream)
        //     props.user.peer.on('stream', stream => {
        //         console.log(stream);
        //         audioRef.current.srcObject = stream
        //     })
        // }
        // return () => { props.user.peer.removeStream(props.stream) }
    }, [])
    return (
        <div className={classes.card} style={{ borderColor: props.user.color }}>
            <img src={require(`../../../assets/avatar/${props.user.avatar}.png`)} />
            <p>{props.user.name}</p>
            <video playsInline ref={audioRef} autoPlay style={{ width: "auto" }} />
        </div>
    )
}

export default InfoCard