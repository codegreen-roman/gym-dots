/* global expect, describe, beforeAll, beforeEach, fdescribe, it, xit */
/* eslint-env jest */

jest.mock('./database')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { loadAppDefaults, subscribeToAppDefaultsChanges } from './creators'
import { GOT_DEFAULTS } from './types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

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
