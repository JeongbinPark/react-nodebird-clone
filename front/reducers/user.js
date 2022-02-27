import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
  ADD_POST_TO_ME, REMOVE_POST_OF_ME
} from '../actions/types';
import produce from 'immer';

const initialState = {
  loginLoading: false, loginDone: false, loginError: null,
  logoutLoading: false, logoutDone: false, logoutError: null,
  signupLoading: false, signupDone: false, signupError: null,
  followLoading: false, followDone: false, followError: null,
  unfollowLoading: false, unfollowDone: false, unfollowError: null,
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


const userReducer = (state = initialState, action) => 
  produce(state, (draft)=>{
    switch (action.type){
      case LOGIN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS: 
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = dummyData(action.data);
        break;
      case LOGIN_FAILURE: 
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;

      case LOGOUT_REQUEST: 
        draft.logoutLoading = true;
        draft.logoutDone = false;
        draft.logoutError = null;
        break;
      case LOGOUT_SUCCESS: 
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.me = null;
        break;
      case LOGOUT_FAILURE: 
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case SIGNUP_REQUEST: 
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      case SIGNUP_SUCCESS: 
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGNUP_FAILURE: 
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;

      case FOLLOW_REQUEST: 
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;
      case FOLLOW_SUCCESS: 
        draft.me.Followings.push({ id: action.data });
        draft.followLoading = false;
        draft.followDone = true;
        break;
      case FOLLOW_FAILURE: 
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST: 
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;
      case UNFOLLOW_SUCCESS: 
        draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        break;
      case UNFOLLOW_FAILURE: 
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
    case CHANGE_NICKNAME_SUCCESS: 
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me.nickname = action.data;
        break;
    case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME: 
        draft.me.Posts.unshift({id: action.data});
        break;

      case REMOVE_POST_OF_ME: 
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;

      default: 
        break;
    }
  });

export default userReducer;