import {FETCH_MESSAGES,DELETE_MESSAGES,ADD_MESSAGES} from "../actionTypes";

export default  function(state=[],action){
    switch(action.type){
        case ADD_MESSAGES:
            return [...state,action.message];
        case FETCH_MESSAGES:
            return [...action.messages];
        case DELETE_MESSAGES:
            return state.filter(messages=>messages._id!==action.m_id);
        default:
            return state;
    }
}