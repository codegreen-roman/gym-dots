import React from 'react'
import { Header } from '../Header'
import { shallow } from 'enzyme'
import { merge } from 'ramda'
import { shallowToJson } from 'enzyme-to-json'
import { findByDataAttr } from '@utils/testUtils'

const defaultProps = {
    dateStr: 'Saturday, Jul 15th',
    subTitle: 'Start Workout',
    exerciseName: '',
    photoURL: null,
    userDisplayName: '',
    logout: jest.fn(),
}

const setup = (props = defaultProps) => {
    return shallow(<Header {...props} />)
}

describe('Header component', () => {

    test('has section type of the root component', () => {
        const wrapper = setup()
        expect(wrapper.type()).toBe('header')
    })

    test('has 2 divs as 1st children', () => {
        const wrapper = setup()
        expect(wrapper.find('header > div').length).toBe(2)
    })

    describe('logged in', () => {

        const props = {
            dateStr: 'Saturday, Jul 15th',
            subTitle: 'Start Workout',
            userDisplayName: 'Roman',
            logout: jest.fn(),
        }

        let wrapper
        let usernameDiv

        beforeEach(() => {
            wrapper = setup(props)
            usernameDiv = findByDataAttr(wrapper, 'username')
        })

        it('should have a div with a class of username and text Roman', () => {
            expect(usernameDiv.length).toBe(1)
            expect(usernameDiv.text()).toBe('Roman')
        })
    })

    describe('Left side of the header', () => {

        let wrapper
        let menuElement
        let dateElement
        let titleElement
        const currentDate = 'Saturday, Jul 15th'

        beforeAll(() => {
            wrapper = setup()
            menuElement = findByDataAttr(wrapper, 'menu')
            dateElement =  findByDataAttr(wrapper, 'date')
            titleElement =  findByDataAttr(wrapper, 'currently')
        })

        test('has a menu icon wrapped in a tag', () => {
            expect(menuElement.length).toBe(1)
        })

        test('has dateElement with a date value Saturday, Jul 15th', () => {
            expect(dateElement.text()).toBe(currentDate)
        })

        test('has titleElement with a value Start Workout', () => {
            expect(titleElement.text()).toBe('Start Workout')
        })
    })

    describe('Exercise name exist', () => {

        const props = merge(defaultProps, { exerciseName: 'Pull Up' })
        let wrapper
        let titleElement


        beforeAll(() => {
            wrapper = setup(props)
            titleElement =  findByDataAttr(wrapper, 'currently')
        })

        it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        })

        it('should should show title with the exerciseName = Pull Up', () => {
            expect(titleElement.text()).toBe('Pull Up')
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
