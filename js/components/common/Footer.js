import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { shape, string, func } from 'prop-types'
import { getLocation } from '../../state/actions/creators'

const style = {
    border: '1px solid #FF00FF',
    margin: '2rem'
}

const _Footer = ({githubLocation, dispatch}) => {

    const fireAction = R.compose(dispatch, getLocation)
    const handleClick = () => fireAction(githubLocation.username)

    return (
        <section style={style}>
            Hi, I am component Footer
            <button onClick={handleClick}>Request</button>
            <div>{githubLocation.username}</div>
            <div>{githubLocation.location}</div>
        </section>
    )
}

_Footer.propTypes = {
    githubLocation: shape({
        username: string,
        location: string
    }),
    dispatch: func
}

const mapStateToProps = ({githubLocation}) => ({
    githubLocation
})

export { _Footer }
export const Footer = connect(mapStateToProps)(_Footer)
