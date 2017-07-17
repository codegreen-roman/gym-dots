import React from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import { footerStyle } from './Footer.glamor'
import { startWorkoutWithCountdown } from '../../state/actions'
import { compose } from 'ramda'
import { func, bool } from 'prop-types'

const AButton = glamorous.button({
    flex: 1
})

export class _Footer extends React.Component {
    render() {

        const { fireStartWorkout, blocked } = this.props
        return (
            <footer {...footerStyle}>
                <AButton disabled={blocked} onClick={fireStartWorkout}>Start Workout</AButton>
            </footer>
        )
    }
}

_Footer.propTypes = {
    blocked: bool.isRequired,
    fireStartWorkout: func.isRequired
}

const mapStateToProps = ({ workoutStatus }) => ({
    blocked: workoutStatus === 'starting'
})

const mapActionsToProps = dispatch => {
    return {
        fireStartWorkout: compose(dispatch, startWorkoutWithCountdown)
    }
}

export const Footer = connect(mapStateToProps, mapActionsToProps)(_Footer)
