import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Route } from 'react-router-dom'
import { Activity } from './Activity'
import { Status } from './Status'
import { Exercises } from './Exercises'
import moment from 'moment'

export const App = () => {

    const dateStr = moment().format('dddd, MMM Do')
    const headerTitle = 'Start Workout'

    return (
        <section className='app-container'>
            <Header dateStr={dateStr} subTitle={headerTitle} />
            <Route exact path='/' component={() => <Activity />} />
            <Route path='/status' component={() => <Status />} />
            <Route path='/list' component={() => <Exercises />} />
            <Footer />
        </section>
    )
}
