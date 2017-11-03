import { WORKOUT_STATUS } from './common/workoutStatus'

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
