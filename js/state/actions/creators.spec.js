import { ping, startWorkout, setStartedWorkout, loadLocationStart } from './creators'

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

})
