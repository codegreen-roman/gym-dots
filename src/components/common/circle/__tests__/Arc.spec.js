import React from 'react'
import { render } from 'enzyme'
import { Arc } from '../Arc'

const defaultProps = {
    d: 'M 205.1056516 79.0983006 A 100 100 0 0 0 127.3648178 11.5192247',
    arcClass: 'toBeDone'
}

const setup = (arcClass=defaultProps.arcClass, d = defaultProps.d) => {
    return render(<Arc d={d} arcClass={arcClass} />)
}

describe('Arc Component', () => {
    let wrapper
    let path

    beforeEach(() => {
        wrapper = setup()
        path = 'M 110 10 A 100 100 0 0 0 21.7052407 63.0528437'
    })

    test('should render correct color by default', () => {
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should render correct color when completed', () => {
        wrapper = setup('completed')
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should render correct color when failed', () => {
        wrapper = setup('failed')
        expect(wrapper).toMatchSnapshotWithGlamor()
    })

    test('should apply path when provided', () => {
        wrapper = setup('toBeDone', 'M 110 10 A 100 100 0 0 0 21.7052407 63.0528437')
        expect(wrapper).toMatchSnapshot()
    })

})
