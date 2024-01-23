import { GET_USER_SUCCESS } from "../actions/homeActions";

const initialState = {
  data: "nothing", // Initially, the data is null
  // ...
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.data, // Update the state with the received data
      };
    // ...
    default:
      return state;
  }
};

export default homeReducer;
