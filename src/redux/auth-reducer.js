import { authAPI } from '../api/api';
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, email, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } })


/* before refactoring
export const getAuthUserData = () => (dispatch) => {
    authAPI
        .me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            };
        });
}*/
// after refactoring
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    };
}


/* before refactoring
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI
        .login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                let action = stopSubmit("login", { _error: message });
                dispatch(action);
            };
        });
}*/
// after refactoring
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    };
}


/* before refactoring
export const logout = () => (dispatch) => {
    authAPI
        .logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            };
        });
}*/
// after refactoring
export const logout = () => (dispatch) => {
    let response = authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    };
}


export default authReducer;