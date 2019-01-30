import { AUTH_USER, AUTH_ERROR, AUTH_SIGNOUT } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
}

export default function(state=INITIAL_STATE, action) {
  
  switch(action.type) {

    case AUTH_USER: 
      return {
        ...state, 
        authenticated: action.payload, 
        errorMessage: ''
      };

    case AUTH_ERROR: 
      return {
        ...state, 
        errorMessage: action.payload
      };
    
    case AUTH_SIGNOUT: 
      return {
        ...state, 
        authenticated: action.payload, 
        errorMessage: ''
      };

    default:
      return state;

  }
  
  
}