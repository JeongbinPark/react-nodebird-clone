import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../actions/types';

function addPostApi(data){
	return axios.post('/api/post', data);
}

function addCommentApi(data){
	return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addPost(action){
	try {
		//const result = yield call(addPostApi, action.data);
    yield delay(1000);
		yield put({
			type: ADD_POST_SUCCESS,
			// data: result.data
			data: action.data
		});
	} catch (err){
		yield put({
			type: ADD_POST_FAILURE,
			data: err.response.data
		});
	}
}

function* addComment(action){
	try {
		//const result = yield call(addCommentApi, action.data);
    yield delay(1000);
		yield put({
			type: ADD_COMMENT_SUCCESS,
			// data: result.data
			data: action.data
		});
	} catch (err){
		yield put({
			type: ADD_COMMENT_FAILURE,
			data: err.response.data
		});
	}
}

function* watchAddPost(){
	yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment(){
	yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* userSaga(){
	yield all([
		fork(watchAddPost),
		fork(watchAddComment),
	])
}