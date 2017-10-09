import { WORKOUT_STATUS } from './types'

import { WORKOUT_STATUS as ws } from '../constants'
import { compose } from 'ramda'

export const startWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        status: ws.starting
    }
})

export const completeWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        status: ws.completed
    }
})

export const setStartedWorkout = (nextExercise) => ({
    type: WORKOUT_STATUS,
    payload: {
        status: ws.started,
        ...nextExercise
    }
})

export const setIntermediateWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        name: '',
        status: ws.intermediate,
        restTime: 0,
        sets: 5,
        reps: 0,
        weight: 0
    }
})

export const startWorkoutWithCountdown = (nextExercise) => {
    return function (dispatch) {

        dispatch(startWorkout())

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(nextExercise)
            }, 3000)
        })

        return promise
            .then(compose(dispatch, setStartedWorkout))
    }
}
