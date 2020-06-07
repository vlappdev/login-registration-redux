import React, {Component} from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './_helpers/history'

import PrivateRoute from './_components/PrivateRoute'
import { LoginPage } from './_components/LoginPage'
import { RegisterPage } from './_components/RegisterPage'
import MemberPage from './_components/MemberPage'

class App extends Component {
    render() {
        const { message } = this.props;
        return (
            <div>
                { message && <div>{message}</div>}
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={ MemberPage }/>
                        <Route path="/login" component={ LoginPage }/>
                        <Route path="/register" component={ RegisterPage }/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    const { alertReducer } = state;
    return alertReducer
};


//mapDispatchToProps
// const actionCreators = {
//
// };

const connectedApp = connect(mapStateToProps)(App)

export { connectedApp as App };







// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import MemberPage from './_components/MemberPage'
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
//                     <PrivateRoute exact path='/' component={ MemberPage } />
//                     <Route exact path='/login' component={ Login } />
//                     <Route exact path='/signup' component={ SignUp } />
//                 </div>
//             </Router>
//         </AuthProvider>
//     );
// }
//
// export default App;