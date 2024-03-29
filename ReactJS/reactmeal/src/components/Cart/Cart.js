import React from 'react'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[
        { id:'c1' , name:'Sushi' , amount:'2' , price:'12.99' }
        ].map(item => <li>{item.name}</li>)}</ul>
    return(
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>36.56</span>
            </div>
            <div className={classes.actions}>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Cart