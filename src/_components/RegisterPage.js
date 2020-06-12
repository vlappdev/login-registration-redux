import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { userActions } from'../_actions/userActions'

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
        const{ user, submitted} = this.state;
        const { alert } = this.props;
        return (
            <div className="shadow col-sm-6 col-lg-4 border p-5">
                { alert.message && <div className={`alert ${ alert.type }`}>{ alert.message }</div>}
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="d-block mb-3">
                        Email
                        <input type="email" onChange={this.handleChange} value={user.email} name="email"
                               className={"form-control" + (submitted && !user.email ? " is-invalid": "")} placeholder="Email" />
                        { submitted && !user.email &&
                        <div>Email is required</div> }
                    </label>
                    <label className="d-block mb-3">
                        Password
                        <input type="password" onChange={this.handleChange} value={user.password} name="password"
                               className={"form-control" + (submitted && !user.password ? " is-invalid": "")} placeholder="Password" />
                        { submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>}
                    </label>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <Link to="/login" className="btn text-primary">Cancel</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const alert = state.alertReducer;
    const{ registering } = state.registrationReducer
    return { alert, registering }
};

//MapDispatchToProps
const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapStateToProps, actionCreators)
(RegisterPage);

export {connectedRegisterPage as RegisterPage};