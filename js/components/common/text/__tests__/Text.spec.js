import React from 'react'
import { shallow } from 'enzyme'
import { Text } from '../Text'

describe('Text component', () => {
    it('should render defaults', () => {
        const wrapper = shallow(<Text text='greeting' />)
        expect(wrapper).toMatchSnapshot()
    })
})
