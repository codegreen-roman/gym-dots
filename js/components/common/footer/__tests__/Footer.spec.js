import React from 'react'
import { _Footer as Footer } from '../Footer'
import { mount } from 'enzyme'
import { findByDataAttr } from '../../../../utils/testUtils'

const setup = (blocked = false, training = false) => {

    const props = {
        fireStartWorkout: jest.fn(),
        loadDefaults: jest.fn(),
        blocked,
        training
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

    describe('in training status', () => {

        it('should show 2 buttons', () => {
            const { component } = setup(false, true)
            const buttons = component.find('button')

            expect(buttons.length).toBe(2)

        })

        it('show failed button', () => {
            const { component } = setup(false, true)
            const button = findByDataAttr(component, 'failButton')

            expect(button.text()).toBe('Failed')

        })

        it('show done button', () => {
            const { component } = setup(false, true)
            const button = findByDataAttr(component, 'doneButton')

            expect(button.text()).toBe('Done')

        })

        it('matches the previous snapshot', () => {
            const { component } = setup(false, true)
            expect(component).toMatchSnapshot()
        })
    })

})
