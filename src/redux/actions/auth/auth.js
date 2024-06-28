import axios from 'axios';
import Cookies from 'js-cookie';

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
} from './types';

/* const getCsrfToken = () => {
    const name = 'csrftoken';
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith(name)).split('=')[1];
    return cookieValue;
}; */

// Función para obtener el token CSRF
export const getCsrfToken = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/csrf/`, { withCredentials: true });
    Cookies.set('csrftoken', response.data.csrfToken);
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {

        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);

            if (res.status === 200) {
                dispatch({
                    type: USER_LOADED_SUCCESS,
                    payload: res.data
                });
            }
            else {
                dispatch({
                    type: USER_LOADED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    }
    else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
}

export const login = (email, password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        password
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create`, body, config);

        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(load_user());
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
        else {
            dispatch({
                type: LOGIN_FAIL
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
    } catch (err) {

        dispatch({
            type: LOGIN_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
}

export const register = (email, username, first_name, last_name, password, re_password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    //await getCsrfToken();

    /* const csrfToken = getCsrfToken();
    console.log("csrfToken")
    console.log(csrfToken) */
    //console.log("Cookies.get('csrftoken')")

    const config = {
        headers: {
            'Content-Type': 'application/json',
            //'X-CSRFToken': csrfToken
            //'X-CSRFToken': Cookies.get('csrftoken'),
            //'X-CSRFToken': Cookies.get('csrftoken'),
        },
        withCredentials: true,
    };

    const body = JSON.stringify({
        email,
        username,
        first_name,
        last_name,
        password,
        re_password
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/register`, body, config);
        if (res.status === 201) {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
        else {
            dispatch({
                type: REGISTER_FAIL,
                payload: res.data
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
    } catch (err) {

        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
}

export const check_authenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {

        const config = {
            headers: {
                'Access': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const body = JSON.stringify({
            token: localStorage.getItem('access')
        });

        try {

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify`, body, config);

            if (res.status === 200) {
                dispatch({
                    type: AUTHENTICADED_SUCCESS
                });
            }
            else {
                dispatch({
                    type: AUTHENTICADED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICADED_FAIL
            });
        }
    }
    else {
        dispatch({
            type: AUTHENTICADED_FAIL
        });
    }
}

export const refresh = () => async dispatch => {
    if (localStorage.getItem('refresh')) {

        const config = {
            headers: {
                'Access': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const body = JSON.stringify({
            refresh: localStorage.getItem('refresh')
        });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh`, body, config);

            if (res.status === 200) {
                dispatch({
                    type: REFRESH_SUCCESS,
                    payload: res.data
                });
            }
            else {
                dispatch({
                    type: REFRESH_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: REFRESH_FAIL
            });
        }
    }
    else {
        dispatch({
            type: REFRESH_FAIL
        });
    }
}

export const reset_password = (email) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);

        if (res.status === 204) {
            dispatch({
                type: RESET_PASSWORD_SUCCESS
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
        else {
            dispatch({
                type: RESET_PASSWORD_FAIL
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
    } catch (err) {

        dispatch({
            type: RESET_PASSWORD_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
}

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password
    });

    if (new_password !== re_new_password) {
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
    else {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);

            if (res.status === 204) {
                dispatch({
                    type: RESET_PASSWORD_CONFIRM_SUCCESS
                });
                dispatch({
                    type: REMOVE_AUTH_LOADING
                });
            }
            else {
                dispatch({
                    type: RESET_PASSWORD_CONFIRM_FAIL
                });
                dispatch({
                    type: REMOVE_AUTH_LOADING
                });
            }
        } catch (err) {
            dispatch({
                type: RESET_PASSWORD_CONFIRM_FAIL
            });
            dispatch({
                type: REMOVE_AUTH_LOADING
            });
        }
    }
}

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    });
}


