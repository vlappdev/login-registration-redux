import { userService } from '../_services/userService'
import { history } from '../_helpers/history'

    export const userActions = {
        register,
        login
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
            dispatch(request({ email }))
            userService.login( email, password )
                // .then(
                //     user => {
                //         dispatch( success(user) )
                //     }
                // )

        };

        function request(user){
            console.log(user);
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

