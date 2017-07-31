import { exercises } from '../exercisesReducer'
import { exercisesOrderChange } from '../../actions'


describe('exercisesReducer', () => {

    it('should change order of upcoming exercises', () => {

        const initialState = {
            sessionId: '',
            upcoming: [
                {exerciseId:'1'},
                {exerciseId:'2'},
                {exerciseId:'3'}
            ],
            skipped: [],
            completed: [],
        }

        const resultingState = {
            sessionId: '',
            upcoming: [
                {exerciseId:'2'},
                {exerciseId:'1'},
                {exerciseId:'3'}
            ],
            skipped: [],
            completed: [],
        }

        const newState = exercises(initialState, exercisesOrderChange({exerciseId:'2'}))
        expect(newState).toEqual(resultingState)
    })

    it('should return the state when not affected', () => {

        const initialState = {
            exercises: {
                sessionId: '',
                upcoming: [],
                skipped: [],
                completed: [],
            }
        }

        const action = { type: 'DEFAULT' }
        const newState = exercises(initialState, action)
        expect(newState).toEqual(initialState)
    })
})
