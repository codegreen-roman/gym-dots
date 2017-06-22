import React from 'react'
import { connect } from 'react-redux'
import { shape, func, string } from 'prop-types'
import { Text } from '../Text'
import { ToggleMenu } from './ToggleMenu'
import { creators } from '../../state/actions'
import R from 'ramda'

const _Header = ({ exerciseSession, pingSession }) => (
    <section style={{ border: '2px solid #32CD32' }}>
        <h4>I am a header</h4>
        <ToggleMenu />
        <p><Text text='greeting' /></p>
        <div>{exerciseSession.day}</div>
        <a href='#' onClick={pingSession}>ping</a>
    </section>
)

_Header.propTypes = {
    exerciseSession: shape({
        day: string
    }),
    pingSession: func
}

const mapStateToProps = ({ exerciseSession }) => ({ exerciseSession })

const mapActionsToProps = dispatch => ({
    pingSession() {
        const app = R.compose(dispatch, creators.ping)
        app({})
    }
})

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
