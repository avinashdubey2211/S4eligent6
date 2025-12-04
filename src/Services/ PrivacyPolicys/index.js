
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const PrivacyPolicys = (redBody) => {
  try {
    return axiosInstance.get(API_URLS.PrivacyPolicy, {
      params: redBody,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
