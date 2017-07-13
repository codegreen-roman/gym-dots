/* global test, expect, xtest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { _Header as Header } from './Header'

const setup = () => {
    const props = {
        exerciseSession: {
            day: 'Monday'
        },
        pingSession: () => {}
    }

    return shallow(<Header {...props} />)
}

test('Details component snapshot test', () => {
    const component = setup()
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
})
