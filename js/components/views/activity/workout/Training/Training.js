import React from 'react'
import { connect } from 'react-redux'
import { shape, string, number, object } from 'prop-types'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { ManageExerciseList } from '../../preWorkout/manageExerciseList/ManageExerciseList'
import { Exercise } from './Exercise/Exercise'
import { fakeExercise } from './Exercise/exercise.helper'

const _Training = ({ exerciseSession: { day }, defaults, match }) => {

    const now = +(new Date())

    const activeStyle = {
        fontWeight: 'bold',
        backgroundColor: 'lime'
    }

    const exerciseProps = fakeExercise()

    return (
        <section style={{ border: '2px solid #9ACD32' }}>
            <div><span>{day}</span> rendered at {now}</div>

            <pre>{JSON.stringify(defaults, null, 4)}</pre>

            <NavLink to={match.url + '/starting'} activeStyle={activeStyle}>Begin</NavLink>
            &nbsp;
            <NavLink to={match.url + '/started'} activeStyle={activeStyle}>Start</NavLink>
            &nbsp;
            <NavLink to={match.url + '/paused'} activeStyle={activeStyle}>Pause</NavLink>

            <Route path={match.url + '/starting'} component={ManageExerciseList} />
            <Route path={match.url + '/started'} component={() => <Exercise {...exerciseProps} />} />
            <Route path={match.url + '/paused'} component={() => <div>Stated, but paused</div>} />

        </section>
    )
}

_Training.propTypes = {
    match: object.isRequired,
    defaults: shape({
        restTime: number,
        sets: number
    }).isRequired,
    exerciseSession: shape({
        day: string
    }).isRequired
}

const mapStateToProps = ({ exerciseSession, defaults }) => ({
    exerciseSession,
    defaults
})

export const Training = withRouter(connect(mapStateToProps)(_Training))
