import { SET_FAILED, SET_SUCCESSFULLY_COMPLETED } from './types'

export const setFailed = () => {
    return {
        type: SET_FAILED,
        payload: {}
    }
}

export const setDone = () => {
    return {
        type: SET_SUCCESSFULLY_COMPLETED,
        payload: {}
    }
}
