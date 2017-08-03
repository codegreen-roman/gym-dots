import { WORKOUT_STATUS } from '../actions/types'
import { INITIAL_STATE } from '../initialState'
import R from 'ramda'

const fillMissingFields = (obj) => {
    return {
        sets: obj.setsLeft,
        results: [],
        ...obj
    }
}

const getType = R.prop('type')
const typeOfWorkoutStatus = R.compose(R.equals(WORKOUT_STATUS), getType)
const getCurrentExerciseData = R.compose(
    fillMissingFields,
    R.pick(['name', 'restTime', 'setsLeft', 'reps', 'weight', 'status']),
    R.prop('payload')
)

const reducerMaker = (state) => {
    const mergeState = R.merge(state)
    const app = R.cond([
        [typeOfWorkoutStatus, getCurrentExerciseData],
        [R.T, R.compose(R.always(state))]
    ])

    return R.compose(mergeState, app)
}

export const currentExercise = (state = INITIAL_STATE, action) => reducerMaker(state)(action)
