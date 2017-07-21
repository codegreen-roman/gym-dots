import { compose } from 'ramda'
import { GOT_DEFAULTS, GOT_ERROR_LOADING_DEFAULTS, START_AUTH, AUTH_ERROR, AUTH_SUCCESS } from './types'
import { defaultsRef, loginWith } from './database'

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

const dispatcher = dispatch => compose(dispatch, gotAppDefaults)

export const authWith = provider => {
    return function (dispatch) {

        const passUser = compose(dispatch, authSuccess)

        dispatch(startingAuth())
        return loginWith(provider)
            .then(passUser)
            .catch(gotErrorWhileAuth)
    }
}

export const loadAppDefaults = () => {
    return function (dispatch) {
        const fireAction = dispatcher(dispatch)
        return defaultsRef
            .once('value', snap => {
                const defaults = snap.val()
                fireAction(defaults)
            })
            .catch(gotErrorLoadingDefaults)
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
