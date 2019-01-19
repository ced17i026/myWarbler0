import React from "react";
import {connect} from "react-redux";
export const Navbar = function(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Warbler</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* eslint-disable-next-line*/}
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        {/* eslint-disable-next-line*/}
                            <a className="nav-link" href="/signin">Sign In</a>
                        </li>
                        <li className="nav-item">
                        {/* eslint-disable-next-line*/}
                            <a className="nav-link" href="/signup">Sign Up</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps,null)(Navbar);