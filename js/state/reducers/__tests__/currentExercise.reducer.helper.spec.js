import { fillMissingFields } from '../currentExercise.reducer.helper'

test('.fillMissingFields', () => {
    const initialObj = {
        'exerciseId': '',
        'restTime': 90,
        'name': 'Push-ups',
        'setsLeft': 15,
        'reps': 20,
        'weight': 0
    }

    const actual = fillMissingFields(initialObj)

    expect(actual).toMatchObject({
        'exerciseId': '',
        'restTime': 90,
        'name': 'Push-ups',
        'setsLeft': 15,
        'reps': 20,
        'weight': 0,
        sets: 15,
        results: []
    })
})
