import {
  LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST,
  ADD_POST_REQUEST, REMOVE_POST_REQUEST, ADD_COMMENT_REQUEST
} from './types';

export const loginRequestAction = (data) => {
  return {
    type: LOGIN_REQUEST,
    data,
  }
}
export const logoutRequestAction = () => {
  return {
    type: LOGOUT_REQUEST
  }
}
export const signupRequestAction = (data) => {
  return {
    type: SIGNUP_REQUEST,
    data,
  }
}

export const addPostRequestAction = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data,
  }
}
export const removePostRequestAction = (data) => {
  return {
    type: REMOVE_POST_REQUEST,
    data,
  }
}
export const addCommentRequestAction = (data) => {
  return {
    type: ADD_COMMENT_REQUEST,
    data,
  }
}