import { combineReducers } from 'redux'
import { i18nReducer as i18n } from 'react-redux-i18n'
import { workoutStatus } from './reducers/workoutStatus.reducer'
import { auth } from './reducers/auth.reducer'
import { exercises } from './reducers/exercises.reducer'
import { currentExercise } from './reducers/currentExercise.reducer'

export const reducer = combineReducers({
    exercises,
    workoutStatus,
    auth,
    i18n,
    currentExercise
})
