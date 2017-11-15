import { types } from '../../../state/common/constants'

export const authWith = provider => dispatch =>
    dispatch({
        type: types.AUTH_PROVIDER,
        payload: {
            provider
        }
    })

export const authAnonymously = () => dispatch =>
    dispatch({
        type: types.AUTH_GUEST,
        payload: {}
    })
