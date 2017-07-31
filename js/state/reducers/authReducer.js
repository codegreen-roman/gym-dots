import { AUTH_SUCCESS } from '../actions/types'
import { INITIAL_STATE } from '../initialState'

export const auth = (state = INITIAL_STATE.auth, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                user: action.payload.user
            }
        default:
            return state
    }
}
