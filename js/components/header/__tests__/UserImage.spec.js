import { matcher, serializer } from 'jest-glamor-react'

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

import React from 'react'
import { mount } from 'enzyme'
import { UserImage } from '../UserImage'

describe('UserImage component', () => {

    const setup = () => mount(<UserImage />)

    it('should render the image for the user', () => {
        const wrapper = setup()
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

})
