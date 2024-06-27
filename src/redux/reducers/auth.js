import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    AUTHENTICADED_SUCCESS,
    AUTHENTICADED_FAIL,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL
} from '../actions/auth/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    usernameMessage: null,
    emailMessage: null,
    passwordMessage: null,
    isAuthenticated: null,
    isRegistered: null,
    user: null,
    loading: null,
    userLoading: true,
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
                userLoading: false
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null,
                userLoading: false
            };
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            };
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: localStorage.getItem('access'),
                refresh: localStorage.getItem('refresh'),
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true
            };
        case REGISTER_FAIL:
            if (payload.username)
                localStorage.setItem('usernameMessage', payload.username);
            else
                localStorage.removeItem('usernameMessage');

            if (payload.email)
                localStorage.setItem('emailMessage', payload.email);
            else
                localStorage.removeItem('emailMessage');

            if (payload.password)
                localStorage.setItem('passwordMessage', payload.password)
            else
                localStorage.removeItem('passwordMessage');
            
            return {
                ...state,
                isRegistered: false,
                usernameMessage: localStorage.getItem('usernameMessage'),
                emailMessage: localStorage.getItem('emailMessage'),
                passwordMessage: localStorage.getItem('passwordMessage')
            };
        case RESET_PASSWORD_SUCCESS:
        case RESET_PASSWORD_FAIL:
            return {
                ...state,
            };
        case RESET_PASSWORD_CONFIRM_SUCCESS:
            return {
                ...state,
                isPasswordChanged: true
            };
        case RESET_PASSWORD_CONFIRM_FAIL:
            return {
                ...state,
                isPasswordChanged: false
            };
        case AUTHENTICADED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case AUTHENTICADED_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null
            };
        case REFRESH_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                access: localStorage.getItem('access'),
                refresh: localStorage.getItem('refresh'),
            };
        case LOGIN_FAIL:
        case REFRESH_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}
