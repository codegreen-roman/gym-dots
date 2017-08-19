/* eslint no-console: "off"*/
/* eslint no-unused-vars: "off"*/

import { WORKOUT_STATUS, SET_SUCCESSFULLY_COMPLETED, SET_FAILED } from '../actions/types'
import { INITIAL_STATE } from '../initialState'
import { equals, compose, prop, pick, cond, T, always, concat, flip, dec } from 'ramda'

const fillMissingFields = (obj) => {
    return {
        ...obj,
        sets: obj.setsLeft,
        results: [],
    }
}

const addDone = flip(concat)([true])
const addFailed = flip(concat)([false])

const getType = prop('type')
const typeOfWorkoutStatus = compose(equals(WORKOUT_STATUS), getType)
const typeOfSetCompleted = compose(equals(SET_SUCCESSFULLY_COMPLETED), getType)
const typeOfSetFailed = compose(equals(SET_FAILED), getType)

const getCurrentExerciseData = compose(
    fillMissingFields,
    pick(['name', 'restTime', 'setsLeft', 'reps', 'weight', 'status']),
    prop('payload')
)

const processResultWith = (resultModifier) => (currentExercise) => {

    const { results, setsLeft } = currentExercise

    return {
        ...currentExercise,
        setsLeft: dec(setsLeft),
        results: resultModifier(results),
    }
}

const reducerMaker = (state) => {
    return cond([
        [typeOfWorkoutStatus, getCurrentExerciseData],
        [typeOfSetCompleted, compose(processResultWith(addDone), always(state))],
        [typeOfSetFailed, compose(processResultWith(addFailed), always(state))],
        [T, compose(always(state))]
    ])
}

export const currentExercise = (state = INITIAL_STATE, action) => reducerMaker(state)(action)
