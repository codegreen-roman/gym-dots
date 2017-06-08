import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'

const DEFAULT_SESSION = {
    day: 'MON',
    time: new Date()
}

export const exerciseSession = (state = DEFAULT_SESSION, action) => {
    switch (action.type) {
        case 'PING':
            return {
                day: state.day === 'MON' ? 'MONDAY' : 'MON',
                time: new Date()
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    exerciseSession,
    i18n: i18nReducer
})
