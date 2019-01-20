import React from "react";
import profileImg from "../Images/profileImg.jpg"
export default function(props){
    const {username,id,text,m_id,mu_id,handleDelete} = props;
    return (
        <div className="message-body">
            <img src={profileImg} alt={username} sizes="100px"></img>
            <p>{text}</p>
            <p>By @{username}</p>
            {mu_id===id&&
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>}
        </div>
    )
}