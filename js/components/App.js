import React from 'react'
import { Header } from './header/Header'
import { Footer } from './common/Footer'
import { Route } from 'react-router-dom'
import { Activity } from './Activity'
import { Status } from './Status'
import { Exercises } from './Exercises'

export const App = () => {
    return (
        <section className='app-container'>
            <Header />
            <Route exact path='/' component={() => <Activity />} />
            <Route path='/status' component={() => <Status />} />
            <Route path='/list' component={() => <Exercises />} />
            <Footer />
        </section>
    )
}
