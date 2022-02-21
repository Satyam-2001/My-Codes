import React from 'react'
import Modal from '../../../components/Utility/Modal'
import classes from './Chooser.module.css'

const Chooser = (props) => {
    return (
        <Modal>
            <div className={classes.chooser}>
                <div>
                    <p>CHOOSE A MOVIE</p>
                </div>
            </div>
        </Modal>
    )
}

export default Chooser