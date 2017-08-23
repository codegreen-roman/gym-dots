jest.mock('../database', () => ({
    loginWith: () => {
        return new Promise((resolve, reject) => {
            reject({
                code: 1,
                message: 'not logged in',
                credential: {},
                email: 'neoroma@gmail.com',
            })
        })
    }
}))

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { authWith } from '../databaseActions'
import { AUTH_START, AUTH_ERROR } from '../../types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

    const errorPayload = {
        code: 1,
        message: 'not logged in',
        credential: {},
        email: 'neoroma@gmail.com',
    }

    describe('.authWith', () => {

        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('and login failed', () => {

            it('creates START_AUTH and AUTH_ERROR actions after login in with facebook', (done) => {

                const expectedActionsForFailedCase = [
                    {
                        type: AUTH_START,
                        payload: {
                            provider: 'facebook'
                        }
                    },
                    {
                        type: AUTH_ERROR,
                        payload: errorPayload
                    }
                ]

                store.dispatch(authWith('facebook'))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActionsForFailedCase)
                        done()
                    })
            })

            it('creates START_AUTH and AUTH_ERROR actions after login in with twitter', (done) => {

                const expectedActionsForFailedCase = [
                    {
                        type: AUTH_START,
                        payload: {
                            provider: 'twitter'
                        }
                    },
                    {
                        type: AUTH_ERROR,
                        payload: errorPayload
                    }
                ]

                store.dispatch(authWith('twitter'))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActionsForFailedCase)
                        done()
                    })
            })
        })

    })

})
