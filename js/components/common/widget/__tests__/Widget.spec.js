import React from 'react'
import { Widget } from '../Widget'
import { shallow } from 'enzyme'

const defaultProps = {
    iconName: 'facebook',
    iconColor: 'red',
    dataNumber: 20,
    dataUnits: 'reps'
}

const setup = (props = defaultProps) => {
    return shallow(<Widget {...props} />)
}

describe('Widget', () => {
    test('renders without crashing', () => {
        const { wrapper } = setup()
        expect(wrapper).toMatchSnapshot()
    })
})
