import React, { Component } from 'react';
import { connect } from 'react-redux'


import { userActions } from'../_actions/userActions'
import registrationReducer from "../_reducers/registrationReducer";
import {Link} from "react-router-dom";

class RegisterPage extends Component{

    constructor(){
        super();
        this.state = {
            user:{
                email:'',
                password: ''
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name] : value
            }
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;

        if( user.email && user.password ){
            this.props.register(user);
        }
    };

    render(){

        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input name="email" onChange={this.handleChange} value={this.state.user.email} type="email" placeholder="Email" />
                        { this.state.submitted && !this.state.email &&
                        <div>Email is required</div> }
                    </label>
                    <label>
                        Password
                        <input name="password" onChange={this.handleChange} value={this.state.user.password} type="password" placeholder="Password" />
                        { this.state.submitted && !this.state.password &&
                        <div>Password is required</div>}
                    </label>
                    <button type="submit">Register</button>
                    <Link to="/login" className="btn-link">LOGIN</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const{ registering } = state.registrationReducer
    return { registering }
};

//MapDispatchToProps
const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapStateToProps, actionCreators)
(RegisterPage);

export {connectedRegisterPage as RegisterPage};