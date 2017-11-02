import { all, isEmpty, reduce } from 'ramda'

export const allListsEmpty = all(isEmpty)
export const toWritableResults = reduce((acc, { exerciseKey, allDone }) => ({
    ...acc,
    [exerciseKey]: allDone
}), {})
