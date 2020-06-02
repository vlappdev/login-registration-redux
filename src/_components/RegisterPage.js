import React, { Component } from 'react';
import { connect } from 'react-redux'
//import {withRouter} from 'react-router';
import firebaseAuth from '../firebase'
import {userService} from "../_services/userService";
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
        console.log(this.props);
        this.setState({ submitted: true });
        const { user } = this.state;

        if( user.email && user.password ){
            this.props.register(user);
        }


        // firebaseAuth.auth().createUserWithEmailAndPassword(email.value, password.value)
        //     .then(()=>{
        //         console.log('reg')
        //     });
    };
    // const handleSignUp = useCallback(async event => {
    //     event.preventDefault();
    //     const { email, password } = event.target.elements
    //
    //     try{
    //         await firebaseAuth
    //             .auth()
    //             .createUserWithEmailAndPassword(email.value, password.value);
    //         history.push("/");
    //     } catch (err) {
    //         alert(err)
    //     }
    // }, [history]);

    render(){

        //const {user, } = this.state;
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input name="email" onChange={this.handleChange} value={this.state.user.email} type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input name="password" onChange={this.handleChange} value={this.state.user.password} type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Register</button>
                    <Link to="/login" className="btn-link">LOGIN</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.registrationReducer)
    //return state
};

//MapDispatchToProps
const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapStateToProps, actionCreators)
(RegisterPage);

export {connectedRegisterPage as RegisterPage};