import { actions } from './enums'

export const creators = {
    testMe(payload) {
        return {
            type: actions.TEST_ACTION,
            payload
        }
    }
}
