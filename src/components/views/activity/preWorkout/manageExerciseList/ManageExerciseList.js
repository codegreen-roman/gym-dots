import React from 'react'
import { ExerciseList } from './ExerciseList'
import { isEmpty, always, T, cond } from 'ramda'
import { notEmpty } from '../../../../../utils/helpers'
import { Aux } from '../../../../../utils/enhancers'
import { func, arrayOf, object } from 'prop-types'

/* Exercise lists */
const Lists = ({upcoming, completed, skipped, onOrderChange}) => {
    return (
        <Aux>
            {notEmpty(upcoming) && <ExerciseList key='upcoming' list={upcoming} title='upcoming'
                onOrderChangeClick={onOrderChange} /> }
            {notEmpty(completed) && <ExerciseList key='completed' list={completed} title='completed' /> }
            {notEmpty(skipped) && <ExerciseList key='skipped' list={skipped} title='skipped' /> }
        </Aux>
    )
}

Lists.propTypes = {
    upcoming: arrayOf(object).isRequired,
    completed: arrayOf(object).isRequired,
    skipped: arrayOf(object).isRequired,
    onOrderChange: func.isRequired
}

/* Conditions */
const isSessionDone = (props) => props.sessionDone === true
const isUpcomingEmpty = (props) => isEmpty(props.upcoming)
const isAnyListNotEmpty = (props) =>
    notEmpty(props.upcoming) || notEmpty(props.completed) || notEmpty(props.skipped)

/* Conditional render */
export const conditionalRender = (props) => cond([
    [isSessionDone, always(<h2>Your session {props.sessionKey} is COMPLETED!</h2>)],
    [isUpcomingEmpty, always(<span>You got no exercises yet</span>)],
    [isAnyListNotEmpty, always(<Lists key='lists' {...props} />)],
    [T, always(null)]
])(props)

/* ManageExerciseList */
export const ManageExerciseList = (props) =>
    <div>
        {conditionalRender(props)}
    </div>


