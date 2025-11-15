import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const resonsForCancellationFn = (redBody) => {
  try {
    const response = axiosInstance.get(API_URLS.resonsForCancellation, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
