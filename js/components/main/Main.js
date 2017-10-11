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
                <Route
                    path='/in'
                    component={({ match }) => {
                        return (
                            <main>
                                <Header
                                    dateStr={dateStr}
                                    subTitle={headerTitle}
                                />
                                <Switch>
                                    <Route
                                        path={`${match.url}/activity`}
                                        component={Activity}
                                    />
                                    <Route
                                        path={`${match.url}/`}
                                        component={() =>
                                            <NavLink to={`${match.url}/activity`}>
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

                <Route path='/' component={() => <Welcome dateStr={dateStr} />}
                />
                <Route component={() => <section>404 Not Found</section>} />
            </Switch>
        </section>
    )
}
