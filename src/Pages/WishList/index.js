import { Close } from "@mui/icons-material";
import { Button, CircularProgress, Grid, IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";
import { myWishList } from "../../Services/WishList";
import CustomButton from "../../Shared/CustomButton";
import CustomDiv from "../../Shared/CustomDiv";
import Text from "../../Shared/Text";
import { useState } from "react";

const Wishlist = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const client = useQueryClient();
  const [isCart, setIsCart] = useState(false);

  const { data, isLoading } = useQuery(["wishList"], () => myWishList(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const removeWishList = (id) => {
    axiosInstance
      .post(API_URLS.removeWishList, { wishlist_id: id })
      .then((response) => {
        client.refetchQueries("wishList");
        enqueueSnackbar(response.data.msg, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const ClereWishList = () => {
    axiosInstance
      .post(API_URLS.allClearWishList)
      .then((response) => {
        enqueueSnackbar(response.data.msg, { variant: "success" });
        response.data.msg === "All Product is deleted from wishlist !!!" &&
          window.location.reload();
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const addToCart = (event, variantId) => {
    event.stopPropagation();
    const reqBody = new FormData();
    reqBody.append("product_id", variantId);
    reqBody.append("add_quantity", 1);
    setIsCart(true);
    axiosInstance
      .post(API_URLS.addToCart, reqBody)
      .then((response) => {
        client.refetchQueries(["myCartList"]);
        enqueueSnackbar(response.data.status);
        setIsCart(false);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  console.log(data?.data?.data?.wishlist_product_list?.length);
  return (
    <CustomDiv className="bg-[#F2F8F9] justify-center  flex flex-col gap-5 shadow px-[4%] lg:px-[8%] py-[8%] w-full ">
      <div className="flex flex-row justify-between items-center">
        <Text className="text-inherit text-center lg:text-start text-xl font-semibold">
          My Wishlist (
          <span className="mx-1">
            {data?.data?.data?.wishlist_product_list?.length
              ? data?.data?.data?.wishlist_product_list?.length
              : 0}
          </span>
          Products)
        </Text>
        <Button onClick={ClereWishList}>Clear Whishlist</Button>
      </div>
      {isLoading ? (
        <Grid className="grid lg:grid-cols-4 2xl:grid-cols-5 justify-center hide-scroll grid-cols-2 md:grid-cols-3 lg:gap-4 gap-1">
          {[1, 2, 3, 4, 5].map((product) => {
            return (
              <div className="flex flex-col shadow h-fit lg:w-[260px] w-full animate-pulse">
                <div className="h-52 bg-gray-300"></div>
                <div className="flex flex-col gap-3 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                  <div className="w-full h-6 bg-gray-300"></div>
                  <div className="w-full h-6 bg-gray-300"></div>
                  <div className="w-3/4 h-6 bg-gray-300"></div>
                </div>
              </div>
            );
          })}
        </Grid>
      ) : (
        <Grid className="grid lg:grid-cols-4 2xl:grid-cols-5 justify-center hide-scroll grid-cols-2 md:grid-cols-3 lg:gap-4 gap-1">
          {data?.data?.data?.wishlist_product_list?.map((product) => {
            return (
              <CustomDiv className="rounded-md h-fit lg:w-[260px] w-full shadow bg-white cursor-pointer ">

                <span className="flex flex-col lg:h-60 h-40 overflow-hidden">
                  <img
                    src={product.variant_image || product.product_image}
                    alt=""
                    className="relative"
                  />

                  <span className="flex items-end justify-end relative lg:bottom-[255px] right-[5px] bottom-[290px]">
                    <IconButton
                      onClick={() => removeWishList(product?.wishlist_id)}
                    >
                      <Close />
                    </IconButton>
                  </span>
                </span>
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
                  {isCart ? (
                    <CustomButton type="button" className="!rounded w-full">
                      <CircularProgress size={25} color="inherit" />
                    </CustomButton>
                  ) : (
                    <CustomButton
                      type="button"
                      className="!rounded w-full"
                      onClick={(event) =>
                        addToCart(event, product.product_variant_id)
                      }
                    >
                      Add To Cart
                    </CustomButton>
                  )}
                </CustomDiv>
              </CustomDiv>
            );
          })}
        </Grid>
      )}
    </CustomDiv>
  );
};

export default Wishlist;
