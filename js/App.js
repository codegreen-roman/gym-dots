import React from 'react'

const now = new Date()

// This is a stateless functional component
export const App = () => (
    <section className='app-container'>
        <div>Current time is:</div>
        <div>{now.toLocaleTimeString()}</div>
    </section>
)
