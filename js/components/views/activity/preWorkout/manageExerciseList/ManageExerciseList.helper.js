import { compose, all, isEmpty, not, reduce } from 'ramda'

export const notMissing = compose(not, isEmpty)
export const allListsEmpty = all(isEmpty)
export const toWritableResults = reduce((acc, { exerciseKey, allDone }) => ({
    ...acc,
    [exerciseKey]: allDone
}), {})
