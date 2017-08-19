import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { shape, arrayOf, string, number, bool } from 'prop-types'
import { Exercise } from './Exercise/Exercise'

// kind of the container component
// to hold the data about the current training
const _Training = ({ currentExercise }) => {

    return (
        <section>
            <Exercise {...currentExercise} />
        </section>
    )
}

_Training.propTypes = {
    currentExercise: shape({
        status: string.isRequired,
        restTime: number.isRequired,
        sets: number.isRequired,
        setsLeft: number.isRequired,
        reps: number.isRequired,
        weight: number.isRequired,
        results: arrayOf(bool).isRequired
    }).isRequired
}

const mapStateToProps = ({ currentExercise }) => ({ currentExercise })
export const Training = withRouter(connect(mapStateToProps)(_Training))
