import userTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    signInSucces: false,
    signUpSucces: false,
    signUpError: [],
    resetPasswordSucces: false,
    resetPasswordError: [],
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case userTypes.SIGN_IN_SUCCES:
            return {
                ...state,
                signInSucces: action.payload,
            }
        case userTypes.SIGN_UP_SUCCES:
            return {
                ...state,
                signUpSucces: action.payload,
            }
        case userTypes.SIGN_UP_ERROR:
            return {
                ...state,
                signUpError: action.payload,
            }
        case userTypes.RESET_PASSWORD_SUCCES:
            return {
                ...state,
                resetPasswordSucces: action.payload,
            }
        case userTypes.RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordError: action.payload,
            }
        case userTypes.RESET_AUTH_FORMS:
            return {
                ...state,
                signInSucces: false,
                signUpSucces: false,
                signUpError: [],
                resetPasswordSucces: false,
                resetPasswordError: [],
            }
        default:
            return state
    }
}
export default userReducer