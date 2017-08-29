import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    loadAppDefaults,
    subscribeToAppDefaultsChanges,
    authWith,
    saveExercisesResults
} from '../databaseActions'
import {
    GOT_DEFAULTS,
    AUTH_START,
    EXERCISES_SAVED_RESULTS_SUCCESS
} from '../../types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

    describe('.authWith', () => {

        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('and login is successful', () => {
            it('creates START_AUTH actions after login in with facebook', done => {

                const expectedActions = [
                    {
                        type: AUTH_START,
                        payload: {
                            provider: 'facebook'
                        }
                    }
                ]

                store.dispatch(authWith('facebook')).then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                    done()
                })
            })

            it('creates START_AUTH actions after login in with twitter', done => {

                const expectedActions = [
                    {
                        type: AUTH_START,
                        payload: {
                            provider: 'twitter'
                        }
                    }
                ]

                store.dispatch(authWith('twitter')).then(() => {
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

        it('creates GOT_DEFAULTS action after subscribing to changes', done => {
            const promise = subscribeToAppDefaultsChanges(store.dispatch)

            jest.runAllTimers()

            promise.then(() => {
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

        it('creates GOT_DEFAULTS action when loading defaults', done => {
            store.dispatch(loadAppDefaults()).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
                done()
            })
        })
    })

    describe('.saveExercisesResults', () => {

        const data = {
            ref: true
        }

        const userKey = 'C2NO2n89PQOwRDs2o5u6HkeDl5v1'

        const expectedActions = [
            {
                type: EXERCISES_SAVED_RESULTS_SUCCESS,
                payload: {
                    data
                }
            }
        ]
        const store = mockStore({ defaults: {} })

        it('creates EXERCISES_SAVED_RESULTS_SUCCESS action', done => {
            store.dispatch(saveExercisesResults(userKey, data)).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
                done()
            })
        })
    })

})
