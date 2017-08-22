import firebase from 'firebase'
import { FIREBASE_CINFIG } from './config'

export const firebaseApp = firebase.initializeApp(FIREBASE_CINFIG)
export const database = firebase.database()
export const firebaseAuth = firebaseApp.auth()

export const defaultsRef = database.ref('/config/defaults')
export const nextRef = database.ref('/next')

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
}

export const loginWith = (provider) => {
    return firebase.auth().signInWithPopup(providers[provider])
        .then(function ({ credential: { accessToken }, user }) {
            return {
                user,
                accessToken
            }
        }).catch(function ({ code, message, email, credential }) {
            return Promise.reject({ code, message, email, credential })
        })
}
