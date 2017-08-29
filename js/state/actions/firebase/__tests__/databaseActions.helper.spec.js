import { getVal } from '../databaseActions.helper'

test('.getVal calls the val method of the argument', () => {
    const arg = {
        val: jest.fn()
    }

    getVal(arg)
    expect(arg.val).toHaveBeenCalled()
})

test('.getVal returns the same thing val returns', () => {
    const arg = {
        val: jest.fn().mockReturnValue({ data: true })
    }
    expect(getVal(arg)).toMatchObject({ data: true })
})
