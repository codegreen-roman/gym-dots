import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Route, Switch } from 'react-router-dom'
import { Activity } from './Activity'
import { Status } from './Status'
import { Exercises } from './Exercises'
import moment from 'moment'

export const App = () => {

    const dateStr = moment().format('dddd, MMM Do')
    const headerTitle = 'Start Workout'

    return (
        <section className='app-container'>
            <Switch>
                <Route exact path='/welcome'>
                    <div>Nothing here</div>
                </Route>
                <Route path='/'>
                    <main>
                        <Header dateStr={dateStr} subTitle={headerTitle} />
                        <Route path='/workout' component={Activity} />
                        <Route path='/status' component={() => <Status />} />
                        <Route path='/list' component={() => <Exercises />} />
                        <Footer />
                    </main>
                </Route>

            </Switch>


        </section>
    )
}
