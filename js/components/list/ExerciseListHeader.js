import React from 'react'
import { string } from 'prop-types'
import glamorous from 'glamorous'

const _ExerciseListHeader = (props) => {
    const H3 = glamorous.h3({
        padding: '10px',
        borderTop: '1px solid #ebf0f7',
        borderBottom: '1px solid #ebf0f7'
    })
    return (
        <div>
            <H3>{props.title}</H3>
        </div>
    )
}

_ExerciseListHeader.propTypes = {
    title: string
}

export const ExerciseListHeader = _ExerciseListHeader


