import{
    GET_CREADORES_SUCCESS,
    GET_CREADORES_FAIL,
} from '../actions/creadores/types';

const initialState = {
    creadores: null,
};

export default function creadores(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_CREADORES_SUCCESS:
            return {
                ...state,
                creadores: payload.creadores
            };
        case GET_CREADORES_FAIL:
            return {
                ...state,
                creadores: null
            };
        default:
            return state;
    }
}   