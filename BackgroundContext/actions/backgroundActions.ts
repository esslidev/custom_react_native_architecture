import { ScrollViewProps } from "react-native";
import createAction from "../../utils/asyncActionCreator";

import {
  SET_DIRECTION_FAILURE,
  SET_DIRECTION_REQUEST,
  SET_DIRECTION_SUCCESS,
  SET_SCROLL_PROPS_FAILURE,
  SET_SCROLL_PROPS_REQUEST,
  SET_SCROLL_PROPS_SUCCESS,
  SET_SPEED_FAILURE,
  SET_SPEED_REQUEST,
  SET_SPEED_SUCCESS,
} from "./backgroundActionsTypes";

// Create action creators with debugging information
export const setSpeedRequest = createAction<number>(SET_SPEED_REQUEST);
export const setSpeedSuccess = createAction<number>(SET_SPEED_SUCCESS);
export const setSpeedFailure = createAction<any>(SET_SPEED_FAILURE);

export const setScrollPropsRequest = createAction<ScrollViewProps>(SET_SCROLL_PROPS_REQUEST);
export const setScrollPropsSuccess = createAction<ScrollViewProps>(SET_SCROLL_PROPS_SUCCESS);
export const setScrollPropsFailure = createAction<any>(SET_SCROLL_PROPS_FAILURE);

export const setDirectionRequest = createAction<"top" | "bottom">(SET_DIRECTION_REQUEST);
export const setDirectionSuccess = createAction<"top" | "bottom">(SET_DIRECTION_SUCCESS);
export const setDirectionFailure = createAction<any>(SET_DIRECTION_FAILURE);
