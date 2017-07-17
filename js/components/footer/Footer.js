import React from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import { footerStyle } from './Footer.glamor'
import { startWorkout } from '../../state/actions'
import { compose } from 'ramda'
import { func } from 'prop-types'

const AButton = glamorous.button({
    flex: 1
})

export class _Footer extends React.Component {
    render() {

        const { fireStartWorkout } = this.props

        return (
            <footer {...footerStyle}>
                <AButton onClick={fireStartWorkout}>Start Workout</AButton>
            </footer>
        )
    }
}

_Footer.propTypes = {
    fireStartWorkout: func.isRequired
}

const mapStateToProps = () => ({})

const mapActionsToProps = dispatch => {
    return {
        fireStartWorkout: compose(dispatch, startWorkout)
    }
}

export const Footer = connect(mapStateToProps, mapActionsToProps)(_Footer)
