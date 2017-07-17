import { LOAD_SESSIONS_SUCCESS } from '../actions/types'
import { INITIAL_STATE } from '../initialState'

export const sessions = (state = INITIAL_STATE.sessions, action) => {

    switch (action.type) {
        case LOAD_SESSIONS_SUCCESS:
            return action.payload.sessions
        default:
            return state
    }
}
