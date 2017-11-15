import React from 'react'
import { FooterButton } from '../button/Button'
import { func, bool } from 'prop-types'
import { compose, withHandlers } from 'recompose'
import { Aux } from '../../../utils/enhancers'

/* Responsible for setting exercise to either "failed" or "done" status */
export const FooterWorkoutControls = ({ onSetFailed, onSetDone }) =>
    <Aux>
        <FooterButton onClickAction={onSetFailed} data-test='failButton' disabled={false}>Failed</FooterButton>
        <FooterButton onClickAction={onSetDone} data-test='doneButton' disabled={false}>Done</FooterButton>
    </Aux>

FooterWorkoutControls.propTypes = {
    onSetFailed: func.isRequired,
    onSetDone: func.isRequired
}

/* Responsible for starting a workout */
const _FooterWorkoutStart = ({ blocked, startButtonHandler }) =>
    <FooterButton data-test='startButton' onClickAction={startButtonHandler} disabled={blocked}>
        {blocked ? 'Starting ...' : 'Start Workout'}
    </FooterButton>


_FooterWorkoutStart.propTypes = {
    blocked: bool.isRequired,
    startButtonHandler: func.isRequired
}

export const FooterWorkoutStart = compose(
    withHandlers({
        startButtonHandler: ({fireStartWorkout, nextExercise}) => () => fireStartWorkout(nextExercise)
    })
)(_FooterWorkoutStart)
