import React from 'react'
import { Exercise } from '../Exercise'
import { render } from 'enzyme'

const defaultProps = {
    status: 'started',
    exerciseId: '1111',
    restTime: 60,
    setsLeft: 5,
    sets: 5,
    reps: 8,
    weight: 100,
    results: []
}

const setup = (props = defaultProps) => {
    return {
        props,
        component: render(<Exercise {...props} />)
    }
}

describe('Exercise component', () => {
    it('should match the snapshot', () => {
        const { component } = setup()
        expect(component).toMatchSnapshot()
    })
})
