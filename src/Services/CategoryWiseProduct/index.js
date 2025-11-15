import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

export const productListFn = (redBody) => {
    try {
        const response = axiosInstance.get(API_URLS.allFilters, { params: redBody });
        return response;
    } catch ({ error }) {
        throw new Error(error.message);
    }
};



export const PageDesignFn = (redBody) => {
    try {
        const response = axiosInstance.get(API_URLS.page_ui, { params: redBody });
        return response;
    } catch ({ error }) {
        throw new Error(error.message);
    }
};




