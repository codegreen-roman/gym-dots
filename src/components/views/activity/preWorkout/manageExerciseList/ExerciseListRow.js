import React from 'react'
import { func, string, number } from 'prop-types'
import {
    exerciseRow,
    exerciseDataWrapper,
    exerciseTitle,
    exerciseDetails,
    exerciseElementsWrapper,
    exerciseLine,
    exerciseDot
} from './ExerciseList.glamor'


const _ExerciseListRow = ({
    name,
    weight,
    reps,
    sets,
    exerciseKey,
    onRowClick
}) => {
    return (
        <li {...exerciseRow} data-test={`exercise-row-${exerciseKey}`} onClick={onRowClick}>
            <div {...exerciseElementsWrapper}>
                <div {...exerciseLine} />
                <div {...exerciseDot} />
            </div>
            <div {...exerciseDataWrapper}>
                <div {...exerciseTitle}>
                    {name}
                </div>
                <div {...exerciseDetails} data-test='exercise-details'>
                    {weight} kg x {reps} reps x {sets} sets
                </div>
            </div>
        </li>
    )
}

_ExerciseListRow.defaultProps = {
    onRowClick: () => {}
}

_ExerciseListRow.propTypes = {
    name: string.isRequired,
    weight: number.isRequired,
    reps: number.isRequired,
    sets: number.isRequired,
    exerciseKey: string.isRequired,
    onRowClick: func.isRequired
}

export const ExerciseListRow = _ExerciseListRow
