import { TEST_ACTION, PING } from './enums'

export const testMe = payload => ({
    type: TEST_ACTION,
    payload
})

export const ping = payload => ({
    type: PING,
    payload
})
