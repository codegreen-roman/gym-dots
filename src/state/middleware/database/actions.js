import { compose, ifElse, isNil } from 'ramda'
import { types } from '../../'
import { getVal } from './actions.helper'
import { push } from 'react-router-redux'

const {
    AUTH_SUCCESS,
    AUTH_VOID,
    EXERCISES_FETCHING_ERROR,
    EXERCISES_FETCHING_SUCCESS
} = types

import { auth, loadNextSessionForUser } from './database'

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

export const subscribeToAuthStateChanged = dispatch => {

    const passUser = compose(dispatch, authSuccess)
    // const navigateHome = compose(dispatch, push('/'))
    const loggedOut = compose(dispatch, authVoid)

    return new Promise(resolve => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                passUser({ user })
                loadNextSession(user.uid)(dispatch)
                resolve({ user })
            } else {
                loggedOut()
                dispatch(push('/'))
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
        () => {
        },
        fetchSuccess
    )

    return loadNextSessionForUser(userKey)
        .then(doNothingForNoValueOrFetch)
        .catch(fetchError)
}
