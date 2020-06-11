
let user = localStorage.getItem('email');
const initialState = user ? {loggedIn: true, user} : {};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                loggedIn: true,
                user: action.user
            };
        case "LOGIN_SUCCESS":
            return {
                loggedIn: true,
                user: action.user
            };
        case "LOGIN_FAILURE":
            return {};
        case "LOGOUT":
            return {};
        default:
            return state
    }
};

export default authenticationReducer