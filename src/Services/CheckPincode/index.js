import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const checkPincodeFn = (redBody) => {
  try {
    const response = axiosInstance.post(API_URLS.checkPincode, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
