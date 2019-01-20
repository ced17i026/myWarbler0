import React , {Component} from "react";
import {connect} from "react-redux";

class Messages extends Component{
    render(){
        return(
            <div></div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        message: state.message,
    }
}
export default connect(mapStateToProps)(Messages);