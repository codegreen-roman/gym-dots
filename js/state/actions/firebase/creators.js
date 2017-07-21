import { compose } from 'ramda'
import { GOT_DEFAULTS, GOT_ERROR_LOADING_DEFAULTS } from './types'
import { defaultsRef } from './database'

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

const dispatcher = dispatch => compose(dispatch, gotAppDefaults)

export const loadAppDefaults = () => {
    return function (dispatch) {
        const fireAction = dispatcher(dispatch)
        return defaultsRef
            .once('value', snap => {
                const defaults = snap.val()
                fireAction(defaults)
            })
            .catch(gotErrorLoadingDefaults)
    }
}


// https://firebase.google.com/docs/reference/js/firebase.database.Reference
export const subscribeToAppDefaultsChanges = dispatch => {
    const fireAction = dispatcher(dispatch)
    return new Promise(resolve => {
        defaultsRef
            .on('value', snap => {
                const defaults = snap.val()
                fireAction(defaults)
                resolve(defaults)
            })
    })
}
