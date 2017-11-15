import { notEmpty, mapIndexed, extractTargetValue, isNotNil } from '@utils/helpers'

test('.notEmpty works as expected', () => {
    expect(typeof notEmpty === 'function').toBeTruthy()
    expect(notEmpty('12345')).toBeTruthy()
    expect(notEmpty(['2', '2'])).toBeTruthy()
    expect(notEmpty('')).toBeFalsy()
    expect(notEmpty([])).toBeFalsy()
    expect(notEmpty()).toBeFalsy()
})

test('.mapIndexed adds indexes to map', () => {
    expect(typeof mapIndexed === 'function').toBeTruthy()
    expect(mapIndexed((item, idx) => item + idx, ['a', 'b', 'c'])).toEqual(['a0', 'b1', 'c2'])
})

test('.extractTargetValue extracts value properly', () => {
    const event = {
        target: {
            value: 'Default'
        }
    }
    expect(typeof extractTargetValue === 'function').toBeTruthy()
    expect(extractTargetValue(event)).toEqual('Default')
})

test('.isNotNil works as expected', () => {
    expect(typeof isNotNil === 'function').toBeTruthy()
    expect(isNotNil(1)).toBeTruthy()
    expect(isNotNil('string')).toBeTruthy()
    expect(isNotNil([1,2,3])).toBeTruthy()
    expect(isNotNil({name: 'Bob'})).toBeTruthy()
    expect(isNotNil([])).toBeTruthy()
    expect(isNotNil({})).toBeTruthy()
    expect(isNotNil(null)).toBeFalsy()
    expect(isNotNil(undefined)).toBeFalsy()
    expect(isNotNil()).toBeFalsy()
})
