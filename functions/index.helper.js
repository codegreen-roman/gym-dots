const R = require('ramda')

const extractSessionKey = R.compose(R.head, R.keys)
exports.extractSessionKey = extractSessionKey

exports.allCompletedExercisesList = (results) => {

    const sessionKey = extractSessionKey(results)
    const exercises = R.prop(sessionKey)(results)
    const predicate = (key) => R.propEq(key, true)(exercises)

    const app = R.compose(R.filter(predicate), R.keys)

    return app(exercises)
}
