import React from 'react'
import { UserImage } from './UserImage'
import { string, object, func } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { authWith } from '../../state/actions/firebase/creators'

const _Header = ({ dateStr, subTitle, loginWith, auth }) => {

    const rootStyle = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
        fontFamily: 'sans-serif'
    }

    const renderLoginOrUser = () => {

        if (auth.user) {
            return (
                <div>
                    <span>{auth.user.displayName}</span>
                </div>
            )
        }

        return (
            <div>
                <button onClick={() => loginWith('twitter')}>login with twitter</button>
                <button onClick={() => loginWith('facebook')}>login with facebook</button>
            </div>
        )
    }

    return (
        <section style={rootStyle}>

            <div className='left-side' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <a className='h-menu' style={{ fontSize: '8vw' }}>&#9776;</a>
                <div className='h-date' style={{ fontSize: '5vw', marginLeft: '4rem' }}>
                    {dateStr}
                </div>
                <div className='h-title' style={{ fontSize: '8vw', marginLeft: '3rem' }}>
                    {subTitle}
                </div>
            </div>

            <div className='right-side'>
                {renderLoginOrUser()}
                <UserImage />
            </div>

        </section>
    )
}

_Header.propTypes = {
    auth: object.isRequired,
    loginWith: func.isRequired,
    dateStr: string.isRequired,
    subTitle: string.isRequired
}

const mapStateToProps = ({ auth }, { dateStr, subTitle }) => ({
    auth,
    dateStr,
    subTitle
})

const mapActionsToProps = dispatch => ({
    loginWith: compose(dispatch, authWith)
})

export { _Header }
export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
