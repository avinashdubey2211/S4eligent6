import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const returnResonsFn = (redBody) => {
  try {
    const response = axiosInstance.get(API_URLS.returnResons, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
