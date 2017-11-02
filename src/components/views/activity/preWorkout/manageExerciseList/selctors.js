import { createSelector } from 'reselect'
import { allListsEmpty } from './ManageExerciseList.helper'
import { identity } from 'ramda'
import { notEmpty } from '@utils/helpers'

const checkEmptyAndNotMissingKey = ({ upcoming = [], skipped = [], sessionKey = '' }) =>
    allListsEmpty([upcoming, skipped]) && notEmpty(sessionKey)
export const sessionDoneSelector = createSelector(checkEmptyAndNotMissingKey, identity)
