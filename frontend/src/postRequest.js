import axios from "axios";
import React from "react";

export default class PostRequest extends React.Component{
    state={
        fname:"",
        lname:"",
        email:"",
        mno:"",
        password:"",
    }

    handleFnameChange=(event)=>{
        this.setState({fname:event.target.value});
    };
    handleLnameChange=(event)=>{
        this.setState({lname:event.target.value});
    };
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value});
    };
    handleContactChange=(event)=>{
        this.setState({mno:event.target.value});
    };
    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value});
    };

    handleSubmit=(event)=>{
        event.preventDefault();

        const user={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            mno:this.state.mno,
            password:this.state.password
        }

        axios.post(`http://localhost:3000/user/api`,user)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            if(res.status==200)
            window.location.reload(false);
        })
    }

    render(){
        return(
            <div className="col-md-6">
                <h1>Registration Form</h1>
                <form className="form-control" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div>
                    <label className="form-label">First Name:</label>
                    <input className="form-control" type="text" onChange={this.handleFnameChange.bind(this)}/>
                    </div>
                    <div>
                    <label className="form-label">Last Name:</label>
                    <input className="form-control" type="text" onChange={this.handleLnameChange.bind(this)}/>
                    </div>
                    <div>
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" onChange={this.handleEmailChange.bind(this)}/>
                    </div>
                    <div>
                    <label className="form-label">Contact:</label>
                    <input className="form-control" type="text" onChange={this.handleContactChange.bind(this)}/>
                    </div>
                    <div>
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" onChange={this.handlePasswordChange.bind(this)}/>
                    </div>
                    <div>
                    <button className="btn btn-primary mt-3 mb-3" type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}