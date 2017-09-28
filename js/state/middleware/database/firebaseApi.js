import { types } from '../../'
import { subscribeToAuthStateChanged, authWith, authVoidAction, authAnonymously } from './actions'

export function firebase(store) {

    const { dispatch } = store

    subscribeToAuthStateChanged(dispatch)

    return (next) => (action) => {

        switch (action.type) {
            case types.AUTH_START:
                return action.payload.provider === 'guest' ? dispatch(authAnonymously(action.payload.provider)) : dispatch(authWith(action.payload.provider))
            case types.AUTH_VOID_START:
                return dispatch(authVoidAction())
            default:
                return next(action)
        }

    }

}
