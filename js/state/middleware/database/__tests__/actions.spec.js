import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { firebase } from '../firebaseApi'
import { authWith } from '../actions'
import {
    types,
} from '../../../'

const mockStore = configureMockStore([thunk, firebase])

xdescribe('Firebase action creator', () => {

    describe('.authWith', () => {

        const store = mockStore({ defaults: {} })

        afterEach(() => {
            store.clearActions()
        })

        describe('and login is successful', () => {
            it('creates START_AUTH actions after login in with facebook', done => {

                const expectedActions = [
                    {
                        type: types.AUTH_START,
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
                        type: types.AUTH_START,
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

})
