import React from 'react'
import { WelcomePresenter } from '../Welcome.presenter'
import { mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { findByDataAttr } from '@utils/testUtils'

const setup = () => {
    const props = {
        dateStr: 'Saturday, Jul 15th',
        exerciseName: '',
        status: '',
        authWith: jest.fn(),
        authAnonymously: jest.fn()
    }

    const wrapper = mount(<WelcomePresenter {...props} />)

    return {
        wrapper,
        props,
        facebookBtn: wrapper.find('Button[data-test="facebook"]'),
        twitterBtn: wrapper.find('Button[data-test="twitter"]'),
        guestBtn: wrapper.find('Button[data-test="guest"]'),
        dateElement: findByDataAttr(wrapper, 'date')
    }
}

describe('WelcomePresenter component', () => {
    describe('Not logged in', () => {
        it('Contains WelcomeHeader + WelcomeBody', () => {
            const { wrapper } = setup()
            expect(wrapper.find('WelcomeBody').length).toBe(1)
            expect(wrapper.find('WelcomeHeader').length).toBe(1)
        })

        describe('Should contain', () => {
            test('dateElement with a date value Saturday, Jul 15th', () => {
                const { props, dateElement } = setup()
                expect(dateElement.text()).toBe(props.dateStr)
            })

            test('Login btns text should match', () => {
                const { facebookBtn, twitterBtn, guestBtn } = setup()
                expect(facebookBtn.text()).toBe('login with facebook')
                expect(twitterBtn.text()).toBe('login with twitter')
                expect(guestBtn.text()).toBe('login as guest')
            })
        })

        describe('When performing login', () => {
            test('should call the loginWith with twitter provider', () => {
                const { twitterBtn, props } = setup()
                twitterBtn.simulate('click')
                expect(props.authWith).toBeCalledWith('twitter')
            })

            test('should call the loginWith with facebook provider', () => {
                const { facebookBtn, props } = setup()
                facebookBtn.simulate('click')
                expect(props.authWith).toBeCalledWith('facebook')
            })

            test('should call the loginGuest', () => {
                const { guestBtn, props } = setup()
                guestBtn.simulate('click')
                expect(props.authAnonymously).toHaveBeenCalled()
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
})
