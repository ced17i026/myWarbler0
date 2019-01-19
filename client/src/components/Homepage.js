import React from "react";
import {Link} from "react-router-dom";
export const Homepage = function(props){
    return (
        <div className="Homepage-full">
            {props.user.isAuthenticated?
                (<div></div>):
                (
                    <div className="Homepage-sub">
                        <h1>New To Warbler !</h1>
                        <Link to="/signup" className="btn btn-success">Sign Up Here</Link>
                    </div>
                )
            }
        </div>
    )
}