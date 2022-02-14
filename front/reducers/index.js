import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {
    isLoggedIn: false,
    userData: null
  }
}

const rootReducer = ((state = initialState, action)=> {
  switch (action.type){
    case HYDRATE: 
      return {
        ...state,
        ...action.payload
      }
    case 'LOGIN': 
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          userData: action.data
        }
      };
    case 'LOGOUT': 
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          userData: null
        }
      };
    default: return state;
  }
});

export default rootReducer;