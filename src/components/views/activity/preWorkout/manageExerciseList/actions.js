import {
    EXERCISES_ORDER_CHANGE,
    EXERCISES_MOVE_EXERCISE_TO_COMPLETED
} from './constants'

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

