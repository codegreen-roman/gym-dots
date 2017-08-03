import React from 'react'
import { string, arrayOf, number, bool } from 'prop-types'

export const Exercise = ({ status, restTime, sets, setsLeft, reps, weight, results }) => {
    return (
        <section>
            <div>{status}</div>
            <div>weight: {weight}</div>
            <div>reps: {reps}</div>
            <div>sets {sets - setsLeft} / {sets} done</div>
            {results.map(b => b && '1' || '0')}
            <div>the time</div>
            <div>
                <button>Make pause</button>
            </div>
            <div>{restTime} sec rest time</div>
        </section>
    )
}

Exercise.propTypes = {
    status: string.isRequired,
    restTime: number.isRequired,
    sets: number.isRequired,
    setsLeft: number.isRequired,
    reps: number.isRequired,
    weight: number.isRequired,
    results: arrayOf(bool).isRequired
}
