import { currentExercise } from '../currentExerciseReducer'
import { WORKOUT_STATUS } from '../../actions/types'

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
    expect(output).toEqual(expect.objectContaining({
        name: 'Monday Sweat',
        status: 'started',
        restTime: expect.any(Number),
        sets: expect.any(Number),
        setsLeft: expect.any(Number),
        reps: expect.any(Number),
        weight: expect.any(Number),
        results: expect.any(Array)
    }))

})

test('currentExercise output matches the snapshot', () => {
    expect(currentExercise({}, action)).toMatchSnapshot()
})
