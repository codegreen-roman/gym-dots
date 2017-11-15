import React from 'react'
import { render } from 'enzyme'
import { Arc } from '../Arc'


const setup = (updateProps = {}) => {
    const defaultProps = {
        d: 'M 205.1056516 79.0983006 A 100 100 0 0 0 127.3648178 11.5192247',
        arcClass: 'toBeDone',
        ...updateProps
    }

    return render(<Arc {...defaultProps} />)
}

describe('Arc Component', () => {
    test('should render correct color by default', () => {
        const wrapper = setup()
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should render correct color when completed', () => {
        const wrapper = setup({arcClass: 'completed'})
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should render correct color when failed', () => {
        const wrapper = setup({arcClass: 'failed'})
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should apply path when provided', () => {
        const wrapper = setup({
            arcClass: 'toBeDone',
            d: 'M 110 10 A 100 100 0 0 0 21.7052407 63.0528437'
        })
        expect(wrapper).toMatchSnapshot()
    })
})
