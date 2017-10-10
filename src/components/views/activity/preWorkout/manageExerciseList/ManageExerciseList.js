import React, { Component } from 'react'
import { ExerciseList } from './ExerciseList'
import { connect } from 'react-redux'
import { compose, isEmpty } from 'ramda'
import { toWritableResults } from './ManageExerciseList.helper'
import { func, bool, string, array } from 'prop-types'
import { sessionDoneSelector } from './selctors'
import { exercisesOrderChange, saveExercisesResults } from '../../../../../state/actions'

class _ManageExerciseList extends Component {

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

_ManageExerciseList.propTypes = {
    upcoming: array.isRequired,
    completed: array.isRequired,
    skipped: array.isRequired,
    onOrderChange: func.isRequired,
    saveResults: func.isRequired,
    sessionKey: string,
    sessionDone: bool.isRequired
}

const mapStateToProps = ({ exercises }) => {

    const { upcoming, completed, skipped, sessionKey, name } = exercises
    return {
        upcoming,
        completed,
        skipped,
        name,
        sessionKey,
        sessionDone: sessionDoneSelector(exercises)
    }
}

const mapActionsToProps = dispatch => {
    return {
        saveResults: compose(dispatch, saveExercisesResults),
        onOrderChange: compose(dispatch, exercisesOrderChange)
    }
}

export { _ManageExerciseList }
export const ManageExerciseList = connect(mapStateToProps, mapActionsToProps)(_ManageExerciseList)
