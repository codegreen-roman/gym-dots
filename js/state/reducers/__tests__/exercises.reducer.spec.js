import { exercises } from '../exercises.reducer'
import { exercisesOrderChange, moveExerciseToCompleted } from '../../actions'

describe('exercisesReducer', () => {

    const initialState = {
        sessionId: '',
        upcoming: [
            { exerciseKey: '1' },
            { exerciseKey: '2' },
            { exerciseKey: '3' }
        ],
        skipped: [],
        completed: []
    }

    it('should change order of upcoming exercises', () => {

        const resultingState = {
            sessionId: '',
            upcoming: [
                { exerciseKey: '2' },
                { exerciseKey: '1' },
                { exerciseKey: '3' }
            ],
            skipped: [],
            completed: []
        }

        const newState = exercises(
            initialState,
            exercisesOrderChange({ exerciseKey: '2' })
        )
        expect(newState).toEqual(resultingState)
    })

    it('should return the state when not affected', () => {
        const initialState = {
            exercises: {
                sessionId: '',
                upcoming: [],
                skipped: [],
                completed: []
            }
        }

        const action = { type: 'DEFAULT' }
        const newState = exercises(initialState, action)
        expect(newState).toEqual(initialState)
    })

    describe('moving the exercise from upcoming to completed', () => {

        it('should move one exercise from upcoming to completed which was empty', () => {
            const actual = exercises(
                initialState,
                moveExerciseToCompleted('2')
            )

            expect(actual.upcoming.length).toBe(2)
            expect(actual.completed.length).toBe(1)
        })

        it('should move one exercise from upcoming to completed which was not empty', () => {

            const initialState = {
                sessionId: '',
                upcoming: [
                    { exerciseKey: '2' },
                    { exerciseKey: '3' }
                ],
                skipped: [],
                completed: [
                    { exerciseKey: '1' },
                ]
            }

            const actual = exercises(
                initialState,
                moveExerciseToCompleted('2')
            )

            expect(actual.upcoming.length).toBe(1)
            expect(actual.completed.length).toBe(2)
        })

    })
})
