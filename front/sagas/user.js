import { all, fork, call, put, take, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
} from '../actions/types';


function loginApi(data){
	return axios.post('/api/login', data);
}

function logoutApi(){
	return axios.post('/api/logout');
}

function* login(action){
	try {
		//const result = yield call(loginApi, action.data);
    yield delay(1000);
		yield put({
			type: LOGIN_SUCCESS,
			// data: result.data
			data: action.data
		});
	} catch (err){
		yield put({
			type: LOGIN_FAILURE,
			error: err.response.data
		});
	}
}

function* logout(){
	try {
		// yield call(logoutApi);
    yield delay(1000);
		yield put({
			type: LOGOUT_SUCCESS,
		});
	} catch (err){
		yield put({
			type: LOGIN_FAILURE,
			data: err.response.data
		});
	}
}


function* watchLogin(){
	yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLogout(){
	yield takeLatest(LOGOUT_REQUEST, logout);
}


export default function* userSaga(){
	yield all([
		fork(watchLogin),
		fork(watchLogout),
	])
}