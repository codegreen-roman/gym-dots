import { connect } from 'react-redux'
import { compose } from 'ramda'
import { allListsEmpty, notMissing } from './ManageExerciseList.helper'
import { ManageExerciseList as _ManageExerciseList } from './ManageExerciseList'
import { exercisesOrderChange } from './actions'

const mapStateToProps = ({ exercises: { upcoming, completed, skipped, sessionKey, name }, auth: { uid } }) => ({
    upcoming,
    completed,
    skipped,
    name,
    sessionKey,
    sessionDone: allListsEmpty([upcoming, skipped]) && notMissing(sessionKey),
    userKey: uid
})

const mapActionsToProps = dispatch => {
    return {
        onOrderChange: compose(dispatch, exercisesOrderChange)
    }
}

export const ManageExerciseList = connect(mapStateToProps, mapActionsToProps)(_ManageExerciseList)
