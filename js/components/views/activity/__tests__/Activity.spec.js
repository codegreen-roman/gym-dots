import React from 'react'
import { Activity } from '../Activity'
import { shallow } from 'enzyme'

const setup = () => {

    const props = {
        match: {
            url: '/activity'
        }
    }

    return {
        component: shallow(<Activity {...props} />),
        props
    }
}

describe('Activity component', () => {
    it('should hold 3 routes and 1 redirect', () => {
        const { component } = setup()
        expect(component.find('Route').length).toBe(3)
        expect(component.find('Redirect').length).toBe(1)
    })

    it('should match the snapshot', () => {
        const { component } = setup()
        expect(component).toMatchSnapshot()
    })
})
