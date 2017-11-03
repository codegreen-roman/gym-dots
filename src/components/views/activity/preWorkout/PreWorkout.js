import React from 'react'
import { ErrorBoundary } from '../../../common/error-boundary/ErrorBoundary'
import { ManageExerciseList } from './manageExerciseList/ManageExerciseList.connect'

// pre exercise
export const PreWorkout = () => {
    return (
        <ErrorBoundary>
            <ManageExerciseList />
        </ErrorBoundary>
    )
}
