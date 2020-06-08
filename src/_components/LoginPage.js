import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

//import firebaseAuth from '../firebase'
import { userActions } from '../_actions/userActions'

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.props.logout()
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            submitted: true
        });

        const{ email, password } = this.state
        if(email && password){
            this.props.login(email, password)
        }
    };

    render(){
        return (
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input name="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Log in</button>
                    <Link to="/register" className="btn-link">Register</Link>
                </form>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
     const { loggedIn } = state.authenticationReducer;
    return { loggedIn }
};

//mapDispatchToProps
const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(LoginPage);

export {connectedLoginPage as LoginPage};