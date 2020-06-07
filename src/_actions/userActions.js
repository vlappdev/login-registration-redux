import { userService } from '../_services/userService'
import { history } from '../_helpers/history'

    export const userActions = {
        register,
        login,
        logout
    };

    function register(user){

        return dispatch => {
            dispatch(request(user))

            history.push('/login')


            // userService.register(user)
            //     .then(
            //         (user) => {
            //             dispatch(success());
            //             history.push('/login')
            //     })
        };

        function request(user){
            console.log(user)
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
            const test  = userService.login( email, password )
                .then(
                    user => {
                        console.log(user)
                        dispatch( success(user) )
                        history.push('/')
                    }
                );
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

