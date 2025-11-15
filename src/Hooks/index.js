import { useQuery } from "react-query";
import { StoreFn } from "../Services/Store";
import { store_id } from "../Config/axios";

export const useStore = () => {
    return useQuery(["store", store_id], () => StoreFn({ store_id: store_id }));
};
