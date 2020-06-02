

let user = { loggedIn: false };

const initialState = user ? {loggedIn: true, user} : {};

export const authentication = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN_REQUEST":
            return console.log("LOGIN_REQUEST");
        case "LOGIN_SUCCESS":
            return console.log("LOGIN_SUCCESS");
        default:
            return state
    }
};