import { GOT_DEFAULTS } from './types'
import { database } from './database'

const gotAppDefaults = defaults => ({
    type: GOT_DEFAULTS,
    payload: {
        defaults
    }
})

export const getAppDefaults = () => {
    return function (dispatch) {
        return database.ref('/defaults')
            .once('value', snap => {
                console.log(snap)
                console.log(snap.val())
                dispatch(gotAppDefaults(snap.val()))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
