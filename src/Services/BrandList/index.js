import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const brandListFn = (redBody) => {
  try {
    const response = axiosInstance.get(API_URLS.brandList, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
