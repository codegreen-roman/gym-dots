import firebase from 'firebase'
import { FIREBASE_CINFIG } from './config'

export const firebaseApp = firebase.initializeApp(FIREBASE_CINFIG)
export const database = firebase.database()
export const firebaseAuth = firebaseApp.auth()

export const defaultsRef = database.ref('/defaults')

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
}

export const loginWith = provider => {
    return firebaseAuth.signInWithPopup(providers[provider])
        .then(({ user }) => {
            return user
        })
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        }))
}
