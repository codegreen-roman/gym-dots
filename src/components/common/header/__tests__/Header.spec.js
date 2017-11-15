import React from 'react'
import { Header } from '../Header'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { findByDataAttr } from '@utils/testUtils'

const setup = () => {

    const defaultProps = {
        dateStr: 'Saturday, Jul 15th',
        subTitle: 'Start Workout',
        exerciseName: '',
        photoURL: null,
        userDisplayName: '',
        isSideMenuOpen: false,
        logout: jest.fn(),
        toggleMenu: jest.fn()
    }

    const mountWrapper = mount(<Header {...defaultProps} />)
    return {
        defaultProps,
        mountWrapper,
        shallowWrapper: shallow(<Header {...defaultProps} />),
        menuElement: findByDataAttr(mountWrapper, 'menu-btn').first(),
        dateElement: findByDataAttr(mountWrapper, 'current-date').first(),
        titleElement: findByDataAttr(mountWrapper, 'current-subtitle').first()
    }
}

describe('Header component', () => {
    test('should have section of type header', () => {
        const { shallowWrapper } = setup()
        expect(shallowWrapper.type()).toBe('header')
    })

    test('should have menu btn', () => {
        const { menuElement } = setup()
        expect(menuElement.length).toBe(1)
    })

    test('should have date set', () => {
        const { dateElement, defaultProps } = setup()
        expect(dateElement.text()).toBe(defaultProps.dateStr)
    })

    test('should have sub title `Start workout`', () => {
        const { titleElement, defaultProps } = setup()
        expect(titleElement.text()).toBe(defaultProps.subTitle)
    })

    describe('Clicking on menu btn', () => {
        test('should call toggleMenu', () => {
            const { mountWrapper, menuElement } = setup()
            menuElement.simulate('click')
            expect(mountWrapper.props().toggleMenu).toHaveBeenCalled()
        })
    })

    describe('Exercise name exist', () => {

        it('should match the snapshot', () => {
            const { shallowWrapper } = setup()
            shallowWrapper.setProps({ exerciseName: 'Pull Up' })
            expect(shallowWrapper).toMatchSnapshot()
        })

        it('should should show title with the exerciseName = Pull Up', () => {
            const { shallowWrapper } = setup()
            shallowWrapper.setProps({ exerciseName: 'Pull Up' })
            expect(findByDataAttr(shallowWrapper, 'current-subtitle').text()).toBe('Pull Up')
        })
    })

    describe('Shallow snapshot', () => {
        test('matches the previous', () => {
            const component = setup()
            const tree = shallowToJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})
