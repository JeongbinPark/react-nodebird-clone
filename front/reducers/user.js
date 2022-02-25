import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
  ADD_POST_TO_ME, REMOVE_POST_OF_ME
} from '../actions/types';

const initialState = {
  loginLoading: false, loginDone: false, loginError: null,
  logoutLoading: false, logoutDone: false, logoutError: null,
  signupLoading: false, signupDone: false, signupError: null,
  changeNicknameLoading: false, changeNicknameDone: false, changeNicknameError: null,
  me: null
}

const dummyData = (data) => ({
  ...data,
  id: 1,
  nickname: 'FeynP',
  Posts : [{ id: 1 }],
  Followings : [],
  Followers : [],
})


const userReducer = ((state = initialState, action)=> {
  switch (action.type){
    case LOGIN_REQUEST: 
      return {
        ...state,
        loginLoading: true,
        loginDone: false,
        loginError: null,
      };
    case LOGIN_SUCCESS: 
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        me: dummyData(action.data)
      };
    case LOGIN_FAILURE: 
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
      };
    case LOGOUT_REQUEST: 
      return {
        ...state,
        logoutLoading: true,
        logoutDone: false,
        logoutError: null,
      };
    case LOGOUT_SUCCESS: 
      return {
        ...state,
        logoutLoading: false,
        logoutDone: true,
        me: null
      };
    case LOGOUT_FAILURE: 
      return {
        ...state,
        logoutLoading: false,
        logoutError: action.error,
      };
    case SIGNUP_REQUEST: 
      return {
        ...state,
        signupLoading: true,
        signupDone: false,
        signupError: null,
      };
    case SIGNUP_SUCCESS: 
      return {
        ...state,
        signupLoading: false,
        signupDone: true,
      };
    case SIGNUP_FAILURE: 
      return {
        ...state,
        signupLoading: false,
        signupError: action.error,
      };
    case CHANGE_NICKNAME_REQUEST: 
    return {
      ...state,
      changeNicknameLoading: true,
      changeNicknameDone: false,
      changeNicknameError: null,
    };
  case CHANGE_NICKNAME_SUCCESS: 
    return {
      ...state,
      changeNicknameLoading: false,
      changeNicknameDone: true,
      me: {
        ...state.me,
        nickname: action.data
      }
    };
  case CHANGE_NICKNAME_FAILURE: 
    return {
      ...state,
      changeNicknameLoading: false,
      changeNicknameError: action.error,
    };
    case ADD_POST_TO_ME: 
      return {
        ...state,
        me: {
          ...state.me,
          Posts : [ {id: action.data} , ...state.me.Posts],
        }
      };
    case REMOVE_POST_OF_ME: 
      return {
        ...state,
        me: {
          ...state.me,
          Posts : state.me.Posts.filter((v) => v.id !== action.data),
        }
      };
    default: return state;
  }
});

export default userReducer;