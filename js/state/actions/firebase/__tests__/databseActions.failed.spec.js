jest.mock('../database', () => ({
    loginWith: () => {
        return new Promise((resolve, reject) => {
            reject({
                code: 1,
                message: 'not logged in'
            })
        })
    }
}))


import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { authWith } from '../databaseActions'
import { START_AUTH, AUTH_ERROR } from '../../types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

    describe('.authWith', () => {

        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('and login failed', () => {

            const expectedActionsForFailedCase = [
                {
                    type: START_AUTH,
                    payload: {}
                },
                {
                    type: AUTH_ERROR,
                    payload: { error: { code: 1, message: 'not logged in' } }
                }
            ]

            it('creates START_AUTH and AUTH_ERROR actions after login in with facebook', (done) => {
                store.dispatch(authWith('facebook'))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActionsForFailedCase)
                        done()
                    })
            })

            it('creates START_AUTH and AUTH_ERROR actions after login in with twitter', (done) => {
                store.dispatch(authWith('twitter'))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActionsForFailedCase)
                        done()
                    })
            })
        })

    })

})
