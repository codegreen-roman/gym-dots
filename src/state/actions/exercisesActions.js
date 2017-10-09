import {
    EXERCISES_ORDER_CHANGE,
    EXERCISES_MOVE_EXERCISE_TO_COMPLETED,
    EXERCISES_SAVED_RESULTS_SUCCESS,
    EXERCISES_SAVED_RESULTS_FAILED
} from './types'

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
