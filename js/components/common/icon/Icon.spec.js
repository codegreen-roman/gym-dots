import React from 'react'
import { render } from 'enzyme'
import { Icon } from './Icon'

describe('Icon Component', () => {
    it('renders with defaults', () => {
        const wrapper = render(<Icon icon='facebook' color='grey' />)
        expect(wrapper).toMatchSnapshotWithGlamor()
    })
})
