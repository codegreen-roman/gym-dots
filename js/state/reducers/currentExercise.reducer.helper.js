import { WORKOUT_STATUS, SET_SUCCESSFULLY_COMPLETED, SET_FAILED } from '../actions/types'
import { equals, compose, prop, pick, concat, flip, dec } from 'ramda'

export const fillMissingFields = (obj) => {
    return {
        ...obj,
        sets: obj.setsLeft,
        results: [],
    }
}

export const processResultWith = (resultModifier) => (currentExercise) => {

    const { results, setsLeft } = currentExercise

    return {
        ...currentExercise,
        setsLeft: dec(setsLeft),
        results: resultModifier(results),
    }
}

export const getCurrentExerciseData = compose(
    fillMissingFields,
    pick(['name', 'restTime', 'setsLeft', 'reps', 'weight', 'status', 'exerciseId']),
    prop('payload')
)

export const addDone = flip(concat)([true])
export const addFailed = flip(concat)([false])
export const getType = prop('type')

export const typeOfWorkoutStatus = compose(equals(WORKOUT_STATUS), getType)
export const typeOfSetCompleted = compose(equals(SET_SUCCESSFULLY_COMPLETED), getType)
export const typeOfSetFailed = compose(equals(SET_FAILED), getType)

