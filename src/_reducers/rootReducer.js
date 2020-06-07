import { combineReducers } from 'redux'
//import { authentication  } from './authenticationReducer'
import registrationReducer from './registrationReducer'
import {authenticationReducer} from './authenticationReducer'
import { alertReducer } from './alertReducer'


const rootReducer = combineReducers({
    registrationReducer,
    authenticationReducer,
    alertReducer
});

export default rootReducer