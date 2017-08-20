import { INITIAL_STATE } from '../initialState'
import { compose, cond, T, always } from 'ramda'

import {
    getCurrentExerciseData,
    addDone,
    addFailed,
    typeOfWorkoutStatus,
    typeOfSetCompleted,
    typeOfSetFailed,
    processResultWith
} from './currentExercise.reducer.helper'

const registerOkResult = processResultWith(addDone)
const registerFailedResult = processResultWith(addFailed)

const reducerMaker = (state) => cond([
    [typeOfWorkoutStatus, getCurrentExerciseData],
    [typeOfSetCompleted, compose(registerOkResult, always(state))],
    [typeOfSetFailed, compose(registerFailedResult, always(state))],
    [T, compose(always(state))]
])

export const currentExercise = (state = INITIAL_STATE, action) => reducerMaker(state)(action)
