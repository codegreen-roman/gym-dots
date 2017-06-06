import { combineReducers } from 'redux'

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
    exerciseSession
})
