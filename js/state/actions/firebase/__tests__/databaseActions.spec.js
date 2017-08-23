import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    loadAppDefaults,
    subscribeToAppDefaultsChanges,
    authWith,
    fetchExercises
} from '../databaseActions'
import {
    GOT_DEFAULTS,
    AUTH_SUCCESS,
    AUTH_START,
    EXERCISES_FETCHING_SUCCESS
} from '../../types'

const mockStore = configureMockStore([thunk])

describe('Firebase action creator', () => {

    const accessToken = '4016011-iiVq1Y5AEjl76UB71po9d74L6LUWUnGWVayCILq66e'

    const user = {
        displayName: 'Roman',
        photoURL: 'https://pbs.twimg.com/profile_images/870699319183134720/IOqlC-IM_normal.jpg',
        uid: 'C2NO2n89PQOwRDs2o5u6HkeDl5v1'
    }

    describe('.authWith', () => {

        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('and login is successful', () => {
            it('creates START_AUTH and AUTH_SUCCESS actions after login in with facebook', done => {

                const expectedActions = [
                    {
                        type: AUTH_START,
                        payload: {
                            provider: 'facebook'
                        }
                    },
                    {
                        type: AUTH_SUCCESS,
                        payload: {
                            user,
                            accessToken
                        }
                    }
                ]

                store.dispatch(authWith('facebook')).then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                    done()
                })
            })

            it('creates START_AUTH and AUTH_SUCCESS actions after login in with twitter', done => {

                const expectedActions = [
                    {
                        type: AUTH_START,
                        payload: {
                            provider: 'twitter'
                        }
                    },
                    {
                        type: AUTH_SUCCESS,
                        payload: {
                            user,
                            accessToken
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

    describe('.fetchExercises', () => {
        const expectedActions = [
            {
                type: EXERCISES_FETCHING_SUCCESS,
                payload: {
                    exercises: {
                        sessionId: '',
                        name: '',
                        exercises: []
                    }
                }
            }
        ]
        const store = mockStore({ exercises: {} })

        it('creates EXERCISES_FETCHING_SUCCESS action when fetching exercises from database', done => {
            store.dispatch(fetchExercises()).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
                done()
            })
        })
    })
})
