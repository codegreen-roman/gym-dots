import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { exerciseSession, githubLocation, sessions } from './reducers'

export const reducer = combineReducers({
    exerciseSession,
    githubLocation,
    sessions,
    i18n: i18nReducer
})
