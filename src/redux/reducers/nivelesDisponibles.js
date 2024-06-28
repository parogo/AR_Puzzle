import {
    GET_LISTA_NIVELES_DISPONIBLES_SUCCESS,
    GET_LISTA_NIVELES_DISPONIBLES_FAIL,
    CREATE_NIVEL_DISPONIBLE_SUCCESS,
    CREATE_NIVEL_DISPONIBLE_FAIL,
    DELETE_NIVEL_DISPONIBLE_SUCCESS,
    DELETE_NIVEL_DISPONIBLE_FAIL
} from '../actions/nivelesDisponibles/types';

const initialState = {
    lista_niveles_disponibles: null,
    count: null,
    next: null,
    previous: null
};

export default function nivelesDisponibles(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_LISTA_NIVELES_DISPONIBLES_SUCCESS:
            return {
                ...state,
                lista_niveles_disponibles: payload.results.niveles_creador,
                count: payload.count,
                next: payload.next,
                previous: payload.previous
            };
        case GET_LISTA_NIVELES_DISPONIBLES_FAIL:
            return {
                ...state,
                lista_niveles_disponibles: null,
                count: null,
                next: null,
                previous: null
            };
        case CREATE_NIVEL_DISPONIBLE_SUCCESS:
            return {
                ...state,
                lista_niveles_disponibles: state.lista_niveles_disponibles 
                    ? [payload, ...state.lista_niveles_disponibles]
                    : [payload],
                count: state.count ? state.count + 1 : 1
            };
        case CREATE_NIVEL_DISPONIBLE_FAIL:
            return {
                ...state
            };
        case DELETE_NIVEL_DISPONIBLE_SUCCESS:
            return {
                ...state,
                lista_niveles_disponibles: state.lista_niveles_disponibles
                    ? state.lista_niveles_disponibles.filter(nivel => nivel.id !== payload)
                    : [],
                count: state.count ? state.count - 1 : 0
            };
        case DELETE_NIVEL_DISPONIBLE_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}