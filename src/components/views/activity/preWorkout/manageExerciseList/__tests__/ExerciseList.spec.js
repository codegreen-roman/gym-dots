import React from 'react'
import { shallow, mount } from 'enzyme'
import { ExerciseList } from '../ExerciseList'
import R from 'ramda'


const props = {
    title: 'Some title',
    list: [
        {
            exerciseKey: 'xxy',
            restTime: 90,
            name: 'Push-ups',
            sets: 5,
            reps: 20,
            weight: 0,
            results: []
        },
        {
            exerciseKey: 'xyy',
            restTime: 30,
            name: 'Australian pull-ups',
            sets: 5,
            reps: 12,
            weight: 0,
            results: []
        }
    ]
}

const firstExerciseKey = R.compose(R.prop('exerciseKey'), R.head, R.take(1), R.prop('list'))(props)

const setup = props => {
    const actions = {
        onOrderChangeClick: jest.fn()
    }

    const component = shallow(<ExerciseList {...props} {...actions} />)
    const wrapper = mount(<ExerciseList {...props} {...actions} />)

    return {
        firstExerciseKey,
        component,
        wrapper,
        actions,
        props,
        title: component.find('[data-test="list-header"]'),
        list: component.find('[data-test="list"]'),
        row: component.find(`[data-test="exercise-${firstExerciseKey}"]`)
    }
}

describe('ExerciseList component', () => {

    it('should render without crashing', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    })

    it('should have list of type ul', () => {
        const { list } = setup(props)
        expect(list.getElement().type).toBe('ul')
    })

    it('should have 2 lis', () => {
        const { component } = setup(props)
        expect(component.find('li').length).toBe(2)
    })

    it('should have correct data-test attribute', () => {
        const { wrapper, firstExerciseKey } = setup(props)
        const firstRow = wrapper.find(`[data-test="exercise-row-${firstExerciseKey}"]`)
        expect(firstRow.props()['data-test']).toBe(`exercise-row-${firstExerciseKey}`)
    })

    it('should have list header', () => {
        const { title } = setup(props)
        expect(title).toMatchSnapshot()
    })

    it('should have list header with title matching text of prop title', () => {
        const { title } = setup(props)
        expect(title.childAt(1).text()).toMatch(/^Some title/)
    })

    describe('When list is empty and has length 0', () => {
        let props
        beforeEach(() => {
            props = {
                onOrderChangeClick: jest.fn(),
                title: '',
                list: []
            }
        })

        it('should not render the component and return null', () => {
            const { wrapper } = setup(props)
            expect(wrapper.find('[data-test="list"]').length).toBe(0)
        })

        it('should have length of rows to be 0', () => {
            const { row } = setup(props)
            expect(row.length).toBe(0)
        })
    })

    describe('Clicking on a row', () => {

        it('should match the snapshot', () => {
            const { wrapper } = setup(props)
            expect(wrapper).toMatchSnapshot()
        })

        it('should call onOrderChangeClick for every row - click', () => {
            const { wrapper, actions: { onOrderChangeClick } } = setup(props)
            const rows = wrapper.find('li')

            for (let r = 0; r < rows.length; r++) {
                rows.at(r).simulate('click')
            }

            expect(onOrderChangeClick).toHaveBeenCalledTimes(rows.length)
        })

        it('should call onOrderChangeClick with list item object', () => {
            const { wrapper, actions: { onOrderChangeClick } } = setup(props)
            const row = wrapper.find('li').at(0)

            row.simulate('click')

            expect(onOrderChangeClick).toHaveBeenCalledWith({
                exerciseKey: 'xxy',
                restTime: 90,
                name: 'Push-ups',
                sets: 5,
                reps: 20,
                weight: 0,
                results: []
            })

        })

    })
})
