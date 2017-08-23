export const INITIAL_STATE = {
    sessions: [],
    auth: {
        status: 'loggedOut', // 'inProgress', 'loggedIn'
    },
    defaults: {},
    workoutStatus: 'notStarted', // 'starting', 'started', 'paused', 'completed', 'aborted'
    currentExercise: {
    },
    stats: {},
    exercises: {
        sessionId: '',
        name: '',
        upcoming: [],
        skipped: [],
        completed: [],
    }
}
