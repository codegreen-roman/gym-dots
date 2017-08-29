import React from 'react'
import { shallow } from 'enzyme'
import { _ManageExerciseList as ManageExerciseList } from '../ManageExerciseList'
import { ExerciseList } from '../ExerciseList'

const props = {
    sessionKey: '',
    name: '',
    sessionDone: false,
    upcoming: [
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
    ],
    skipped: [],
    completed: []
}

const setup = props => {
    const actions = {
        onOrderChange: jest.fn()
    }

    const component = shallow(<ManageExerciseList {...props} {...actions} />)

    return {
        component,
        list: component.find(ExerciseList),
        actions,
        props
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
})
