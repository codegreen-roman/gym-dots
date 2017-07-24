import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { exerciseSession } from './reducers/exerciseSession'
import { sessions } from './reducers/sessionsReducer'
import { workoutStatus } from './reducers/workoutStatusReducer'
import { defaults } from './reducers/defaultsReducer'
import { auth } from './reducers/authReducer'

export const reducer = combineReducers({
    exerciseSession,
    sessions,
    workoutStatus,
    defaults,
    auth,
    i18n: i18nReducer
})
