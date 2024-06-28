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
 from '../actions/nivel/types';;

const initialState = {
    lista_niveles: null,
    niveles_creador: null,
    niveles_filtrados: null,
    nivel_detallado: null,
    count: null,
    next: null,
    previous: null
};

export default function nivel(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_LISTA_NIVELES_SUCCESS:
            return {
                ...state,
                lista_niveles: payload.results.lista_niveles,
                count: payload.count,
                next: payload.next,
                previous: payload.previous
            };
        case GET_LISTA_NIVELES_FAIL:
            return {
                ...state,
                lista_niveles: null,
                count: null,
                next: null,
                previous: null
            };
        case GET_LISTA_NIVELES_BY_CREADOR_SUCCESS:
            return {
                ...state,
                niveles_creador: payload.results.niveles_creador,
                count: payload.count,
                next: payload.next,
                previous: payload.previous
            };
        case GET_LISTA_NIVELES_BY_CREADOR_FAIL:
            return {
                ...state,
                niveles_creador: null,
                count: null,
                next: null,
                previous: null
            };
        case GET_DETAILED_NIVEL_SUCCESS:
            return {
                ...state,
                nivel_detallado: payload.nivel_detallado
            };
        case GET_DETAILED_NIVEL_FAIL:
            return {
                ...state,
                nivel_detallado: null
            };
        case GET_SEARCH_NIVEL_SUCCESS:
            return {
                ...state,
                niveles_filtrados: payload.results.niveles_filtrados,
                count: payload.count,
                next: payload.next,
                previous: payload.previous
            };
        case GET_SEARCH_NIVEL_FAIL:
            return {
                ...state,
                niveles_filtrados: null,
                count: null,
                next: null,
                previous: null
            };
        case CREATE_NIVEL_SUCCESS:
            return {
                ...state,
                lista_niveles: state.lista_niveles ? [payload, ...state.lista_niveles] : [payload]
            };
        case CREATE_NIVEL_FAIL:
            return {
                ...state
            };
        case DELETE_NIVEL_SUCCESS:
            return {
                ...state,
                lista_niveles: state.lista_niveles ? state.lista_niveles.filter(nivel => nivel.slug !== payload) : []
            };
        case DELETE_NIVEL_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}   
