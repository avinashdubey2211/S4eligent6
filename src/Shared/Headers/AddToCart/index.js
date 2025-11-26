import * as React from "react";
import Drawer from "@mui/material/Drawer";
import {
  Badge,
  BottomNavigationAction,
  Button,
  ButtonGroup,
  Divider,
} from "@mui/material";
import CustomDiv from "../../CustomDiv";
import Text from "../../Text";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { myCartList } from "../../../Services/CartList";
import { removeCartItemFn } from "../../../Services/RemoveCartItem";
import { useEffect } from "react";
import { useState } from "react";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import { useSnackbar } from "notistack";
import {
  Add,
  Delete,
  Remove,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import SelectAddress from "../../../Components/Checkout/SelectAddress";
import CustomButton from "../../CustomButton";
import OrderPlaced from "../../../Components/Checkout/OrderPlaced";
import { clearCartFn } from "../../../Services/ClearCart";
import { setThemeMode } from "../../../Redux/Actions/ThemeMode";
import { useDispatch } from "react-redux";
import emptyCart from "../../../Assets/cartGif.gif";
import cartLogo from "../../../Assets/cart.svg";
import { useNavigate } from "react-router-dom";


export default function AddToCart({ from, iconColor = "text-white" }) {
  const navigate = useNavigate();

  const [state, setState] = React.useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [orderDetail, setOrderDetail] = useState([]);
  const [page, setPage] = useState(1);
  const [clearCartData, setClearCartData] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const client = useQueryClient();
  const { data } = useQuery(["myCartList"], () => myCartList(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { mutate } = useMutation(removeCartItemFn, {
    onSuccess: (response) => {
      client.refetchQueries("myCartList");
    },
  });
  const { mutate: clearCart } = useMutation(clearCartFn, {
    onSuccess: (response) => {
      client.refetchQueries("myCartList");
    },
  });
  const handleClose = () => {
    setState(false);
    setPage(1);
  };

  useEffect(
    () => {
      clearCartData ? clearCart() : emptyFunction();
    },
    // eslint-disable-next-line
    [clearCartData]
  );

  const emptyFunction = () => {};

  useEffect(
    () => {
      cartItem ? mutate({ cart_id: cartItem }) : emptyFunction();
    },
    // eslint-disable-next-line
    [cartItem]
  );

  const handleWishList = (variant_id, cart_id) => {
    const reqBody = {
      add_quantity: 1,
      product_id: Number(variant_id),
    };
    axiosInstance
      .post(API_URLS.addToWishList, reqBody)
      .then((response) => {
        response.data.msg === "Data get Successfully"
          ? mutate({ cart_id: cart_id })
          : response.data.msg === "Something Wrong with the quanity !"
          ? enqueueSnackbar("Product is Out-of-Stock", { variant: "error" })
          : enqueueSnackbar(response.data.msg, { variant: "error" });
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const increaseCartIem = (cart_id) => {
    axiosInstance
      .post(API_URLS.increaseCart, { cart_id: cart_id })
      .then((response) => {
        client.refetchQueries("myCartList");
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const decreaseCartIem = (cart_id) => {
    axiosInstance
      .post(API_URLS.decreaseCart, { cart_id: cart_id })
      .then((response) => {
        client.refetchQueries("myCartList");
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setThemeMode(true));
  };
  return (
    <>
      <span className="flex flex-col items-center justify-center">
        <BottomNavigationAction
          icon={<ShoppingCart className={`!text-[27px]  ${iconColor} `} />}
          onClick={() =>
            localStorage.getItem("Token") ? setState(true) : handleLogin()
          }
        />
      </span>

      <Drawer anchor="right" open={state} onClose={handleClose}>
        <CustomDiv className="lg:w-[420px] w-[330px]">
          {data?.data?.data?.length === 0 ? (
            <>
              <CustomDiv className="flex flex-col justify-center items-center h-screen gap-5 p-6 text-gray-800 w-full">
                <img src={emptyCart} alt="" className="w-2/3" />
                <span className="flex flex-col gap-1 justify-center items-center">
                  <Text className="text-2xl font-bold">
                    Your cart is empty!
                  </Text>
                  <Text>Add some product to enjoy our services.</Text>
                </span>
                <CustomButton
                  startIcon={<ShoppingCart />}
                  onClick={handleClose}
                >
                  Start Shopping
                </CustomButton>
              </CustomDiv>
            </>
          ) : (
            <CustomDiv className="flex flex-col lg:gap-4 gap-2 p-6 text-gray-800 w-full">
              {page === 1 ? (
                <>
                  <span className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <CustomButton
                      variant="text"
                      startIcon={<Delete />}
                      onClick={() => clearCart()}
                    >
                      Clear Cart
                    </CustomButton>
                  </span>
                  <ul className="flex flex-col overflow-y-auto overflow-x-hidden h-[58vh] pr-2 w-full">
                    {data?.data?.data?.map((cart) => {
                      return (
                        <li className="flex flex-col pt-2 border-b-2 sm:flex-row sm:justify-between">
                          <CustomDiv className="flex w-full">
                            {/* <img
                              className="flex-shrink-0 mx-2 object-cover w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 border-transparent rounded outline-none bg-gray-500"
                              src={cart.variant_image}
                              alt=""
                            /> */}
                            <img
                              className="flex-shrink-0 mx-2 object-cover w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 border-transparent rounded outline-none bg-gray-500"
                              src={
                                cart.variant_image ||
                                "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
                              }
                              alt=""
                              onError={(e) => {
                                e.target.src =
                                  "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";
                              }}
                              //add navigate
                              onClick={() =>
                                navigate(
                                  `/product/${cart.product_id}/${cart.variant_id}`
                                )
                              }
                            />

                            <CustomDiv className="flex flex-col justify-between w-full pb-1">
                              <CustomDiv className="flex justify-between w-full pb-2 space-x-2">
                                <CustomDiv className="space-y-1">
                                  <Text className="font-semibold leading-snug sm:pr-8">
                                    {cart.title}
                                  </Text>
                                  <Text className="text-sm whitespace-nowrap text-gray-600">
                                    Product ID : {cart.HSN}
                                  </Text>
                                </CustomDiv>
                                <CustomDiv className="text-right">
                                  <Text className="text p-1">
                                    ₹{cart.cart_product_variant_price}
                                  </Text>
                                </CustomDiv>
                              </CustomDiv>
                              <CustomDiv>
                                <ButtonGroup
                                  size="small"
                                  variant="outlined"
                                  aria-label="outlined button group"
                                  color="primary"
                                >
                                  <Button
                                    size="small"
                                    onClick={() =>
                                      decreaseCartIem(cart.cart_product_id)
                                    }
                                  >
                                    <Remove />
                                  </Button>
                                  <Button size="small">
                                    {cart.cart_product_quantity}
                                  </Button>
                                  <Button
                                    size="small"
                                    onClick={() =>
                                      increaseCartIem(cart.cart_product_id)
                                    }
                                  >
                                    <Add />
                                  </Button>
                                </ButtonGroup>
                              </CustomDiv>
                              <CustomDiv className="flex items-center text-sm divide-x">
                                <button
                                  type="button"
                                  className="flex !items-center pr-2"
                                  onClick={() =>
                                    setCartItem(cart.cart_product_id)
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4 h-4 fill-current"
                                  >
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="168"
                                      y="216"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="240"
                                      y="216"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="312"
                                      y="216"
                                    ></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                  </svg>
                                  <span className="text-xs">Remove</span>
                                </button>
                                <button
                                  type="button"
                                  className="flex items-center px-2 py-1 space-x-1"
                                  onClick={() =>
                                    handleWishList(
                                      cart.cart_product_variant_value_id,
                                      cart.cart_product_id
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4 h-4 fill-current"
                                  >
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                  </svg>
                                  <span className="text-xs">Wishlist</span>
                                </button>
                              </CustomDiv>
                            </CustomDiv>
                          </CustomDiv>
                        </li>
                      );
                    })}
                  </ul>
                  <CustomDiv className="text-right flex flex-col gap-2">
                    <Text>
                      Total Amount:
                      <span className="font-semibold mx-2">
                        ₹{data?.data?.data?.[0]?.cart_total_price}
                      </span>
                    </Text>
                    <Text>
                      Discount:
                      <span className="font-semibold mx-2">
                        ₹{data?.data?.data?.[0]?.cart_total_discount}
                      </span>
                    </Text>
                    <Text>
                      Delivery Charge:
                      <span className="font-semibold mx-2">
                        {data?.data?.data?.[0]?.cart_delivery_charges !==
                        "Free" ? (
                          <>₹{data?.data?.data?.[0]?.cart_delivery_charges}</>
                        ) : (
                          data?.data?.data?.[0]?.cart_delivery_charges
                        )}
                      </span>
                    </Text>
                    <Divider />
                    <Text className="pb-2">
                      Total Cart Amount:
                      <span className="font-semibold mx-2">
                        ₹{data?.data?.data?.[0]?.cart_total_amount}
                      </span>
                    </Text>
                  </CustomDiv>
                  <CustomDiv className="flex gap-4 w-full">
                    <CustomButton
                      type="button"
                      variant="outlined"
                      onClick={() => setState(false)}
                      className="w-full"
                    >
                      Back to Shop
                    </CustomButton>

                    <CustomButton
                      type="button"
                      onClick={() => setPage(2)}
                      className="w-full whitespace-nowrap"
                    >
                      Continue ({data?.data?.data?.length} items)
                    </CustomButton>
                  </CustomDiv>
                </>
              ) : page === 2 ? (
                <SelectAddress
                  setPage={setPage}
                  page={page}
                  texCharge={data?.data?.data?.[0]?.cart_tax}
                  deleveryCharge={data?.data?.data?.[0]?.cart_delivery_charges}
                  subTotal={data?.data?.data?.[0]?.cart_subtotal}
                  discountOnMrp={data?.data?.data?.[0]?.cart_total_discount}
                  totleMrp={data?.data?.data?.[0]?.cart_total_price}
                  totalAmount={data?.data?.data?.[0]?.cart_total_amount}
                  setOrderDetail={setOrderDetail}
                />
              ) : (
                <>
                  <OrderPlaced
                    orderDetail={orderDetail}
                    setState={setState}
                    setPage={setPage}
                    setClearCartData={setClearCartData}
                  />
                </>
              )}
            </CustomDiv>
          )}
        </CustomDiv>
      </Drawer>
    </>
  );
}
