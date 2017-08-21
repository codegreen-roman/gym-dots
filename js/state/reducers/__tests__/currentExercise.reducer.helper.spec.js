import { WORKOUT_STATUS, SET_SUCCESSFULLY_COMPLETED, SET_FAILED } from '../../actions/types'

import {
    fillMissingFields,
    getCurrentExerciseData,
    addDone,
    addFailed,
    getType,
    typeOfWorkoutStatus,
    typeOfSetCompleted,
    typeOfSetFailed,
    processResultWith
} from '../currentExercise.reducer.helper'

test('.fillMissingFields', () => {
    const initialObj = {
        'exerciseId': '',
        'restTime': 90,
        'name': 'Push-ups',
        'sets': 15,
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

test('.getCurrentExerciseData', () => {
    const action = {
        type: '',
        payload: {
            status: 'notStarted',
            'exerciseId': '',
            'restTime': 60,
            'name': 'Pull-up',
            'sets': 5,
            'reps': 8,
            'weight': 0,
            'results': []
        }
    }

    const actual = getCurrentExerciseData(action)

    expect(actual).toMatchObject({
        status: 'notStarted',
        'exerciseId': '',
        'restTime': 60,
        'name': 'Pull-up',
        'setsLeft': 5,
        'reps': 8,
        'weight': 0,
        sets: 5,
        results: []
    })
})

test('.addDone', () => {
    const initialList = [true, true, false]
    const actual = addDone(initialList)

    expect(actual).toMatchObject([true, true, false, true])
})

test('.addFailed', () => {
    const initialList = [true, true, true]
    const actual = addFailed(initialList)

    expect(actual).toMatchObject([true, true, true, false])
})

test('.getType', () => {
    const action = {
        type: 'test',
        payload: {}
    }
    const actual = getType(action)

    expect(actual).toBe('test')
})

describe('type selectors', () => {
    test('.typeOfWorkoutStatus', () => {
        const action = {
            type: WORKOUT_STATUS,
            payload: {}
        }

        expect(typeOfWorkoutStatus(action)).toBeTruthy()
    })

    test('.typeOfSetCompleted', () => {
        const action = {
            type: SET_SUCCESSFULLY_COMPLETED,
            payload: {}
        }

        expect(typeOfSetCompleted(action)).toBeTruthy()
    })

    test('.typeOfSetFailed', () => {
        const action = {
            type: SET_FAILED,
            payload: {}
        }

        expect(typeOfSetFailed(action)).toBeTruthy()
    })
})

describe('.processResultWith', () => {

    const initial = {
        'exerciseId': '',
        'restTime': 90,
        'name': 'Push-ups',
        'setsLeft': 3,
        'reps': 10,
        'weight': 0,
        sets: 5,
        results: [true, true]
    }

    test('using addDone', () => {
        const actual = processResultWith(addDone)(initial)

        expect(actual)
            .toMatchObject({
                'exerciseId': '',
                'restTime': 90,
                'name': 'Push-ups',
                'setsLeft': 2,
                'reps': 10,
                'weight': 0,
                sets: 5,
                results: [true, true, true]
            })
    })

    test('using addFailed', () => {
        const actual = processResultWith(addFailed)(initial)

        expect(actual)
            .toMatchObject({
                'exerciseId': '',
                'restTime': 90,
                'name': 'Push-ups',
                'setsLeft': 2,
                'reps': 10,
                'weight': 0,
                sets: 5,
                results: [true, true, false]
            })
    })

})
