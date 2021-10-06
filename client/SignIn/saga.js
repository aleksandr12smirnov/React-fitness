import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { signInAPI, resetPasswordAPI } from 'fetchers/signIn';

function* signInWatcher() {
  yield takeLatest(actions.signIn, signInTask);
}

function* signInTask(action) {
  const { response, error } = yield call(signInAPI, action.payload);
  if (response) {
    yield put(actions.signInSuccess(response));
  } else {
    yield put(actions.signInFailed(error));
  }
}

function* resetPasswordWatcher() {
  yield takeLatest(actions.resetPassword, resetPasswordTask);
}

function* resetPasswordTask(action) {
  const { response, error } = yield call(resetPasswordAPI, action.payload);
  if (response) {
    yield put(actions.resetPasswordSuccess(response));
  } else {
    yield put(actions.resetPasswordFailed(error));
  }
}

export default function* defaultSaga() {
  yield all([fork(signInWatcher), fork(resetPasswordWatcher)]);
}
