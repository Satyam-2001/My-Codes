import React from 'react'
import ColorChooser from './ColorChooser'
import classes from './OptionBoard.module.css'

const OptionBoard = (props) => {

    return (
        <div className={classes['painting-option']}>
            <ColorChooser setColor={props.setColor} color={props.color} />
            <div className={classes.options}>
                <img onClick={() => { props.setOption('pencil') }} src={require('../../../../../assets/pencil.png')} className={`${classes.option} ${props.option === 'pencil' && classes.choosed}`} />
                <img onClick={() => { props.setOption('eraser') }} src={require('../../../../../assets/eraser.png')} className={`${classes.option} ${props.option === 'eraser' && classes.choosed}`} />
                <img onClick={() => { props.setOption('paint') }} src={require('../../../../../assets/paint.png')} className={`${classes.option} ${props.option === 'paint' && classes.choosed}`} />
            </div>
            <div className={classes['penicl-thickness']}>
                <span onClick={() => { props.setLineWidth(4) }} className={`${classes.dot} ${props.lineWidth === 4 && classes['dot-selected']}`} style={{ height: '4px', width: '4px' }}></span>
                <span onClick={() => { props.setLineWidth(8) }} className={`${classes.dot} ${props.lineWidth === 8 && classes['dot-selected']}`} style={{ height: '8px', width: '8px' }}></span>
                <span onClick={() => { props.setLineWidth(15) }} className={`${classes.dot} ${props.lineWidth === 15 && classes['dot-selected']}`} style={{ height: '15px', width: '15px' }}></span>
                <span onClick={() => { props.setLineWidth(30) }} className={`${classes.dot} ${props.lineWidth === 30 && classes['dot-selected']}`} style={{ height: '30px', width: '30px' }}></span>
                <span onClick={() => { props.setLineWidth(50) }} className={`${classes.dot} ${props.lineWidth === 50 && classes['dot-selected']}`} style={{ height: '50px', width: '50px' }}></span>
            </div>
            <div className={classes.delete}>
                <img src={require('../../../../../assets/dustbin.png')} onClick={props.clearCanvas} className={classes['dust-bin']} />
            </div>
        </div>
    )
}

export default React.memo(OptionBoard)