import { connect } from 'react-redux'
import { sessionDoneSelector } from './selctors'
import { exercisesOrderChange, saveExercisesResults } from '../../../../../state/actions'
import { compose } from 'ramda'
import { ManageExerciseList as _ManageExerciseList } from './ManageExerciseList'

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

export const ManageExerciseList = connect(mapStateToProps, mapActionsToProps)(_ManageExerciseList)
