
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const Specification = async (variantId) => {
  if (!variantId) return [];
  try {
    const response = await axiosInstance.get(API_URLS.specifications, {
      params: { variant_id: variantId },
    });
    console.log("API response full:", response.data);
    return response.data?.data || []; // <-- use .data here
  } catch (error) {
    console.error("Specification API error:", error.message);
    return [];
  }
};
