import { connect } from 'react-redux'
import { compose } from 'ramda'
import { doLogout, doLoginWithGuest, doLoginWithProvider, sideMenuToggle } from './Header.actions'
import { userPhotoUrlSelector, userNameSelector, getSafeNameOrEmptyString } from './selectors'
import { Header as _Header } from './Header'

const mapStateToProps = ({
    auth = {},
    currentExercise,
    ui
},
{ dateStr, subTitle }
) => ({
    photoURL: userPhotoUrlSelector(auth),
    userDisplayName: userNameSelector(auth),
    dateStr,
    subTitle,
    exerciseName: getSafeNameOrEmptyString(currentExercise),
    isSideMenuOpen: ui.isSideMenuOpen
})

const mapActionsToProps = dispatch => {
    return {
        loginWith: compose(dispatch, doLoginWithProvider),
        loginGuest: compose(dispatch, doLoginWithGuest),
        logout: compose(dispatch, doLogout),
        toggleMenu: compose(dispatch, sideMenuToggle)
    }
}

const enhance = connect(mapStateToProps, mapActionsToProps)

export const Header = enhance(_Header)
