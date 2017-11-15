import React from 'react'
import { Footer } from '../Footer'
import { mount, render, shallow } from 'enzyme'
import { findByDataAttr } from '../../../../utils/testUtils'
import { conditionalRender } from '../Footer'


const setupProps = (newProps = {}) => ({
    fireStartWorkout: jest.fn(),
    loadDefaults: jest.fn(),
    onSetFailed: jest.fn(),
    onSetDone: jest.fn(),
    fireCompleteExercise: jest.fn(),
    blocked:false,
    training: false,
    shouldEndExercise: false,
    hidden:false,
    currentResults: [true, true, true, true, true],
    nextExercise: {
        exerciseKey: 'thisIsTheUniqueKey'
    },
    ...newProps
})

const setup = (newProps) => {

    const props = setupProps(newProps)

    return {
        component: mount(<Footer {...props} />),
        wrapper: render(<Footer {...props} />),
        shallowWrapper: shallow(<Footer {...props} />),
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
            const { component } = setup({blocked: true})
            expect(component).toMatchSnapshot()
        })
    })

    describe('clicking on a start workout button', () => {
        it('should call fireStartWorkout function', () => {
            const { component, props } = setup()
            findByDataAttr(component, 'startButton').first().simulate('click')

            expect(props.fireStartWorkout).toHaveBeenCalledTimes(1)
        })
    })

    describe('in training status', () => {

        it('should show 2 buttons', () => {
            const { component } = setup({ training: true })

            const buttons = component.find('button')
            expect(buttons.length).toBe(2)
        })

        it('show failed button', () => {
            const { wrapper } = setup({ training: true })

            const button = findByDataAttr(wrapper, 'failButton').first()
            expect(button.text()).toBe('Failed')
        })

        it('show done button', () => {
            const { wrapper } = setup({ training: true })

            const button = findByDataAttr(wrapper, 'doneButton').first()
            expect(button.text()).toBe('Done')
        })

        it('matches the previous snapshot', () => {
            const { component } = setup({ training: true })
            expect(component).toMatchSnapshot()
        })
    })

    describe('shouldEndExercise prop is true', () => {
        it('should call fireCompleteExercise function', () => {

            const { props, shallowWrapper } = setup({ training: true })

            shallowWrapper.setProps({ shouldEndExercise: true }, () => {
                expect(props.fireCompleteExercise).toHaveBeenCalledTimes(1)
                expect(props.fireCompleteExercise).toHaveBeenCalledWith(
                    'thisIsTheUniqueKey',
                    [true, true, true, true, true]
                )
            })

        })
    })

    describe('.conditionalRender', () => {

        it('should render null', () => {
            const { component, props } = setup({ hidden: true })
            const renderResult = conditionalRender(props)

            expect(component.find('footer').children().length).toBe(0)
            expect(renderResult).toMatchSnapshot()
        })

        it('should render FooterWorkoutStart', () => {
            const { component, props } = setup()
            const renderResult = conditionalRender(props)

            expect(component.find('withHandlers(_FooterWorkoutStart)').exists()).toBe(true)
            expect(renderResult).toMatchSnapshot()
        })

        it('should render FooterWorkoutControls', () => {
            const { component, props } = setup({ training: true })
            const renderResult = conditionalRender(props)

            expect(component.find('FooterWorkoutControls').exists()).toBe(true)
            expect(renderResult).toMatchSnapshot()
        })

    })

})
