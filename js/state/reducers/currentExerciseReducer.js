import { WORKOUT_STATUS } from '../actions/types'
import { INITIAL_STATE } from '../initialState'
import { equals, compose, prop, pick, cond, merge, T, always } from 'ramda'

const fillMissingFields = (obj) => {
    return {
        sets: obj.setsLeft,
        results: [],
        ...obj
    }
}

const getType = prop('type')
const typeOfWorkoutStatus = compose(equals(WORKOUT_STATUS), getType)
const getCurrentExerciseData = compose(
    fillMissingFields,
    pick(['name', 'restTime', 'setsLeft', 'reps', 'weight', 'status']),
    prop('payload')
)

const reducerMaker = (state) => {
    const mergeState = merge(state)
    const app = cond([
        [typeOfWorkoutStatus, getCurrentExerciseData],
        [T, compose(always(state))]
    ])

    return compose(mergeState, app)
}

export const currentExercise = (state = INITIAL_STATE, action) => reducerMaker(state)(action)
