import { connect } from 'react-redux'
import { compose, test, not, isEmpty } from 'ramda'
import { setFailed, setDone } from '../../../state/actions/exerciseActions'
import { withRouter } from 'react-router-dom'
import { Footer as _Footer } from './Footer'
import { WORKOUT_STATUS } from '../../../state/common/workoutStatus'

import {
    startWorkoutWithCountdown,
    setIntermediateWorkout,
    moveExerciseToCompleted
} from '../../../state/actions'

const isNotActivityPath = compose(not, test(/in\/activity/))

const mapStateToProps = (state, { location: { pathname } }) => {

    const { workoutStatus, currentExercise: { setsLeft, results }, exercises: { upcoming } } = state
    const [nextExercise = {}] = upcoming

    return {
        hidden: isNotActivityPath(pathname) || isEmpty(nextExercise),
        blocked: WORKOUT_STATUS.isStarting(workoutStatus),
        training: WORKOUT_STATUS.isStarted(workoutStatus),
        shouldEndExercise: setsLeft === 0,
        nextExercise,
        currentResults: results || []
    }
}

const mapActionsToProps = (dispatch, { history }) => {

    const startWorkout = compose(dispatch, startWorkoutWithCountdown)
    const goToPreparingAgain = compose(dispatch, setIntermediateWorkout)
    const completeCurrentExercise = compose(dispatch, moveExerciseToCompleted)

    return {
        fireStartWorkout: (nextExercise) => {
            startWorkout(nextExercise)
                .then(() => history.push('/in/activity/workout'))
        },
        fireCompleteExercise: (exerciseKey, results) => {
            completeCurrentExercise(exerciseKey, results)
            goToPreparingAgain()
            history.push('/in/activity/pre')
        },
        onSetFailed: compose(dispatch, setFailed),
        onSetDone: compose(dispatch, setDone)
    }
}

export const Footer = withRouter(connect(mapStateToProps, mapActionsToProps)(_Footer))
