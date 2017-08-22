import React from 'react'
import moment from 'moment'

import { Header } from '../common/header/Header.connect'
import { Footer } from '../common/footer/Footer.connect'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Activity } from '../views/activity/Activity'
import { Timer } from '../common/timer/Timer'

export const Main = () => {

    const dateStr = moment().format('dddd, MMM Do')
    const headerTitle = 'Start Workout'

    return (
        <section className='app-container'>
            <Switch>
                <Route exact path='/welcome'>
                    <Timer>
                        <div>Child 1</div>
                        <div>Child 2</div>
                        <div>Child 3</div>
                        <div>Child 4</div>
                    </Timer>
                </Route>
                <Route path='/' component={() => {

                    return (
                        <main>
                            <Header dateStr={dateStr} subTitle={headerTitle} />
                            <Switch>
                                <Route path='/activity' component={Activity} />
                                <Route path='/' component={
                                    () => <NavLink to='/activity'>go train</NavLink>
                                } />
                            </Switch>
                            <Footer />
                        </main>
                    )

                }} />
                <Route component={() => (<section>404 Not Found</section>)} />

            </Switch>


        </section>
    )
}
