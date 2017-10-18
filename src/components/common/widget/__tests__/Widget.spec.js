import React from 'react'
import { Widget } from '../Widget'
import { shallow } from 'enzyme'

const defaultProps = {
    iconName: 'facebook',
    iconColor: 'red',
    dataNumber: 20,
    dataUnits: 'reps',
    viewBox: '0 0 23 23',
    height: 23,
    width: 23
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
