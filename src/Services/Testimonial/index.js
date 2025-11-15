import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const testimonialFn = (redBody) => {
  try {
    const response = axiosInstance.get(API_URLS.testimonial, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
