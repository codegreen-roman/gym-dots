import React from 'react'
import { array, string, func } from 'prop-types'
import { exerciseList, exerciseListHeader } from './ExerciseList.glamor'
import { ExerciseListRow } from './ExerciseListRow'

const onOrderChangeClick = () => {} // noop

const _ExerciseList = ({ list, title, onOrderChangeClick }) => {
    if (list.length === 0) {
        return null
    }
    return (
        <div>
            <span data-test='list-title' {...exerciseListHeader}>
                {title}
            </span>
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
