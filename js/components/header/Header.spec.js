/* global expect, describe, beforeAll, beforeEach, fdescribe, xtest */
/* eslint-env jest */

import React from 'react'
import { _Header as Header } from './Header'
import { shallow } from 'enzyme'

const setup = () => {
    const props = {
        exerciseSession: {
            day: 'Monday'
        },
        pingSession: () => {
        }
    }

    return shallow(<Header {...props} />)
}

beforeAll(() => {

})

describe('Header component', () => {

    beforeEach(() => {

    })

    test('has section type of the root component', () => {
        const wrapper = setup()
        expect(wrapper.type()).toBe('section')
    })

    test('has 2 divs as 1st children', () => {
        const wrapper = setup()
        expect(wrapper.find('section > div').length).toBe(2)
    })

    describe('Left side of the header', () => {

        let root = null
        let menu = null
        let dateElement = null
        let titleElement = null

        beforeAll(() => {
            root = setup().find('section > div.left-side')
            menu = root.find('a')
            dateElement = root.find('div.h-date')
            titleElement = root.find('div.h-title')
        })

        test('has a menu icon wrapped in a tag', () => {
            expect(menu.length).toBe(1)
        })

        test('has a menu icon as a value', () => {
            expect(menu.text()).toBe('☰')
        })

        test('has dateElement not empty', () => {
            expect(dateElement.text()).not.toBe('')
        })

        test('has titleElement with a value Start Workout', () => {
            expect(titleElement.text()).toBe('Start Workout')
        })
    })

})
