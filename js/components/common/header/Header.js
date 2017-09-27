import React from 'react'
import { UserImage } from './UserImage'
import { string, object, func } from 'prop-types'
import { isEmpty } from 'ramda'
import {
    header,
    headerLeftSide,
    headerDate,
    headerText,
    menu
} from './Header.glamor.js'
import { Icon } from '../icon/Icon'


export const Header = ({ dateStr, subTitle, loginWith, auth, exerciseName, loginGuest, logout }) => {

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
        <header {...header}>

            <div className='left-side' {...headerLeftSide}>
                <Icon icon='menu' size={24} color='red' {...menu} />
                <div>
                    <div className='h-date' {...headerDate}>
                        {dateStr}
                    </div>
                    <div className='h-title' data-test='currently' {...headerText}>
                        {renderTitle()}
                    </div>
                </div>
            </div>

            <div className='right-side'>
                {renderLoginOrUser()}
                <UserImage image={user && user.photoURL || undefined} />
            </div>

        </header>
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
