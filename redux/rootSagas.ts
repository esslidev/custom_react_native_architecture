import { backgroundSaga } from "../BackgroundContext/sagas/backgroundSagas";
// import { userSaga } from "./sagas/userSaga";
// import { productSaga } from "./sagas/productSaga";
// ... import other sagas

// Combine all sagas into the root saga
export function* rootSaga() {
  yield all([
    backgroundSaga(),
    //...
  ]);
}
