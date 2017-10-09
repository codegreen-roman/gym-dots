import React from 'react'
import { shallow } from 'enzyme'
import { Overlay } from '../Overlay'
import { Countdown } from '../Countdown'

const setup = (visible = false) => {
    const props = {
        visible,
        children: <Countdown />
    }

    return {
        wrapper: shallow(<Overlay {...props} />),
        props
    }
}

describe('Overlay Component', () => {
    it('should be hidden by default', () => {
        const { wrapper } = setup()
        expect(wrapper).toMatchSnapshot()
    })

    it('should be visible on the screen', () => {
        const { wrapper } = setup(true)
        expect(wrapper).toMatchSnapshot()
    })

    it('should be hidden on the screen', () => {
        const { wrapper } = setup(false)
        expect(wrapper).toMatchSnapshot()
    })
})
