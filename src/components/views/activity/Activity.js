import React from 'react'
import { object } from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { PreWorkout } from './preWorkout/PreWorkout'
import { Training } from './workout/Training'

export const Activity = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.url}/pre`} component={PreWorkout} />
            <Route path={`${match.url}/workout`} component={Training} />
            <Route path={`${match.url}/post`} component={
                () => <div>This is your complete stats</div>
            } />
            <Redirect from={`${match.url}/`} to={`${match.url}/pre`} />
        </Switch>
    )
}

Activity.propTypes = {
    match: object
}
