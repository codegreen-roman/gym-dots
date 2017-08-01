import React from 'react'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { App } from './App'

const setup = () => {
    const store = configureMockStore()()
    const wrapper = shallow(<App store={store} />)

    return {
        store,
        wrapper
    }
}

describe('App', () => {
    test('renders without crashing', () => {
        const { wrapper } = setup()
        expect(wrapper).toMatchSnapshot()
    })
})
