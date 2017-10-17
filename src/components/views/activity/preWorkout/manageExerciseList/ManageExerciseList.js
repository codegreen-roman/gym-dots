import React, { Component } from 'react'
import { ExerciseList } from './ExerciseList'
import { isEmpty } from 'ramda'
import { toWritableResults } from './ManageExerciseList.helper'
import { func, bool, string, array } from 'prop-types'

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

    congratulateUser() {
        const { sessionDone, sessionKey } = this.props

        if (sessionDone) {
            return (<h2>Your session {sessionKey} is COMPLETED!</h2>)
        }

        return null
    }

    render() {
        const { upcoming, completed, skipped, onOrderChange, } = this.props

        return (
            <div>
                {this.congratulateUser()}
                <span>{isEmpty(upcoming) ? 'You got no exercises yet' : null}</span>
                <ExerciseList key='upcoming' list={upcoming} title='upcoming' onOrderChangeClick={onOrderChange} />
                <ExerciseList key='completed' list={completed} title='completed' />
                <ExerciseList key='skipped' list={skipped} title='skipped' />
            </div>
        )
    }
}
