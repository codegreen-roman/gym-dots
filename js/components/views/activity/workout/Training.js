import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Exercise } from './Exercise/Exercise'
import { fakeExercise } from './Exercise/exercise.helper'

const _Training = () => {

    const exerciseProps = fakeExercise()

    return (
        <section style={{ border: '2px solid #9ACD32' }}>
            <Exercise {...exerciseProps} />
        </section>
    )
}

_Training.propTypes = {}

const mapStateToProps = () => ({})

export const Training = withRouter(connect(mapStateToProps)(_Training))
