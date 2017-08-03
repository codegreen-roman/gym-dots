import React from 'react'
import { shallow } from 'enzyme'
import { ExerciseList } from '../ExerciseList'
import { ExerciseListRow } from '../ExerciseListRow'

describe('ExerciseList component', () => {

    const props = {
        onOrderChangeClick: jest.fn(),
        title: '',
        list: [
            {
                'exerciseId': '',
                'restTime': 90,
                'name': 'Push-ups',
                'sets': 5,
                'reps': 20,
                'weight': 0,
                'results': []
            },
            {
                'exerciseId': '',
                'restTime': 30,
                'name': 'Australian pull-ups',
                'sets': 5,
                'reps': 12,
                'weight': 0,
                'results': []
            }
        ],
    }

    const setup = () => {
        return {
            component: shallow(<ExerciseList {...props} />),
            props
        }
    }

    it('renders without crashing', () => {
        const { component } = setup()
        expect(component).toMatchSnapshot()
    })

    it('list of type ul', () => {
        const { component } = setup()
        const list = component.find('[data-test="list"]')
        expect(list.node.type).toBe('ul')
    })

    it('title of type span', () => {
        const { component } = setup()
        const list = component.find('[data-test="list-title"]')
        expect(list.node.type).toBe('span')
    })

    it('has 2 lis as children', () => {
        const { component } = setup()
        expect(component.find(ExerciseListRow).length).toBe(2)
    })

    describe('When list is empty and has lenght 0', () => {
        let list, props

        beforeEach(() => {
            props = {
                onOrderChangeClick: jest.fn(),
                title: '',
                list: [],
            }
            list = shallow(<ExerciseList {...props} />)
        })

        it('should not render the component and return null', () => {
            expect(list).toMatchSnapshot()
        })

        it('length of children ExerciseListRows should be 0', () => {
            expect(list.find(ExerciseListRow).length).toBe(0)
        })
    })

    describe('Clicking on a row', () => {
        it('should call onOrderChangeClick is called once', () => {
            const { component, props } = setup()
            component.find(ExerciseListRow).at(0).simulate('click')
            expect(props.onOrderChangeClick).toHaveBeenCalledTimes(1)
        })
    })
})
