import React,{Component} from "react";
class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            username:"",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const type=this.props.heading === "Sign Up"?"signup":"signin";
        this.props.authUser(type,this.state).then(()=>{
            this.props.history.push("/");
        })
        this.setState({
            email:"",
            username:"",
            password:"",
        })
    }
    render(){
        const {heading,error,history,removeError} = this.props;
        const {username,email,password} = this.state;
        history.listen(()=>{
            removeError();
        })
        return(
            <div className="AuthForm">
                <h1>{heading}</h1>
                {error.message && 
                <div className="alert alert-danger">{error.message}</div>}
                <form onSubmit={this.handleSubmit}>
                    {heading === "Sign Up"&&
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" onChange={this.handleChange} value={username} className="form-control" id="username" placeholder="Enter Username"/>
                        </div>
                    }
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange={this.handleChange}  id="exampleInputEmail1" name="email" vlaue={email} placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={this.handleChange}  name="password" value={password} id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">{heading}</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;