import { exercisesOrderChange } from '../exercisesActions'
import { EXERCISES_ORDER_CHANGE } from '../types'

describe('exercises actions', () => {
    it('exercisesOrderChange should create EXERCISES_ORDER_CHANGE action', () => {
        const expectedAction = {
            type: EXERCISES_ORDER_CHANGE,
            payload: {
                exercise: {
                    exerciseId: '3'
                }
            }
        }
        expect(exercisesOrderChange({exerciseId:'3'})).toEqual(expectedAction)
    })
})
