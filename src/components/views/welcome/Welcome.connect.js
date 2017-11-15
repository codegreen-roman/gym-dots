import { connect } from 'react-redux'
import { compose } from 'ramda'
import { WelcomePresenter } from './Welcome.presenter'
import { withRouter } from 'react-router-dom'
import { authAnonymously, authWith } from './Welcome.actions'
import { lifecycle, toClass, setPropTypes, pure } from 'recompose'
import { isLoggedIn } from '@utils/helpers'
import { string, object } from 'prop-types'

const mapStateToProps = ({ auth: { user, status } }, { dateStr }) => ({
    user,
    status,
    dateStr
})

const withLifecycle = lifecycle({
    componentWillReceiveProps({ status, history }) {
        if (isLoggedIn(status)) {
            history.push('/in/activity/pre')
        }
    }
})

export const enhance = compose(
    withRouter,
    connect(mapStateToProps, { authWith, authAnonymously }),
    toClass,
    withLifecycle,
    pure,
    setPropTypes({
        status: string.isRequired,
        history: object
    })
)

export const Welcome = enhance(WelcomePresenter)
