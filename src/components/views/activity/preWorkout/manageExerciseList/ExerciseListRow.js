import React from 'react'
import { func, object } from 'prop-types'
import {
    exerciseRow,
    exerciseDataWrapper,
    exerciseTitle,
    exerciseDetails,
    exerciseElementsWrapper,
    exerciseLine,
    exerciseDot
} from './ExerciseList.glamor'

export const ExerciseListRow = ({ exercise, onOrderChangeClick }) => {
    const { name, weight, reps, sets, exerciseKey } = exercise
    return (
        <li {...exerciseRow}
            key={exerciseKey}
            data-test={`exercise-row-${exerciseKey}`}
            onClick={() => onOrderChangeClick(exercise)}
        >
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

ExerciseListRow.defaultProps = {
    onOrderChangeClick: () => {}
}

ExerciseListRow.propTypes = {
    exercise: object.isRequired,
    onOrderChangeClick: func.isRequired
}
