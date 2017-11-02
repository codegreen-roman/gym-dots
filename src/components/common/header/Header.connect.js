import { connect } from 'react-redux'
import { compose, propOr } from 'ramda'
import { Header as _Header } from './Header'
import { doLogout, doLoginWithGuest, doLoginWithProvider } from './Header.actions'

const getSafeNameOrEmptyString = propOr('', 'name')

const mapStateToProps = ({ auth, currentExercise }, { dateStr, subTitle }) => ({
    auth,
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
