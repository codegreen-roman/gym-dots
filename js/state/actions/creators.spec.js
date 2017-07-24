import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    ping,
    startWorkout,
    setStartedWorkout,
    loadLocationStart,
    startWorkoutWithCountdown,
    loadLocationForUsername
} from './creators'

const mockStore = configureMockStore([thunk])

describe('General Creators', () => {

    describe('.ping', () => {
        it('should return action with a type of PING', () => {
            expect(ping({
                payload: {
                    data: 2
                }
            })).toMatchSnapshot()
        })
    })

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

    describe('.loadLocationStart', () => {
        it('should return action with a type of GET_LOCATION_START', () => {
            expect(loadLocationStart()).toMatchSnapshot()
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

    describe('.loadLocationForUsername', () => {

        const store = mockStore({ defaults: {} })

        it('creates GET_LOCATION_START and GET_LOCATION actions when dispatching', (done) => {

            const promise = store.dispatch(loadLocationForUsername())

            jest.runAllTimers()

            promise.then(() => {
                expect(store.getActions()).toMatchSnapshot()
                done()
            })
        })
    })

})
