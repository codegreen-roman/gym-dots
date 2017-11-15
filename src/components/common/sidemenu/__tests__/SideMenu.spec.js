import React from 'react'
import { SideMenu } from '../SideMenu'
import { mount } from 'enzyme'


describe('SideMenu', () => {
    const defaultProps = {
        toggleMenu: jest.fn(),
        logout: jest.fn(),
        isSideMenuOpen: false,
        userDisplayName: 'Bob',
        image: 'https://pbs.twimg.com/profile_images/870699319183134720/IOqlC-IM_normal.jpg'
    }
    const wrapper = mount(<SideMenu {...defaultProps} />)

    it('render as expected', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should have isSideMenuOpen by default to be false', () => {
        expect(wrapper.props().isSideMenuOpen).toEqual(false)
    })

    it('should have image set', () => {
        expect(wrapper.props().image).toEqual(defaultProps.image)
    })

    it('should have userDisplayName set', () => {
        expect(wrapper.props().userDisplayName).toEqual(defaultProps.userDisplayName)
    })

    it('should have `UserImage` component to be defined ', () => {
        expect(wrapper.find('[data-test="with-username"]').first().length).toBe(1)
    })

    it('should change isSideMenuOpen to true', () => {
        wrapper.setProps({isSideMenuOpen: true})
        expect(wrapper.props().isSideMenuOpen).toEqual(true)
        wrapper.setProps({isSideMenuOpen: false})
    })

    it('should call toggleMenu', () => {
        wrapper.find('[data-test="close-menu"]').first().simulate('click')
        expect(wrapper.props().toggleMenu).toHaveBeenCalledTimes(1)
        expect(wrapper.props().toggleMenu).toHaveBeenCalled()
        expect(wrapper.props().isSideMenuOpen).toEqual(false)
    })

    it('should call logout', () => {
        wrapper.find('[data-test="logout"]').first().simulate('click')
        expect(wrapper.props().logout).toHaveBeenCalledTimes(1)
        expect(wrapper.props().logout).toHaveBeenCalled()
    })
})
