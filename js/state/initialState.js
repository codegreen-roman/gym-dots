export const INITIAL_STATE = {
    sessions: [],
    auth: {},
    defaults: {},
    workoutStatus: 'notStarted', // 'starting', 'started', 'paused', 'completed', 'aborted'
    currentExercise: {
        status: 'notStarted', // 'started', 'resting'
        'exerciseId': '',
        'restTime': 60,
        'name': 'Pull-up',
        'setsLeft': 5,
        'reps': 8,
        'weight': 0,
        'results': []
    },
    stats: {},
    exercises: {
        sessionId: '',
        upcoming: [],
        skipped: [],
        completed: [],
    }
}
