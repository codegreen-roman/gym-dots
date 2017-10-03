import React from 'react'
import { render } from 'enzyme'
import { UserImage } from '../UserImage'

const niceImage = 'https://pbs.twimg.com/profile_images/870699319183134720/IOqlC-IM_normal.jpg'

describe('UserImage component', () => {

    const setup = (image) => {
        return render(<UserImage image={image} />)
    }

    describe('for anonymous user', () => {
        it('should render nothing', () => {
            const wrapper = setup()
            expect(wrapper).toMatchSnapshotWithGlamor()
        })
    })

    describe('for a logged in user', () => {
        it('should render the image for the user', () => {
            const wrapper = setup(niceImage)
            expect(wrapper).toMatchSnapshotWithGlamor()
        })
    })

})
