import React from 'react'

export const Activity = () => {

    const now = new Date()

    return (
        <section style={{ border: '2px solid #9ACD32' }}>
            <div>rendered at {now.toLocaleTimeString()}</div>
        </section>
    )
}

