import { types } from '../../'
import { subscribeToAuthStateChanged, authWith, authVoidAction, authAnonymously } from './actions'

export function firebase(store) {

    const { dispatch } = store

    subscribeToAuthStateChanged(dispatch)

    return (next) => (action) => {

        switch (action.type) {
            case types.AUTH_START:
                console.log('I am in the middleware')
                action.payload.provider === 'guest' ? dispatch(authAnonymously(action.payload.provider)) : dispatch(authWith(action.payload.provider))
                return next(action)
            case types.AUTH_VOID_START:
                dispatch(authVoidAction())
                return next(action)
            default:
                return next(action)
        }

    }

}
