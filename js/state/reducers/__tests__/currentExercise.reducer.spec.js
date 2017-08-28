import { currentExercise } from '../currentExercise.reducer'
import { WORKOUT_STATUS, SET_SUCCESSFULLY_COMPLETED, SET_FAILED } from '../../actions/types'

const action = {
    type: WORKOUT_STATUS,
    payload: {
        name: 'Monday Sweat',
        status: 'started',
        restTime: 60,
        sets: 5,
        setsLeft: 5,
        reps: 12,
        weight: 100,
        results: []
    }
}

test('currentExercise returns an object with specific fields', () => {
    const output = currentExercise({}, action)
    expect(output).toEqual(
        expect.objectContaining({
            name: 'Monday Sweat',
            status: 'started',
            restTime: expect.any(Number),
            sets: expect.any(Number),
            setsLeft: expect.any(Number),
            reps: expect.any(Number),
            weight: expect.any(Number),
            results: expect.any(Array)
        })
    )
})

test('currentExercise output matches the snapshot', () => {
    expect(currentExercise({}, action)).toMatchSnapshot()
})

describe('Workout in progress', () => {

    const state = {
        'exerciseKey': '',
        'restTime': 90,
        'name': 'Push-ups',
        'setsLeft': 2,
        'reps': 10,
        'weight': 0,
        sets: 5,
        results: [true, true, true]
    }

    test('registering result : Done', () => {

        const action = {
            type: SET_SUCCESSFULLY_COMPLETED,
            payload: {}
        }
        expect(currentExercise(state, action)).toMatchSnapshot()
    })

    test('registering result : Failed', () => {
        const action = {
            type: SET_FAILED,
            payload: {}
        }
        expect(currentExercise(state, action)).toMatchSnapshot()
    })
})
