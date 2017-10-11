import React from 'react'
import { Header } from '../Header'
import { shallow } from 'enzyme'
import { merge } from 'ramda'
import { shallowToJson } from 'enzyme-to-json'

const defaultProps = {
    dateStr: 'Saturday, Jul 15th',
    subTitle: 'Start Workout',
    exerciseName: '',
    auth: {},
    loginWith: jest.fn(),
    loginGuest: jest.fn(),
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
            auth: {
                user: {
                    displayName: 'Roman'
                }
            },
            loginWith: jest.fn(),
            loginGuest: jest.fn(),
            logout: jest.fn(),
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

    describe('Shallow snapshot', () => {
        test('matches the previous', () => {
            const component = setup()
            const tree = shallowToJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})
