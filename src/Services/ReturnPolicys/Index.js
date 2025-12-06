
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const ReturnPolicys = async () => {
  try {
    const response = await axiosInstance.get(API_URLS.ReturnPolicy);
    return response; 
  } catch (error) {
    throw new Error(error.message);
  }
};
