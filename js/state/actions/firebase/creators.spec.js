/* global expect, describe, beforeAll, beforeEach, fdescribe, it, xit, afterEach */
/* eslint-env jest */

jest.mock('./database')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { loadAppDefaults, subscribeToAppDefaultsChanges, authWith } from './creators'
import { GOT_DEFAULTS, AUTH_SUCCESS, START_AUTH } from './types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

    describe('.authWith', () => {
        const expectedActions = [
            {
                type: START_AUTH,
                payload: {}
            },
            {
                type: AUTH_SUCCESS,
                payload: {
                    user: {
                        displayName: 'Roman',
                        uid: 'zzzzxxxxyyyy'
                    }
                }
            }
        ]

        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('and login is successful', () => {

            it('creates START_AUTH and AUTH_SUCCESS actions after login in with facebook', (done) => {
                store.dispatch(authWith('facebook'))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions)
                        done()
                    })
            })

            it('creates START_AUTH and AUTH_SUCCESS actions after login in with twitter', (done) => {
                store.dispatch(authWith('twitter'))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions)
                        done()
                    })
            })
        })

    })

    describe('.subscribeToAppDefaultsChanges', () => {

        const expectedActions = [
            {
                type: GOT_DEFAULTS,
                payload: {
                    defaults: {
                        restTime: 200,
                        sets: 200
                    }
                }
            }
        ]

        const store = mockStore({ defaults: {} })

        it('creates GOT_DEFAULTS action after subscribing to changes', (done) => {
            subscribeToAppDefaultsChanges(store.dispatch)
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                    done()
                })
        })
    })

    describe('.loadAppDefaults', () => {

        const expectedActions = [
            {
                type: GOT_DEFAULTS,
                payload: {
                    defaults: {
                        restTime: 100,
                        sets: 100
                    }
                }
            }
        ]
        const store = mockStore({ defaults: {} })

        it('creates GOT_DEFAULTS action when loading defaults', (done) => {
            store.dispatch(loadAppDefaults())
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                    done()
                })
        })
    })
})
