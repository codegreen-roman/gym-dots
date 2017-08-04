import React from 'react'
import { shallow } from 'enzyme'
import { _ManageExerciseList as ManageExerciseList } from '../ManageExerciseList'
import { ExerciseList } from '../ExerciseList'

const props = {
    sessionId: '',
    name: '',
    exercises: {
        upcoming: [],
        skipped: [],
        completed: []
    }
}

const setup = props => {
    const actions = {
        fetchExercises: jest.fn(),
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

describe('When one list have exercises others should return null', () => {
    it('should render one list and other are empty', () => {
        const { list } = setup(props)
        expect(list.at(0).length).toBe(1)
    })
})

describe('.componentDidMount', () => {
    it('should call fetchExercises', () => {
        const { actions } = setup(props)
        expect(actions.fetchExercises).toHaveBeenCalledTimes(1)
    })
})
