import React from 'react'
import { _Footer as Footer } from './Footer'
import { mount } from 'enzyme'

const setup = (blocked = false) => {

    const props = {
        fireStartWorkout: jest.fn(),
        loadDefaults: jest.fn(),
        blocked
    }

    return {
        component: mount(<Footer {...props} />),
        props
    }
}

describe('Footer component', () => {

    describe('snapshot not blocked', () => {
        it('matches the previous snapshot', () => {
            const { component } = setup()
            expect(component).toMatchSnapshot()
        })
    })

    describe('snapshot blocked', () => {
        it('matches the previous snapshot', () => {
            const { component } = setup(true)
            expect(component).toMatchSnapshot()
        })
    })

    describe('clicking on AButton', () => {
        it('should call fireStartWorkout function', () => {
            const { component, props } = setup()
            component.find('button').simulate('click')

            expect(props.fireStartWorkout).toHaveBeenCalledTimes(1)
        })
    })

    describe('.componentDidMount', () => {
        it('should call the loadDefaults', () => {
            const { props } = setup()
            expect(props.loadDefaults).toHaveBeenCalledTimes(1)
        })
    })

})
