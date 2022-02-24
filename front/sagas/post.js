import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
	ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
	ADD_POST_TO_ME
} from '../actions/types';
import shortId from 'shortid';

function addPostApi(data){
	return axios.post('/api/post', data);
}

function removePostApi(data){
	return axios.delete('/api/post', data);
}

function addCommentApi(data){
	return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addPost(action){
	try {
		//const result = yield call(addPostApi, action.data);
    yield delay(1000);
		const id = shortId.generate();
		yield put({
			type: ADD_POST_SUCCESS,
			// data: result.data
			data: {
				id,
				data: action.data
			}
		});
		yield put({
			type: ADD_POST_TO_ME,
			data: id
		});
	} catch (err){
		yield put({
			type: ADD_POST_FAILURE,
			data: err.response.data
		});
	}
}

function* removePost(action){
	try {
		//const result = yield call(removePostApi, action.data);
    yield delay(1000);
		yield put({
			type: REMOVE_POST_SUCCESS,
			// data: result.data
			data: action.data
		});
	} catch (err){
		yield put({
			type: REMOVE_POST_FAILURE,
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
			data: {
				id : shortId.generate(),
				data: action.data
			}
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

function* watchRemovePost(){
	yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment(){
	yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* userSaga(){
	yield all([
		fork(watchAddPost),
		fork(watchRemovePost),
		fork(watchAddComment),
	])
}