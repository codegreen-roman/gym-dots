import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Route, Switch } from 'react-router-dom'
import { Activity } from '../Activity'
import { Status } from '../Status'
import { Exercises } from '../Exercises'
import moment from 'moment'
import { Timer } from '../common/Timer/Timer'

export const App = () => {

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
                <Route path='/' component={({history}) => {

                    return (
                        <main>
                            <Header dateStr={dateStr} subTitle={headerTitle} />
                            <Route path='/workout' component={Activity} />
                            <Route path='/status' component={() => <Status />} />
                            <Route path='/list' component={() => <Exercises />} />
                            <Footer history={history} />
                        </main>
                    )

                }} />
                <Route component={() => (<section>404 Not Found</section>)} />

            </Switch>


        </section>
    )
}
