import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../../../context/user-context'
import classes from './Chats.module.css'
import { getChats } from './DataBase/database'
import MessageCard from './MessageCard'

const Chats = ({ newMessage }) => {

    const [chats, setChats] = useState(getChats())
    const scrollRef = useRef()

    newMessage((newChats) => {
        setChats([...newChats])
        // const newMessage = <MessageCard key={newChats.length()} data={newChats[newChats.length()-1]}/>
        // scrollRef.current.insertAdjacentHTML('beforeend', newMessage)
    })


    useEffect(() => {
        if (scrollRef.current.lastElementChild) {
            const newMessageHeight = scrollRef.current.lastElementChild.offsetHeight + 50
            const visibleHeight = scrollRef.current.offsetHeight
            const containerHeight = scrollRef.current.scrollHeight
            const scrollOffSet = scrollRef.current.scrollTop + visibleHeight
            if (containerHeight - newMessageHeight <= scrollOffSet) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight
            }
        }
    })
    const content = chats.map((data, index) => {
        return (
            <MessageCard key={index} data={data} />
        )
    })

    return (
        <div className={classes.chats} ref={scrollRef}>
            {content}
        </div>
    )
}

export default Chats