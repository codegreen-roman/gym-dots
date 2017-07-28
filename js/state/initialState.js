export const INITIAL_STATE = {
    sessions: [],
    auth: {},
    defaults: {},
    workoutStatus: 'notStarted', // 'starting', 'started', 'paused', 'completed', 'aborted'
    currentExercise: {
        status: 'notStarted' // 'started', 'resting'
    },
    stats: {},
    exercises: {
        sessionId: '',
        current: [
            {
                'exerciseId': '',
                'restTime': 60,
                'name': 'Pull-up',
                'setsLeft': 5,
                'reps': 8,
                'weight': 0,
                'results': []
            }
        ],
        upcoming: [
            {
                'exerciseId': '',
                'restTime': 90,
                'name': 'Push-ups',
                'setsLeft': 5,
                'reps': 20,
                'weight': 0,
                'results': []
            },
            {
                'exerciseId': '',
                'restTime': 30,
                'name': 'Australian pull-ups',
                'setsLeft': 5,
                'reps': 12,
                'weight': 0,
                'results': []
            }
        ],
        skipped: [],
        completed: [],
    }
}
