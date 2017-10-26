import React from 'react'
import { array, string, func } from 'prop-types'
import {
    exerciseList,
    exerciseListHeader,
    exerciseListHeaderDot,
    exerciseListHeaderText
} from './ExerciseList.glamor'
import { ExerciseListRow } from './ExerciseListRow'
import { map } from 'ramda'
import { branch, RenderNothing, notEmpty } from '@utils/helpers'

export const ExerciseListHeader = ({title}) => {
    return (
        <div data-test='list-title' {...exerciseListHeader}>
            <div {...exerciseListHeaderDot} />
            <div {...exerciseListHeaderText}>{title}</div>
        </div>
    )
}

ExerciseListHeader.propTypes = {
    title: string.isRequired
}


const _ExerciseList = ({ list, title, onOrderChangeClick }) => {
    const row = (item) => (
        <ExerciseListRow key={item.exerciseKey} {...item} onRowClick={() => onOrderChangeClick(item)} />
    )
    const renderRows = () => map(row, list)

    return branch(
        notEmpty(list),
        (<div>
            <ExerciseListHeader title={title} />
            <ul data-test='list' {...exerciseList}>
                {renderRows()}
            </ul>
        </div>),
        <RenderNothing />
    )
}

_ExerciseList.defaultProps = {
    onOrderChangeClick: () => {}
}

_ExerciseList.propTypes = {
    list: array.isRequired,
    title: string.isRequired,
    onOrderChangeClick: func
}

export const ExerciseList = _ExerciseList
