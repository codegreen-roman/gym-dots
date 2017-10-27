import React from 'react'
import { shallow } from 'enzyme'
import { _LanguageSelector as LanguageSelector } from '../LanguageSelector'
import { translations } from '../../../../i18n/translations'
import { compose, length, keys, prop } from 'ramda'

const props = {
    translations
}

const setup = props => {
    const actions = {
        handleChange: jest.fn()
    }

    const component = shallow(<LanguageSelector {...props} {...actions} />)

    return {
        component,
        select: component.find('select'),
        actions,
        props
    }
}

describe('LanguageSelector component', () => {
    it('should render', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    })

    it('should have options length same as of keys in translations object', () => {
        const { select } = setup(props)
        const app = compose(length, keys, prop('translations'))
        const objLength = app(props)
        expect(select.children().length).toBe(objLength)
    })

    describe('onChange', () => {
        it('should pass a selected value to the onChange handler', () => {
            const value = 'en'
            const { component, actions } = setup(props)
            expect(component).toMatchSnapshot()

            component.find('select').simulate('change', value)

            expect(actions.handleChange).toBeCalledWith(value)
            expect(actions.handleChange).toHaveBeenCalledTimes(1)
            expect(component).toMatchSnapshot()
        })
    })
})
