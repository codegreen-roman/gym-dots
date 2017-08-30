import { extractSessionKey, allCompletedExercisesList } from './index.helper'

const results = {
    '-KscIsIPLzAjqX9P_LC2': {
        '-KscJ56jW3VnBhl_2Sq4': true,
        '-KscJX4MQzhLTaR54onL': true,
        '-KscJnfGUhPzAJ5BnTNa': false
    },
    'timestamp': 1504128565195
}

test('.extractSessionKey returns the sessionKey', () => {
    expect(extractSessionKey(results)).toBe('-KscIsIPLzAjqX9P_LC2')
})

test('.allCompletedExercisesList returns the list of 2 exercises', () => {
    expect(allCompletedExercisesList(results))
        .toMatchObject(['-KscJ56jW3VnBhl_2Sq4', '-KscJX4MQzhLTaR54onL'])
})
