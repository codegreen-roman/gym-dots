import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { exerciseSession } from './reducers/exerciseSession.reducer'
import { sessions } from './reducers/sessions.reducer'
import { workoutStatus } from './reducers/workoutStatus.reducer'
import { defaults } from './reducers/defaults.reducer'
import { auth } from './reducers/auth.reducer'
import { exercises } from './reducers/exercises.reducer'
import { currentExercise } from './reducers/currentExercise.reducer'

export const reducer = combineReducers({
    exercises: exercises,
    exerciseSession,
    sessions,
    workoutStatus,
    defaults,
    auth,
    i18n: i18nReducer,
    currentExercise
})
