import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startWorkout,
    setStartedWorkout,
    startWorkoutWithCountdown
} from '../creators'

const mockStore = configureMockStore([thunk])

describe('General Creators', () => {

    describe('.startWorkout', () => {
        it('should return action with a type of WORKOUT_STATUS', () => {
            expect(startWorkout()).toMatchSnapshot()
        })
    })

    describe('.setStartedWorkout', () => {
        it('should return action with a type of WORKOUT_STATUS', () => {
            expect(setStartedWorkout()).toMatchSnapshot()
        })
    })

    describe('.startWorkoutWithCountdown', () => {

        const store = mockStore({ defaults: {} })

        it('creates 2 WORKOUT_STATUS actions when dispatching', (done) => {

            const promise = store.dispatch(startWorkoutWithCountdown())

            jest.runAllTimers()

            promise.then(() => {
                expect(store.getActions()).toMatchSnapshot()
                done()
            })
        })
    })
})
