import { exerciseSession } from './exerciseSession'
import { githubLocation } from './testReducer'
import { sessions } from './sessionsReducer'
import { workoutStatus } from './workoutStatusReducer'
import { defaults } from './defaultsReducer'
import { auth } from './authReducer'

export {
    defaults,
    exerciseSession,
    githubLocation,
    sessions,
    workoutStatus,
    auth
}

// not sure if we need this file
// all the same import is happening in js/state/reducer.js
