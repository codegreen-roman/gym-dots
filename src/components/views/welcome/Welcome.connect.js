import { connect } from 'react-redux'
import { compose } from 'ramda'
import { Welcome as Display } from './Welcome'
import { withRouter } from 'react-router-dom'
import { authAnonymously, authWith } from './Welcome.actions'

const mapStateToProps = ({ auth: { user, status } }, { dateStr }) => ({ user, status, dateStr })

const mapActionsToProps = dispatch => {
    return {
        loginWith: compose(dispatch, authWith),
        loginGuest: compose(dispatch, authAnonymously)
    }
}

export const Welcome = withRouter(connect(mapStateToProps, mapActionsToProps)(Display))
