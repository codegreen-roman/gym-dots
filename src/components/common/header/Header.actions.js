import { types } from '../../../state'

export const doLoginWithProvider = (provider) => ({
    type: types.AUTH_START,
    payload: {
        provider
    }
})
export const doLoginWithGuest = () => doLoginWithProvider('guest')

export const doLogout = () => ({
    type: types.AUTH_VOID_START,
    payload: {}
})

export const sideMenuToggle = (payload = {}) => ({
    type: types.UI_SIDEMENU_TOGGLE,
    payload
})
