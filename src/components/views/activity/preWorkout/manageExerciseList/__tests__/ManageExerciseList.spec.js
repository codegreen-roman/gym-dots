import React from 'react'
import { shallow, mount } from 'enzyme'
import { ManageExerciseList } from '../ManageExerciseList'
import { ExerciseList } from '../ExerciseList'

const props = {
    sessionKey: '',
    name: '',
    sessionDone: false,
    upcoming: [
        {
            exerciseKey: '1',
            restTime: 90,
            name: 'Push-ups',
            sets: 5,
            reps: 20,
            weight: 0,
            results: []
        },
        {
            exerciseKey: '2',
            restTime: 30,
            name: 'Australian pull-ups',
            sets: 5,
            reps: 12,
            weight: 0,
            results: []
        }
    ],
    skipped: [],
    completed: []
}

const setup = props => {
    const actions = {
        onOrderChange: jest.fn(),
        saveResults: jest.fn(),
    }

    const component = shallow(<ManageExerciseList {...props} {...actions} />)

    return {
        component,
        list: component.find(ExerciseList),
        actions,
        props,
        mounted: mount(<ManageExerciseList {...props} {...actions} />)
    }
}

describe('ManageExerciseList component', () => {

    describe('When one list have exercises others should return null', () => {
        it('should render one list and other are empty', () => {
            const { list } = setup(props)
            expect(list.at(0).props().list.length).toBe(2)
            expect(list.at(1).props().list.length).toBe(0)
            expect(list.at(2).props().list.length).toBe(0)
        })
    })

    describe('No exercises case', () => {
        it('should show \'You got no exercises yet\'', () => {
            const { component } = setup({
                ...props,
                upcoming: []
            })

            expect(component).toMatchSnapshot()
        })
    })
})
