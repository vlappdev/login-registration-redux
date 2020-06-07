import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

//import firebaseAuth from '../firebase'
import { userActions } from '../_actions/userActions'

class LoginPage extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
            submitted: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.props)

        this.setState({
            submitted: true
        });

        const{ email, password } = this.state
        if(email && password){
            console.log(this.state);
            this.props.login(email, password)
        }
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
    console.log(state.authentication)
    //return state
};


console.log(userActions);

const actionCreators = {
    login: userActions.login
    //logout:
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(LoginPage);

export {connectedLoginPage as LoginPage};