

const success  = ( message ) => {
    return {
        type: "ALERT_SUCCESS",
        message
    }
};

const error = ( message ) => {
    return {
        type: "ALERT_ERROR",
        message
    }
};

export const alertActions = {
    success,
    error
};