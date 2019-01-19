import {ADD_ERROR,REMOVE_ERROR} from "../actionTypes";

export const addError = function(message){
    return {
        type:ADD_ERROR,
        message: message
    }
}

export const removeError = function(){
    return {
        type: REMOVE_ERROR,
        message:null,
    }
}