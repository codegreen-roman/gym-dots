export const INITIAL_STATE = {
    auth: {
        status: 'loggedOut', // 'inProgress', 'loggedIn'
    },
    workoutStatus: 'notStarted', // 'starting', 'started', 'paused', 'completed', 'aborted'
    currentExercise: {},
    exercises: {
        sessionKey: '',
        name: '',
        upcoming: [],
        skipped: [],
        completed: [],
    },
    stats: {}
}
