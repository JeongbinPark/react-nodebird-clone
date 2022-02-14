const initialState = {
  isLoggedIn: false,
  userData: null
}

const userReducer = ((state = initialState, action)=> {
  switch (action.type){
    case 'LOGIN': 
      return {
        ...state.user,
        isLoggedIn: true,
        userData: action.data
      };
    case 'LOGOUT': 
      return {
        ...state.user,
        isLoggedIn: false,
        userData: null
      };
    default: return state;
  }
});

export default userReducer;