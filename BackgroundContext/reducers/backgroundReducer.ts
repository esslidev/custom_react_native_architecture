import { ScrollViewProps } from "react-native";
import { Reducer } from "redux";
import { SET_SPEED_SUCCESS } from "../actions/backgroundActionsTypes";

// Define an interface for the initial state
interface BackgroundState {
  speed: number;
  direction: "top" | "bottom";
}

const initialState: BackgroundState = {
  speed: 1,
  direction: "top",
  // ...
};

const backgroundReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPEED_SUCCESS:
      console.log("SET_SPEED_SUCCESS action received. Payload:", action.payload);
      return {
        ...state,
        speed: action.payload, // Update the state with the received data
      };
    // ...
    default:
      return state;
  }
};

export default backgroundReducer;
