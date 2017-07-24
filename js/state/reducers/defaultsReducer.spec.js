import { defaults } from './defaultsReducer'
import { GOT_DEFAULTS } from '../actions/firebase/types'

describe('Defaults reducer', () => {

    const theAction = {
        type: GOT_DEFAULTS,
        payload: {
            defaults: {
                restTime: 100,
                sets: 100
            }
        }
    }

    it('should return nice piece of state having restTime and sets as numbers', () => {
        const state = defaults(undefined, theAction)
        expect(state).toEqual(expect.objectContaining({
            restTime: expect.any(Number),
            sets: expect.any(Number),
        }))
    })

    describe('with action not of this type', () => {

        const initialState = {
            restTime: 0,
            sets: 0
        }

        const otherAction = {
            type: 'OTHER',
            payload: {}
        }

        it('should return the initial state', () => {
            const state = defaults(initialState, otherAction)
            expect(state).toEqual(expect.objectContaining({
                restTime: 0,
                sets: 0,
            }))
        })
    })
})
