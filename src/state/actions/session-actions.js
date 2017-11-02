import { LOAD_SESSIONS_SUCCESS } from './types'
import { compose } from 'ramda'
import data from '../../../data/sample-sessions.json'

const { sessions } = data
const noop = () => ({})

export const loadSessionsSuccess = sessions => ({
    type: LOAD_SESSIONS_SUCCESS,
    payload: {
        sessions
    }
})

export const loadSessions = () => {
    return (dispatch) => {

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(sessions)
            }, 1500)
        })

        return promise
            .then(compose(dispatch, loadSessionsSuccess))
            .catch(noop)
    }
}
