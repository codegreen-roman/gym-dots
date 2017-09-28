import { exercisesOrderChange } from '../actions'
import { EXERCISES_ORDER_CHANGE } from '../constants'

describe('Exercises Action Creators', () => {
    describe('.exercisesOrderChange', () => {
        it('should create EXERCISES_ORDER_CHANGE action', () => {
            const expectedAction = {
                type: EXERCISES_ORDER_CHANGE,
                payload: {
                    exercise: {
                        exerciseId: '3',
                        restTime: 90,
                        name: 'Push-ups',
                        sets: 5,
                        reps: 20,
                        weight: 0,
                        results: []
                    }
                }
            }
            expect(
                exercisesOrderChange({
                    exerciseId: '3',
                    restTime: 90,
                    name: 'Push-ups',
                    sets: 5,
                    reps: 20,
                    weight: 0,
                    results: []
                })
            ).toEqual(expectedAction)
        })

        it('should return action with a type of EXERCISES_ORDER_CHANGE', () => {
            expect(
                exercisesOrderChange({
                    exerciseId: '3',
                    restTime: 90,
                    name: 'Push-ups',
                    sets: 5,
                    reps: 20,
                    weight: 0,
                    results: []
                })
            ).toMatchSnapshot()
        })
    })
})
