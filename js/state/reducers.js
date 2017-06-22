import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'

const DEFAULT_SESSION = {
    day: 'MONDAY'
}

export const exerciseSession = (state = DEFAULT_SESSION, action) => {
    switch (action.type) {
        case 'PING':

            if (action.payload.day === state.day) {
                return state
            }

            return {
                day: action.payload.day
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    exerciseSession,
    i18n: i18nReducer
})
