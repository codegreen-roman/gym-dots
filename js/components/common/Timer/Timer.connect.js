import { connect } from 'react-redux'
import { compose } from 'ramda'
import { setStartedWorkout, completeWorkout } from '../../../state/actions/creators'

export const mapStateToProps = ({ workoutStatus }, { children }) => {

    return {
        workoutStatus,
        children
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        start: compose(dispatch, setStartedWorkout),
        complete: compose(dispatch, completeWorkout)
    }
}

export const timerConnect = connect(mapStateToProps, mapDispatchToProps)
