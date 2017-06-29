import React from 'react'
import { connect } from 'react-redux'
import { shape, string } from 'prop-types'

const _Activity = ({ exerciseSession: { day } }) => {

    const now = +(new Date())

    return (
        <section style={{ border: '2px solid #9ACD32' }}>
            <div><span>{day}</span> rendered at {now}</div>
        </section>
    )
}

_Activity.propTypes = {
    exerciseSession: shape({
        day: string
    })
}

const mapStateToProps = ({ exerciseSession }) => ({ exerciseSession })

export const Activity = connect(mapStateToProps)(_Activity)
