import React from 'react'
import moment from 'moment'
import { UserImage } from './UserImage'

const _Header = () => {

    const rootStyle = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
        fontFamily: 'sans-serif'
    }

    return (
        <section style={rootStyle}>

            <div className='left-side' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <a className='h-menu' style={{ fontSize: '8vw' }}>&#9776;</a>
                <div className='h-date' style={{ fontSize: '5vw', marginLeft: '4rem' }}>
                    {moment().format('dddd, MMM Do')}
                </div>
                <div className='h-title' style={{ fontSize: '8vw', marginLeft: '3rem' }}>
                    Start Workout
                </div>
            </div>

            <div className='right-side'>
                <UserImage />
            </div>

        </section>
    )
}

_Header.propTypes = {}

export { _Header }
export const Header = _Header
