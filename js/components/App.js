import React from 'react'
import { Header } from './Header'

const now = new Date()

// This is a stateless functional component
export const App = () => (
    <section className='app-container'>
        <Header />
        <div>Current time is:</div>
        <div>{now.toLocaleTimeString()}</div>
    </section>
)
