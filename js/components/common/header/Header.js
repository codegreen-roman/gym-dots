import React from 'react'
import { UserImage } from './UserImage'
import { string, object, func } from 'prop-types'
import { connect } from 'react-redux'
import { compose, propOr, isEmpty } from 'ramda'
import { authWith } from '../../../state/actions/firebase/databaseActions'

const getSafeNameOrEmptyString = propOr('', 'name')

const _Header = ({ dateStr, subTitle, loginWith, auth, exerciseName }) => {

    const rootStyle = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
        fontFamily: 'sans-serif'
    }

    const renderTitle = () => isEmpty(exerciseName) ? subTitle : exerciseName

    const renderLoginOrUser = () => {

        if (auth.user) {
            return (
                <div className='username'>
                    <span>{auth.user.displayName}</span>
                </div>
            )
        }

        return (
            <div>
                <button className='twitter' onClick={() => loginWith('twitter')}>login with twitter</button>
                <button className='facebook' onClick={() => loginWith('facebook')}>login with facebook</button>
            </div>
        )
    }

    return (
        <section style={rootStyle}>

            <div className='left-side' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <a className='h-menu' style={{ fontSize: '16px' }}>&#9776;</a>
                <div className='h-date' style={{ fontSize: '12px', marginLeft: '4rem' }}>
                    {dateStr}
                </div>
                <div className='h-title' data-test='currently' style={{ fontSize: '16px', marginLeft: '3rem' }}>
                    {renderTitle()}
                </div>
            </div>

            <div className='right-side'>
                {renderLoginOrUser()}
                <UserImage />
            </div>

        </section>
    )
}

_Header.propTypes = {
    auth: object.isRequired,
    loginWith: func.isRequired,
    dateStr: string.isRequired,
    subTitle: string.isRequired,
    exerciseName: string.isRequired
}

_Header.defaultProps = {
    exerciseName: ''
}

const mapStateToProps = ({ auth, currentExercise }, { dateStr, subTitle }) => ({
    auth,
    dateStr,
    subTitle,
    exerciseName: getSafeNameOrEmptyString(currentExercise)
})

const mapActionsToProps = dispatch => ({
    loginWith: compose(dispatch, authWith)
})

export { _Header }
export const Header = connect(mapStateToProps, mapActionsToProps)(_Header)
