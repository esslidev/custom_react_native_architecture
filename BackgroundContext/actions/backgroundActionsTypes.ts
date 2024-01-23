export const SET_SPEED_REQUEST = "SET_SPEED_REQUEST";
export const SET_SPEED_SUCCESS = "SET_SPEED_SUCCESS";
export const SET_SPEED_FAILURE = "SET_SPEED_FAILURE";

export const SET_SCROLL_PROPS_REQUEST = "SET_SCROLL_PROPS_REQUEST";
export const SET_SCROLL_PROPS_SUCCESS = "SET_SCROLL_PROPS_SUCCESS";
export const SET_SCROLL_PROPS_FAILURE = "SET_SCROLL_PROPS_FAILURE";

export const SET_DIRECTION_REQUEST = "SET_DIRECTION_REQUEST";
export const SET_DIRECTION_SUCCESS = "SET_DIRETION_SUCCESS";
export const SET_DIRECTION_FAILURE = "SET_DIRECTION_FAILURE";
// Add other action types if needed

export type BackgroundActionTypes =
  | typeof SET_SPEED_REQUEST
  | typeof SET_SPEED_SUCCESS
  | typeof SET_SPEED_FAILURE
  | typeof SET_SCROLL_PROPS_REQUEST
  | typeof SET_SCROLL_PROPS_SUCCESS
  | typeof SET_SCROLL_PROPS_FAILURE
  | typeof SET_DIRECTION_REQUEST
  | typeof SET_DIRECTION_SUCCESS
  | typeof SET_DIRECTION_FAILURE;