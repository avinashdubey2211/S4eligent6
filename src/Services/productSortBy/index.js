
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const productSortBy = async (body) => {
  try {
    const response = await axiosInstance.post(API_URLS.productSortBy, body);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "Server Error");
    } else if (error.request) {
      throw new Error("No response from server");
    } else {
      throw new Error(error.message);
    }
  }
};
