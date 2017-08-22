import React from 'react'
import { Footer } from '../Footer'
import { mount, render } from 'enzyme'

const setup = (blocked = false, training = false) => {

    const props = {
        fireStartWorkout: jest.fn(),
        loadDefaults: jest.fn(),
        onSetFailed: jest.fn(),
        onSetDone: jest.fn(),
        fireCompleteExercise: jest.fn(),
        hidden: false,
        shouldEndExercise: false,
        blocked,
        training
    }

    return {
        component: mount(<Footer {...props} />),
        wrapper: render(<Footer {...props} />),
        props
    }
}

describe('Footer component', () => {

    describe('snapshot not blocked', () => {

        it('matches the mounted snapshot', () => {
            const { component } = setup()
            expect(component).toMatchSnapshot()
        })

        it('matches the rendered snapshot', () => {
            const { wrapper } = setup()
            expect(wrapper).toMatchSnapshot()
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

    describe('in training status', () => {

        it('should show 2 buttons', () => {
            const { component } = setup(false, true)
            const buttons = component.find('button')

            expect(buttons.length).toBe(2)

        })

        it('show failed button', () => {
            const { wrapper } = setup(false, true)

            const button = wrapper.find('button').first()
            expect(button.text()).toBe('Failed')
        })

        it('show done button', () => {
            const { wrapper } = setup(false, true)

            const button = wrapper.find('button').last()
            expect(button.text()).toBe('Done')
        })

        it('matches the previous snapshot', () => {
            const { component } = setup(false, true)
            expect(component).toMatchSnapshot()
        })
    })

})
