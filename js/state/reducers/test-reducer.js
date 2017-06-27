// Beware of heavy ramda usage
import { GET_LOCATION, GET_LOCATION_START } from '../actions/enums'
import R from 'ramda'

const DEFAULT_GITHUB_DATA = {
    username: 'neoroma',
    location: '',
    status: 'ready'
}

const getType = R.prop('type')
const typeOfGetLocation = R.compose(R.equals(GET_LOCATION), getType)
const typeOfGetLocationStart = R.compose(R.equals(GET_LOCATION_START), getType)
const getLocationData = R.compose(R.pick(['username', 'location', 'status']), R.prop('payload'))
const getStatus = R.compose(R.objOf('status'), R.prop('status'), R.prop('payload'))

const reducerMaker = (state) => {
    const mergeState = R.merge(state)
    const app = R.cond([
        [typeOfGetLocation, getLocationData],
        [typeOfGetLocationStart, getStatus],
        [R.T, R.compose(R.always(state))]
    ])

    return R.compose(mergeState, app)
}

export const githubLocation = (state = DEFAULT_GITHUB_DATA, action) => reducerMaker(state)(action)
