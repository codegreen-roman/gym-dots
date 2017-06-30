import React from 'react'
import { compose, merge } from 'ramda'
import { connect } from 'react-redux'
import { shape, string, func, array } from 'prop-types'
import { loadLocationForUsername } from '../../state/actions/creators'

const style = {
    border: '1px solid #FF00FF',
    margin: '2rem'
}

const blockStyle = status => {

    const mergeStyle = merge(style)

    return mergeStyle({
        opacity: status === 'ready' ? '0.9' : '0.1'
    })
}

const _Footer = ({ githubLocation, fireAction, sessions }) => {

    const handleClick = () => fireAction(githubLocation.username)

    return (
        <section style={blockStyle(githubLocation.status)}>
            Hi, I am component Footer
            <button onClick={handleClick}>Request</button>
            <div>{githubLocation.username}</div>
            <div>{githubLocation.location}</div>
            <pre>{JSON.stringify(sessions, null, 2)}</pre>
        </section>
    )
}

_Footer.propTypes = {
    sessions: array.isRequired,
    githubLocation: shape({
        username: string.isRequired,
        location: string.isRequired,
        status: string
    }),
    fireAction: func.isRequired
}

const mapStateToProps = ({ githubLocation, sessions }) => ({
    githubLocation,
    sessions
})

const mapActionsToProps = dispatch => {
    return {
        fireAction: compose(dispatch, loadLocationForUsername)
    }
}

export { _Footer }
export const Footer = connect(mapStateToProps, mapActionsToProps)(_Footer)