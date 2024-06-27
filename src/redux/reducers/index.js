import { combineReducers } from "redux";
import creadores from "./creadores";
import nivel from "./nivel"
import auth from "./auth"

export default combineReducers({
    creadores,
    nivel,
    auth
})