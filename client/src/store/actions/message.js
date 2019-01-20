import {FETCH_MESSAGES,DELETE_MESSAGES,ADD_MESSAGES} from "../actionTypes";
import {apiCall} from "../../services/api";

const fetchMessage = function(data){
    return {
        type: FETCH_MESSAGES,
        messages: data,
    }
}
const addMessage = function(data){
    return {
        type: ADD_MESSAGES,
        message:data,
    }
}
exports.fetchMessage = function(userId,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('get',`http://localhost:3001/api/user/${userId}/message`,data)
                    .then(res=>{
                        dispatch(fetchMessage(res))
                        resolve();
                    }).catch(err=>{
                        reject(err);
                    })
        })
    }
}

exports.deleteMessage = function(userId,m_id){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('delete',`http://localhost:3001/api/user/${userId}/message/${m_id}`)
                    .then(res=>{
                        dispatch(fetchMessage(res))
                        resolve();
                    }).catch(err=>{
                        reject(err);
                    })
        })
    }
}

exports.addMessage = function(userId,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('post',`http://localhost:3001/api/user/${userId}/message`,data)
                    .then(res=>{
                        dispatch(addMessage(res));
                        resolve();
                    }).catch(err=>{
                        reject(err);
                    })
        })
    }
}