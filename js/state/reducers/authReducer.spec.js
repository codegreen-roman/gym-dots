/* global expect, describe, beforeAll, beforeEach, fdescribe, it, xit */
/* eslint-env jest */

import { auth } from './authReducer'
import { AUTH_SUCCESS } from '../actions/firebase/types'

describe('Auth reducer', () => {

    const theAction = {
        type: AUTH_SUCCESS,
        payload: {
            user: {
                displayName: 'Roman',
                uid: 'someUidx3'
            }
        }
    }

    it('should return nice piece of state including auth object', () => {
        const state = auth(undefined, theAction)
        expect(state).toEqual(expect.objectContaining({
            user: {
                displayName: expect.any(String),
                uid: expect.any(String),
            }
        }))
    })

    describe('with action not of this type', () => {

        const initialState = {
            auth: {
                user: {
                    displayName: 'Roman',
                    uid: 'someUidx3'
                }
            }
        }

        const otherAction = {
            type: 'OTHER',
            payload: {}
        }

        it('should return the initial state', () => {
            const state = auth(initialState, otherAction)
            expect(state).toEqual(expect.objectContaining({
                auth: {
                    user: {
                        displayName: 'Roman',
                        uid: 'someUidx3',
                    }
                }
            }))
        })
    })
})
