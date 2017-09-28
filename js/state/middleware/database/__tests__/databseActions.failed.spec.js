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
    },
    writeSessionResult: () => {
        return new Promise((resolve, reject) => reject())
    }
}))

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { authWith, saveExercisesResults } from '../database/databaseActions'
import { AUTH_START, AUTH_ERROR, EXERCISES_SAVED_RESULTS_FAILED } from '../../types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

    const errorPayload = {
        code: 1,
        message: 'not logged in',
        credential: {},
        email: 'neoroma@gmail.com',
    }

    describe('.saveExercisesResults', () => {
        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('saving results failed', () => {
            const data = {
                ref: false
            }

            const userKey = 'C2NO2n89PQOwRDs2o5u6HkeDl5v1'

            const expectedActions = [
                {
                    type: EXERCISES_SAVED_RESULTS_FAILED,
                    payload: {}
                }
            ]
            const store = mockStore({})

            it('creates EXERCISES_SAVED_RESULTS_SUCCESS action', done => {
                store.dispatch(saveExercisesResults(userKey, data)).then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                    done()
                })
            })
        })
    })

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
