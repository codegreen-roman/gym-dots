import React from 'react'
import { string, func, bool } from 'prop-types'
import { isEmpty } from 'ramda'
import { MenuIcon } from '../icon/SvgIcon'
import { LinkButton } from '../button/Button'
import { SideMenu } from '../sidemenu/SideMenu'
import { UserImage } from './UserImage'
import { header, headerLeftSide, headerMenu, headerDate, headerText, userWrapper } from './Header.glamor.js'

export const Header = ({
    dateStr,
    subTitle,
    userDisplayName,
    logout,
    exerciseName,
    photoURL,
    toggleMenu,
    isSideMenuOpen
}) => {
    const renderTitle = () => (isEmpty(exerciseName) ? subTitle : exerciseName)

    return (
        <header {...header}>
            <LinkButton data-test='menu-btn' {...headerMenu} onClickAction={toggleMenu}>
                <MenuIcon />
            </LinkButton>
            <div {...headerLeftSide}>
                <div data-test='current-date' {...headerDate}>
                    {dateStr}
                </div>
                <div data-test='current-subtitle' {...headerText}>
                    {renderTitle()}
                </div>
            </div>
            <div {...userWrapper}>
                <UserImage image={photoURL} />
            </div>
            <SideMenu
                image={photoURL}
                userDisplayName={userDisplayName}
                logout={logout}
                toggleMenu={toggleMenu}
                isSideMenuOpen={isSideMenuOpen}
            />
        </header>
    )
}

Header.propTypes = {
    userDisplayName: string.isRequired,
    photoURL: string,
    logout: func.isRequired,
    dateStr: string.isRequired,
    subTitle: string.isRequired,
    exerciseName: string.isRequired,
    toggleMenu: func.isRequired,
    isSideMenuOpen: bool.isRequired,
}

Header.defaultProps = {
    exerciseName: ''
}
