import {combineReducers} from "redux";
import error from "./error";
import currentUser from "./currentUser";

export default combineReducers({
    error,
    currentUser,
})