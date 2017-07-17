import { TEST_ACTION, PING, GET_LOCATION, GET_LOCATION_START, START_WORKOUT } from './types'
import { compose } from 'ramda'

export const testMe = payload => ({
    type: TEST_ACTION,
    payload
})

export const startWorkout = payload => ({
    type: START_WORKOUT,
    payload
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

const loadLocationError = () => ({
    type: GET_LOCATION,
    payload: {
        status: 'failed'
    }
})

export const loadLocationStart = () => ({
    type: GET_LOCATION_START,
    payload: {
        status: 'started'
    }
})

export const loadLocationForUsername = () => {
    return function (dispatch) {

        dispatch(loadLocationStart())

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Tallinn, Estonia')
            }, 2000)
        })

        return promise
            .then(compose(dispatch, loadLocationSuccess))
            .catch(() => dispatch(loadLocationError()))
    }
}
