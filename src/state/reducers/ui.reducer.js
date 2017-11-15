import { types } from '../common/constants'

const uiState = {
    isSideMenuOpen: false
}

export const uiReducer = (state = uiState, payload) => {
    switch (payload.type) {
        case types.UI_SIDEMENU_TOGGLE:
            return {...state, isSideMenuOpen: !state.isSideMenuOpen }
        default:
            return state
    }
}
