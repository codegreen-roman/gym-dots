/* global expect, describe, beforeAll, beforeEach, fdescribe, xtest */
/* eslint-env jest */

import React from 'react'
import { _Header as Header } from './Header'
import { shallow } from 'enzyme'
import moment from 'moment'

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
        let menuElement = null
        let dateElement = null
        let titleElement = null
        const currentDate = moment().format('dddd, MMM Do')

        beforeAll(() => {
            root = setup().find('section > div.left-side')
            menuElement = root.find('a.h-menu')
            dateElement = root.find('div.h-date')
            titleElement = root.find('div.h-title')
        })

        test('has a menu icon wrapped in a tag', () => {
            expect(menuElement.length).toBe(1)
        })

        test('has a menu icon as a value', () => {
            expect(menuElement.text()).toBe('☰')
        })

        test('has dateElement with a current date value', () => {
            expect(dateElement.text()).toBe(currentDate)
        })

        test('has titleElement with a value Start Workout', () => {
            expect(titleElement.text()).toBe('Start Workout')
        })
    })

})
