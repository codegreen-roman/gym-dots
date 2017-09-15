import React from 'react'
import { string, arrayOf, number, bool } from 'prop-types'
import { CircleProgress } from '../../../../common/circle/CircleProgress'
export const Exercise = ({
    status,
    restTime,
    sets,
    setsLeft,
    reps,
    weight,
    results
}) => {
    return (
        <section>
            <div>
                {status}
            </div>
            <div>
                weight: {weight}
            </div>
            <div>
                reps: {reps}
            </div>
            <div>
                sets {sets - setsLeft} / {sets} done
            </div>
            <div>the time</div>
            <div>
                results : {JSON.stringify(results, null, 2)}
            </div>
            <div>
                setsLeft : {setsLeft}
            </div>
            <div>
                <button>Make pause</button>
            </div>
            <div>
                {restTime} sec rest time
            </div>
            <CircleProgress sets={sets} results={results} setsDone={sets - setsLeft} />
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
