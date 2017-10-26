import { notEmpty, mapIndexed } from '@utils/helpers'

test('.notEmpty works as expected', () => {
    expect(typeof notEmpty === 'function').toBeTruthy()
    expect(notEmpty('12345')).toBeTruthy()
    expect(notEmpty(['2','2'])).toBeTruthy()
    expect(notEmpty('')).toBeFalsy()
    expect(notEmpty([])).toBeFalsy()
    expect(notEmpty()).toBeFalsy()
})

test('.mapIndexed adds indexes to map', () => {
    expect(typeof mapIndexed === 'function').toBeTruthy()
    expect(mapIndexed((item, idx) => item + idx, ['a','b','c'])).toEqual(['a0','b1','c2'])
})
