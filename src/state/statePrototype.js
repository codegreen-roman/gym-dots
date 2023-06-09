export const INITIAL_STATE = {
    sessions: [],
    auth: {
        uid: 'C2NO2n89PQOwRDs2o5u6HkeDl5v1'
    },
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
        sessionKey: '',
        name: '',
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
