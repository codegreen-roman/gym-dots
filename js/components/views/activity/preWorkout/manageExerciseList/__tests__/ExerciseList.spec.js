import React from 'react'
import { shallow } from 'enzyme'
import { ExerciseList } from '../ExerciseList'
import { ExerciseListRow } from '../ExerciseListRow'

describe('ExerciseList component', () => {
    const props = {
        title: 'Some title',
        list: [
            {
                exerciseId: '',
                restTime: 90,
                name: 'Push-ups',
                sets: 5,
                reps: 20,
                weight: 0,
                results: []
            },
            {
                exerciseId: '',
                restTime: 30,
                name: 'Australian pull-ups',
                sets: 5,
                reps: 12,
                weight: 0,
                results: []
            }
        ]
    }

    const setup = props => {
        const actions = {
            onOrderChangeClick: jest.fn()
        }

        const component = shallow(<ExerciseList {...props} {...actions} />)

        return {
            component,
            actions,
            props,
            title: component.find('[data-test="list-title"]'),
            list: component.find('[data-test="list"]'),
            row: component.find(ExerciseListRow)
        }
    }

    it('should render without crashing', () => {
        const { component } = setup(props)
        expect(component).toMatchSnapshot()
    })

    it('should have list of type ul', () => {
        const { list } = setup(props)
        expect(list.node.type).toBe('ul')
    })

    it('should have length of rows to be 2', () => {
        const { row } = setup(props)
        expect(row.length).toBe(2)
    })

    it('should have list header of type span', () => {
        const { title } = setup(props)
        expect(title.node.type).toBe('span')
    })

    it('should have list header with title matching text of prop title', () => {
        const { title } = setup(props)
        expect(title.text()).toMatch(/^Some title/)
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
            const { list } = setup(props)
            expect(list).toMatchSnapshot()
        })

        it('should have length of rows to be 0', () => {
            const { row } = setup(props)
            expect(row.length).toBe(0)
        })
    })

    describe.skip('Clicking on a row', () => {
        let props
        beforeEach(() => {
            props = {
                title: '',
                list: []
            }
        })
        it('should call onOrderChangeClick function', () => {
            const { row, actions } = setup(props)
            row.at(0).simulate('click')
            expect(actions.onOrderChangeClick).toHaveBeenCalled()
        })

        it('should call onOrderChangeClick once', () => {
            const { row, actions } = setup(props)
            row.at(0).simulate('click')
            expect(actions.onOrderChangeClick).toHaveBeenCalledTimes(1)
        })
    })
})
