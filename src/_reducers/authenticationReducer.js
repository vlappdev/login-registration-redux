

let user = { loggedIn: false };

const initialState = user ? {loggedIn: true, user} : {};

export const authenticationReducer = (state = initialState, action) => {
    
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
        case "LOGOUT":
            return {};
        default:
            return state
    }
};