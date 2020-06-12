
const registrationReducer = (state = {}, action) => {
    switch (action.typeof){
        case "REGISTER_REQUEST":
            return {
                registering: true
            };
        case "REGISTER_SUCCESS":
            return {};
        case "REGISTER_FAILURE":
            return {};
        default:
            return state
    }
};

export default registrationReducer;

