
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const Blog = (redBody) => {
  try {
    return axiosInstance.get(API_URLS.BlogPage, {
      params: redBody,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
