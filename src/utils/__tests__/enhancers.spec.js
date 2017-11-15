import { Aux, withToggle, renderWhen, nonOptimalStates } from '@utils/enhancers'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { func } from 'prop-types'
import R from 'ramda'

test('.Aux is auxiliary element returns array without wrapping div', () => {
    expect(typeof Aux === 'function').toBeTruthy()
    let wrapper = shallow(
        <Aux>
            <div>1</div>
            <div>2</div>
        </Aux>
    )
    expect(wrapper).toMatchSnapshot()
})


describe('withToggle HOC', () => {
    const setup = () => {
        const props =  {
            toggle: jest.fn(),
            toggledOn: false
        }
        // Dummy component
        const Component = ({ toggle }) => <p onClick={toggle}>Hi</p>
        Component.propTypes = { toggle: func.isRequired }
        // Dummy component wrapped with withToggle HOC
        const Wrapped = withToggle(Component)
        // HOC wrapped, passing toggle as jest.fn() mock
        const wrapper = mount(<Wrapped {...props} />)

        return wrapper
    }

    it('should have default value false', () => {
        const wrapper = setup()
        expect(wrapper.find('Component').props().toggledOn).toBe(false)
    })

    it('should be of type function', () => {
        const wrapper = setup()
        expect(typeof wrapper.find('Component').props().toggle).toBe('function')
        expect(typeof wrapper.find('Component').props().hide).toBe('function')
        expect(typeof wrapper.find('Component').props().show).toBe('function')
    })

    it('should toggle toggledOn value to opposite', () => {
        const wrapper = setup()
        const p = wrapper.find('p')
        p.simulate('click')
        expect(wrapper.find('Component').props().toggledOn).toBe(true)
    })

    // TODO: Fix needed. wrapper.find('Component').props().toggle is not called if checking with toHaveBeenCalled(), need help
    it.skip('should toggle', () => {
        const wrapper = setup()
        const p = wrapper.find('p')
        console.log(wrapper.debug())
        p.simulate('click')
        console.log(wrapper.debug())
        expect(wrapper.find('Component').props().toggle).toHaveBeenCalled()
    })
})

// TODO: Fix needed. Test not working due to unknown reason, need help
describe.skip('.renderWhen', () => {
    it('is a function', () => {
        expect(typeof renderWhen === 'function').toBeTruthy()
    })
    it('renders component when matches condition', () => {
        const Test = () => <p>Test</p>
        const enhance = R.compose(
            renderWhen(({value}) => value === true, () => <p>Hello</p>)
        )(Test)

        const Component = enhance()
        const wrapper = mount(<Component value />)
        expect(wrapper).toMatchSnapshot()
    })
})

// TODO: Fix needed. Test not working due to unknown reason, need help
describe.skip('.nonOptimalStates', () => {

    const setup = (Component) => {
        const ComponentB = () => <p>Error</p>
        const ComponentC = () => <p>Loading</p>

        const states = [
            { when: ({value}) => R.isNil(value), render: () => null },
            { when: ({value}) => R.equals('error', value), render: ComponentB },
            { when: ({value}) => R.equals('isLoading', value), render: ComponentC }
        ]

        const enhance = R.compose(nonOptimalStates(states))
        return enhance(Component)
    }

    it('is a function', () => {
        expect(typeof nonOptimalStates === 'function').toBeTruthy()
    })

    it('renders error component', () => {

        const ComponentTest = () => <p>Test</p>
        const wrapper = setup()
        const wrapped = mount(wrapper(<ComponentTest value='error' />))

        expect(wrapped.find('render').prop('value')).toBe('error')
        expect(wrapped).toMatchSnapshot()
    })

    it('renders null', () => {
        const ComponentTest = () => <p>Test</p>
        const wrapper = setup()
        const wrapped = mount(wrapper(<ComponentTest value={null} />))

        expect(wrapped.find('render').prop('value')).toBe(null)
        expect(wrapped).toMatchSnapshot()
    })

    it('renders loading component', () => {
        const ComponentTest = () => <p>Test</p>
        const wrapper = setup()
        const wrapped = mount(wrapper(<ComponentTest value='isLoading' />))

        expect(wrapped.find('render').props.value).toBe('isLoading')
        expect(wrapped).toMatchSnapshot()
    })
})

