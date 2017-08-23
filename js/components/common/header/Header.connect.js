import { connect } from 'react-redux'
import { compose, propOr } from 'ramda'
import { authWith, authAnonymously, authVoidAction } from '../../../state/actions/firebase/databaseActions'
import { subscribeToAuthStateChanged } from '../../../state/actions'
import { Header as _Header } from './Header'

const getSafeNameOrEmptyString = propOr('', 'name')

const mapStateToProps = ({ auth, currentExercise }, { dateStr, subTitle }) => ({
    auth,
    dateStr,
    subTitle,
    exerciseName: getSafeNameOrEmptyString(currentExercise)
})

const mapActionsToProps = dispatch => {

    subscribeToAuthStateChanged(dispatch)

    return {
        loginWith: compose(dispatch, authWith),
        loginGuest: compose(dispatch, authAnonymously),
        logout: compose(dispatch, authVoidAction)
    }
}

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
