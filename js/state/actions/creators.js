import { TEST_ACTION, PING } from './enums'

export const creators = {
    testMe(payload) {
        return {
            type: TEST_ACTION,
            payload
        }
    },

    ping(payload) {
        return {
            type: PING,
            payload
        }
    }
}
