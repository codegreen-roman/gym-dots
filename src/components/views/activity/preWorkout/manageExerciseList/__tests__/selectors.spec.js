import { sessionDoneSelector } from '../selctors'

test('.sessionDoneSelector returns true', () => {
    const exercises = {
        sessionKey: '123',
        upcoming: [],
        skipped: []
    }

    expect(sessionDoneSelector(exercises)).toBeTruthy()
})

test('.sessionDoneSelector returns false', () => {
    const exercises = {
        sessionKey: '123',
        upcoming: [1],
        skipped: [1]
    }

    expect(sessionDoneSelector(exercises)).toBeFalsy()
})

test('.sessionDoneSelector returns false fro missing sessionKey', () => {
    const exercises = {
        upcoming: [],
        skipped: []
    }

    expect(sessionDoneSelector(exercises)).toBeFalsy()
})
