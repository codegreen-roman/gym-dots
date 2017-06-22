import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { exerciseSession } from './reducers'

export const reducer = combineReducers({
    exerciseSession,
    i18n: i18nReducer
})
