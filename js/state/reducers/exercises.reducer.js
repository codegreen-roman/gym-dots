/* eslint no-case-declarations: off */

import {
    EXERCISES_ORDER_CHANGE,
    EXERCISES_FETCHING_SUCCESS,
    EXERCISES_MOVE_EXERCISE_TO_COMPLETED
} from '../actions/types'
import { INITIAL_STATE } from '../initialState'
import { reject, filter, propEq, concat } from 'ramda'

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
        case EXERCISES_MOVE_EXERCISE_TO_COMPLETED:

            const completedExercise = propEq('exerciseId', action.payload.exerciseId)

            return {
                ...state,
                upcoming: reject(completedExercise)(state.upcoming),
                completed: concat(filter(completedExercise)(state.upcoming), state.completed)
            }
        default:
            return state
    }
}
