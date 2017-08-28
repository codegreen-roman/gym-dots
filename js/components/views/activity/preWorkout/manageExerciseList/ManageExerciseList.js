import React, { Component } from 'react'
import { ExerciseList } from './ExerciseList'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { object, func } from 'prop-types'
import { exercisesOrderChange } from '../../../../../state/actions/index'

class _ManageExerciseList extends Component {

    render() {
        const {
            exercises: { upcoming, completed, skipped },
            onOrderChange } = this.props

        return (
            <div>
                <span>{upcoming.length === 0 ? 'You got no exercises' : null}</span>
                <ExerciseList key='upcoming' list={upcoming} title='upcoming' onOrderChangeClick={onOrderChange} />
                <ExerciseList key='completed' list={completed} title='completed' />
                <ExerciseList key='skipped' list={skipped} title='skipped' />
            </div>
        )
    }
}

_ManageExerciseList.propTypes = {
    exercises: object.isRequired,
    onOrderChange: func.isRequired
}

const mapStateToProps = ({ exercises, sessionId, name }) => {
    return {
        exercises,
        sessionId,
        name
    }
}

const mapActionsToProps = dispatch => {
    return {
        onOrderChange: compose(dispatch, exercisesOrderChange)
    }
}

export { _ManageExerciseList }
export const ManageExerciseList = connect(mapStateToProps, mapActionsToProps)(_ManageExerciseList)
