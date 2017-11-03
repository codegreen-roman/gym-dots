import { exercises } from '../exercises.reducer'
import { moveExerciseToCompleted, saveResultsCompleted } from '../../actions'

// todo: move the reducer
import { exercisesOrderChange } from '../../../components/views/activity/preWorkout/manageExerciseList/actions'

describe('exercisesReducer', () => {

    const initialState = {
        sessionKey: '',
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
            sessionKey: '',
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

        const goodResults = [true, true, true, true, true]
        const badResults = [true, true, true, true, false]

        it('should move one exercise from upcoming to completed which was empty', () => {
            const actual = exercises(
                initialState,
                moveExerciseToCompleted('2', goodResults)
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
                moveExerciseToCompleted('2', badResults)
            )

            expect(actual.upcoming.length).toBe(1)
            expect(actual.completed.length).toBe(2)
        })

        it('should move one exercise from upcoming to completed and add allDone prop with true value to it', () => {
            const actual = exercises(
                initialState,
                moveExerciseToCompleted('2', goodResults)
            )

            const { completed, upcoming } = actual
            const [firstCompleted] = completed

            expect(upcoming.length).toBe(2)
            expect(completed.length).toBe(1)
            expect(firstCompleted).toMatchObject({
                exerciseKey: '2',
                allDone: true
            })
        })

        it('should move one exercise from upcoming to completed and add allDone prop with false value to it', () => {
            const actual = exercises(
                initialState,
                moveExerciseToCompleted('2', badResults)
            )

            const { completed: [firstCompleted] } = actual

            expect(firstCompleted).toMatchObject({
                exerciseKey: '2',
                allDone: false
            })
        })

    })

    describe('completing all exercises', () => {

        it('should clear completed, upcoming and skipped', () => {
            const actual = exercises(
                initialState,
                saveResultsCompleted()
            )

            expect(actual.upcoming.length).toBe(0)
            expect(actual.completed.length).toBe(0)
            expect(actual.skipped.length).toBe(0)
        })

    })
})
