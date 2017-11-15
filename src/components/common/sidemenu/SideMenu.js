import React from 'react'
import { bool, func, string } from 'prop-types'
import { UserImage } from '../header/UserImage'
import { StyledSideMenu, StyledSideMenuList, StyledSideMenuListItem } from './SideMenu.glamor'

export const SideMenu = ({ toggleMenu, isSideMenuOpen, logout, image, userDisplayName }) => {
    const onLogoutAction = () => {
        toggleMenu()
        logout()
    }

    return (
        <StyledSideMenu toggleOn={isSideMenuOpen}>
            <UserImage data-test='with-username' image={image} userDisplayName={userDisplayName} />
            <StyledSideMenuList>
                <StyledSideMenuListItem>Start</StyledSideMenuListItem>
                <StyledSideMenuListItem>Profile</StyledSideMenuListItem>
                <StyledSideMenuListItem>Workouts</StyledSideMenuListItem>
                <StyledSideMenuListItem>Add Routine</StyledSideMenuListItem>
                <StyledSideMenuListItem data-test='close-menu' onClick={toggleMenu}>
                    Close SideMenu
                </StyledSideMenuListItem>
                <StyledSideMenuListItem data-test='logout' onClick={onLogoutAction}>
                    Logout
                </StyledSideMenuListItem>
            </StyledSideMenuList>
        </StyledSideMenu>
    )

}

SideMenu.propTypes = {
    toggleMenu: func.isRequired,
    logout: func.isRequired,
    isSideMenuOpen: bool.isRequired,
    image: string,
    userDisplayName: string
}
