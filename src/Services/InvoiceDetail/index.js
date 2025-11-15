import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const invoiceDetailFn = (redBody) => {
  try {
    const response = axiosInstance.post(API_URLS.invoiceDetail, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
