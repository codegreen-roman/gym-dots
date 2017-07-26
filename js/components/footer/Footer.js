import React from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import { footerStyle } from './Footer.glamor'
import { startWorkoutWithCountdown, loadAppDefaults, subscribeToAppDefaultsChanges } from '../../state/actions'
import { compose } from 'ramda'
import { func, bool, object } from 'prop-types'

const AButton = glamorous.button({
    flex: 1
})

export class _Footer extends React.Component {

    componentDidMount() {
        const { loadDefaults } = this.props
        loadDefaults()
    }

    render() {

        const { fireStartWorkout, blocked, history } = this.props
        const handleClick = () => {
            fireStartWorkout()
                .then(() => history.push('/workout/started'))
        }

        const buttonTitle = blocked ? 'Starting ...' : 'Start Workout'

        return (
            <footer {...footerStyle}>
                <AButton disabled={blocked} onClick={handleClick}>{buttonTitle}</AButton>
            </footer>
        )
    }
}

_Footer.propTypes = {
    history: object,
    blocked: bool.isRequired,
    fireStartWorkout: func.isRequired,
    loadDefaults: func.isRequired
}

const mapStateToProps = ({ workoutStatus }) => ({
    blocked: workoutStatus === 'starting'
})

const mapActionsToProps = dispatch => {

    subscribeToAppDefaultsChanges(dispatch)

    return {
        fireStartWorkout: compose(dispatch, startWorkoutWithCountdown),
        loadDefaults: compose(dispatch, loadAppDefaults)
    }
}

export const Footer = connect(mapStateToProps, mapActionsToProps)(_Footer)
