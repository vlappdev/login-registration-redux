import { combineReducers } from 'redux'
import registrationReducer from './registrationReducer'
import authenticationReducer from './authenticationReducer'
import alertReducer from './alertReducer'


const rootReducer = combineReducers({
    registrationReducer,
    authenticationReducer,
    alertReducer
});

export default rootReducer