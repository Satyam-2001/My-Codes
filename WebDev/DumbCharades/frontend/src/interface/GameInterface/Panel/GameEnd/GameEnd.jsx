import React, { Fragment } from 'react'
import Button from '../../../../components/UI/Button'
import classes from './GameEnd.module.css'

const TeamScore = (props) => {
    return (
        <div className={classes.scores}>
            <p className={classes['team-name']}>TEAM {props.team}</p>
            <p className={classes['team-score']}>{props.score}</p>
        </div>
    )
}

const GameEnd = (props) => {
    return (
        <Fragment>
            <p className={classes.title}>WINNER TEAM A</p>
            <div className={classes['score-board']}>
                <fieldset>
                    <legend>SCORE BOARD</legend>
                    <TeamScore team='A' score='1000' />
                    <TeamScore team='B' score='1800' />
                    <Button className={classes['play-again']}>Play Again</Button>
                </fieldset>
            </div>
        </Fragment>
    )
}

export default GameEnd