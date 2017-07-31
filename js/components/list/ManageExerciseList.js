import React, { Component } from 'react'
import { ExerciseList } from './ExerciseList'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { object, func } from 'prop-types'
import { fetchExercises, exercisesOrderChange } from '../../state/actions'

class _ManageExerciseList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchExercises()
    }

    render() {
        const { exercises: { upcoming, completed, skipped }, onOrderChange } = this.props
        return (
            <div>
                <ExerciseList key='upcoming' exercises={upcoming} title='upcoming' onOrderChangeClick={onOrderChange} />
                <ExerciseList key='completed'  exercises={completed} title='completed' />
                <ExerciseList key='skipped'  exercises={skipped} title='skipped' />
            </div>
        )
    }
}

_ManageExerciseList.propTypes = {
    exercises: object.isRequired,
    fetchExercises: func.isRequired,
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
        fetchExercises: compose(dispatch, fetchExercises),
        onOrderChange: compose(dispatch, exercisesOrderChange)
    }
}

export { _ManageExerciseList }
export const ManageExerciseList = connect(mapStateToProps, mapActionsToProps)(_ManageExerciseList)
