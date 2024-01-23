import axios, { AxiosResponse } from "axios";
import { baseURL, renewToken } from "../../constants/APIEndpoints";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "renew-token": renewToken,
  },
});

type HttpMethod = "GET" | "POST" | "DELETE" | "PUT";

export const fetchData = async <T>(method: HttpMethod, endpoint: string, data?: any, query?: any): Promise<T> => {
  try {
    let response: AxiosResponse;

    switch (method.toUpperCase()) {
      case "GET":
        response = await axiosInstance.get(endpoint, { params: query });
        break;

      case "POST":
        response = await axiosInstance.post(endpoint, data);
        break;

      case "DELETE":
        response = await axiosInstance.delete(endpoint);
        break;

      case "PUT":
        response = await axiosInstance.put(endpoint, data);
        break;

      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data as T;
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error;
  }
};
