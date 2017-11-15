import React from 'react'
import moment from 'moment'

import { Header } from '@components/common/header/Header.connect'
import { Footer } from '@components/common/footer/Footer.connect'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Activity } from '../views/activity/Activity'
import { Overlay } from '@components/common/overlay/Overlay.connect'
import { Countdown } from '@components/common/overlay/Countdown'
import { StyledAppContainer, StyledMain } from './Main.glamor'
import { Welcome } from '../views/welcome/Welcome.connect'

export const Main = () => {
    const dateStr = moment().format('dddd, MMM Do')
    const headerTitle = 'Start Workout'

    return (
        <StyledAppContainer>
            <Switch>
                <Route
                    path='/in'
                    component={({ match }) => {
                        return (
                            <StyledMain>
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
                            </StyledMain>
                        )
                    }}
                />

                <Route path='/' component={() => <Welcome dateStr={dateStr} />}
                />
                <Route component={() => <section>404 Not Found</section>} />
            </Switch>
        </StyledAppContainer>
    )
}
