import React from 'react'
import { isEmpty } from 'ramda'
import { array, string, func } from 'prop-types'
import {
    exerciseList,
    exerciseListHeader,
    exerciseListHeaderDot,
    exerciseListHeaderText
} from './ExerciseList.glamor'
import { ExerciseListRow } from './ExerciseListRow'

const onOrderChangeClick = () => {} // noop

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
    if (isEmpty(list)) {
        return null
    }
    return (
        <div>
            <ExerciseListHeader title={title} />
            <ul data-test='list' {...exerciseList}>
                {list.map((itm, idx) =>
                    <ExerciseListRow
                        key={idx}
                        {...itm}
                        onRowClick={() => onOrderChangeClick(itm)}
                    />
                )}
            </ul>
        </div>
    )
}

_ExerciseList.defaultProps = {
    onOrderChangeClick
}

_ExerciseList.propTypes = {
    list: array.isRequired,
    title: string.isRequired,
    onOrderChangeClick: func
}

export const ExerciseList = _ExerciseList
