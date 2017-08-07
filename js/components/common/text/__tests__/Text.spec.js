import React from 'react'
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import { configureStore } from '../../../../state/store'
import { setLocale } from 'react-redux-i18n'
import { Text } from '../Text'

describe('Text component', () => {
    let store, setup
    beforeEach(() => {
        store = configureStore()

        setup = () => {
            const wrapper = render(
                <Provider store={store}>
                    <Text text='greeting' />
                </Provider>
            )

            return {
                wrapper
            }
        }
    })

    it('should render defaults, which is `en` version of greeting', () => {
        const { wrapper } = setup()
        expect(wrapper.text()).toMatchSnapshot()
        expect(wrapper.text()).toBe('Hello World!')
    })

    it('should render `ru` version of greeting', () => {
        store.dispatch(setLocale('ru'))
        const { wrapper } = setup()
        expect(wrapper.text()).toMatchSnapshot()
        expect(wrapper.text()).toBe('Привет мир!')
    })

    it('should render `ee` version of greeting', () => {
        store.dispatch(setLocale('ee'))
        const { wrapper } = setup()
        expect(wrapper.text()).toMatchSnapshot()
        expect(wrapper.text()).toBe('Tere maailm!')
    })
})
