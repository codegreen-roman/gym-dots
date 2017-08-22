import { connect } from 'react-redux'
import { compose, propOr } from 'ramda'
import { authWith } from '../../../state/actions/firebase/databaseActions'
import { Header as _Header } from './Header'

const getSafeNameOrEmptyString = propOr('', 'name')

const mapStateToProps = ({ auth, currentExercise }, { dateStr, subTitle }) => ({
    auth,
    dateStr,
    subTitle,
    exerciseName: getSafeNameOrEmptyString(currentExercise)
})

const mapActionsToProps = dispatch => ({
    loginWith: compose(dispatch, authWith)
})

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
