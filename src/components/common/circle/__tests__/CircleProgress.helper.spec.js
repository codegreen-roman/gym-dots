import {
    polarToCartesian,
    defineArc,
    getLargeArcFlag,
    getAngleInRadians,
    getArcLength,
    generateArcClasses,
    generateArcPaths
} from '../CircleProgress.helper'

import {
    range,
    compose,
    map,
    T,
    F
} from 'ramda'

describe('CircleProgress helper', () => {
    it('.polarToCartesian matches', () => {

        const actual = polarToCartesian(0, 0, 20, 90)
        expect(actual).toMatchSnapshot()
    })

    it('.defineArc matches', () => {

        const actual = defineArc(0, 0, 20, 0, 180)
        expect(actual).toMatchSnapshot()
    })

    it('.getLargeArcFlag matches', () => {
        const endAngles = range(0, 90)

        endAngles.forEach(angle => {
            const actual = getLargeArcFlag(angle, 0)
            expect(actual).toMatchSnapshot()
        })
    })

    it('.getAngleInRadians matches', () => {
        const angles = range(0, 90)

        angles.forEach(angle => {
            const actual = getAngleInRadians(angle)
            expect(actual).toMatchSnapshot()
        })
    })

    it('.getArcLength matches', () => {
        const setsRange = range(1, 10)
        const space = 10

        setsRange.forEach(sets => {
            const actual = getArcLength(sets, space)
            expect(actual).toMatchSnapshot()
        })
    })

    describe('.generateArcClasses', () => {

        describe('all sets DONE', () => {

            const arrGen = compose(map(T), range(0))

            it('should match', () => {
                const setsRange = range(1, 10)

                setsRange.forEach(sets => {
                    const resultsRange = range(0, 6)
                    const getAllResults = map(arrGen)
                    getAllResults(resultsRange).forEach(results => {

                        const actual = generateArcClasses(sets, results)
                        expect(actual).toMatchSnapshot()

                    })
                })
            })

        })

        describe('all sets FAILED', () => {

            const arrGen = compose(map(F), range(0))

            it('should match', () => {
                const setsRange = range(1, 10)

                setsRange.forEach(sets => {
                    const resultsRange = range(0, 6)
                    const getAllResults = map(arrGen)
                    getAllResults(resultsRange).forEach(results => {

                        const actual = generateArcClasses(sets, results)
                        expect(actual).toMatchSnapshot()

                    })
                })
            })

        })
    })

    it('.generateArcPaths matches', () => {
        const setsRange = range(1, 10)
        const space = 10

        setsRange.forEach(sets => {
            const actual = generateArcPaths(0, 0, 20, space, sets)
            expect(actual).toMatchSnapshot()
        })
    })

})
