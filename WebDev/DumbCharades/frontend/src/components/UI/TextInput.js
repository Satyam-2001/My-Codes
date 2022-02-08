import React from 'react'
import classes from './TextInput.module.css'

const TextInput = React.forwardRef((props, ref) => {
    
    const nameUpdate = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className={`${classes['user-box']} ${!props.valid && classes['invalid']}`}>
            <input type="text" name="name" value={props.value} onChange={nameUpdate} autoComplete="off" required />
            <label>{props.name}</label>
        </div>
    )
})

export default TextInput