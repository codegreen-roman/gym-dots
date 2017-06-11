import React from 'react'
import { connect } from 'react-redux'
import { shape, func, string } from 'prop-types'
import { setLocale } from 'react-redux-i18n'
import Text from './Text'

const _Header = props => (
    <section>
        <h4>I am a header</h4>
        <a href='#' onClick={() => props.changeLanguage('ru')}>changeLanguage</a>
        <p><Text text='greeting' /></p>
        <div>{props.exerciseSession.day}</div>
        <a href='#' onClick={props.pingSession}>ping</a>
    </section>
)

_Header.propTypes = {
    exerciseSession: shape({
        day: string
    }),
    pingSession: func,
    changeLanguage: func
}

const mapStateToProps = ({ exerciseSession }) => ({ exerciseSession })

const mapActionsToProps = dispatch => ({
    pingSession() {
        dispatch({ type: 'PING' })
    },
    changeLanguage(locale) {
        dispatch(setLocale(locale))
    }
})

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
