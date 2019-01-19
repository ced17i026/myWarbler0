import {FETCH_MESSAGE,DELETE_MESSAGES,ADD_MESSAGES} from "../actionTypes";
import {apiCall} from "../../services/api";

const addMessage = function(data){
    return {
        type: ADD_MESSAGES,
        
    }
}
exports.addMessage = async function(method,userId,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall[method](`http://localhost:3001/api/user/${userId}/message`,data)
                    .then(res=>{
                        dispatch(addMessage)
                    })
        })
    }
}