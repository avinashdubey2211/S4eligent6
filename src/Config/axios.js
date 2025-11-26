import axios from "axios";

export const store_id = 23;
// export const store_id = 4;

const axiosInstance = axios.create({
  // baseURL: "http://192.168.1.73:9090/",
  baseURL: "https://mstore.bhaaraterp.com/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Token");
    config.headers = {
      Token: token,
      Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989_mstore",
      "Store-Id": store_id,
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);
export default axiosInstance;
