import { selectNameOrUidFromUser, userNameSelector, userPhotoUrlSelector } from '../selectors'

const initAuth = {
    status: 'loggedOut'
}

const niceUserAuth = {
    'user': {
        'uid': 'C2NO2n89PQOwRDs2o5u6HkeDl5v1',
        'displayName': '💻 { return Roman }',
        'photoURL': 'https://pbs.twimg.com/profile_images/870699319183134720/IOqlC-IM_normal.jpg',
        'email': null,
        'isAnonymous': false
    },
    'uid': 'C2NO2n89PQOwRDs2o5u6HkeDl5v1',
    'status': 'loggedIn'
}

const guestAuth = {
    'user': {
        'uid': 'JXN0gf1TAEYIX1xbKmouqHd9hWh1',
        'displayName': null,
        'photoURL': null,
        'email': null,
        'isAnonymous': true,

    },
    'uid': 'JXN0gf1TAEYIX1xbKmouqHd9hWh1',
    'status': 'loggedIn'
}

describe('Header.connect', () => {

    describe('for the logged in real user', () => {

        describe('.selectNameOrUidFromUser', () => {
            it('should return an object with uid and displayName', () => {
                const actual = selectNameOrUidFromUser(niceUserAuth)

                expect(actual).toEqual(
                    expect.objectContaining({
                        uid: expect.any(String),
                        displayName: expect.any(String),
                        isAnonymous: false,
                    })
                )
            })
        })

        describe('.userNameSelector', () => {
            it('should return the displayName', () => {
                const actual = userNameSelector(niceUserAuth)
                expect(actual).toEqual('💻 { return Roman }')
            })
        })

        describe('.userPhotoUrlSelector', () => {
            it('should return the photoURL', () => {
                const actual = userPhotoUrlSelector(niceUserAuth)
                expect(actual).toEqual('https://pbs.twimg.com/profile_images/870699319183134720/IOqlC-IM_normal.jpg')
            })
        })
    })

    describe('for the logged in guest user', () => {

        describe('.selectNameOrUidFromUser', () => {
            it('should return an object with uid', () => {
                const actual = selectNameOrUidFromUser(guestAuth)

                expect(actual).toEqual(
                    expect.objectContaining({
                        uid: expect.any(String),
                        displayName: null,
                        isAnonymous: true,
                    })
                )
            })
        })

        describe('.userNameSelector', () => {
            it('should return the uid', () => {
                const actual = userNameSelector(guestAuth)
                expect(actual).toEqual('JXN0gf1TAEYIX1xbKmouqHd9hWh1')
            })
        })

        describe('.userPhotoUrlSelector', () => {
            it('should return the photoURL', () => {
                const actual = userPhotoUrlSelector(guestAuth)
                expect(actual).toBeNull()
            })
        })
    })

    describe('for not logged in users', () => {

        describe('.selectNameOrUidFromUser', () => {
            it('should return an object with uid and displayName', () => {
                const actual = selectNameOrUidFromUser(initAuth)

                expect(actual).toEqual(
                    expect.objectContaining({
                        uid: '',
                        displayName: '',
                    })
                )
            })
        })

        describe('.userNameSelector', () => {
            it('should return null', () => {
                const actual = userNameSelector(initAuth)

                expect(actual).toEqual('')
            })
        })

        describe('.userPhotoUrlSelector', () => {
            it('should return the photoURL', () => {
                const actual = userPhotoUrlSelector(initAuth)
                expect(actual).toBeNull()
            })
        })
    })

    describe('for an empty auth state part', () => {

        describe('.selectNameOrUidFromUser', () => {
            it('should return an object with uid and displayName', () => {
                const actual = selectNameOrUidFromUser({})

                expect(actual).toEqual(
                    expect.objectContaining({
                        uid: '',
                        displayName: '',
                    })
                )
            })
        })

        describe('.userNameSelector', () => {
            it('should return null', () => {
                const actual = userNameSelector({})

                expect(actual).toEqual('')
            })
        })

        describe('.userPhotoUrlSelector', () => {
            it('should return the photoURL', () => {
                const actual = userPhotoUrlSelector({})
                expect(actual).toBeNull()
            })
        })
    })

})
