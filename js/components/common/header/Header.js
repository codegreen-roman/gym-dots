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


export const Header = ({ dateStr, subTitle, auth, exerciseName, logout }) => {

    const { user } = auth
    const renderTitle = () => isEmpty(exerciseName) ? subTitle : exerciseName

    const renderLoginOrUser = () => {

        const { user } = auth

        if (user) {
            return (
                <section>
                    <div>
                        <span data-test='username'>{user.displayName || user.uid}</span>
                    </div>
                    <button className='logout' onClick={logout}>logout</button>
                </section>
            )
        }
    }

    return (
        <header {...header}>

            <div className='left-side' {...headerLeftSide}>
                <Icon
                    iconName='menu'
                    color='red'
                    viewBox='0 0 32 32'
                    data-test='menu'
                    style={{
                        width: 16,
                        height: 16
                    }} {...menu}
                />
                <div>
                    <div data-test='date' {...headerDate}>
                        {dateStr}
                    </div>
                    <div data-test='currently' {...headerText}>
                        {renderTitle()}
                    </div>
                </div>
            </div>

            <div>
                {renderLoginOrUser()}
                <UserImage image={user && user.photoURL || undefined} />
            </div>

        </header>
    )
}

Header.propTypes = {
    auth: object.isRequired,
    logout: func.isRequired,
    dateStr: string.isRequired,
    subTitle: string.isRequired,
    exerciseName: string.isRequired
}

Header.defaultProps = {
    exerciseName: ''
}
