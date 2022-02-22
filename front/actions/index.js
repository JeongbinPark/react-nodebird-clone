import {
  LOGIN_REQUEST, LOGOUT_REQUEST, ADD_POST_REQUEST
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

export const addPostRequestAction = () => {
  return {
    type: ADD_POST_REQUEST
  }
}