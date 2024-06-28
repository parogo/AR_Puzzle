import axios from 'axios';
import {
    GET_LISTA_NIVELES_SUCCESS,
    GET_LISTA_NIVELES_FAIL,
    GET_LISTA_NIVELES_BY_CREADOR_SUCCESS,
    GET_LISTA_NIVELES_BY_CREADOR_FAIL,
    GET_DETAILED_NIVEL_SUCCESS,
    GET_DETAILED_NIVEL_FAIL,
    GET_SEARCH_NIVEL_SUCCESS,
    GET_SEARCH_NIVEL_FAIL,
    CREATE_NIVEL_SUCCESS,
    CREATE_NIVEL_FAIL,
    DELETE_NIVEL_SUCCESS,
    DELETE_NIVEL_FAIL
}
    from './types';

export const get_lista_niveles = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/list`, config);
        //console.log(`${process.env.REACT_APP_API_URL}/api/nivel/list`);
        if (res.status === 200) {
            dispatch({
                type: GET_LISTA_NIVELES_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_LISTA_NIVELES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_LISTA_NIVELES_FAIL
        });
    }
}

export const get_lista_niveles_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/list?p=${page}`, config);
        //console.log(res.status);
        if (res.status === 200) {
            dispatch({
                type: GET_LISTA_NIVELES_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_LISTA_NIVELES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_LISTA_NIVELES_FAIL
        });
    }
}

export const get_lista_niveles_by_creador = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/list/creator?creador_slug=${slug}`, config);
        //console.log(res.status);
        if (res.status === 200) {
            dispatch({
                type: GET_LISTA_NIVELES_BY_CREADOR_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_LISTA_NIVELES_BY_CREADOR_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_LISTA_NIVELES_BY_CREADOR_FAIL
        });
    }
}

export const get_lista_niveles_by_creador_page = (slug, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/list/creator?creador_slug=${slug}&p=${page}`, config);
        //console.log(res.status);
        if (res.status === 200) {
            dispatch({
                type: GET_LISTA_NIVELES_BY_CREADOR_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_LISTA_NIVELES_BY_CREADOR_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_LISTA_NIVELES_BY_CREADOR_FAIL
        });
    }
}

export const get_detailed_nivel = (slug_nivel) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/detail/${slug_nivel}`, config);
        //console.log(res.status);
        if (res.status === 200) {
            dispatch({
                type: GET_DETAILED_NIVEL_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_DETAILED_NIVEL_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_DETAILED_NIVEL_FAIL
        });
    }
}

export const get_search_nivel = (search_term) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/search?s=${search_term}`, config);
        //console.log(res.status);
        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_NIVEL_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_SEARCH_NIVEL_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_NIVEL_FAIL
        });
    }
}

export const get_search_nivel_page = (search_term, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivel/search?p=${page}&s=${search_term}`, config);
        //console.log(res.status);
        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_NIVEL_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_SEARCH_NIVEL_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_NIVEL_FAIL
        });
    }
}

export const create_nivel = (nivelData) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    const formData = new FormData();
    for (const key in nivelData) {
        formData.append(key, nivelData[key]);
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/nivel/create`, formData, config);
        
        if (res.status === 201) {
            dispatch({
                type: CREATE_NIVEL_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: CREATE_NIVEL_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: CREATE_NIVEL_FAIL
        });
    }
};

export const delete_nivel = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/nivel/delete/${slug}`, config);
        
        if (res.status === 204) {
            dispatch({
                type: DELETE_NIVEL_SUCCESS,
                payload: slug
            });
        } else {
            dispatch({
                type: DELETE_NIVEL_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: DELETE_NIVEL_FAIL
        });
    }
};