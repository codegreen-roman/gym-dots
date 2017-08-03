// Beware of heavy ramda usage
import { GET_LOCATION, GET_LOCATION_START } from '../actions/types'
import { prop, compose, pick, equals, T, cond, always, objOf, merge } from 'ramda'

const DEFAULT_GITHUB_DATA = {
    username: 'neoroma',
    location: '',
    status: 'ready'
}

const getType = prop('type')
const typeOfGetLocation = compose(equals(GET_LOCATION), getType)
const typeOfGetLocationStart = compose(equals(GET_LOCATION_START), getType)
const getLocationData = compose(pick(['username', 'location', 'status']), prop('payload'))
const getStatus = compose(objOf('status'), prop('status'), prop('payload'))

const reducerMaker = (state) => {
    const mergeState = merge(state)
    const app = cond([
        [typeOfGetLocation, getLocationData],
        [typeOfGetLocationStart, getStatus],
        [T, compose(always(state))]
    ])

    return compose(mergeState, app)
}

export const githubLocation = (state = DEFAULT_GITHUB_DATA, action) => reducerMaker(state)(action)
