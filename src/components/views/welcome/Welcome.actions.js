import { types } from '../../../state/common/constants'

export const authWith = (provider) => ({
    type: types.AUTH_PROVIDER,
    payload: {
        provider
    }
})

export const authAnonymously = () => ({
    type: types.AUTH_GUEST,
    payload: {}
})
