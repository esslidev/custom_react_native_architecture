import { actionFailure, actionRequest, actionSuccess } from "../../utils/asyncActionCreator";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUserRequest = (payload?: any) => actionRequest(GET_USER_REQUEST, payload);
export const getUserSuccess = (data?: any) => actionSuccess(GET_USER_SUCCESS, data);
export const getUserFailure = (error?: any) => actionFailure(GET_USER_FAILURE, error);
