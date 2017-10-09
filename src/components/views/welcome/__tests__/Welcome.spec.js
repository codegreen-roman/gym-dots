import React from 'react'
import { Welcome } from '../Welcome'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { findByDataAttr } from '@utils/testUtils'

const defaultProps = {
    dateStr: 'Saturday, Jul 15th',
    exerciseName: '',
    status: '',
    loginWith: jest.fn(),
    loginGuest: jest.fn()
}

const setup = (props = defaultProps) => {
    return shallow(<Welcome {...props} />)
}

describe('Welcome component', () => {

    describe('Not logged in', () => {

        const props = {
            dateStr: 'Saturday, Jul 15th',
            status: 'loggedOut',
            loginWith: jest.fn(),
            loginGuest: jest.fn()
        }

        let wrapper
        let twitterBtn
        let facebookBtn
        let guestBtn
        let dateElement
        const currentDate = 'Saturday, Jul 15th'

        beforeEach(() => {
            wrapper = setup(props)
            twitterBtn = findByDataAttr(wrapper, 'twitter')
            facebookBtn = findByDataAttr(wrapper, 'facebook')
            guestBtn = findByDataAttr(wrapper, 'guest')
            dateElement = findByDataAttr(wrapper, 'date')
        })

        describe('Should contain', () => {

            test('dateElement with a date value Saturday, Jul 15th', () => {
                expect(dateElement.text()).toBe(currentDate)
            })

            test('twitterBtn with text', () => {
                expect(twitterBtn.text()).toBe('login with twitter')
            })

            test('facebookBtn with text', () => {
                expect(facebookBtn.text()).toBe('login with facebook')
            })

            test('guestBtn with text', () => {
                expect(guestBtn.text()).toBe('login as guest')
            })
        })

        describe('When performing login', () => {

            test('should call the loginWith with twitter provider', () => {
                twitterBtn.simulate('click')
                expect(props.loginWith).toBeCalledWith('twitter')
            })

            test('should call the loginWith with facebook provider', () => {
                facebookBtn.simulate('click')
                expect(props.loginWith).toBeCalledWith('facebook')
            })

            test('should call the loginGuest', () => {
                guestBtn.simulate('click')
                expect(props.loginGuest).toHaveBeenCalled()
            })
        })

    })

    describe('Logged in', () => {

        const props = {
            dateStr: 'Saturday, Jul 15th',
            status: 'loggedIn',
            loginWith: jest.fn(),
            loginGuest: jest.fn()
        }

        let wrapper
        let twitterBtn
        let facebookBtn
        let guestBtn

        beforeEach(() => {
            wrapper = setup(props)
            twitterBtn = findByDataAttr(wrapper, 'twitter')
            facebookBtn = findByDataAttr(wrapper, 'facebook')
            guestBtn = findByDataAttr(wrapper, 'guest')
        })

        test('should not have login buttons', () => {
            expect(twitterBtn.length).toBe(0)
            expect(facebookBtn.length).toBe(0)
            expect(guestBtn.length).toBe(0)
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
