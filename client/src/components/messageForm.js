import React,{Component} from "react";

class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:"",
        }
    }
    handleChange = e=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.props.history.push("/");
    }

    render(){
        return(
            <form className="form-group messageForm">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.text} className="form-control" id="message" placeholder="Enter Message"/>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        )
    }
}

export default MessageForm;