// sagas.js
import { takeLatest } from "redux-saga";
import { put } from "redux-saga/effects";
import { setSpeedFailure, setSpeedSuccess } from "../actions/backgroundActions";
import { SET_SPEED_REQUEST } from "../actions/backgroundActionsTypes";

// Worker saga to handle the async action
function* backgroundHandleAsyncAction(action: any) {
  try {
    console.log(
      "🚀 ~ file: backgroundSagas.ts:12 ~ function*backgroundHandleAsyncAction ~ action.payload:",
      action.payload
    );
    yield put(setSpeedSuccess(action.payload));
  } catch (error) {
    yield put(setSpeedFailure(error));
  }
}

// Watcher saga to listen for ACTION_REQUEST
export function* backgroundSaga() {
  yield takeLatest(SET_SPEED_REQUEST, backgroundHandleAsyncAction);
}
