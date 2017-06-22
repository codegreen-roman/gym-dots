import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'

const DEFAULT_SESSION = {
    day: 'MON'
}

export const exerciseSession = (state = DEFAULT_SESSION, action) => {
    switch (action.type) {
        case 'PING':
            return {
                day: state.day === 'MON' ? 'MONDAY' : 'MON'
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    exerciseSession,
    i18n: i18nReducer
})
