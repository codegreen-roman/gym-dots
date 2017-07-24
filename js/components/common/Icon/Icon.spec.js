// TODO: Move to separate Jest config folder
import { matcher, serializer } from 'jest-glamor-react'

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

import React from 'react'
import { render } from 'enzyme'
import { Icon } from './Icon'

describe('Icon Component', () => {

    it('renders with defaults', () => {
        const wrapper = render(<Icon icon='facebook' color='grey' />)
        expect(wrapper).toMatchSnapshotWithGlamor()
    })
})
