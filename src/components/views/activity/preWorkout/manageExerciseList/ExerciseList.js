import React from 'react'
import { map, pipe, compose } from 'ramda'
import { combineComponents } from '../../../../../utils/enhancers'
import { notEmpty } from '../../../../../utils/helpers'
import { ExerciseListRow } from './ExerciseListRow'
import {
    exerciseList,
    exerciseListHeader,
    exerciseListHeaderDot,
    exerciseListHeaderText
} from './ExerciseList.glamor'

/* Presentational Header component */
const Header = (title) =>
    <div data-test='list-header' {...exerciseListHeader}>
        <div {...exerciseListHeaderDot} />
        <div {...exerciseListHeaderText}>{title}</div>
    </div>

const ExerciseListHeader = pipe(props => props.title, Header)

/* Presentational List component */
const List = items => notEmpty(items) && <ul data-test='list' {...exerciseList}>{items}</ul>

/* Mapping over exercises lists and preparing each ExerciseListRow */
const mapItems = ({list, onOrderChangeClick}) =>
    map(exercise => ExerciseListRow({ exercise, onOrderChangeClick }), list)

/* Combining ExerciseListRow and List */
const CombinedList = pipe(
    props => ({list: props.list, onOrderChangeClick: props.onOrderChangeClick}),
    compose(List, mapItems)
)

/* Combining ExerciseListHeader with a list */
export const ExerciseList = combineComponents(ExerciseListHeader, CombinedList)
