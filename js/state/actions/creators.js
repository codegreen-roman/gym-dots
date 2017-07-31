import { PING, GET_LOCATION, GET_LOCATION_START, WORKOUT_STATUS } from './types'
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

export const setStartedWorkout = () => ({
    type: WORKOUT_STATUS,
    payload: {
        status: 'started'
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

export const startWorkoutWithCountdown = () => {
    return function (dispatch) {

        dispatch(startWorkout())

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('started')
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
