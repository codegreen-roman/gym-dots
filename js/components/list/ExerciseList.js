import React from 'react'
import { array, string, func } from 'prop-types'
import glamorous from 'glamorous'

import { ExerciseListRow } from './ExerciseListRow'
import { ExerciseListHeader } from './ExerciseListHeader'

const onOrderChangeClick = () => {} // noop

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

_ExerciseList.defaultProps = {
    onOrderChangeClick
}

_ExerciseList.propTypes = {
    exercises: array.isRequired,
    title: string.isRequired,
    onOrderChangeClick: func.isRequired
}

export const ExerciseList = _ExerciseList
