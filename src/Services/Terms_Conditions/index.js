
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const Terms_Conditions = (params) => {
  return axiosInstance.get(API_URLS.TermsConditions, { params });
};
