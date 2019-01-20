import React from "react";
import profileImg from "../Images/profileImg.jpg"
export default function(props){
    const {username,id,text} = props;
    return (
        <div className="message-body">
            <img src={profileImg} alt={username} sizes="100px"></img>
            <p>{text}</p>
            <p>By @{username}</p>
        </div>
    )
}