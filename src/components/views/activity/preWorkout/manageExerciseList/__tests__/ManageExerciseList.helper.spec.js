import { toWritableResults, allListsEmpty } from '../ManageExerciseList.helper'
import { notEmpty } from '@utils/helpers'

test('.notMissing returns true or false for strings', () => {
    expect(typeof notEmpty === 'function').toBeTruthy()
    expect(notEmpty('12345')).toBeTruthy()
    expect(notEmpty('')).toBeFalsy()
    expect(notEmpty()).toBeFalsy()
})

test('.allListsEmpty returns true for a list of empty lists', () => {
    expect(typeof allListsEmpty === 'function').toBeTruthy()
    expect(allListsEmpty([[], [], []])).toBeTruthy()
})

test('.allListsEmpty returns false for a list of empty lists and not empty list', () => {
    expect(allListsEmpty([[], [], [1]])).toBeFalsy()
})

test('.toWritableResults returns a freaking structure eatable by firebase', () => {

    const completed = [
        {
            exerciseKey: 'key1',
            restTime: 90,
            name: 'Push-ups',
            sets: 5,
            reps: 20,
            weight: 0,
            allDone: true
        },
        {
            exerciseKey: 'key2',
            restTime: 30,
            name: 'Australian pull-ups',
            sets: 5,
            reps: 12,
            weight: 0,
            allDone: false
        },
        {
            exerciseKey: 'key3',
            restTime: 30,
            name: 'Australian pull-ups',
            sets: 5,
            reps: 12,
            weight: 0,
            allDone: false
        },
        {
            exerciseKey: 'key4',
            restTime: 30,
            name: 'Australian pull-ups',
            sets: 5,
            reps: 12,
            weight: 0,
            allDone: true
        }
    ]

    expect(typeof toWritableResults === 'function').toBeTruthy()
    expect(toWritableResults(completed)).toMatchObject({
        'key1': true,
        'key2': false,
        'key3': false,
        'key4': true
    })
    expect(toWritableResults(completed)).toMatchSnapshot()
})
