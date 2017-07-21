import { GOT_DEFAULTS } from '../actions/firebase/types'
import { INITIAL_STATE } from '../initialState'

export const defaults = (state = INITIAL_STATE.defaults, action) => {
    switch (action.type) {
        case GOT_DEFAULTS:
            return action.payload.defaults
        default:
            return state
    }
}
