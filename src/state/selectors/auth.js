import {createSelector} from 'reselect'
import { compose, prop, identity } from 'ramda'

const authProp = prop('auth')
const uuidProp = prop('uid')
const uuidSelect = compose(uuidProp, authProp)

export const userKeySelector = createSelector(uuidSelect, identity)
