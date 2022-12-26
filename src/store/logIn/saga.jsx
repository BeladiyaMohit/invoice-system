import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from './types';
import {logInFail,logInSuccess} from './actions';

function* attemptLoginTemplate({ payload }) {
  try {
    const response = yield call("login/api", payload);
    yield put(logInSuccess(response.data));
  } catch (error) {
    console.log(error.message);
  }
}


function* watchGetTemplates() {
  yield takeEvery(actions.ATTEMPT_LOGIN, attemptLoginTemplate);
}


export default function* rootSaga() {
  yield all([fork(watchGetTemplates)]);
}
