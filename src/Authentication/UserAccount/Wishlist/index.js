import { Delete } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/joy";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

const Wishlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const myWishList = () => {
    setIsLoading(true);
    axiosInstance
      .get(API_URLS.myWishList)
      .then((response) => {
        setData(response.data.data.wishlist_product_list);
        setIsLoading(false);
      })
      .catch((error) => {
        // enqueueSnackbar("No Whislist Product..!", {variant: "error"});
      });
  };
  const client = useQueryClient();
  const removeWishList = (event, id) => {
    event.stopPropagation();
    axiosInstance
      .post(API_URLS.removeWishList, { wishlist_id: id })
      .then((response) => {
        console.log(response);
        myWishList();
        client.refetchQueries("wishList");
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(
    () => {
      myWishList();
    },
    // eslint-disable-next-line
    []
  );
  const ClereWishList = () => {
    axiosInstance
      .post(API_URLS.allClearWishList)
      .then((response) => {
        client.refetchQueries("wishList");
        myWishList();
        enqueueSnackbar(response.data.msg, { variant: "error" });
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return isLoading ? (
    <>
      <CustomDiv className="flex h-full justify-center items-center">
        <p className="font-bold text-2xl text-red-500">Wishlist is Empty...!</p>
      </CustomDiv>
    </>
  ) : (
    <CustomDiv className="flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
        <Text className="text-xl font-semibold">Wishlist</Text>
        <Button onClick={ClereWishList}>Clear Wishlist</Button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {data?.map((product) => {
          return (
            <>
              <CustomDiv className="flex flex-row justify-between items-center">
                <span className="lg:flex flex-col ">
                  <img
                    src={product.variant_image || product.product_image}
                    alt=""
                    className="w-52 h-64"
                    onClick={() =>
                      navigate(
                        `/product/${product?.product_id}/${product?.product_variant_id}`
                      )
                    }
                  />
                  <CustomDiv
                    className="flex flex-col justify-between lg:p-4 p-2 space-y-2"
                    onClick={() =>
                      navigate(
                        `/product/${product?.product_id}/${product?.product_variant_id}`
                      )
                    }
                  >
                    <CustomDiv className="space-y-2 truncate">
                      <Text className="lg:text-lg lg:block lg:w-48 w-40 overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
                        {product.product_variant_name}
                      </Text>
                    </CustomDiv>
                    <Text className="text-xs uppercase text-green-600">
                      {product.sub_category}
                    </Text>
                    <CustomDiv className="flex items-center gap-3">
                      <Text className="font-bold lg:text-base text-xs">
                        ₹{product.actual_price}
                      </Text>
                      <Text className="text-red-600">
                        {product.discount_percent !== "0.0"
                          ? `(${product.discount_percent?.split(".0")})%`
                          : null}
                      </Text>
                    </CustomDiv>
                    <IconButton
                      color="primary"
                      onClick={(event) =>
                        removeWishList(event, product.wishlist_id)
                      }
                    >
                      <Delete color="primary" />
                    </IconButton>
                  </CustomDiv>
                </span>
              </CustomDiv>
            </>
          );
        })}
      </div>
    </CustomDiv>
  );
};
export default Wishlist;
