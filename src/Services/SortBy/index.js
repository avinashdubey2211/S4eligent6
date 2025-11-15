import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const sortByFn = (redBody) => {
  try {
    const response = axiosInstance.post(API_URLS.productSortBy, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
