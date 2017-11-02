import { types } from '../../common/constants'
import { toWritableResults } from '../../../components/views/activity/preWorkout/manageExerciseList/ManageExerciseList.helper'

import { sessionDoneSelector } from '../../selectors/exercises'
import { userKeySelector } from '../../selectors/auth'

import R, { prop, compose, equals } from 'ramda'
import { logout, loginWith, loginAnonymously, writeSessionResult } from './database'
import { subscribeToAuthStateChanged } from './actions'

export const getType = prop('type')

export const typeOfAuthProvider = compose(equals(types.AUTH_PROVIDER), getType)
export const typeOfAuthGuest = compose(equals(types.AUTH_GUEST), getType)
export const typeOfAuthVoid = compose(equals(types.AUTH_VOID_START), getType)
export const typeOfExerciseCompleted = compose(equals(types.EXERCISES_MOVE_EXERCISE_TO_COMPLETED), getType)

const isSessionDoneFactory = (getState) => () => {
    const { exercises: { upcoming, skipped }, auth: { uid } } = getState()
    return sessionDoneSelector({ upcoming, skipped, sessionKey: uid })
}

const saveResultsWithDispatch = (next, getState) => async () => {

    const getUserKey = compose(userKeySelector, getState)
    const { exercises: { completed, sessionKey } } = getState()

    const userKey = getUserKey()
    const data = {
        [sessionKey]: toWritableResults(completed)
    }

    const savedData = await writeSessionResult(userKey, data)

    return next({
        type: types.EXERCISES_SAVED_RESULTS_SUCCESS,
        payload: {
            savedData
        }
    })

}

export function firebase(store) {

    const { dispatch, getState } = store

    subscribeToAuthStateChanged(dispatch)
    return (next) => ({ type, payload = {} }) => {

        const { provider } = payload

        const loginForProvider = (provider) => () => loginWith(provider)
        const checkSessionDone = R.allPass([typeOfExerciseCompleted, isSessionDoneFactory(getState)])

        next({ type, payload })

        const app = R.cond([
            [typeOfAuthProvider, loginForProvider(provider)],
            [typeOfAuthGuest, loginAnonymously],
            [typeOfAuthVoid, logout],
            [checkSessionDone, saveResultsWithDispatch(next, getState)],
            [R.T, () => {}]
        ])

        return app({ type, payload })
    }
}
