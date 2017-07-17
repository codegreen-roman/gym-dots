import { WORKOUT_STATUS } from '../actions/types'
import { INITIAL_STATE } from './initialState'

export const workoutStatus = (state = INITIAL_STATE.workoutStatus, action) => {

    switch (action.type) {
        case WORKOUT_STATUS:
            return action.payload.status
        default:
            return state
    }
}
