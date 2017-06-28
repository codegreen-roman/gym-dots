import { LOAD_SESSIONS_SUCCESS } from '../actions/types'

const DEFAULT_STATE = {
    sessions: []
}

export const sessions = (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case LOAD_SESSIONS_SUCCESS:
            return action.payload.sessions
        default:
            return state
    }
}
