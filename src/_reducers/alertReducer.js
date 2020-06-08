
export const alertReducer = (state = {}, action) => {
    switch(action.type){
        case "ALERT_SUCCESS":
            return {
                message: action.message
            };
        case "ALERT_ERROR":
            return {
                message: action.message
            };
        case "ALERT_CLEAR":
            return{};
        default:
            return state
    }
};