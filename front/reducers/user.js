const initialState = {
  isLoggedIn: false,
  me: null
}

const userReducer = ((state = initialState, action)=> {
  switch (action.type){
    case 'LOGIN': 
      return {
        ...state.user,
        isLoggedIn: true,
        me: action.data
      };
    case 'LOGOUT': 
      return {
        ...state.user,
        isLoggedIn: false,
        me: null
      };
    default: return state;
  }
});

export default userReducer;