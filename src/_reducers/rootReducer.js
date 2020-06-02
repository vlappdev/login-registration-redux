import { combineReducers } from 'redux'
//import { authentication  } from './authenticationReducer'
import registrationReducer from './registrationReducer'
import {authenticationReducer} from './authenticationReducer'



const rootReducer = combineReducers({
    registrationReducer,
    authenticationReducer
});

export default rootReducer