import { all, fork, call, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
	CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
} from '../actions/types';


function loginApi(data){
	return axios.post('/user/login', data);
}

function* login(action){
	try {
		//const result = yield call(loginApi, action.data);
		yield delay(1000);
		yield put({
			type: LOGIN_SUCCESS,
			data: action.data
		});
	} catch (err){
		yield put({
			type: LOGIN_FAILURE,
			error: err.response.data
		});
	}
}

function* watchLogin(){
	yield takeLatest(LOGIN_REQUEST, login);
}


function logoutApi(){
	return axios.post('/user/logout');
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
			type: LOGOUT_FAILURE,
			data: err.response.data
		});
	}
}

function* watchLogout(){
	yield takeLatest(LOGOUT_REQUEST, logout);
}


function signupApi(data){
	return axios.post('/user', data);
}

function* signup(action){
	try {
		const result = yield call(signupApi, action.data);
		console.log(result);
		yield put({
			type: SIGNUP_SUCCESS,
		});
	} catch (err){
		yield put({
			type: SIGNUP_FAILURE,
			error: err.response.data
		});
	}
}

function* watchSignup(){
	yield takeLatest(SIGNUP_REQUEST, signup);
}


function followApi(data){
	return axios.post('/api/follow', data);
}

function* follow(action){
	try {
		//const result = yield call(followApi, action.data);
    yield delay(1000);
		yield put({
			type: FOLLOW_SUCCESS,
			data: action.data
		});
	} catch (err){
		yield put({
			type: FOLLOW_FAILURE,
			error: err.response.data
		});
	}
}

function* watchFollow(){
	yield takeLatest(FOLLOW_REQUEST, follow);
}


function unfollowApi(data){
	return axios.post('/api/unfollow', data);
}

function* unfollow(action){
	try {
		//const result = yield call(unfollowApi, action.data);
    yield delay(1000);
		yield put({
			type: UNFOLLOW_SUCCESS,
			data: action.data
		});
	} catch (err){
		yield put({
			type: UNFOLLOW_FAILURE,
			error: err.response.data
		});
	}
}

function* watchUnfollow(){
	yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}


function changeNicknameApi(data){
	return axios.post('/api/user/nickname', data);
}

function* changeNickname(action){
	try {
		//const result = yield call(changeNicknameApi, action.data);
    yield delay(1000);
		yield put({
			type: CHANGE_NICKNAME_SUCCESS,
			data: action.data
		});
	} catch (err){
		yield put({
			type: CHANGE_NICKNAME_FAILURE,
			error: err.response.data
		});
	}
}

function* watchChangeNickname(){
	yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}


export default function* userSaga(){
	yield all([
		fork(watchLogin),
		fork(watchLogout),
		fork(watchSignup),
		fork(watchFollow),
		fork(watchUnfollow),
		fork(watchChangeNickname),
	])
}