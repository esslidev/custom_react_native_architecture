import { combineReducers } from "redux";
import backgroundReducer from "../BackgroundContext/reducers/backgroundReducer";
//import homeReducer from "../HomeContext/reducers/homeReducer";
// Import all your reducers
// import { userReducer } from './reducers/userReducer';
// import { productReducer } from './reducers/productReducer';
// ... import other reducers

// Define your root state type (optional)
export interface RootState {
  background: ReturnType<typeof backgroundReducer>;
  // products: ReturnType<typeof productReducer>;
  // ... other state slices
}

// Combine all reducers into the root reducer
const rootReducer = combineReducers<RootState>({
  background: backgroundReducer,
  // user: userReducer,
  // products: productReducer,
  // ... other reducers
});

export default rootReducer;
