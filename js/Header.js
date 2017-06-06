import React from 'react'
import { connect } from 'react-redux'
import { shape, func, string } from 'prop-types'

const _Header = props => (
    <section>
        <h4>I am a header</h4>
        <div>{props.exerciseSession.day}</div>
        <a href='#' onClick={props.pingSession}>ping</a>
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
        dispatch({ type: 'PING' })
    }
})

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
