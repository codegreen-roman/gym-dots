import { actions } from './enums'

const { TEST_ACTION } = actions

export const creators = {
    testMe(payload) {
        return {
            type: TEST_ACTION,
            payload
        }
    }
}
