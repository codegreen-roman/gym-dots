import { notEmpty } from '@utils/helpers'

test('.notEmpty works as expected', () => {
    expect(typeof notEmpty === 'function').toBeTruthy()
    expect(notEmpty('12345')).toBeTruthy()
    expect(notEmpty(['2','2'])).toBeTruthy()
    expect(notEmpty('')).toBeFalsy()
    expect(notEmpty([])).toBeFalsy()
    expect(notEmpty()).toBeFalsy()
})
