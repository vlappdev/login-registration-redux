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
            userService.register(user)
                .then(
                    (user) => {
                        dispatch(success());
                        history.push('/login')
                        dispatch(alertActions.success(`Registration successful ${user}`))
                    },
                    (error) => {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error(error.message))
                    }
                )
        };

        function success(user){
            return {
                type: "REGISTER_SUCCESS",
                user
            }
        }
        function failure(error){
            return {
                type: "REGISTER_FAILURE",
                error
            }
        }
    }

    function login(email, password) {

        return dispatch => {
            userService.login( email, password )
                .then(
                    user => {
                        dispatch( success(user) );
                        history.push('/')
                    },
                    error => {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error(error.message));
                    }
                );
        };

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

