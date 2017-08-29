import { compose, ifElse, isNil } from 'ramda'
import {
    GOT_DEFAULTS,
    GOT_ERROR_LOADING_DEFAULTS,
    AUTH_START,
    AUTH_VOID_START,
    AUTH_ERROR,
    AUTH_VOID,
    AUTH_SUCCESS,
    EXERCISES_FETCHING_SUCCESS,
    EXERCISES_FETCHING_ERROR
} from '../types'
import { getVal } from './databaseActions.helper'

import { saveResultsCompleted, saveResultsFailed } from '../exercisesActions'
import { defaultsRef, loadNextSessionForUser, loginWith, loginAnonymously, logout, auth, writeSessionResult } from './database'

const gotAppDefaults = defaults => ({
    type: GOT_DEFAULTS,
    payload: {
        defaults
    }
})

const gotErrorLoadingDefaults = error => ({
    type: GOT_ERROR_LOADING_DEFAULTS,
    payload: {
        error
    }
})

const startingAuth = (provider) => ({
    type: AUTH_START,
    payload: {
        provider
    }
})

const startingLogout = () => ({
    type: AUTH_VOID_START,
    payload: {}
})

const gotErrorWhileAuth = ({ code, message, email, credential }) => ({
    type: AUTH_ERROR,
    payload: { code, message, email, credential }
})

const authSuccess = ({ user }) => ({
    type: AUTH_SUCCESS,
    payload: { user }
})

const authVoid = () => ({
    type: AUTH_VOID,
    payload: {}
})

const exercisesFetchingSuccess = nextSession => ({
    type: EXERCISES_FETCHING_SUCCESS,
    payload: {
        nextSession
    }
})

const exercisesFetchingError = error => ({
    type: EXERCISES_FETCHING_ERROR,
    payload: {
        error
    }
})

const dispatcher = dispatch => compose(dispatch, gotAppDefaults)

export const authWith = (provider) => {
    return function (dispatch) {

        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingAuth(provider))
        return loginWith(provider)
            .catch(passError)
    }
}

export const authAnonymously = () => {
    return function (dispatch) {

        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingAuth('guest'))
        return loginAnonymously()
            .catch(passError)
    }
}

export const authVoidAction = () => {
    return function (dispatch) {

        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingLogout())
        return logout()
            .catch(passError)
    }
}

export const loadAppDefaults = () => {
    return function (dispatch) {

        const fireAction = dispatcher(dispatch)
        const fireErrorAction = compose(dispatch, gotErrorLoadingDefaults)

        return defaultsRef
            .once('value', snap => {
                const defaults = snap.val()
                fireAction(defaults)
            })
            .catch(fireErrorAction)
    }
}


// https://firebase.google.com/docs/reference/js/firebase.database.Reference
export const subscribeToAppDefaultsChanges = dispatch => {
    const fireAction = dispatcher(dispatch)
    return new Promise(resolve => {
        defaultsRef
            .on('value', snap => {
                const defaults = snap.val()
                fireAction(defaults)
                resolve(defaults)
            })
    })
}

export const subscribeToAuthStateChanged = dispatch => {

    const passUser = compose(dispatch, authSuccess)
    const loggedOut = compose(dispatch, authVoid)

    dispatch(startingAuth('guest'))

    return new Promise(resolve => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                passUser({ user })
                loadNextSession(user.uid)(dispatch)
                resolve({ user })
            } else {
                loggedOut()
                resolve()
            }
        })
    })
}

export const loadNextSession = (userKey) => dispatch => {

    const fetchSuccess = compose(dispatch, exercisesFetchingSuccess, getVal)
    const fetchError = compose(dispatch, exercisesFetchingError)
    const doNothingForNoValueOrFetch = ifElse(
        compose(isNil, getVal),
        () => {},
        fetchSuccess
    )

    return loadNextSessionForUser(userKey)
        .then(doNothingForNoValueOrFetch)
        .catch(fetchError)
}

export const saveExercisesResults = (userKey, data) => {
    return function (dispatch) {

        const saveFailed = compose(dispatch, saveResultsFailed)
        const saveSuccess = () => compose(dispatch, saveResultsCompleted)(data)

        return writeSessionResult(userKey, data)
            .then(saveSuccess)
            .catch(saveFailed)
    }
}
