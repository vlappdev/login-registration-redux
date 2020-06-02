import React, { Component } from 'react';
//import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

//import firebaseAuth from '../firebase'
//import {AuthContext} from "./Auth";



class LoginPage extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            submitted: false
        }
    }

    handleLogin = (e) => {
        e.preventDefault();

        this.setState({
            submitted: true
        });

    };

    //const handleLogin = useCallback(
        //console.log("LOgin")
        // async event => {
        //     event.preventDefault();
        //     const { email, password } = event.target.elements;
        //
        //     try{
        //         await firebaseAuth
        //             .auth()
        //             .signInWithEmailAndPassword(email.value, password.value);
        //         history.push("/")
        //     } catch (err) {
        //         alert(err)
        //     }
        // }, [history]
    //);

    // const { currentUser } = useContext( AuthContext );

    // if(currentUser){
    //     return <Redirect to="/" />
    // }

    render(){
        return (
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleLogin}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Log in</button>
                    <Link to="/register" className="btn-link">Register</Link>
                </form>
            </div>
        );
    }

}

export default LoginPage;