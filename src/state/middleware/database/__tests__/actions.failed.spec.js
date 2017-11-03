jest.mock('../database', () => ({
    loginWith: () => {
        return new Promise((resolve, reject) => {
            reject({
                code: 1,
                message: 'not logged in',
                credential: {},
                email: 'neoroma@gmail.com',
            })
        })
    }
}))

test('This is just an example of using the mock', () => {
    expect(true).toBeTruthy()

})
