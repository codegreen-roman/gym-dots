import React from 'react'
import { Button, LoginButton, LinkButton } from '../Button'
import { mount, shallow } from 'enzyme'
import { MenuIcon, FacebookIcon } from '../../icon/SvgIcon'

const defaultProps = {
    onClickAction: jest.fn(),
    children: null,
}

const setup = (props = defaultProps) => {
    return {
        mountWrapper: mount(<Button {...props} />),
        shallowWrapper: shallow(<Button {...props} />),
        props
    }
}

describe('Button', () => {

    it('should render as expected', () => {
        const { shallowWrapper } = setup()
        expect(shallowWrapper).toMatchSnapshot()
    })

    it('should invoke onClickAction', () => {
        const { mountWrapper } = setup()
        mountWrapper.simulate('click')
        expect(typeof mountWrapper.props().onClickAction === 'function').toBeTruthy()
        expect(mountWrapper.props().onClickAction).toHaveBeenCalled()
        expect(mountWrapper.props().onClickAction).toHaveBeenCalledTimes(1)
    })

    it('should spread attributes', () => {
        const mountWrapper = mount(<Button data-test='btn' disabled={false} {...defaultProps} />)
        expect(mountWrapper.props()['data-test']).toBe('btn')
        expect(mountWrapper.props().disabled).toBe(false)
    })

    describe('Login button', () => {
        it('should render login button with icon', () => {
            const mountWrapper = mount(<LoginButton {...defaultProps}><FacebookIcon /></LoginButton>)
            expect(mountWrapper).toMatchSnapshot()
        })

        it('should call action on login button click', () => {
            const mountWrapper = mount(<LoginButton {...defaultProps}><MenuIcon /></LoginButton>)
            mountWrapper.simulate('click')
            expect(mountWrapper.props().onClickAction).toHaveBeenCalled()
        })
    })

    describe('Link button', () => {
        it('should render linkbutton wrapping menu icon', () => {
            const mountWrapper = mount(<LinkButton {...defaultProps}><MenuIcon /></LinkButton>)
            expect(mountWrapper).toMatchSnapshot()
        })

        it('should call action on click', () => {
            const mountWrapper = mount(<LinkButton {...defaultProps}><MenuIcon /></LinkButton>)
            mountWrapper.simulate('click')
            expect(mountWrapper.props().onClickAction).toHaveBeenCalled()
        })
    })

})
