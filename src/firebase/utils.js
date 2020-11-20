// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import { firebaseConfig } from './config'
/* import userTypes from '../redux/User/user.types' */

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: 'select_account' })
    //inregistrarea clientilor
export const handleUserProfile = async({ userAuth, additionalData }) => {
    if (!userAuth) return
    const { uid } = userAuth //contains user's id

    const userRef = firestore.doc(`users/${uid}`) //old user
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        //new user[store in the database]
        const { displayName, email } = userAuth
        const timestamp = new Date()
        const userRoles = ['user']
        try {
            await userRef.set({
                //sending to firebase
                displayName,
                email,
                createdDate: timestamp,
                userRoles,
                ...additionalData,
            })
        } catch (err) {
            //console.log(err)
        }
    }
    return userRef //updating redux store
}
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}