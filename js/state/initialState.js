export const INITIAL_STATE = {
    sessions: [],
    workoutName: 'Monday',
    workoutStatus: 'notStarted',
    exercises: {
        upcoming: [
            {
                'restTime': 90,
                'name': 'Push-ups',
                'setsLeft': 5,
                'reps': 20,
                'weight': 0,
                'results': []
            },
            {
                'restTime': 60,
                'name': 'Pull-up',
                'setsLeft': 5,
                'reps': 8,
                'weight': 0,
                'results': []
            },
            {
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
