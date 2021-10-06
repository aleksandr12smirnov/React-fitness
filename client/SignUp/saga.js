import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { signUpAPI } from 'fetchers/signUp';

function* signUpWatcher() {
  yield takeLatest(actions.signUp, signUpTask);
}

function* signUpTask(action) {
  const { response, error } = yield call(signUpAPI, action.payload);
  if (response) {
    yield put(actions.signUpSuccess(response));
  } else {
    yield put(actions.signUpFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([fork(signUpWatcher)]);
}
