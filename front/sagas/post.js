import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
	REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
	ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
	ADD_POST_TO_ME,
	REMOVE_POST_OF_ME
} from '../actions/types';
import shortId from 'shortid';
import { generateDummyPost } from '../reducers/post';

function loadPostsApi(data){
	return axios.get('/api/post', data);
}

function* loadPosts(action){
	try {
		//const result = yield call(loadPostsApi, action.data);
    yield delay(1000);
		yield put({
			type: LOAD_POSTS_SUCCESS,
			// data: result.data
			data: generateDummyPost(10)
		});
	} catch (err){
		yield put({
			type: LOAD_POSTS_FAILURE,
			data: err.response.data
		});
	}
}

function* watchLoadPosts(){
	yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}


function addPostApi(data){
	return axios.post('/api/post', data);
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

function* watchAddPost(){
	yield takeLatest(ADD_POST_REQUEST, addPost);
}


function removePostApi(data){
	return axios.delete('/api/post', data);
}

function* removePost(action){
	try {
		//const result = yield call(removePostApi, action.data);
    yield delay(1000);
		const id = action.data;
		yield put({
			type: REMOVE_POST_SUCCESS,
			// data: result.data
			data: id
		});
		yield put ({
			type: REMOVE_POST_OF_ME,
			data: id
		})
	} catch (err){
		yield put({
			type: REMOVE_POST_FAILURE,
			data: err.response.data
		});
	}
}

function* watchRemovePost(){
	yield takeLatest(REMOVE_POST_REQUEST, removePost);
}


function addCommentApi(data){
	return axios.post(`/api/post/${data.postId}/comment`, data);
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

function* watchAddComment(){
	yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* userSaga(){
	yield all([
		fork(watchLoadPosts),
		fork(watchAddPost),
		fork(watchRemovePost),
		fork(watchAddComment),
	])
}