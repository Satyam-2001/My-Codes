import React, {useState,useContext} from 'react'
import classes from './LinkCopy.module.css'
import UserContext from '../../context/user-context'

const LinkCopy = (props) => {

    const { user , roomData } = useContext(UserContext)
    const [copyIcon , setCopyIcon] = useState(false)

    const link = `http://localhost:3000/${roomData.id}`

    const copyLink = (event) => {
        navigator.clipboard.writeText(link);
        setCopyIcon(true)
        const myTimeout = setTimeout(() => {
            setCopyIcon(false)
            clearTimeout(myTimeout)
        }, 800);
    }

    return (
        <div className={`${classes.invite} ${props.className}`}>
            <p className={classes.link}>{link}</p>
            <button className={`${classes['link-button']} material-icons ${copyIcon && classes.copied}`} onClick={copyLink}>{copyIcon ? 'done' : 'content_copy'}</button>
        </div>
    )
}

export default LinkCopy