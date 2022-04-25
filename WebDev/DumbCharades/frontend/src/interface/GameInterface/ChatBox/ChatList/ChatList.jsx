import React, { useContext, useState } from 'react'
import classes from './ChatList.module.css'
import ChatListItem from './ChatListItem'
import UserContext from '../../../../context/user-context'
import DataContext from '../../../../context/data-context'
import SearchBar from '../Utils/SearchBar'
import SideHeader from '../../Utils/SideHeader'

const everyone = { avatar: 1, name: 'Everyone', id: 'Everyone', group: true }
const team = { avatar: 1, name: 'Team', id: 'Team', group: true }

const ChatList = (props) => {

    const user  = useContext(UserContext)
    const roomData = useContext(DataContext)
    const { id: userID } = user
    const { teamA, teamB } = roomData
    const completeUserList = [everyone, team, ...teamA, ...teamB]

    const [userList, setUserList] = useState(completeUserList)

    const filterList = (name) => {
        setUserList(completeUserList.filter(user => user.name.toLowerCase().includes(name.toLowerCase())))
    }

    return (
        <div className={`chat-box ${classes['chat-list']}`}>
            <SideHeader title='CHATS' Close={props.chatBoxClose} />
            <SearchBar filterList={filterList} />
            <div className={classes.list}>
                {
                    userList.map(user => {
                        if (user.id !== userID)
                            return <ChatListItem key={user.id} info={user} setUserChatOpen={props.setUserChatOpen} />
                    })
                }
            </div>
        </div>
    )
}

export default ChatList