import {
    compose,
    propOr,
    prop,
    defaultTo,
    pick
} from 'ramda'
import { createSelector } from 'reselect'


export const getSafeNameOrEmptyString = propOr('', 'name')

const userProp = prop('user')
const photoProp = prop('photoURL')
const pickUserData = pick(['uid', 'displayName', 'isAnonymous', 'photoURL'])

export const getUidOrName = ({ isAnonymous = true, displayName = '', uid = '' }) => isAnonymous && uid || displayName

export const selectNameOrUidFromUser = compose(
    pickUserData, defaultTo({ displayName: '', uid: '', photoURL: null }), userProp
)
export const userNameSelector = createSelector(selectNameOrUidFromUser, getUidOrName)
export const userPhotoUrlSelector = createSelector(selectNameOrUidFromUser, photoProp)
