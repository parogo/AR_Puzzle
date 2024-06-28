import { combineReducers } from "redux";
import creadores from "./creadores";
import nivel from "./nivel"
import auth from "./auth"
import nivelesDisponibles from "./nivelesDisponibles"

export default combineReducers({
    creadores,
    nivel,
    nivelesDisponibles,
    auth
})