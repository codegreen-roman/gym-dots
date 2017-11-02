import React, { Component } from 'react'
import { ExerciseList } from './ExerciseList'
import { isEmpty } from 'ramda'
import { toWritableResults } from './ManageExerciseList.helper'
import { func, bool, string, array } from 'prop-types'
import { branch, RenderNothing } from '@utils/helpers'

export const Congrats = ({sessionKey, sessionDone}) => branch(sessionDone, <h2>Your session {sessionKey} is COMPLETED!</h2>, <RenderNothing />)

Congrats.propTypes = {
    sessionKey: string,
    sessionDone: bool
}

export const NoExercises = ({upcoming}) => branch(isEmpty(upcoming), <span>You got no exercises yet</span>, <RenderNothing />)

NoExercises.propTypes = {
    upcoming: array
}

export class ManageExerciseList extends Component {
    static propTypes = {
        upcoming: array.isRequired,
        completed: array.isRequired,
        skipped: array.isRequired,
        onOrderChange: func.isRequired,
        saveResults: func.isRequired,
        sessionKey: string,
        sessionDone: bool.isRequired
    }

    componentDidMount() {
        const { sessionDone, sessionKey, completed, saveResults } = this.props
        if (sessionDone) {

            saveResults({
                [sessionKey]: toWritableResults(completed)
            })
        }
    }

    render() {
        const { sessionDone, sessionKey, upcoming, completed, skipped, onOrderChange, } = this.props

        return (
            <div>
                <Congrats sessionDone={sessionDone} sessionKey={sessionKey} />
                <NoExercises upcoming={upcoming} />
                <ExerciseList key='upcoming' list={upcoming} title='upcoming' onOrderChangeClick={onOrderChange} />
                <ExerciseList key='completed' list={completed} title='completed' />
                <ExerciseList key='skipped' list={skipped} title='skipped' />
            </div>
        )
    }
}
