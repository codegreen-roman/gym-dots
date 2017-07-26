import React from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import { footerStyle } from './Footer.glamor'
import { startWorkoutWithCountdown, loadAppDefaults, subscribeToAppDefaultsChanges } from '../../state/actions'
import { compose } from 'ramda'
import { func, bool } from 'prop-types'

const AButton = glamorous.button({
    flex: 1
})

export class _Footer extends React.Component {

    componentDidMount() {
        const { loadDefaults } = this.props
        loadDefaults()
    }

    render() {

        const { fireStartWorkout, blocked } = this.props
        const buttonTitle = blocked ? 'Starting ...' : 'Start Workout'

        return (
            <footer {...footerStyle}>
                <AButton disabled={blocked} onClick={fireStartWorkout}>{buttonTitle}</AButton>
            </footer>
        )
    }
}

_Footer.propTypes = {
    blocked: bool.isRequired,
    fireStartWorkout: func.isRequired,
    loadDefaults: func.isRequired
}

const mapStateToProps = ({ workoutStatus }) => ({
    blocked: workoutStatus === 'starting'
})

const mapActionsToProps = (dispatch, { history }) => {

    const startWorkout = compose(dispatch, startWorkoutWithCountdown)

    subscribeToAppDefaultsChanges(dispatch)

    return {
        fireStartWorkout: () => {
            startWorkout()
                .then(() => history.push('/workout/started'))
        },
        loadDefaults: compose(dispatch, loadAppDefaults)
    }
}

export const Footer = connect(mapStateToProps, mapActionsToProps)(_Footer)
