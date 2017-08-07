import React from 'react'
import { shallow } from 'enzyme'
import { _ToggleMenu as ToggleMenu } from '../ToggleMenu'
import { translations } from '../../../../i18n/translations'

const props = {
    translations
}

const setup = props => {
    const actions = {
        changeLanguage: jest.fn()
    }

    const component = shallow(<ToggleMenu {...props} {...actions} />)

    return {
        component,
        select: component.find('select'),
        actions,
        props
    }
}

describe('ToggleMenu component', () => {
    it('should render', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    })

    it('should have options length same as of keys in translations object', () => {
        const { select } = setup(props)
        const length = Object.keys(props.translations).length
        expect(select.children().length).toBe(length)
    })

    describe('onChange', () => {
        it('should pass a selected value to the onChange handler', () => {
            const value = 'en'
            const { component, actions } = setup(props)
            expect(component).toMatchSnapshot()

            component.find('select').simulate('change', {
                target: { value }
            })

            expect(actions.changeLanguage).toBeCalledWith(value)
            expect(actions.changeLanguage).toHaveBeenCalledTimes(1)
            expect(component).toMatchSnapshot()
        })
    })
})
