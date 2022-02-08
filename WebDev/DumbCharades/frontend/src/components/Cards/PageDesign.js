import React from 'react'
import classes from './PageDesign.module.css'
import title from '../../assets/title.gif'

const PageDesign = (props) => {
    return(
        <div className={classes.page}>
            <img className={classes.title} src={title} alt='DumbCharades' />
            {props.children}
        </div>
    )
}

export default PageDesign