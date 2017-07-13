/* global expect, describe, beforeAll, beforeEach, fdescribe */
/* eslint-env jest */

import React from 'react'
import { _Header as Header } from './Header'
import { shallow } from 'enzyme'

const setup = () => {
    const props = {
        exerciseSession: {
            day: 'Monday'
        },
        pingSession: () => {}
    }

    return shallow(<Header {...props} />)
}

beforeAll(() => {
    console.log('before all')
})

describe('Header component', () => {

    beforeEach(() => {
        console.log('before')
    })

    test('shows some static strings', () => {
        const wrapper = setup()

        expect(wrapper.find('h4').length).toBe(1)
        expect(wrapper.find('h4').text()).toBe('I am a header')
    })

    test('shows 3 a tags with days (MONDAY, WEDENSDAY, FRIDAY) ', () => {
        const wrapper = setup()

        expect(wrapper.find('a').length).toBe(3)

        const [day1, day2, day3] = wrapper.find('a').nodes

        expect(day1.key).toBe('MONDAY')
        expect(day2.key).toBe('WEDENSDAY')
        expect(day3.key).toBe('FRIDAY')

    })

})
