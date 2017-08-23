import { compose } from 'ramda'
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

import { defaultsRef, nextRef, loginWith, loginAnonymously, logout, auth } from './database'

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

const authSuccess = ({ user, accessToken }) => ({
    type: AUTH_SUCCESS,
    payload: { user, accessToken }
})

const authVoid = () => ({
    type: AUTH_VOID,
    payload: {}
})

const exercisesFetchingSuccess = exercises => ({
    type: EXERCISES_FETCHING_SUCCESS,
    payload: {
        exercises
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

        const passUser = compose(dispatch, authSuccess)
        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingAuth(provider))
        return loginWith(provider)
            .then(passUser)
            .catch(passError)
    }
}

export const authAnonymously = () => {
    return function (dispatch) {

        const passUser = compose(dispatch, authSuccess)
        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingAuth('guest'))
        return loginAnonymously()
            .then(passUser)
            .catch(passError)
    }
}

export const authVoidAction = () => {
    return function (dispatch) {

        const loggedOut = compose(dispatch, authVoid)
        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingLogout())
        return logout()
            .then(loggedOut)
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
                resolve({ user })
            } else {
                loggedOut()
                resolve()
            }
        })
    })
}

export const fetchExercises = () => dispatch => {
    const fetchSuccess = compose(dispatch, exercisesFetchingSuccess)
    const fetchError = compose(dispatch, exercisesFetchingError)

    return nextRef
        .once('value', snap => {
            const next = snap.val()
            fetchSuccess(next)
        })
        .catch(fetchError)
}
