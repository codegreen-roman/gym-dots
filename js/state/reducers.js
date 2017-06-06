import { combineReducers } from 'redux'

const DEFAULT_SESSION = {
    day: 'MON'
}

export const exerciseSession = (state = DEFAULT_SESSION, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const reducer = combineReducers({
    exerciseSession
})
