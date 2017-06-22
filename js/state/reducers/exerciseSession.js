import { PING } from '../actions/enums'
import R from 'ramda'

const DEFAULT_SESSION = {
    day: 'MONDAY'
}

const getDay = R.compose(R.prop('day'), R.prop('payload'))

export const exerciseSession = (state = DEFAULT_SESSION, action) => {

    const mergeState = R.merge(state)
    switch (action.type) {
        case PING:
            return getDay(action) === state.day ? state : mergeState({
                day: getDay(action)
            })
        default:
            return state
    }
}
