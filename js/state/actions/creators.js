import { TEST_ACTION, PING, GET_LOCATION } from './enums'

export const testMe = payload => ({
    type: TEST_ACTION,
    payload
})

export const ping = payload => ({
    type: PING,
    payload
})

export const getLocation = username => ({
    type: GET_LOCATION,
    payload: {
        username,
        location: 'Tallinn'
    }
})
