export const INITIAL_STATE = {
    sessions: [],
    auth: {},
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
