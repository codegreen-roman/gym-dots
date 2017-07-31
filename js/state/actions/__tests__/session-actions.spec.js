import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { loadSessions, loadSessionsSuccess } from '../session-actions'

const mockStore = configureMockStore([thunk])

describe('Session Actions Creators', () => {

    describe('.loadSessionsSuccess', () => {
        expect(loadSessionsSuccess()).toMatchSnapshot()
    })

    describe('.loadSessions', () => {

        const store = mockStore({ defaults: {} })

        it('creates LOAD_SESSIONS_SUCCESS action when dispatching', (done) => {

            const promise = store.dispatch(loadSessions())

            jest.runAllTimers()

            promise.then(() => {
                expect(store.getActions()).toMatchSnapshot()
                done()
            })
        })
    })

})
