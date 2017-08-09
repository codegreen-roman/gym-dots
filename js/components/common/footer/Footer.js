import React from 'react'
import { connect } from 'react-redux'
import { FooterButton } from './buttons/FooterButton'
import { footerStyle } from './Footer.glamor'
import { startWorkoutWithCountdown, loadAppDefaults, subscribeToAppDefaultsChanges } from '../../../state/actions/index'
import { compose } from 'ramda'
import { func, bool } from 'prop-types'
import { Flex } from 'glamorous-jsxstyle'

export class _Footer extends React.Component {

    componentDidMount() {
        const { loadDefaults } = this.props
        loadDefaults()
    }

    renderTrainingButtons() {

        const { fireStartWorkout, blocked, training } = this.props
        const buttonTitle = blocked ? 'Starting ...' : 'Start Workout'

        if (training) {
            return (
                <Flex>
                    <FooterButton data-test='failButton' disabled={false}>Failed</FooterButton>
                    <FooterButton data-test='doneButton' disabled={false}>Done</FooterButton>
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
    loadDefaults: func.isRequired
}

const mapStateToProps = ({ workoutStatus }) => ({
    hidden: false,
    blocked: workoutStatus === 'starting',
    training: workoutStatus === 'started',
})

const mapActionsToProps = (dispatch, { history }) => {

    const startWorkout = compose(dispatch, startWorkoutWithCountdown)

    subscribeToAppDefaultsChanges(dispatch)

    return {
        fireStartWorkout: () => {
            startWorkout()
                .then(() => history.push('/activity/workout'))
        },
        loadDefaults: compose(dispatch, loadAppDefaults)
    }
}

export const Footer = connect(mapStateToProps, mapActionsToProps)(_Footer)
