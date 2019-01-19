import {ADD_USER, REMOVE_USER} from "../actionTypes";
import {apiCall} from "../../services/api";
import {addError,removeError} from "./Error";

const addUser = function(userData){
    return {
        type: ADD_USER,
        user: userData,
    }
}

const removeUser = function(){
    return {
        type: REMOVE_USER,
        user:{}
    }
}

export const logout = function(){
    return dispatch=>{
        localStorage.clear();
        dispatch(removeUser())
    }
}
export const authUser = function(type,data){
    return dispatch=>{
        return apiCall('post',`http://localhost:3001/api/user/${type}`,data)
                .then(res=>{
                    localStorage.setItem("jwtToken",res.token);
                    dispatch(addUser(res));
                    dispatch(removeError());
                }).catch(err=>{
                    dispatch(addError(err.data.message));
                })
    }
}