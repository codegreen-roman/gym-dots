/* global expect, describe, beforeAll, beforeEach, fdescribe, xtest */
/* eslint-env jest */

import React from 'react'
import { _Footer as Footer } from './Footer'
import { shallow } from 'enzyme'

const setup = () => shallow(<Footer />)

describe('Footer component', () => {

    test('has footer type of the root component', () => {
        const wrapper = setup()
        expect(wrapper.type()).toBe('footer')
    })

})
