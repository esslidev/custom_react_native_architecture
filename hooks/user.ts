import { fetchData } from "../utils/middlewares/fetchDataMiddleware";

// GET request
export const getUserData = await fetchData<any>("GET", "your-get-endpoint", {
  param1: "value1",
});

// POST request
/* const postData = await fetchData<any>("POST", "your-post-endpoint", {
  key: "value",
}); */

// DELETE request
/* await fetchData("DELETE", "your-delete-endpoint"); */
