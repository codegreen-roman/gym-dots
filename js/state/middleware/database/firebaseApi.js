/* eslint no-unused-vars: off */
/* eslint no-console: off */

import { types } from '../../'

import R, { prop, compose, equals } from 'ramda'
import { logout, loginWith, loginAnonymously } from './database'
import { subscribeToAuthStateChanged } from './actions'

export const getType = prop('type')

export const typeOfAuthProvider = compose(equals('FBASE:AUTH_PROVIDER'), getType)
export const typeOfAuthGuest = compose(equals('FBASE:AUTH_GUEST'), getType)
export const typeOfAuthVoid = compose(equals('FBASE:AUTH_VOID_START'), getType)

export function firebase(store) {

    const { dispatch } = store

    subscribeToAuthStateChanged(dispatch)

    return (next) => ({ type, payload = {} }) => {

        const { provider } = payload
        const loginForProvider = (provider) => () => loginWith(provider)

        next({ type, payload })

        const app = R.cond([
            [typeOfAuthProvider, loginForProvider(provider)],
            [typeOfAuthGuest, loginAnonymously],
            [typeOfAuthVoid, logout],
            [R.T, () => {}]
        ])

        app({ type, payload })
    }
}
