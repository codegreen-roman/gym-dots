import React from 'react'
import { UserImage } from './UserImage'
import { string } from 'prop-types'

const _Header = ({dateStr, subTitle}) => {

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
                    {dateStr}
                </div>
                <div className='h-title' style={{ fontSize: '8vw', marginLeft: '3rem' }}>
                    {subTitle}
                </div>
            </div>

            <div className='right-side'>
                <UserImage />
            </div>

        </section>
    )
}

_Header.propTypes = {
    dateStr: string.isRequired,
    subTitle: string.isRequired
}

export { _Header }
export const Header = _Header
