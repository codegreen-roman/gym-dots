import React from 'react'
import { UserImage } from './UserImage'
import { string, object, func } from 'prop-types'
import { isEmpty } from 'ramda'


export const Header = ({ dateStr, subTitle, loginWith, auth, exerciseName, loginGuest, logout }) => {

    const rootStyle = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
        fontFamily: 'sans-serif'
    }

    const { user } = auth
    const renderTitle = () => isEmpty(exerciseName) ? subTitle : exerciseName

    const renderLoginOrUser = () => {

        const { user, status } = auth

        if (user) {
            return (
                <section>
                    <div className='username'>
                        <span>{user.displayName || user.uid}</span>
                    </div>
                    <button className='logout' onClick={logout}>logout</button>
                </section>
            )
        }

        return (
            <div style={status === 'inProgress' ? { opacity: '0.1' } : { opacity: '1' }}>
                <button className='twitter' onClick={() => loginWith('twitter')}>login with twitter</button>
                <button className='facebook' onClick={() => loginWith('facebook')}>login with facebook</button>
                <button className='guest' onClick={loginGuest}>login as guest</button>
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
                <a className='h-menu' style={{ fontSize: '16px' }}>&#9776;</a>
                <div className='h-date' style={{ fontSize: '12px', marginLeft: '4rem' }}>
                    {dateStr}
                </div>
                <div className='h-title' data-test='currently' style={{ fontSize: '16px', marginLeft: '3rem' }}>
                    {renderTitle()}
                </div>
            </div>

            <div className='right-side'>
                {renderLoginOrUser()}
                <UserImage image={user && user.photoURL || undefined} />
            </div>

        </section>
    )
}

Header.propTypes = {
    auth: object.isRequired,
    loginWith: func.isRequired,
    loginGuest: func.isRequired,
    logout: func.isRequired,
    dateStr: string.isRequired,
    subTitle: string.isRequired,
    exerciseName: string.isRequired
}

Header.defaultProps = {
    exerciseName: ''
}
