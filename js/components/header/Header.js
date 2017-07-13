import React from 'react'
import moment from 'moment'
import { image } from 'faker'

const _Header = () => {

    const userPic = image.avatar()
    const rootStyle = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)'
    }

    const imgStyle = {
        width: '3rem',
        borderRadius: '2rem'
    }

    return (
        <section style={rootStyle}>

            <div className='left-side' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <a style={{ fontSize: '8vw' }}>&#9776;</a>
                <div style={{ fontSize: '5vw', marginLeft: '4rem' }}>{moment().format('dddd, MMM Do')}</div>
                <div style={{ fontSize: '8vw', marginLeft: '3rem' }}>Start Workout</div>
            </div>

            <div className='right-side'>
                <img style={imgStyle} src={userPic} />
            </div>

        </section>
    )
}

_Header.propTypes = {}

export { _Header }
export const Header = _Header
