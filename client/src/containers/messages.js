import React , {Component} from "react";
import {connect} from "react-redux";
import {fetchMessages} from "../store/actions/message";
import RenderMessages from "../components/renderMessage";
class Messages extends Component{
    componentDidMount(){
        this.props.fetchMessages(this.props.currentUser.currentUser._id);
    }
    render(){
        const {_id,username} = this.props.currentUser.currentUser;
        const messageList = this.props.message.map(message=>{
            return <RenderMessages
                    id={_id}
                    m_id={message._id}
                    username={username}
                    text={message.text}
                />
        })
        return(
            <div className="messageAll">{messageList}</div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        message: state.messages,
        currentUser: state.currentUser,
    }
}
export default connect(mapStateToProps,{fetchMessages})(Messages);