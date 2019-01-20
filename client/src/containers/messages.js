import React , {Component} from "react";
import {connect} from "react-redux";
import {fetchMessages,deleteMessages} from "../store/actions/message";
import RenderMessages from "../components/renderMessage";
class Messages extends Component{
    componentDidMount(){
        this.props.fetchMessages(this.props.currentUser.currentUser._id);
    }
    handleDelete(id,m_id){
        this.props.deleteMessages(id,m_id)
        .then(res=>{
            
        })
    }
    render(){
        const {_id} = this.props.currentUser.currentUser;
        const messageList = this.props.message.map(message=>{
            return <RenderMessages
                    key={message._id}
                    id={_id}
                    handleDelete={()=>this.handleDelete(_id,message._id)}
                    m_id={message._id}
                    mu_id={message.user._id}
                    username={message.user.username}
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
export default connect(mapStateToProps,{fetchMessages,deleteMessages})(Messages);