import {
    PING,
    GET_LOCATION,
    GET_LOCATION_START,
    WORKOUT_STATUS
} from './types'
import { compose } from 'ramda'

export const startWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        status: 'starting'
    }
})

export const completeWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        status: 'completed'
    }
})

export const setStartedWorkout = (nextExercise) => ({
    type: WORKOUT_STATUS,
    payload: {
        status: 'started',
        ...nextExercise
    }
})

export const setIntermediateWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        name: '',
        status: 'intermediate',
        restTime: 0,
        sets: 5,
        reps: 0,
        weight: 0
    }
})


export const ping = payload => ({
    type: PING,
    payload
})

const loadLocationSuccess = location => ({
    type: GET_LOCATION,
    payload: {
        location,
        status: 'ready'
    }
})

export const loadLocationStart = () => ({
    type: GET_LOCATION_START,
    payload: {
        status: 'started'
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

export const loadLocationForUsername = () => {
    return function (dispatch) {

        dispatch(loadLocationStart())

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Tallinn, Estonia')
            }, 1000)
        })

        return promise
            .then(compose(dispatch, loadLocationSuccess))
    }
}
