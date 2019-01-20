import React,{Component} from "react";
import {Route,withRouter,Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Homepage} from "../components/Homepage";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/Error";
import AuthForm from "../components/AuthForm";
import MessagesForm from "../components/messageForm";

class Main extends Component{
    render(){
        const {authUser,error,removeError,currentUser} = this.props;
        return (
            <Switch>
                <Route exact path="/" render={(props)=><Homepage {...props} user={currentUser}/>}/>
                <Route exact path="/signup" render={(props)=><AuthForm {...props} removeError={removeError} error={error} authUser={authUser} heading="Sign Up"/>}/>
                <Route exact path="/signin" render={(props)=><AuthForm {...props} removeError={removeError} error={error} authUser={authUser} heading="Sign In"/>}/>
                <Route exact path="/message/new" render={()=><MessagesForm/>}/>
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

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));