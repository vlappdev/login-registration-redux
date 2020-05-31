import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
            </div>
        </Router>
    );
}

export default App;