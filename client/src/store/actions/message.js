import {FETCH_MESSAGES,DELETE_MESSAGES,ADD_MESSAGES} from "../actionTypes";
import {apiCall} from "../../services/api";

const fetchMessage = function(data){
    return {
        type: FETCH_MESSAGES,
        messages: data,
    }
}
exports.addMessage = async function(method,userId,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall[method](`http://localhost:3001/api/user/${userId}/message`,data)
                    .then(res=>{
                        dispatch(fetchMessage(res))
                        resolve();
                    }).catch(err=>{
                        reject(err);
                    })
        })
    }
}