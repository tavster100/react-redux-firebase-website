/* eslint-disable no-unused-vars */
import userTypes from './user.types'
// import { handleUserProfile, auth, GoogleProvider } from './../../firebase/utils'

export const emailSignInStart = (userCredentials) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials,
})
export const signInSucces = (user) => ({
    type: userTypes.SIGN_IN_SUCCES,
    payload: user,
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION,
})

export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START,
})

export const signOutUserSucces = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCES,
})
export const signUpUserStart = (userCredentials) => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: userCredentials,
})
export const userError = (err) => ({
    type: userTypes.USER_ERROR,
    payload: err,
})
export const resetPasswordStart = (userCredentials) => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: userCredentials,
})
export const resetPasswordSucces = () => ({
    type: userTypes.RESET_PASSWORD_SUCCES,
    payload: true,
})
export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE,
})

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START,
})