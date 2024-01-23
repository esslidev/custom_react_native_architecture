import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { RootState } from "./rootReducers"; // Import the root reducer and RootState
import { rootSaga } from "./rootSagas"; // Import the root saga
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const sagaMiddleware = createSagaMiddleware();

// Define the Redux Persist configuration
const persistConfig = {
  key: "root", // The key to store the data in AsyncStorage
  storage: AsyncStorage, // Use AsyncStorage as the storage engine
  // Optionally, you can blacklist certain reducers to exclude them from persistence
  whitelist: ["ReducerToInclude"],
};

// Wrap your root reducer with the persistReducer
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store: Store<RootState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware) // Include the actionMiddleware
);

const persistor = persistStore(store); // Create a persistor

sagaMiddleware.run(rootSaga);

export { store, persistor };
