import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButtom from './HeaderCartButton'
import classes from './Header.module.css'


const Header = (props) => {
    return (
        <React.Fragment>
            <header  className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButtom />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table ful of delicious food' />
            </div>
        </React.Fragment>
    )
}

export default Header