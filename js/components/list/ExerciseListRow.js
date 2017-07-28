import React from 'react'
import { Exercise } from './Exercise'
import { object } from 'prop-types'
import glamorous from 'glamorous'

const _ExerciseListRow = ({ exercise }) => {
    const Li = glamorous.li({
        padding: 10,
        display: 'flex'
    })
    return (
        <Li>
            <Exercise exercise={exercise} />
        </Li>
    )
}

_ExerciseListRow.propTypes = {
    exercise: object.isRequired
}

export const ExerciseListRow = _ExerciseListRow
