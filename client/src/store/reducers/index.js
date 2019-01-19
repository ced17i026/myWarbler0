import {combineReducers} from "redux";
import error from "./error";
import currentUser from "./currentUser";
import messages from "./message";

export default combineReducers({
    error,
    messages,
    currentUser,
})