import React from 'react'
import { shallow, mount } from 'enzyme'
import { ManageExerciseList } from '../ManageExerciseList'
import { ExerciseList } from '../ExerciseList'

const exampleExercise = {
    exerciseKey: '1',
    restTime: 90,
    name: 'Push-ups',
    sets: 5,
    reps: 20,
    weight: 0,
    results: []
}

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

    describe('Exercises are present in either of states possible', () => {
        it('upcoming present, others empty', () => {
            const { component } = setup({
                ...props,
                upcoming: [{...exampleExercise, ...{exerciseKey:'zzz0'}}],
            })
            expect(component).toMatchSnapshot()
        })
        it('upcoming, completed present, skipped is empty', () => {
            const { component } = setup({
                ...props,
                upcoming: [{...exampleExercise, ...{exerciseKey:'zzz0'}}],
                completed: [{...exampleExercise, ...{exerciseKey:'zzz1'}}]
            })
            expect(component).toMatchSnapshot()
        })

        it('upcoming, completed, skipped present', () => {
            const { component } = setup({
                ...props,
                upcoming: [{...exampleExercise, ...{exerciseKey:'zzz0'}}],
                completed: [{...exampleExercise, ...{exerciseKey:'zzz1'}}],
                skipped: [{...exampleExercise, ...{exerciseKey:'zzz2'}}]
            })
            expect(component).toMatchSnapshot()
        })

    })

    describe('sessionDone case', () => {
        it('should show session completed message', () => {
            const { component } = setup({
                ...props,
                sessionDone: true
            })
            expect(component).toMatchSnapshot()
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
