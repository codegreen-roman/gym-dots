import { EXERCISES_ORDER_CHANGE, EXERCISES_FETCHING_SUCCESS } from '../actions/types'
import { INITIAL_STATE } from '../initialState'

export const exercises = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXERCISES_FETCHING_SUCCESS:
            return {
                ...state,
                name: action.payload.exercises.name,
                sessionId: action.payload.exercises.sessionId,
                upcoming: action.payload.exercises.exercises
            }
        case EXERCISES_ORDER_CHANGE:
            return {
                ...state,
                upcoming: [
                    action.payload.exercise,
                    ...state.upcoming.filter(itm => itm.exerciseId !== action.payload.exercise.exerciseId)
                ]
            }
        default:
            return state
    }
}
