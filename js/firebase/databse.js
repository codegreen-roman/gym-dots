import firebase from 'firebase'
import { FIREBASE_CINFIG } from './firebaseConfig'

export const firebaseApp = firebase.initializeApp(FIREBASE_CINFIG)
export const database = firebase.database()
export const firebaseAuth = firebaseApp.auth()
