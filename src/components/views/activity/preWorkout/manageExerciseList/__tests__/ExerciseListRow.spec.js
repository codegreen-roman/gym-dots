import React from 'react'
import { shallow, mount } from 'enzyme'
import { ExerciseListRow } from '../ExerciseListRow'

const exampleExercise = {
    exerciseKey: 'xxy',
    restTime: 90,
    name: 'Push-ups',
    sets: 5,
    reps: 20,
    weight: 0,
    results: []
}

const setup = () => {
    const defaultProps = {
        exercise: exampleExercise,
        onOrderChangeClick: jest.fn()
    }

    const shallowWrapper = shallow(<ExerciseListRow {...defaultProps} />)
    const mountWrapper= mount(<ExerciseListRow {...defaultProps} />)

    return {
        shallowWrapper,
        mountWrapper,
        defaultProps,
        exerciseDetails: shallowWrapper.find('[data-test="exercise-details"]')
    }
}

describe('ExerciseListRow component', () => {

    it('should render exercise', () => {
        const { shallowWrapper } = setup()
        expect(shallowWrapper).toMatchSnapshot()
    })

    it('should have matching text', () => {
        const { exerciseDetails } = setup()
        expect(exerciseDetails.text()).toMatch(/^0 kg x 20 reps x 5 set/)
    })

    it('should render same props as passed', () => {
        const { mountWrapper, defaultProps } = setup()
        expect(mountWrapper.props().sets).toEqual(defaultProps.sets)
        expect(mountWrapper.props().weight).toEqual(defaultProps.weight)
        expect(mountWrapper.props().reps).toEqual(defaultProps.reps)
        expect(mountWrapper.props().name).toEqual(defaultProps.name)
        expect(mountWrapper.props().restTime).toEqual(defaultProps.restTime)
        expect(mountWrapper.props().results).toEqual(defaultProps.results)
    })

    describe('Clicking on a ExerciseListRow', () => {
        it('should call actions.onRowClick', () => {
            const { mountWrapper, defaultProps } = setup()
            mountWrapper.simulate('click')
            expect(defaultProps.onOrderChangeClick).toHaveBeenCalled()
            expect(defaultProps.onOrderChangeClick).toHaveBeenCalledTimes(1)
        })
    })
})
