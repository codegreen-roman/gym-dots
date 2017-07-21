import React from 'react'
import { connect } from 'react-redux'
import { shape, string, number } from 'prop-types'

const _Activity = ({ exerciseSession: { day }, defaults }) => {

    const now = +(new Date())

    return (
        <section style={{ border: '2px solid #9ACD32' }}>
            <div><span>{day}</span> rendered at {now}</div>

            <pre>{JSON.stringify(defaults, null, 4)}</pre>

        </section>
    )
}

_Activity.propTypes = {
    defaults: shape({
        restTime: number,
        sets: number
    }).isRequired,
    exerciseSession: shape({
        day: string
    }).isRequired
}

const mapStateToProps = ({ exerciseSession, defaults }) => ({
    exerciseSession,
    defaults
})

export const Activity = connect(mapStateToProps)(_Activity)
