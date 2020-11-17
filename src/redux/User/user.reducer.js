import userTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    userErr: [],
    resetPasswordSucces: false,
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCES:
            return {
                ...state,
                currentUser: action.payload,
                userErr: [],
            }

        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload,
            }
        case userTypes.RESET_PASSWORD_SUCCES:
            return {
                ...state,
                resetPasswordSucces: action.payload,
            }

        case userTypes.RESET_USER_STATE: //stacked
        case userTypes.SIGN_OUT_USER_SUCCES: //stacked
            return {
                ...state,
                ...INITIAL_STATE,
            }
        default:
            return state
    }
}
export default userReducer