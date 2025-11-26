
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const SocialMedia = (redBody) => {
  try {
    return axiosInstance.get(API_URLS.socialLinks, {
      params: redBody,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
