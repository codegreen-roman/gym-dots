import React from 'react'
import glamorous from 'glamorous'
import { shape, string, number } from 'prop-types'

const _Exercise = ({ exercise }) => {
    const ExerciseTitle = glamorous.div({
        fontSize: 20,
        fontWeight: 'bold',
        color: '#606b7b'
    })
    const ExerciseDetails = glamorous.div({
        fontSize: 15,
        color: '#929aa6'
    })

    return (
        <div>
            <ExerciseTitle>{exercise.name}</ExerciseTitle>
            <ExerciseDetails>{exercise.weight} kg x {exercise.reps} reps x {exercise.setsLeft} sets</ExerciseDetails>
        </div>
    )
}

_Exercise.propTypes = {
    exercise: shape({
        name: string.isRequired,
        weight: number.isRequired,
        reps: number.isRequired,
        sets: number.isRequired,
    })
}

export const Exercise = _Exercise
