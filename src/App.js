import React, {Component} from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './_helpers/history'

import PrivateRoute from './_components/PrivateRoute'
import { LoginPage } from './_components/LoginPage'
import { RegisterPage } from './_components/RegisterPage'
import MemberPage from './_components/MemberPage'
import { alertActions } from './_actions/alertActions'

class App extends Component {
    constructor(props){
        super(props);

        history.listen((location, action) => {
            //clear alert on location changes
            this.props.clearAlerts()
        });
    }
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
const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapStateToProps, actionCreators)(App)

export { connectedApp as App };
