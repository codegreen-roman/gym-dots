import React from 'react'
import { _Footer as Footer } from './Footer'
import { shallow } from 'enzyme'

const setup = () => {

    const props = {
        fireStartWorkout: () => ({}),
        blocked: false
    }

    return shallow(<Footer {...props} />)
}

describe('Footer component', () => {

    test('has footer type of the root component', () => {
        const wrapper = setup()
        expect(wrapper.type()).toBe('footer')
    })

})
