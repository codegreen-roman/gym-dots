import { connect } from 'react-redux'
import {
    compose,
    propOr,
    prop,
    defaultTo,
    pick
} from 'ramda'

import { doLogout, doLoginWithGuest, doLoginWithProvider } from './Header.actions'
import { Header as _Header } from './Header'
import { createSelector } from 'reselect'

const getSafeNameOrEmptyString = propOr('', 'name')

const userProp = prop('user')
const photoProp = prop('photoURL')
const pickUserData = pick(['uid', 'displayName', 'isAnonymous', 'photoURL'])

export const getUidOrName = ({ isAnonymous = true, displayName = '', uid = '' }) => isAnonymous && uid || displayName

export const selectNameOrUidFromUser = compose(
    pickUserData, defaultTo({ displayName: '', uid: '', photoURL: null }), userProp
)
export const userNameSelector = createSelector(selectNameOrUidFromUser, getUidOrName)
export const userPhotoUrlSelector = createSelector(selectNameOrUidFromUser, photoProp)

const mapStateToProps = ({ auth = {}, currentExercise }, { dateStr, subTitle }) => ({
    photoURL: userPhotoUrlSelector(auth),
    userDisplayName: userNameSelector(auth),
    dateStr,
    subTitle,
    exerciseName: getSafeNameOrEmptyString(currentExercise)
})

const mapActionsToProps = dispatch => {

    return {
        loginWith: compose(dispatch, doLoginWithProvider),
        loginGuest: compose(dispatch, doLoginWithGuest),
        logout: compose(dispatch, doLogout)
    }
}

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
