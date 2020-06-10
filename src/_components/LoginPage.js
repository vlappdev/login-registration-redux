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
        const{ email, password, submitted } = this.state;
        const { alert } = this.props;
        console.log(this.props)
        return (
            <div className="shadow col-sm-6 col-lg-4 border p-5">
                { alert.message && <div className={`alert ${ alert.type }`}>{ alert.message }</div>}
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="d-block mb-3">
                        Email
                        <input type="email" onChange={this.handleChange} value={ email }
                               name="email" className={"form-control" + (submitted && !email ? " is-invalid": "")} placeholder="Enter email"/>
                        { submitted && !email &&
                        <div className="invalid-feedback">Email is required</div> }
                    </label>


                    <label className="d-block mb-3">
                        Password
                        <input type="password" onChange={this.handleChange} value={ password }
                               name="password" className={"form-control" + (submitted && !password ? " is-invalid": "")} placeholder="Password"/>
                        { submitted && !password &&
                        <div className="invalid-feedback">Password is required</div> }
                    </label>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to="/register" className="btn text-primary">Register</Link>
                </form>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    const alert = state.alertReducer;
    const { loggedIn } = state.authenticationReducer;
    return { alert, loggedIn }
};

//mapDispatchToProps
const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(LoginPage);

export {connectedLoginPage as LoginPage};