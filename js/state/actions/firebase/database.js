/* eslint no-console: off  */

import firebase from 'firebase'
import { FIREBASE_CINFIG } from './config'
import { pick } from 'ramda'

export const firebaseApp = firebase.initializeApp(FIREBASE_CINFIG)
export const database = firebase.database()
export const auth = firebaseApp.auth()

export const defaultsRef = database.ref('/config/defaults')
export const nextRef = database.ref('/next')

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
}

const loginErrorHandler = function ({ code, message, email, credential }) {
    return Promise.reject({ code, message, email, credential })
}

export const loadNextSessionForUser = (userKey) => {
    return nextRef.child(userKey)
        .once('value', snap => snap.val())
}

export const loginWith = (provider) => {
    return firebase.auth().signInWithPopup(providers[provider])
        .then(pick(['user']))
        .catch(loginErrorHandler)
}

export const loginAnonymously = () => {
    return auth.signInAnonymously()
        .then(user => ({ user }))
        .catch(loginErrorHandler)
}

export const logout = () => {
    return auth.signOut()
        .catch(loginErrorHandler)
}
