const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isLoggedIn: false,
  me: null
}

const userReducer = ((state = initialState, action)=> {
  switch (action.type){
    case 'LOGIN_REQUEST': 
      return {
        ...state.user,
        isLoggingIn: true,
      };
    case 'LOGIN_SUCCESS': 
      return {
        ...state.user,
        isLoggingIn: false,
        isLoggedIn: true,
        me: {...action.data, nickname: 'feynP'}
      };
    case 'LOGIN_FAILURE': 
      return {
        ...state.user,
        isLoggingIn: false,
      };
    case 'LOGOUT_REQUEST': 
      return {
        ...state.user,
        isLoggingOut: true,
      };
    case 'LOGOUT_SUCCESS': 
      return {
        ...state.user,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null
      };
    case 'LOGOUT_FAILURE': 
      return {
        ...state.user,
        isLoggingOut: false,
      };
    default: return state;
  }
});

export default userReducer;