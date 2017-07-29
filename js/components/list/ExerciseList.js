import React from 'react'
import { array, string, func } from 'prop-types'
import glamorous from 'glamorous'

import { ExerciseListRow } from './ExerciseListRow'
import { ExerciseListHeader } from './ExerciseListHeader'

const _ExerciseList = ({ exercises, title, onOrderChangeClick }) => {

    const Ul = glamorous.ul({
        listStyleType: 'none',
        padding: 0
    })

    return (
        <Ul>
            {exercises.length > 0 ? <ExerciseListHeader title={title} /> : null }
            {exercises.map((exercise, idx) => (
                <ExerciseListRow onRowClick={() => onOrderChangeClick(exercise)} key={idx} exercise={exercise} />
            ))}
        </Ul>
    )
}

_ExerciseList.propTypes = {
    exercises: array.isRequired,
    title: string,
    onOrderChangeClick: func.isRequired
}

export const ExerciseList = _ExerciseList
