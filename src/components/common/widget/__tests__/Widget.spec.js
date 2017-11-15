import React from 'react'
import { Widget } from '../Widget'
import { mount } from 'enzyme'
import { CheckIcon } from '../../icon/SvgIcon'
import { findByDataAttr } from '../../../../utils/testUtils'


const defaultProps = {
    dataNumber: 20,
    dataUnits: 'reps'
}

const setup = (props = defaultProps) => {
    const mountWrapper = mount(<Widget {...props}><CheckIcon data-test='check-icon' /></Widget>)
    return {
        mountWrapper,
        icon: findByDataAttr(mountWrapper, 'check-icon'),
        data: findByDataAttr(mountWrapper, 'data'),
        units: findByDataAttr(mountWrapper, 'units')
    }
}

describe('Widget', () => {
    test('renders without crashing', () => {
        const { mountWrapper } = setup()
        expect(mountWrapper).toMatchSnapshot()
    })

    test('contains all vital elements', () => {
        const { icon, data, units } = setup()
        expect(icon.exists()).toBe(true)
        expect(data.exists()).toBe(true)
        expect(units.exists()).toBe(true)
    })

    test('contains data', () => {
        const { data, units } = setup()
        expect(data.text()).toMatch(/20/)
        expect(units.text()).toBe(defaultProps.dataUnits)
    })
})
