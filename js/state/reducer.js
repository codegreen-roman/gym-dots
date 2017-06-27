import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { exerciseSession, githubLocation } from './reducers'

export const reducer = combineReducers({
    exerciseSession,
    githubLocation,
    i18n: i18nReducer
})
