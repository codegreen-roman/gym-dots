import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { shape, arrayOf, string, number, bool } from 'prop-types'
import { Exercise } from './Exercise/Exercise'
import { isNil } from 'ramda'
import { currentExerciseOrNil } from '../../../../state/selectors/currentExercise'

const _Training = ({ currentExercise }) => {

    if (isNil(currentExercise)) return (
        <Redirect to={'/'} />
    )

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
    })
}

const mapStateToProps = ({ currentExercise }) => ({
    currentExercise: currentExerciseOrNil(currentExercise)
})

export const Training = withRouter(connect(mapStateToProps)(_Training))
