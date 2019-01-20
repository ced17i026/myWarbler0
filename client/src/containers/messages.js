import React , {Component} from "react";
import {connect} from "react-redux";
import {fetchMessages} from "../store/actions/message";
class Messages extends Component{
    componentDidMount(){
        this.props.fetchMessages(this.props.currentUser.currentUser._id)
        .then(res=>{
            console.log(res);
        })
    }
    render(){
        return(
            <div></div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        message: state.message,
        currentUser: state.currentUser,
    }
}
export default connect(mapStateToProps,{fetchMessages})(Messages);