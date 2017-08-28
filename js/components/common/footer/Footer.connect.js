import { connect } from 'react-redux'
import { compose, test, not } from 'ramda'
import { setFailed, setDone } from '../../../state/actions/exerciseActions'
import { withRouter } from 'react-router-dom'
import { Footer as _Footer } from './Footer'

const isNotActivityPath = compose(not, test(/activity/))

import {
    startWorkoutWithCountdown,
    setIntermediateWorkout,
    moveExerciseToCompleted
} from '../../../state/actions'

const mapStateToProps = ({ workoutStatus, currentExercise: { setsLeft }, exercises: { upcoming: [nextExercise] } }, { location: { pathname } }) => ({
    hidden: isNotActivityPath(pathname) || !nextExercise,
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
