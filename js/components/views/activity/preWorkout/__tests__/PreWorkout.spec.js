import React from 'react'
import { PreWorkout } from '../PreWorkout'
import { shallow } from 'enzyme'

const setup = () => {

    const props = {}

    return {
        component: shallow(<PreWorkout {...props} />),
        props
    }
}

describe('PreWorkout component', () => {
    it('should contain one ManageExerciseList component', () => {
        const { component } = setup()
        expect(component.find('Connect(ManageExerciseList)').length).toBe(1)
    })

    it('should match the snapshot', () => {
        const { component } = setup()
        expect(component).toMatchSnapshot()
    })
})
