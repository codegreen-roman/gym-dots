import React from 'react'
import { _Header as Header } from '../Header'
import { shallow } from 'enzyme'
import { merge } from 'ramda'

const defaultProps = {
    dateStr: 'Saturday, Jul 15th',
    subTitle: 'Start Workout',
    exerciseName: '',
    auth: {},
    loginWith: () => {
    },
}

const setup = (props = defaultProps) => {
    return shallow(<Header {...props} />)
}

describe('Header component', () => {

    test('has section type of the root component', () => {
        const wrapper = setup()
        expect(wrapper.type()).toBe('section')
    })

    test('has 2 divs as 1st children', () => {
        const wrapper = setup()
        expect(wrapper.find('section > div').length).toBe(2)
    })

    describe('not logged in', () => {

        const props = {
            dateStr: 'Saturday, Jul 15th',
            subTitle: 'Start Workout',
            auth: {},
            loginWith: jest.fn()
        }

        let wrapper
        let twitterBtn
        let facebookBtn

        beforeEach(() => {
            wrapper = setup(props)
            twitterBtn = wrapper.find('button.twitter')
            facebookBtn = wrapper.find('button.facebook')
        })

        it('should call the loginWith with twitter provider', () => {
            twitterBtn.simulate('click')
            expect(props.loginWith).toBeCalledWith('twitter')
        })

        it('should call the loginWith with facebook provider', () => {
            facebookBtn.simulate('click')
            expect(props.loginWith).toBeCalledWith('facebook')
        })
    })

    describe('logged in', () => {

        const props = {
            dateStr: 'Saturday, Jul 15th',
            subTitle: 'Start Workout',
            auth: {
                user: {
                    displayName: 'Roman'
                }
            },
            loginWith: jest.fn()
        }

        let wrapper
        let twitterBtn
        let facebookBtn
        let usernameDiv

        beforeEach(() => {
            wrapper = setup(props)
            twitterBtn = wrapper.find('button.twitter')
            facebookBtn = wrapper.find('button.facebook')
            usernameDiv = wrapper.find('div.username')
        })

        it('should not have login buttons', () => {
            expect(twitterBtn.length).toBe(0)
            expect(facebookBtn.length).toBe(0)
        })

        it('should have a div with a class of username and text Roman', () => {
            expect(usernameDiv.length).toBe(1)
            expect(usernameDiv.text()).toBe('Roman')
        })
    })

    describe('Left side of the header', () => {

        let root
        let menuElement
        let dateElement
        let titleElement
        const currentDate = 'Saturday, Jul 15th'

        beforeAll(() => {
            root = setup().find('section > div.left-side')
            menuElement = root.find('a.h-menu')
            dateElement = root.find('div.h-date')
            titleElement = root.find('div.h-title')
        })

        test('has a menu icon wrapped in a tag', () => {
            expect(menuElement.length).toBe(1)
        })

        test('has a menu icon as a value', () => {
            expect(menuElement.text()).toBe('☰')
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
        let header
        let titleElement


        beforeAll(() => {
            header = setup(props)
            titleElement = header.find('[data-test="currently"]')
        })

        it('should match the snapshot', () => {
            expect(header).toMatchSnapshot()
        })

        it('should should show title with the exerciseName = Pull Up', () => {
            expect(titleElement.text()).toBe('Pull Up')
        })

    })

})
