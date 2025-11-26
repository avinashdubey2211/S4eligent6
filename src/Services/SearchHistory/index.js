import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const searchHistory = async (redBody) => {
  try {
    const response = await axiosInstance.get(API_URLS.searchHistory, {
      params: redBody,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
