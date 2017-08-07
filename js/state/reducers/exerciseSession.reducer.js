import { PING } from '../actions/types'
import { prop, compose, merge } from 'ramda'

const DEFAULT_SESSION = {
    day: 'MONDAY'
}

const getDay = compose(prop('day'), prop('payload'))

export const exerciseSession = (state = DEFAULT_SESSION, action) => {

    const mergeState = merge(state)
    switch (action.type) {
        case PING:
            return getDay(action) === state.day ? state : mergeState({
                day: getDay(action)
            })
        default:
            return state
    }
}
