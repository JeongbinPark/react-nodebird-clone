import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

function addPostApi(data){
	return axios.post('/api/post', data);
}

function* addPost(action){
	try {
		//const result = yield call(addPostApi, action.data);
    yield delay(1000);
		yield put({
			type: 'ADD_POST_SUCCESS',
			// data: result.data
		});
	} catch (err){
		yield put({
			type: 'ADD_POST_FAILURE',
			data: err.response.data
		});
	}
}

function* watchAddPost(){
	yield takeLatest('ADD_POST_REQUEST', addPost);
}


export default function* userSaga(){
	yield all([
		fork(watchAddPost),
	])
}