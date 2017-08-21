import React from 'react'
import { connect } from 'react-redux'
import { FooterButton } from './buttons/FooterButton'
import { footerStyle } from './Footer.glamor'
import {
    startWorkoutWithCountdown,
    setIntermediateWorkout,
    moveExerciseToCompleted
} from '../../../state/actions/index'
import { setFailed, setDone } from '../../../state/actions/exerciseActions'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import { func, bool, object } from 'prop-types'
import { Flex } from 'glamorous-jsxstyle'

export class _Footer extends React.Component {

    componentWillReceiveProps({ shouldEndExercise, fireCompleteExercise, nextExercise: { exerciseId } }) {
        if (shouldEndExercise) fireCompleteExercise(exerciseId)
    }

    renderTrainingButtons() {

        const { fireStartWorkout, blocked, training, onSetFailed, onSetDone, nextExercise } = this.props
        const buttonTitle = blocked ? 'Starting ...' : 'Start Workout'

        const startButtonHandler = () => {
            fireStartWorkout(nextExercise)
        }

        if (training) {
            return (
                <Flex>
                    <FooterButton clickHandler={onSetFailed} data-test='failButton' disabled={false}>Failed</FooterButton>
                    <FooterButton clickHandler={onSetDone} data-test='doneButton' disabled={false}>Done</FooterButton>
                </Flex>
            )
        }

        return (
            <Flex>
                <FooterButton disabled={blocked} clickHandler={startButtonHandler}>{buttonTitle}</FooterButton>
            </Flex>
        )
    }

    render() {

        const { hidden } = this.props

        if (hidden) return null

        return (
            <footer {...footerStyle}>
                {this.renderTrainingButtons()}
            </footer>
        )
    }
}

_Footer.propTypes = {
    blocked: bool.isRequired,
    training: bool.isRequired,
    hidden: bool.isRequired,
    fireStartWorkout: func.isRequired,
    fireCompleteExercise: func.isRequired,
    onSetFailed: func.isRequired,
    onSetDone: func.isRequired,
    shouldEndExercise: bool.isRequired,
    nextExercise: object
}

const mapStateToProps = ({ workoutStatus, currentExercise: { setsLeft }, exercises: { upcoming: [nextExercise] } }) => ({
    hidden: false,
    blocked: workoutStatus === 'starting',
    training: workoutStatus === 'started',
    shouldEndExercise: setsLeft === 0,
    nextExercise
})

const mapActionsToProps = (dispatch, { history }) => {

    const startWorkout = compose(dispatch, startWorkoutWithCountdown)
    const goToPreparingAgain = compose(dispatch, setIntermediateWorkout)
    const completeCurrentExercise = compose(dispatch, moveExerciseToCompleted)

    // subscribeToAppDefaultsChanges(dispatch)

    return {
        fireStartWorkout: (nextExercise) => {
            startWorkout(nextExercise)
                .then(() => history.push('/activity/workout'))
        },
        fireCompleteExercise: (exerciseId) => {
            completeCurrentExercise(exerciseId)
            goToPreparingAgain()
            history.push('/activity/pre')
        },
        onSetFailed: compose(dispatch, setFailed),
        onSetDone: compose(dispatch, setDone)
    }
}

export const Footer = withRouter(connect(mapStateToProps, mapActionsToProps)(_Footer))
