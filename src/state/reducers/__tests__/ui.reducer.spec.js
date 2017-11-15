import { uiReducer } from '../ui.reducer'
import { types } from '../../common/constants'

describe('UI reducer', () => {
    const action = {
        type: types.UI_SIDEMENU_TOGGLE,
        payload: {}
    }

    it('should return boolean', () => {
        const state = uiReducer({}, action)
        expect(state).toEqual(
            expect.objectContaining({
                isSideMenuOpen: expect.any(Boolean)
            })
        )
        expect(state.isSideMenuOpen).toBe(true)
    })
})
