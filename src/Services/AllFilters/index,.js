import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const allFiltersFn = (redBody) => {
  try {
    const response = axiosInstance.post(API_URLS.allFilters, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
