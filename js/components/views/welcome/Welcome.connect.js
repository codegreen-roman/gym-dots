import { connect } from 'react-redux'
import { compose } from 'ramda'
import { Welcome as _Welcome } from './Welcome'
import { withRouter } from 'react-router-dom'

const authWith = (provider) => ({
    type: 'FBASE:AUTH_PROVIDER',
    payload: {
        provider
    }
})

const authAnonymously = () => ({
    type: 'FBASE:AUTH_GUEST',
    payload: {}
})

const mapStateToProps = ({ auth: { user, status } }, { dateStr }) => ({ user, status, dateStr })

const mapActionsToProps = dispatch => {
    return {
        loginWith: compose(dispatch, authWith),
        loginGuest: compose(dispatch, authAnonymously)
    }
}

export const Welcome = withRouter(connect(mapStateToProps, mapActionsToProps)(_Welcome))
