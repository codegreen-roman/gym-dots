import React from 'react'
import { shallow, mount } from 'enzyme'
import { ExerciseListRow } from '../ExerciseListRow'

const setup = props => {
    const actions = {
        onRowClick: jest.fn()
    }

    const wrapper = shallow(<ExerciseListRow {...props} {...actions} />)
    const mounted = mount(<ExerciseListRow {...props} {...actions} />)

    return {
        wrapper: wrapper,
        mounted: mounted,
        actions: actions,
        exerciseDetails: wrapper.find('[data-test="exercise-details"]')
    }
}

describe('ExerciseListRow component', () => {
    let props
    beforeEach(() => {
        props = {
            name: 'Push-ups',
            exerciseKey: 'zzt',
            sets: 5,
            reps: 20,
            weight: 0,
            onRowClick: jest.fn()
        }
    })

    it('should render exercise', () => {
        const { wrapper } = setup(props)
        expect(wrapper).toMatchSnapshot()
    })

    it('should have matching text', () => {
        const { exerciseDetails } = setup(props)
        expect(exerciseDetails.text()).toMatch(/^0 kg x 20 reps x 5 set/)
    })

    it('should render same props as passed', () => {
        const { mounted } = setup(props)
        expect(mounted.props().sets).toEqual(5)
        expect(mounted.props().weight).toEqual(0)
        expect(mounted.props().reps).toEqual(20)
        expect(mounted.props().name).toEqual('Push-ups')
    })

    describe('Clicking on a ExerciseListRow', () => {
        it('should call actions.onRowClick', () => {
            const { wrapper, actions } = setup(props)
            wrapper.simulate('click')
            expect(actions.onRowClick).toBeCalled()
        })
    })
})
