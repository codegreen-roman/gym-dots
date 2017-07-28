import { EXERCISES_FETCHING_SUCCESS } from '../actions/firebase/types'
import { INITIAL_STATE } from '../initialState'

export const exercises = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXERCISES_FETCHING_SUCCESS:
            return {
                ...state,
                name: action.payload.exercises.name,
                sessionId: action.payload.exercises.sessionId,
                upcoming:  action.payload.exercises.exercises
            }
        default:
            return state
    }
}
