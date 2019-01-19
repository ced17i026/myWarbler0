import {ADD_USER,REMOVE_USER} from "../actionTypes";
const Default_state = {
    isAuthenticated: false,
    currentUser:{}
}
export default function(state=Default_state,action){
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user),
                currentUser: action.user,
            }
        case REMOVE_USER:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {}
            }
        default:
            return state;
    }
}