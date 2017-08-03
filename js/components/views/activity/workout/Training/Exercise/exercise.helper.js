import { date } from 'faker'

export function fakeExercise() {
    return {
        name: date.weekday(),
        status: 'started',
        restTime: 60,
        sets: 5,
        setsLeft: 5,
        reps: 12,
        weight: 100,
        results: []
    }
}
