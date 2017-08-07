import React from 'react'
import { func, string, number } from 'prop-types'
import { exerciseTitle, exerciseDetails } from './ExerciseList.glamor'

const onRowClick = () => {} // noop

const _ExerciseListRow = ({ name, weight, reps, sets, onRowClick, exerciseId }) => {
    return (
        <li data-test={`exercise-row-${exerciseId}`} onClick={onRowClick}>
            <h3 {...exerciseTitle}>
                {name}
            </h3>
            <span {...exerciseDetails}>
                {weight} kg x {reps} reps x {sets} sets
            </span>
        </li>
    )
}

_ExerciseListRow.defaultProps = {
    onRowClick
}

_ExerciseListRow.propTypes = {
    name: string.isRequired,
    weight: number.isRequired,
    reps: number.isRequired,
    sets: number.isRequired,
    onRowClick: func.isRequired
}

export const ExerciseListRow = _ExerciseListRow
