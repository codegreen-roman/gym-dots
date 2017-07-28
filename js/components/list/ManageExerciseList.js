import React, { Component } from 'react'
import { ExerciseList } from './ExerciseList'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { object, func } from 'prop-types'
import { fetchExercises } from '../../state/actions'

class _ManageExerciseList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchExercises()
    }

    render() {
        const { exercises: {current, upcoming, completed, skipped} } = this.props
        return (
            <div>
                <ExerciseList exercises={current} title='current' />
                <ExerciseList exercises={upcoming} title='upcoming' />
                <ExerciseList exercises={completed} title='completed' />
                <ExerciseList exercises={skipped} title='skipped' />
            </div>
        )
    }
}

_ManageExerciseList.propTypes = {
    exercises: object.isRequired,
    fetchExercises: func.isRequired
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
        fetchExercises: compose(dispatch, fetchExercises)
    }
}

export { _ManageExerciseList }
export const ManageExerciseList = connect(mapStateToProps, mapActionsToProps)(_ManageExerciseList)
