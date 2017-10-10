/* eslint no-unused-vars: off */
/* eslint no-console: off */

import { types } from '../../'

import R from 'ramda'
import { logout, loginWith, loginAnonymously } from './database'
import { subscribeToAuthStateChanged } from './actions'

export function firebase(store) {

    const { dispatch } = store

    subscribeToAuthStateChanged(dispatch)

    return (next) => ({ type, payload }) => {

        next({ type, payload })

        if (R.startsWith('FBASE:')(type)) {
            if (type === 'FBASE:AUTH_PROVIDER') {
                loginWith(payload.provider)
            }

            if (type === 'FBASE:AUTH_GUEST') {
                loginAnonymously()
            }

            if (type === 'FBASE:AUTH_VOID_START') {
                logout()
            }
        }
    }
}
