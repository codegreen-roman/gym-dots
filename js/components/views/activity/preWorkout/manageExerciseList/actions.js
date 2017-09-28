import {
    EXERCISES_ORDER_CHANGE,
    EXERCISES_MOVE_EXERCISE_TO_COMPLETED,
    EXERCISES_SAVED_RESULTS_SUCCESS,
    EXERCISES_SAVED_RESULTS_FAILED
} from './constants'

import { compose } from 'ramda'
import { writeSessionResult } from '../../../../../state/actions/firebase/database'

export const exercisesOrderChange = (exercise) => ({
    type: EXERCISES_ORDER_CHANGE,
    payload: {
        exercise
    }
})

export const moveExerciseToCompleted = (exerciseKey, results) => ({
    type: EXERCISES_MOVE_EXERCISE_TO_COMPLETED,
    payload: {
        exerciseKey,
        results
    }
})

export const saveResultsCompleted = (data) => ({
    type: EXERCISES_SAVED_RESULTS_SUCCESS,
    payload: {
        data
    }
})

export const saveResultsFailed = () => ({
    type: EXERCISES_SAVED_RESULTS_FAILED,
    payload: {
    }
})

export const saveExercisesResults = (userKey, data) => {
    return function (dispatch) {

        const saveFailed = compose(dispatch, saveResultsFailed)
        const saveSuccess = () => compose(dispatch, saveResultsCompleted)(data)

        return writeSessionResult(userKey, data)
            .then(saveSuccess)
            .catch(saveFailed)
    }
}
