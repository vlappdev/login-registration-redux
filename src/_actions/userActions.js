import { userService } from '../_services/userService'
import { history } from '../_helpers/history'
import { alertActions } from './alertActions'

    export const userActions = {
        register,
        login,
        logout
    };

    function register(user){

        return dispatch => {
            dispatch(request(user));

            userService.register(user)
                .then(
                    (user) => {
                        dispatch(success());
                        history.push('/login')
                        dispatch(alertActions.success('Registration successful'))
                    },
                    error => {
                        console.log(error.message);
                        dispatch(alertActions.error(error.message))
                    }
                )
        };

        function request(user){
            return {
                type: "REGISTER_REQUEST",
                user
            }
        }

        function success(user){
            return {
                type: "REGISTER_SUCCESS",
                user
            }
        }
    }

    function login(email, password) {

        return dispatch => {
            //dispatch(request({ email }))
            const test = userService.login( email, password )
                .then(
                    user => {
                        console.log(user)
                        dispatch( success(user) );
                        history.push('/')
                    },
                    error => {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error(error.message));
                    }
                );

            console.log(test)
        };

        function request(user){
            console.log(user);
            return {
                type: "LOGIN_REQUEST",
                user
            }
        }

        function success(user){
            return {
                type: "LOGIN_SUCCESS",
                user
            }
        }

        function failure(error){
            return {
                type: "LOGIN_FAILURE",
                error
            }
        }
    }

    function logout() {
        userService.logout();
        return { type: "LOGOUT"}
    }

