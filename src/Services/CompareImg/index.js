
// import { API_URLS } from "../../Config/API_URLS";
// import axiosInstance from "../../Config/axios";

// export const CompareImgs = (redBody) => {
//   try {
//     const response = axiosInstance.post(API_URLS.CompareImg, redBody);
//     return response;
//   } catch ({ error }) {
//     throw new Error(error.message);
//   }
// };


import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const CompareImgs = async (body) => {
  try {
    const response = await axiosInstance.post(API_URLS.CompareImg, body);
    return response;
  } catch (err) {
    throw new Error(err.message || "API Error");
  }
};
