import React from 'react'
import { shallow, mount } from 'enzyme'
import {
    MenuIcon,
    FacebookIcon,
    TwitterIcon,
    GuestIcon,
    DumbbellsIcon,
    CheckIcon
} from '../SvgIcon'
import { icons24, icons36 } from '../../../../utils/icons'

const viewbox36 = '0 0 36 36'

const setup = () => {

    const defaultProps = {
        big: false,
        viewBox: '0 0 24 24'
    }

    return {
        defaultProps,
        mountWrapper: mount(<FacebookIcon {...defaultProps} />),
        shallowWrapper: shallow(<FacebookIcon {...defaultProps} />)
    }
}

describe('Icon Component', () => {

    test('mathGlamorSnapshot', () => {
        const { shallowWrapper } = setup()
        expect(shallowWrapper).toMatchSnapshotWithGlamor()
    })

    test('renders with default viewBox', () => {
        const { shallowWrapper } = setup()
        expect(shallowWrapper.props().viewBox).toBe('0 0 24 24')
    })

    test('when viewbox is provided, changes accordingly', () => {
        const { shallowWrapper } = setup()
        shallowWrapper.setProps({ viewBox: viewbox36 })
        expect(shallowWrapper.props().viewBox).toBe(viewbox36)
        shallowWrapper.setProps({ viewBox: '0 0 24 24' }) // reset
    })

    test('should change viewbox to viewbox36 if big prop provided', () => {
        const wrapper = mount(<CheckIcon big />)
        expect(wrapper.find('svg').prop('viewBox')).toBe(viewbox36)
    })

    test('should have a matching FacebookIcon path with icons24', () => {
        const wrapper = mount(<FacebookIcon />)
        expect(wrapper.find('path').prop('d')).toBe(icons24.facebook)
    })

    test('should have a matching CheckIcon path with icons36', () => {
        const wrapper = mount(<CheckIcon />)
        expect(wrapper.find('path').prop('d')).toBe(icons36.check)
    })

    test('should spread props on svg', () => {
        const wrapper = mount(<CheckIcon data-test='icon' big />)
        expect(wrapper.find('svg').prop('data-test')).toBe('icon')
    })

    test('FacebookIcon match snapshot', () => {
        const wrapper = mount(<FacebookIcon data-test='facebook-icon' />)
        expect(wrapper).toMatchSnapshot()
    })

    test('TwitterIcon match snapshot', () => {
        const wrapper = mount(<TwitterIcon data-test='twitter-icon' />)
        expect(wrapper).toMatchSnapshot()
    })

    test('GuestIcon match snapshot', () => {
        const wrapper = mount(<GuestIcon data-test='guest-icon' />)
        expect(wrapper).toMatchSnapshot()
    })

    test('MenuIcon match snapshot', () => {
        const wrapper = mount(<MenuIcon data-test='menu-icon' />)
        expect(wrapper).toMatchSnapshot()
    })

    test('CheckIcon match snapshot', () => {
        const wrapper = mount(<CheckIcon data-test='check-icon' big />)
        expect(wrapper).toMatchSnapshot()
    })

    test('DumbblellsIcon match snapshot', () => {
        const wrapper = mount(<DumbbellsIcon data-test='dumbblells-icon' big />)
        expect(wrapper).toMatchSnapshot()
    })
})
