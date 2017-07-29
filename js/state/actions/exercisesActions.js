import { EXERCISES_ORDER_CHANGE } from './types'

export const exercisesOrderChange = exercise => ({
    type: EXERCISES_ORDER_CHANGE,
    payload: {
        exercise
    }
})
