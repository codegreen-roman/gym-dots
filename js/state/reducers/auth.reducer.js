import { AUTH_START, AUTH_SUCCESS, AUTH_VOID, AUTH_VOID_START } from '../actions/types'
import { INITIAL_STATE } from '../initialState'

export const auth = (state = INITIAL_STATE.auth, action) => {
    switch (action.type) {
        case AUTH_START:
        case AUTH_VOID_START:
            return {
                status: 'inProgress'
            }
        case AUTH_VOID:
            return {
                status: 'loggedOut'
            }
        case AUTH_SUCCESS:
            const { user, accessToken } = action.payload
            return {
                user,
                accessToken,
                status: 'loggedIn'
            }
        default:
            return state
    }
}
