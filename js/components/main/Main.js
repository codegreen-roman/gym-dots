import React from 'react'
import moment from 'moment'

import { Header } from '../common/header/Header.connect'
import { Footer } from '../common/footer/Footer.connect'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Activity } from '../views/activity/Activity'
import { Overlay } from '../common/overlay/Overlay.connect'
import { Countdown } from '../common/overlay/Countdown'
import { mainStyles } from './Main.glamor'
import { Welcome } from '../views/welcome/Welcome.connect'

export const Main = () => {
    const dateStr = moment().format('dddd, MMM Do')
    const headerTitle = 'Start Workout'

    return (
        <section className='app-container' {...mainStyles}>
            <Switch>
                <Route exact
                    path='/welcome'
                    component={() => <Welcome dateStr={dateStr} />}
                />
                <Route
                    path='/'
                    component={() => {
                        return (
                            <main>
                                <Header
                                    dateStr={dateStr}
                                    subTitle={headerTitle}
                                />
                                <Switch>
                                    <Route
                                        path='/activity'
                                        component={Activity}
                                    />
                                    <Route
                                        path='/'
                                        component={() =>
                                            <NavLink to='/activity'>
                                                Start training
                                            </NavLink>}
                                    />
                                </Switch>
                                <Footer />
                                <Overlay>
                                    <Countdown />
                                </Overlay>
                            </main>
                        )
                    }}
                />
                <Route component={() => <section>404 Not Found</section>} />
            </Switch>
        </section>
    )
}
