import React,{Component} from "react";
import {Route,withRouter,Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Homepage} from "../components/Homepage";
import {authUser} from "../store/actions/auth";
import AuthForm from "../components/AuthForm";

class Main extends Component{
    render(){
        const {authUser} = this.props;
        return (
            <Switch>
                <Route exact path="/" render={(props)=><Homepage/>}/>
                <Route exact path="/signup" render={(props)=><AuthForm {...props} authUser={authUser} heading="Sign Up"/>}/>
                <Route exact path="/signin" render={(props)=><AuthForm {...props} authUser={authUser} heading="Sign In"/>}/>
            </Switch>
        )
    }
}

const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser,
        error: state.error,
    }
}

export default withRouter(connect(mapStateToProps,{authUser})(Main));