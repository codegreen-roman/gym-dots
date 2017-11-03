import { createSelector } from 'reselect'
import R, { identity, isEmpty } from 'ramda'

const getUndefinedForEmptyObject = R.ifElse(isEmpty, R.always(undefined), identity)

export const currentExerciseOrNil = createSelector(getUndefinedForEmptyObject, identity)
