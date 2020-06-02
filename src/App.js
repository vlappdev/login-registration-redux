import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './_helpers/history'

import PrivateRoute from './_components/PrivateRoute'
import LoginPage from './_components/LoginPage'
import { RegisterPage } from './_components/RegisterPage'
import HomePage from './_components/HomePage'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={ HomePage }/>
                    <Route path="/login" component={ LoginPage }/>
                    <Route path="/register" component={ RegisterPage }/>
                </Switch>
            </Router>
        );
    }
}

export default App;







// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from './_components/HomePage'
// import Login from './_components/Login'
// import SignUp from './_components/SignUp'
// import { AuthProvider } from './_components/Auth'
// import PrivateRoute from "./_components/PrivateRoute";
//
// function App() {
//     return (
//         <AuthProvider>
//             <Router>
//                 <div>
//                     <PrivateRoute exact path='/' component={ HomePage } />
//                     <Route exact path='/login' component={ Login } />
//                     <Route exact path='/signup' component={ SignUp } />
//                 </div>
//             </Router>
//         </AuthProvider>
//     );
// }
//
// export default App;