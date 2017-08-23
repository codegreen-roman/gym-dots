import { AUTH_SUCCESS, AUTH_VOID } from '../actions/types'
import { INITIAL_STATE } from '../initialState'

export const auth = (state = INITIAL_STATE.auth, action) => {
    switch (action.type) {
        case AUTH_VOID:
            return {}
        case AUTH_SUCCESS:
            const { user, accessToken } = action.payload
            return { user, accessToken }
        default:
            return state
    }
}
