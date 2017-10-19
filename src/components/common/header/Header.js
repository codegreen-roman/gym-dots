import React from 'react'
import { UserImage } from './UserImage'
import { string, func } from 'prop-types'
import { isEmpty } from 'ramda'
import {
    header,
    headerLeftSide,
    headerDate,
    headerText,
    menu
} from './Header.glamor.js'
import { Icon } from '../icon/Icon'
import { branch, RenderNothing } from '@utils/helpers'

export const LoginOrUser = (userDisplayName, logout) => {
    return (
        <section>
            <div>
                <span data-test='username'>{userDisplayName}</span>
            </div>
            <button className='logout' onClick={logout}>logout</button>
        </section>
    )
}

export const Header = ({ dateStr, subTitle, userDisplayName, exerciseName, logout, photoURL }) => {

    const renderTitle = () => isEmpty(exerciseName) ? subTitle : exerciseName

    const renderLoginOrUser = () => branch(userDisplayName, LoginOrUser(userDisplayName, logout), <RenderNothing />)

    return (
        <header {...header}>

            <div className='left-side' {...headerLeftSide}>
                <Icon
                    iconName='menu'
                    color='red'
                    viewBox='0 0 32 32'
                    width={16}
                    height={16}
                    {...menu}
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
                <UserImage image={photoURL || undefined} />
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
