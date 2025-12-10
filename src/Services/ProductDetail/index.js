
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const ProductsDetail = async (variantId) => {
  if (!variantId) return [];
  try {
    const response = await axiosInstance.get(API_URLS.ProductDetail, {
      params: { variant_id: variantId },
    });
    console.log("API response full:", response.data);
    return response.data?.data || [];
  } catch (error) {
    console.error("Specification API error:", error.message);
    return [];
  }
};
