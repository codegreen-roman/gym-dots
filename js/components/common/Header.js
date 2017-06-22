import React from 'react'
import { connect } from 'react-redux'
import { shape, func, string } from 'prop-types'
import { Text } from '../Text'
import { ToggleMenu } from './ToggleMenu'
import { ping } from '../../state/actions'
import R from 'ramda'

const days = ['MONDAY', 'WEDENSDAY', 'FRIDAY']

const _Header = ({ exerciseSession: { day : currentDay }, pingSession }) => {

    const handleDayClick = (day) => {
        return () => pingSession(day)
    }

    const renderDayLink = day => {

        const style = {
            margin: '1rem',
            background: currentDay === day ? '#FF6347' : 'white'
        }
        return (
            <a key={day} href='#' style={style} onClick={handleDayClick(day)}>{day}</a>
        )
    }
    const renderDays = R.compose(R.map(renderDayLink))

    return (
        <section style={{ border: '2px solid #32CD32', margin: '2rem' }}>
            <h4>I am a header</h4>
            <ToggleMenu />
            <p><Text text='greeting' /></p>
            {renderDays(days)}
        </section>
    )
}

_Header.propTypes = {
    exerciseSession: shape({
        day: string
    }),
    pingSession: func
}

const mapStateToProps = ({ exerciseSession }) => ({ exerciseSession })

const mapActionsToProps = dispatch => ({
    pingSession(day) {
        const app = R.compose(dispatch, ping)
        app({ day })
    }
})

export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
