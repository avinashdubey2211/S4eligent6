
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const NewsPage = (redBody) => {
  try {
    return axiosInstance.get(API_URLS.News, {
      params: redBody,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
