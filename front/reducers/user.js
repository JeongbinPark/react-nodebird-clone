import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
} from '../actions/types';

const initialState = {
  loginLoading: false, loginDone: false, loginError: null,
  logoutLoading: false, logoutDone: false, logoutError: null,
  signupLoading: false, signupDone: false, signupError: null,
  me: null
}

const dummyData = (data) => ({
  ...data,
  id: 1,
  nickname: 'FeynP',
  Posts : [],
  Followings : [],
  Followers : [],
})


const userReducer = ((state = initialState, action)=> {
  switch (action.type){
    case LOGIN_REQUEST: 
      return {
        ...state.user,
        loginLoading: true,
        loginError: null,
      };
    case LOGIN_SUCCESS: 
      return {
        ...state.user,
        loginLoading: false,
        loginDone: true,
        me: dummyData(action.data)
      };
    case LOGIN_FAILURE: 
      return {
        ...state.user,
        loginLoading: false,
        loginError: action.error,
      };
    case LOGOUT_REQUEST: 
      return {
        ...state.user,
        logoutLoading: true,
        logoutError: null,
      };
    case LOGOUT_SUCCESS: 
      return {
        ...state.user,
        logoutLoading: false,
        logoutDone: false,
        me: null
      };
    case LOGOUT_FAILURE: 
      return {
        ...state.user,
        logoutLoading: false,
        logoutError: action.error,
      };
    case SIGNUP_REQUEST: 
      return {
        ...state.user,
        signupLoading: true,
        signupError: null,
      };
    case SIGNUP_SUCCESS: 
      return {
        ...state.user,
        signupLoading: false,
        signupDone: false,
      };
    case SIGNUP_FAILURE: 
      return {
        ...state.user,
        signupLoading: false,
        signupError: action.error,
      };
    default: return state;
  }
});

export default userReducer;