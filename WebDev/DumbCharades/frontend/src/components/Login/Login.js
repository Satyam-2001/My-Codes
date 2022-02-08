import React, { useEffect, useState } from 'react'
import LoginBox from '../Cards/LoginBox'
import Button from '../UI/Button'
import PageDesign from '../Cards/PageDesign'
import TextInput from '../UI/TextInput'
import Avatar from './Avatar'

const PrivateRoom = (props) => {
    const [isValid, setValid] = useState(true)
    const [name, setName] = useState('')

    useEffect(() => {
        const storedName = localStorage.getItem('name')
        if (storedName) {
            setName(storedName)
        }
    }, [])

    const nameChangeHandler = (currentName) => {
        setValid(true)
        setName(currentName)
    }

    const createRoomHandler = () => {
        if (!name) {
            setValid(false)
            return;
        }
        localStorage.setItem('name', name)
        props.join()
    }

    return (
        <PageDesign>
            <LoginBox>
                <Avatar />
                <TextInput name='Name' value={name} onChange={nameChangeHandler} valid={isValid} />
                <Button onClick={createRoomHandler}>{props.name}</Button>
            </LoginBox>
        </PageDesign>
    )
}

export default PrivateRoom