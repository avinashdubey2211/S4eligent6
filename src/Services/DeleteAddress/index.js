import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const deleteUpdateFn = (redBody) => {
  try {
    const response = axiosInstance.post(API_URLS.deleteUpdate, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
