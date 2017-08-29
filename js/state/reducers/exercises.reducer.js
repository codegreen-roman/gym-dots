import {
    EXERCISES_ORDER_CHANGE,
    EXERCISES_FETCHING_SUCCESS,
    EXERCISES_MOVE_EXERCISE_TO_COMPLETED,
    EXERCISES_SAVED_RESULTS_SUCCESS
} from '../actions/types'
import { INITIAL_STATE } from '../initialState'
import { reject, filter, propEq, concat, mapObjIndexed, values, compose, reduce, and, map, assoc } from 'ramda'

export const exercises = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EXERCISES_FETCHING_SUCCESS:

            const getValueAndKey = (val, key) => ({
                ...val,
                exerciseKey: key
            })

            const mapToExerciseList = compose(values, mapObjIndexed(getValueAndKey))
            const { name, sessionKey, exercises } = action.payload.nextSession

            return {
                ...state,
                name,
                sessionKey,
                upcoming: mapToExerciseList(exercises)
            }
        case EXERCISES_ORDER_CHANGE:

            const { exercise: { exerciseKey } } = action.payload
            const sameKey = propEq('exerciseKey', exerciseKey)
            const { upcoming } = state
            const withoutTheExercise = reject(sameKey)

            return {
                ...state,
                upcoming: [
                    action.payload.exercise,
                    ...withoutTheExercise(upcoming)
                ]
            }
        case EXERCISES_MOVE_EXERCISE_TO_COMPLETED:

            const checkAllTrue = reduce(and, true)
            const extendWithAllDoneDependingOnResults = map(assoc('allDone', checkAllTrue(action.payload.results)))
            const completedExercise = propEq('exerciseKey', action.payload.exerciseKey)
            const withoutTheCompletedExerciseFrom = reject(completedExercise)
            const withTheCompletedExerciseFrom = compose(extendWithAllDoneDependingOnResults, filter(completedExercise))

            return {
                ...state,
                upcoming: withoutTheCompletedExerciseFrom(state.upcoming),
                completed: concat(withTheCompletedExerciseFrom(state.upcoming), state.completed)
            }
        case EXERCISES_SAVED_RESULTS_SUCCESS:
            return {
                ...state,
                upcoming: [],
                completed: [],
                skipped: []
            }
        default:
            return state
    }
}
