// sagas.js
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserData } from "../../hooks/user";
import { getUserFailure, getUserSuccess } from "../actions/homeActions";
import { GET_USER_REQUEST } from "../actions/homeActions";

// Worker saga to handle the async action
function* handleAsyncAction(action: any) {
  try {
    yield put(getUserSuccess({ name: "ali salem essouiah" }));
  } catch (error) {
    yield put(getUserFailure(error));
  }
}

// Watcher saga to listen for ACTION_REQUEST
export function* watchAsyncAction() {
  yield takeLatest(GET_USER_REQUEST, handleAsyncAction);
}
