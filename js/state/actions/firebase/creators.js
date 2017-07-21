import { compose } from 'ramda'
import { GOT_DEFAULTS, GOT_ERROR_LOADING_DEFAULTS } from './types'
import { database } from './database'

const gotAppDefaults = defaults => ({
    type: GOT_DEFAULTS,
    payload: {
        defaults
    }
})

const gotErrorLoadingDefaults = error => ({
    type: GOT_ERROR_LOADING_DEFAULTS,
    payload: {
        error
    }
})

export const getAppDefaults = () => {
    return function (dispatch) {
        return database.ref('/defaults')
            .once('value', snap => {
                const defaults = snap.val()
                const pass = compose(dispatch, gotAppDefaults)
                pass(defaults)
            })
            .catch(gotErrorLoadingDefaults)
    }
}
