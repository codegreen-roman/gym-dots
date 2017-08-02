import { compose } from 'ramda'
import {
    GOT_DEFAULTS,
    GOT_ERROR_LOADING_DEFAULTS,
    START_AUTH,
    AUTH_ERROR,
    AUTH_SUCCESS,
    EXERCISES_FETCHING_SUCCESS,
    EXERCISES_FETCHING_ERROR
} from '../types'

import { defaultsRef, nextRef, loginWith } from './database'

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

const startingAuth = () => ({
    type: START_AUTH,
    payload: {}
})

const gotErrorWhileAuth = error => ({
    type: AUTH_ERROR,
    payload: {
        error
    }
})

const authSuccess = user => ({
    type: AUTH_SUCCESS,
    payload: {
        user
    }
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

export const authWith = provider => {
    return function (dispatch) {

        const passUser = compose(dispatch, authSuccess)
        const passError = compose(dispatch, gotErrorWhileAuth)

        dispatch(startingAuth())
        return loginWith(provider)
            .then(passUser)
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
