import { equals, compose, not } from 'ramda'

export const fakeExercise = () => ({
    name: 'Monday Sweat',
    status: 'started',
    restTime: 60,
    sets: 5,
    setsLeft: 5,
    reps: 12,
    weight: 100,
    results: []
})

export const compare = compose(not, equals)
export const isResultDiff = (oldResults, newResults) => {
    return compare(
        JSON.stringify(oldResults),
        JSON.stringify(newResults)
    )
}
