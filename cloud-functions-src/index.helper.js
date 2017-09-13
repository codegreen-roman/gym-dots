import R from 'ramda'

export const extractSessionKey = R.compose(R.head, R.keys)

export const allCompletedExercisesList = (results) => {

    const sessionKey = extractSessionKey(results)
    const exercises = R.prop(sessionKey)(results)
    const predicate = (key) => R.propEq(key, true)(exercises)

    const app = R.compose(R.filter(predicate), R.keys)

    return app(exercises)
}
