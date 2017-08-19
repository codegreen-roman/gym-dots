import React from 'react'
import { connect } from 'react-redux'
import { FooterButton } from './buttons/FooterButton'
import { footerStyle } from './Footer.glamor'
import {
    startWorkoutWithCountdown,
    loadAppDefaults,
    subscribeToAppDefaultsChanges,
    setIntermediateWorkout
} from '../../../state/actions/index'
import { setFailed, setDone } from '../../../state/actions/exerciseActions'
import { compose } from 'ramda'
import { withRouter } from 'react-router-dom'
import { func, bool } from 'prop-types'
import { Flex } from 'glamorous-jsxstyle'

export class _Footer extends React.Component {

    componentDidMount() {
        const { loadDefaults } = this.props
        loadDefaults()
    }

    componentWillReceiveProps({ shouldEndExercise, fireCompleteExercise }) {
        if (shouldEndExercise) fireCompleteExercise()
    }

    renderTrainingButtons() {

        const { fireStartWorkout, blocked, training, onSetFailed, onSetDone } = this.props
        const buttonTitle = blocked ? 'Starting ...' : 'Start Workout'

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
                <FooterButton disabled={blocked} clickHandler={fireStartWorkout}>{buttonTitle}</FooterButton>
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
    // loadDefaults: func.isRequired,
    onSetFailed: func.isRequired,
    onSetDone: func.isRequired,
    shouldEndExercise: bool.isRequired
}

const mapStateToProps = ({ workoutStatus, currentExercise : { setsLeft } }) => ({
    hidden: false,
    blocked: workoutStatus === 'starting',
    training: workoutStatus === 'started',
    shouldEndExercise: setsLeft === 0
})

const mapActionsToProps = (dispatch, { history }) => {

    const startWorkout = compose(dispatch, startWorkoutWithCountdown)
    const completeCurrentExercise = compose(dispatch, setIntermediateWorkout)

    subscribeToAppDefaultsChanges(dispatch)

    return {
        fireStartWorkout: () => {
            startWorkout()
                .then(() => history.push('/activity/workout'))
        },
        fireCompleteExercise: () => {
            completeCurrentExercise()
            history.push('/activity/pre')
        },
        loadDefaults: compose(dispatch, loadAppDefaults),
        onSetFailed: compose(dispatch, setFailed),
        onSetDone: compose(dispatch, setDone)
    }
}

export const Footer = withRouter(connect(mapStateToProps, mapActionsToProps)(_Footer))
