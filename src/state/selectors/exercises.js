import { createSelector } from 'reselect'
import { allListsEmpty, notMissing } from '../../components/views/activity/preWorkout/manageExerciseList/ManageExerciseList.helper'
import { identity } from 'ramda'

const checkEmptyAndNotMissingKey = ({ upcoming = [], skipped = [], sessionKey = '' }) =>
    allListsEmpty([upcoming, skipped]) && notMissing(sessionKey)
export const sessionDoneSelector = createSelector(checkEmptyAndNotMissingKey, identity)
