import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { exerciseSession, githubLocation, sessions, workoutStatus } from './reducers'

export const reducer = combineReducers({
    exerciseSession,
    githubLocation,
    sessions,
    workoutStatus,
    i18n: i18nReducer
})
