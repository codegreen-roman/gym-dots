import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Exercise } from './Exercise/Exercise'
import { fakeExercise } from './Exercise/Exercise.helper'

// kind of the container component
// to hold the data about the current training
const _Training = () => {

    const exerciseProps = fakeExercise()

    return (
        <section>
            <Exercise {...exerciseProps} />
        </section>
    )
}

_Training.propTypes = {}

const mapStateToProps = () => ({})

export const Training = withRouter(connect(mapStateToProps)(_Training))
