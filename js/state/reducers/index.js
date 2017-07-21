import { exerciseSession } from './exerciseSession'
import { githubLocation } from './testReducer'
import { sessions } from './sessionsReducer'
import { workoutStatus } from './workoutStatusReducer'
import { defaults } from './defaultsReducer'

export {
    defaults,
    exerciseSession,
    githubLocation,
    sessions,
    workoutStatus
}

// not sure if we need this file
// all the same import is happening in js/state/reducer.js
