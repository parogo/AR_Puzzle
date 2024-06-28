import axios from 'axios';
import {
    GET_LISTA_NIVELES_DISPONIBLES_SUCCESS,
    GET_LISTA_NIVELES_DISPONIBLES_FAIL,
    CREATE_NIVEL_DISPONIBLE_SUCCESS,
    CREATE_NIVEL_DISPONIBLE_FAIL,
    DELETE_NIVEL_DISPONIBLE_SUCCESS,
    DELETE_NIVEL_DISPONIBLE_FAIL
} from './types';

// Acción para obtener niveles disponibles de un usuario
export const get_lista_niveles_disponibles = (username) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/nivelesDisponibles/list/${username}`, config);
        
        dispatch({
            type: GET_LISTA_NIVELES_DISPONIBLES_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_LISTA_NIVELES_DISPONIBLES_FAIL
        });
    }
};

// Acción para crear un nivel disponible
export const create_nivel_disponible = (user, nivel) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    const body = JSON.stringify({ 
        user,
        nivel
     });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/nivelesDisponibles/create`, body, config);
        
        dispatch({
            type: CREATE_NIVEL_DISPONIBLE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: CREATE_NIVEL_DISPONIBLE_FAIL
        });
    }
};

// Acción para eliminar un nivel disponible
export const delete_nivel_disponible = (id_relacion) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/nivelesDisponibles/delete/${id_relacion}`, config);
        
        dispatch({
            type: DELETE_NIVEL_DISPONIBLE_SUCCESS,
            payload: id_relacion
        });
    } catch (err) {
        dispatch({
            type: DELETE_NIVEL_DISPONIBLE_FAIL
        });
    }
};