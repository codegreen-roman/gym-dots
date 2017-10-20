import React from 'react'
import { UserImage } from './UserImage'
import { string, func } from 'prop-types'
import { isEmpty } from 'ramda'
import {
    header,
    headerLeftSide,
    headerDate,
    headerText,
    headerMenu,
    userWrapper,
    userPic
} from './Header.glamor.js'
import { Icon } from '../icon/Icon'
import { branch, RenderNothing } from '@utils/helpers'

export const User = ({user, logout, photoURL}) => (
    <section {...userWrapper}>
        <span {...userPic} data-test='username'>{user}</span>
        <button className='logout' onClick={logout}>
            <UserImage image={photoURL} />
        </button>
    </section>
)

User.propTypes = {
    user: string,
    logout: func,
    photoURL: string
}


export const Header = ({ dateStr, subTitle, userDisplayName, exerciseName, logout, photoURL }) => {

    const renderTitle = () => isEmpty(exerciseName) ? subTitle : exerciseName

    const renderLogoutAndUser = () => branch(userDisplayName, <User user={userDisplayName} logout={logout} photoURL={photoURL} />, <RenderNothing />)

    return (
        <header {...header}>

            <div className='left-side' {...headerLeftSide}>
                <Icon
                    iconName='menu'
                    color='red'
                    viewBox='0 0 32 32'
                    width={16}
                    height={16}
                    {...headerMenu}
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
                {renderLogoutAndUser()}
            </div>

        </header>
    )
}

Header.propTypes = {
    userDisplayName: string.isRequired,
    photoURL: string,
    logout: func.isRequired,
    dateStr: string.isRequired,
    subTitle: string.isRequired,
    exerciseName: string.isRequired
}

Header.defaultProps = {
    exerciseName: ''
}
