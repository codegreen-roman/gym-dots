// Beware of heavy ramda usage
import { GET_LOCATION } from '../actions/enums'
import R from 'ramda'

const DEFAULT_GITHUB_DATA = {
    username: 'neoroma',
    location: 'EMPTY'
}

const getType = R.prop('type')
const typeOfGetLocation = R.compose(R.equals(GET_LOCATION), getType)
const getUsername = R.compose(R.prop('username'), R.prop('payload'))
const someResult = username => ({
    username,
    location: 'default location'
})

const reducerMaker = (state) => {
    const mergeState = R.merge(state)
    const app = R.cond([
        [typeOfGetLocation, R.compose(someResult, getUsername)],
        [R.T, R.compose(R.always(state))]
    ])

    return R.compose(mergeState, app)
}

export const githubLocation = (state = DEFAULT_GITHUB_DATA, action) => reducerMaker(state)(action)
