import React from 'react'
import { connect } from 'react-redux'
import { shape, string, number, object } from 'prop-types'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { ManageExerciseList } from './list/ManageExerciseList'

const _Activity = ({ exerciseSession: { day }, defaults, match }) => {

    const now = +(new Date())

    const activeStyle = {
        fontWeight: 'bold',
        backgroundColor: 'lime'
    }

    return (
        <section style={{ border: '2px solid #9ACD32' }}>
            <div><span>{day}</span> rendered at {now}</div>
            <ManageExerciseList />
            <pre>{JSON.stringify(defaults, null, 4)}</pre>

            <NavLink to={match.url + '/starting'} activeStyle={activeStyle}>Begin</NavLink>
            &nbsp;
            <NavLink to={match.url + '/started'} activeStyle={activeStyle}>Start</NavLink>
            &nbsp;
            <NavLink to={match.url + '/paused'} activeStyle={activeStyle}>Pause</NavLink>

            <Route path={match.url + '/starting'} component={() => <div>Starting, see the list</div>} />
            <Route path={match.url + '/started'} component={() => <div>Stated, let me sweat</div>} />
            <Route path={match.url + '/paused'} component={() => <div>Stated, but paused</div>} />

        </section>
    )
}

_Activity.propTypes = {
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

export const Activity = withRouter(connect(mapStateToProps)(_Activity))
