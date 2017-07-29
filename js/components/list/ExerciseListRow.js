import React from 'react'
import { Exercise } from './Exercise'
import { object, func } from 'prop-types'
import glamorous from 'glamorous'

const _ExerciseListRow = ({ exercise, onRowClick }) => {
    const Li = glamorous.li({
        padding: 10,
        display: 'flex'
    })
    return (
        <Li onClick={onRowClick}>
            <Exercise exercise={exercise} />
        </Li>
    )
}

_ExerciseListRow.propTypes = {
    exercise: object.isRequired,
    onRowClick: func.isRequired
}

export const ExerciseListRow = _ExerciseListRow
