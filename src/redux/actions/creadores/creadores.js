import axios from 'axios';
import { 
    GET_CREADORES_SUCCESS, 
    GET_CREADORES_FAIL,
}
 from './types';

export const get_creadores = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/creador/list`, config);
        //console.log(res.status);
        if(res.status === 200) {
            dispatch({
                type: GET_CREADORES_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: GET_CREADORES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_CREADORES_FAIL
        });
    }
}