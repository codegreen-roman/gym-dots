import React from 'react'
import { shallow } from 'enzyme'
import { Icon } from '../Icon'

const defaultProps = {
    iconName: 'facebook'
}

const setup = (props = defaultProps) => {
    return shallow(<Icon {...props} />)
}

describe('Icon Component', () => {
    let wrapper
    let path

    beforeEach(() => {
        wrapper = setup()
        path = 'M6.491 19.991v-9.117H9.44l.442-3.557h-3.39V5.049c0-1.033.272-1.73 1.7-1.73H10V.14C9.686.097 8.607 0 7.358 0 4.74 0 2.957 1.66 2.957 4.695v2.622H0v3.557h2.957V20H6.49v-.009z'
    })

    test('renders with defaults', () => {
        expect(wrapper.props().viewBox).toBe('0 0 24 24')
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should render an svg', () => {
        expect(wrapper.name()).toBe('svg')
    })

    test('should have a matching iconName and path', () => {
        expect(wrapper.find('path').prop('d')).toBe(path)
    })

    test('should spread props on svg', () => {
        wrapper = shallow(<Icon iconName='facebook' data-test='icon' />)
        expect(wrapper.props()['data-test']).toBe('icon')
    })

    test('should overwrite viewBox prop', () => {
        wrapper = shallow(<Icon iconName='facebook' viewBox='0 0 32 32' />)
        expect(wrapper.props().viewBox).toBe('0 0 32 32')
    })

})
