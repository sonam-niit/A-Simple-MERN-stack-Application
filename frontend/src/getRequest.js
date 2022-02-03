import axios from "axios";
import React from "react";

export default class GetRequest extends React.Component{
    state={
        users:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/user/api`)
        .then((res)=>{
            const users=res.data;
            this.setState({users});
        })
    }

    render(){
        return(
            <div>
                <h1>My Data</h1>
                <table className="table table-warning table-striped">
                <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user)=> (
                        <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.mno} </td>
                        </tr>
                ))}
                </tbody>
            </table>
            </div>
        )
    }
}