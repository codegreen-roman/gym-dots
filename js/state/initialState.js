import { WORKOUT_STATUS } from './constants'

export const INITIAL_STATE = {
    auth: {
        status: 'loggedOut', // 'inProgress', 'loggedIn'
    },
    workoutStatus: WORKOUT_STATUS.notStarted,
    currentExercise: {},
    exercises: {
        sessionKey: '',
        name: '',
        upcoming: [],
        skipped: [],
        completed: [],
    }
    // stats: {}
}
