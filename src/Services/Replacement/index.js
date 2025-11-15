import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const replacementFn = (redBody) => {
  try {
    const response = axiosInstance.post(API_URLS.replacement, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
