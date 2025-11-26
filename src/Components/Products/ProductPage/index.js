import { CleanHands, UTurnLeft } from "@mui/icons-material";
import { CircularProgress, Divider } from "@mui/joy";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import CustomTextField from "../../../Shared/CustomTextField";
import Text from "../../../Shared/Text";
import Slider from "react-slick";
import { Link, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { checkPincodeFn } from "../../../Services/CheckPincode";
import { useDispatch } from "react-redux";
import { setThemeMode } from "../../../Redux/Actions/ThemeMode";
import { HelpOutline } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
// import { searchHistory } from "../../../Services/SearchHistory";
import { searchHistory as getSearchHistory } from "../../../Services/SearchHistory";



const ProductPage = () => {
  const { id, variant_id } = useParams();
  const [thumbnail, setThumbnail] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState(false);
  const [tab, setTab] = useState("Description");
  const [variantColor, setVariantColor] = useState("");
  const [variantStorage, setVariantStorage] = useState("");
  const [variant, setVariant] = useState("");
  const [pincode, setPincode] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [history, setHistory] = useState([]);
const [searchHistory, setSearchHistory] = useState([]);
  

  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    rounded: 2,
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  const navigate = useNavigate();

  const handleThaumbnailClick = (src) => {
    setThumbnail(src);
  };

  const productDetailData = () => {
    setIsLoading(true);
    const reqbody = new FormData();
    reqbody.append("product_id", id);
    reqbody.append("variant_id", variant_id);
    axiosInstance
      .post(
        `api/store/new-product-deatils/?variant_color_value_id=${variantColor}&variant_storage_value_id=${variantStorage}&other_variants_value_id=${variant}`,
        reqbody
      )
      .then((response) => {
        setIsLoading(false);
        setDetail(response.data.data[0].product_deatils[0]);
        setData(response.data.data[0].related_products);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setThemeMode(true));
  };
  const client = useQueryClient();
  const addToCart = (event, variantId) => {
    event.stopPropagation();
    const reqBody = new FormData();
    reqBody.append("product_id", variantId);
    reqBody.append("add_quantity", 1);
    axiosInstance
      .post(API_URLS.addToCart, reqBody)
      .then((response) => {
        client.refetchQueries(["myCartList"]);
        enqueueSnackbar(response.data.status);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(
    () => {
      productDetailData();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    // eslint-disable-next-line
    [variantColor, variantStorage, id]
  );

  // search history

  // useEffect(() => {
  //   const fetchHistory = async () => {
  //     try {
  //       const res = await searchHistory();
  //       setSearchHistory(res?.data || []);
  //     } catch (err) {
  //       console.log("Error:", err.message);
  //     }
  //   };

  //   fetchHistory();
  // }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getSearchHistory(); 
        setSearchHistory(res?.data || []); 
      } catch (err) {
        console.log("Error:", err.message);
      }
    };

    fetchHistory();
  }, []);


  const emptyFunction = () => {};
  const { mutate } = useMutation(checkPincodeFn, {
    onSuccess: (response) => {
      response.data.response_code === 200
        ? setDelivery(
            `Delivery within ${response.data.delivery_time} in ${response.data.city_name}`
          )
        : emptyFunction();
    },
  });

  useEffect(
    () => {
      pincode.length === 6 ? mutate({ zipcode: pincode }) : emptyFunction();
    },
    // eslint-disable-next-line
    [pincode]
  );

  return isLoading ? (
    <>
      <CustomDiv className="flex h-[90vh] justify-center items-center">
        <CircularProgress size="lg" color="primary" />
      </CustomDiv>
    </>
  ) : (
    <CustomDiv className="flex flex-col overflow-x-hidden   shadow px-[2%] lg:px-[8%] py-[4%] w-full">
      <CustomDiv className="flex lg:flex-row flex-col w-full">
        <CustomDiv className="flex flex-col justify-center lg:w-[40%]">
          {detail?.product_variant_value_list?.[0]?.varients_multiple_image
            ?.length === 0 ? (
            <span className="centerdiv flex-col w-full">
              <img
                src={
                  detail?.product_variant_value_list?.[0]?.variant_image ||
                  "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
                }
                alt=""
                className="h-[380px] w-[380px] rounded p-2 shadow-lg my-3"
                onError={(e) =>
                  (e.target.src =
                    "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=")
                }
              />
            </span>
          ) : (
            <span className="centerdiv flex-col w-full">
              <img
                src={
                  thumbnail
                    ? thumbnail
                    : detail?.product_variant_value_list?.[0]
                        ?.varients_multiple_image?.[0]?.variant_image ||
                      "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
                }
                alt=""
                className="h-[380px] w-[380px] rounded p-2 shadow-lg my-3"
                onError={(e) =>
                  (e.target.src =
                    "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=")
                }
              />
            </span>
          )}

          <CustomDiv className="lg:px-8 px-4 pb-3 ">
            <Slider {...settings} className="home-slider">
              {detail?.product_variant_value_list?.[0]?.varients_multiple_image?.map(
                (item) => {
                  return (
                    <CustomDiv
                      className="cursor-pointer shadow-md"
                      onClick={() => {
                        handleThaumbnailClick(item.variant_image);
                      }}
                    >
                      <img
                        src={item.variant_image}
                        alt=""
                        className={classNames(
                          "p-1 border border-zinc-200 ",
                          item.variant_image === thumbnail
                            ? "border-zinc-400"
                            : ""
                        )}
                      />
                    </CustomDiv>
                  );
                }
              )}
            </Slider>
          </CustomDiv>
        </CustomDiv>
        <Divider orientation="vertical" />
        <CustomDiv className="flex flex-col min-h-fit lg:w-[60%] justify-center">
          <CustomDiv className="flex flex-col p-5 gap-3 w-full">
            <Text className="lg:text-xl text-xl font-semibold">
              {detail?.product_variant_value_list?.[0]?.variant_name}
            </Text>
            {/* <div className="flex flex-row justify-between items-center">
              <Text>{detail?.sub_category}</Text>
              <span className="flex items-center gap-2">
                <Text
                  className={
                    detail?.product_variant_value_list?.[0]?.stock_sataus ===
                    "In-stock"
                      ? "text-green-600 text-lg font-semibold"
                      : "text-red-600 text-lg font-semibold"
                  }
                >
                  {detail?.product_variant_value_list?.[0]?.stock_sataus}
                </Text>
                <Text className="text-sm">(Product HSN : {detail?.HSN})</Text>
              </span>
            </div> */}
            <div className="flex flex-col sm:flex-row sm:justify-between w-[500px] sm:items-center gap-1">
              {/* LEFT SIDE — Sub Category */}
              <Text className="text-base sm:text-lg font-medium">
                {detail?.sub_category}
              </Text>

              {/* RIGHT SIDE */}
              <span className="flex items-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
                {/* STOCK STATUS */}
                <Text
                  className={`text-sm sm:text-base font-semibold ${
                    detail?.product_variant_value_list?.[0]?.stock_sataus ===
                    "In-stock"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {detail?.product_variant_value_list?.[0]?.stock_sataus}
                </Text>

                {/* HSN */}
                <Text className="text-xs sm:text-sm text-gray-700">
                  (Product HSN : {detail?.HSN})
                </Text>
              </span>
            </div>

            <Text className="uppercase">
              {detail?.variant_color?.[0]?.title}
            </Text>
            <CustomDiv className="flex gap-5 overflow-x-auto w-[400px] hide-scroll">
              {detail?.variant_color_value?.map((color) => {
                return (
                  <CustomDiv
                    className={classNames(
                      "flex flex-col cursor-pointer border-[3px] transition-all duration-300 p-2 rounded",
                      detail?.product_variant_value_list?.[0]
                        ?.color_variant_values_id === color.id
                        ? "border-gray-800 rounded-lg"
                        : "border-gray-200 rounded-lg"
                    )}
                    onClick={() =>
                      detail?.product_variant_value_list?.[0]
                        ?.color_variant_values_id === color.id
                        ? null
                        : setVariantColor(color.id)
                    }
                  >
                    <Text>{color.color}</Text>
                  </CustomDiv>
                );
              })}
            </CustomDiv>

            <CustomDiv className="flex gap-5 overflow-x-auto w-[400px] hide-scroll">
              <Text className="uppercase">
                {detail?.variant_storage?.[0]?.title}
              </Text>
              {detail?.variant_storage_value?.map((storage) => {
                return (
                  <CustomDiv
                    className={classNames(
                      "flex flex-col cursor-pointer border-[2px] transition-all duration-300 px-2 rounded-sm ",
                      detail?.product_variant_value_list?.[0]
                        ?.storage_variant_values_id === storage.id
                        ? "border-gray-800 rounded-lg"
                        : "border-gray-200 rounded-lg"
                    )}
                    onClick={() =>
                      detail?.product_variant_value_list?.[0]
                        ?.storage_variant_values_id === storage.id
                        ? null
                        : setVariantStorage(storage.id)
                    }
                  >
                    <Text>{storage.value}</Text>
                  </CustomDiv>
                );
              })}
            </CustomDiv>

            <Text className="uppercase">
              {detail?.other_variants?.[0]?.title}
            </Text>

            <CustomDiv className="flex gap-5 overflow-x-auto w-[400px] hide-scroll">
              {detail?.other_variants_value?.map((ram) => {
                return (
                  <CustomDiv
                    className={classNames(
                      "flex flex-col cursor-pointer border-[3px] transition-all duration-300 p-2 rounded",
                      detail?.product_variant_value_list?.[0]
                        ?.other_variant_values_id === ram.id
                        ? "border-gray-800 rounded-lg"
                        : "border-gray-200 rounded-lg"
                    )}
                    onClick={() =>
                      detail?.product_variant_value_list?.[0]
                        ?.other_variant_values_id === ram.id
                        ? null
                        : setVariant(ram.id)
                    }
                  >
                    <Text>{ram.value}</Text>
                  </CustomDiv>
                );
              })}
            </CustomDiv>
            <div className="flex gap-3">
              <Text className="text-lg">
                MRP
                <span className="line-through mx-1">
                  ₹{detail?.product_variant_value_list?.[0]?.variant_price}
                </span>
                <span className="font-bold text-xl mx-1">
                  ₹{detail?.product_variant_value_list?.[0]?.actual_price}
                </span>
              </Text>
              <span className="text-green-600 mx-1">
                Save
                <span className="mx-1">
                  {Number(detail?.discount_percent)}%
                </span>
              </span>
            </div>
            <Text>Inclusive of all taxes</Text>
            <Text className="w-full bg-zinc-100  p-2 px-4">
              {/* • <span className="text-green-700">FREE Delivery </span> on orders
              by ZZZliving over */}
              {/* <span>₹499</span> */}
              <span className="text-gray-600 mx-1">
                Free Delivery on orders above ₹{detail?.free_delivery_price}
              </span>
            </Text>
            <CustomDiv className="flex flex-col lg:flex-row items-center lg:px-10 justify-around gap-2 my-2 w-full">
              <CustomButton
                className="!rounded-none !bg-gray-500 !w-full lg:!w-auto !px-10 !shadow-md"
                onClick={(event) =>
                  localStorage.getItem("Token")
                    ? addToCart(
                        event,
                        detail?.product_variant_value_list?.[0]?.variant_id
                      )
                    : handleLogin()
                }
              >
                Add To Cart
              </CustomButton>

              <Divider orientation="vertical" />
              <span className="flex flex-col gap-4 w-full lg:!w-auto py-6">
                <Text>Delivery Options</Text>
                <CustomTextField
                  type="number"
                  className="!rounded-none !w-full lg:!w-auto"
                  placeholder="Enter Pincode"
                  onChange={(event) => setPincode(event.target.value)}
                />
                <Text>{delivery}</Text>
              </span>
            </CustomDiv>
          </CustomDiv>

          <CustomDiv className="flex flex-col lg:flex-row justify-between gap-5 items-center px-5 w-full bg-gray-200 p-3">
            <span className="flex items-center gap-1">
              <CleanHands className="!p-1 !text-white rounded-full !text-3xl bg-gray-400" />
            </span>
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <div className="">
                  {detail?.is_active_replacement || detail?.is_active_return ? (
                    <Text onClick={handleOpen}>
                      {detail?.is_active_replacement &&
                        detail?.time_period_replacement_policy}
                      <HelpOutline />
                      {detail?.is_active_return &&
                        detail?.time_period_return_replacement_policy}
                    </Text>
                  ) : (
                    <Text onClick={handleOpen} className="!text-sm">
                      No Return or Replacement Applicable <HelpOutline />
                    </Text>
                  )}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box
                      sx={{ ...style, width: 300 }}
                      className="!border-0 outline-none"
                    >
                      {(detail?.is_active_replacement ||
                        detail?.is_active_return) && (
                        <>
                          <div className="flex justify-between bg-gray-300 p-2">
                            <p>Validity</p>
                            <p>Cover</p>
                            <p>Type Accepted</p>
                          </div>
                          <div className="flex justify-between p-2">
                            <p>{detail?.validity}</p>
                            <p>{detail?.covers}</p>
                            <p>{detail?.type_accepted}</p>
                          </div>
                        </>
                      )}
                      {detail?.is_active_replacement && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: detail?.replacement_policy,
                          }}
                        ></p>
                      )}
                      {detail?.is_active_return && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              detail?.is_active_return &&
                              detail?.return_and_refund_replacement_policy,
                          }}
                        ></p>
                      )}
                      {!(
                        detail?.is_active_replacement ||
                        detail?.is_active_return
                      ) && (
                        <>
                          <p>
                            This product is not eligible for returns.
                            <span className="text-blue-800">Know more.</span>
                          </p>
                        </>
                      )}
                    </Box>
                  </Modal>
                </div>
              </span>
            </span>
            <Text>Sold by : ZZZliving Pvt. Ltd.</Text>
          </CustomDiv>
        </CustomDiv>
      </CustomDiv>

      {/* <Text className="text-xl my-5 font-bold px-5">Product Description</Text> */}
      <CustomDiv className="bg-white  shadow flex flex-col">
        <CustomDiv className="flex gap-3 px-2">
          {["Description"].map((item) => {
            return (
              <Link onClick={() => setTab(item)} to="#">
                <Text
                  className={classNames(
                    "border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 p-2",
                    tab === item ? "!border-opacity-100 !text-red-500" : ""
                  )}
                >
                  {item}
                </Text>
              </Link>
            );
          })}
        </CustomDiv>
        <Divider />
        <CustomDiv>
          {tab === "Description" ? (
            <div
              className="p-5"
              dangerouslySetInnerHTML={{ __html: detail?.description || "" }}
            />
          ) : tab === "Ingredients" ? (
            <Text className="p-5">
              Ingredients : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dicta, mollitia! Veritatis repellat maiores blanditiis
              corporis, non maxime placeat soluta incidunt a suscipit fuga
              voluptatum ducimus architecto ipsum eveniet error deleniti?
            </Text>
          ) : (
            <Text className="p-5">
              How To Use : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dicta, mollitia! Veritatis repellat maiores blanditiis
              corporis, non maxime placeat soluta incidunt a suscipit fuga
              voluptatum ducimus architecto ipsum eveniet error deleniti?
            </Text>
          )}
        </CustomDiv>
      </CustomDiv>

      <CustomDiv className="my-3">
        <Text className="text-xl font-semibold">Related Products</Text>
        <CustomDiv className="flex gap-4 my-5 py-1 w-full overflow-x-auto">
          {data?.map((product) => {
            return (
              <CustomDiv
                className="rounded-md h-fit w-[250px] duration-200 shadow bg-white cursor-pointer "
                onClick={() =>
                  navigate(
                    `/product/${product?.product_id}/${product.variant_id}`
                  )
                }
              >
                <span className="centerdiv">
                  <img
                    src={product.product_image}
                    alt=""
                    className="h-52 relative"
                    onError={(e) =>
                      (e.target.src =
                        "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=")
                    }
                  />
                </span>
                <CustomDiv className="flex flex-col justify-between p-4 space-y-2">
                  <CustomDiv className="space-y-2">
                    <Text className="text-lg class-name font-semibold">
                      {product.variant_name}
                    </Text>
                  </CustomDiv>
                  <Text className="text-sm uppercase">
                    {product.main_category}
                  </Text>
                  <CustomDiv className="flex items-center gap-1">
                    <Text className="font-bold">₹{product.price}</Text>
                    <Text className="font-bold text-xl"></Text>
                    <Text className="text-green-600">
                      {product.discount_percent !== "0.0"
                        ? `(${product.discount_percent?.split(".0")})% OFF`
                        : null}
                    </Text>
                  </CustomDiv>
                  <span className="flex gap-4">
                    <CustomButton
                      type="button"
                      className="!rounded w-full !bg-gray-600"
                      onClick={(event) =>
                        localStorage.getItem("Token")
                          ? addToCart(event, product.variant_id)
                          : handleLogin()
                      }
                    >
                      Add To Cart
                    </CustomButton>
                  </span>
                </CustomDiv>
              </CustomDiv>
            );
          })}
        </CustomDiv>
      </CustomDiv>

      {/* search history */}
      {/* {searchHistory.length > 0 ? (
        <div >
          TITLE
          <h2 className="text-2xl font-semibold text-black mb-4">
            User Recent Search History
          </h2>

          GRID
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {searchHistory.map((item) => (
              <div
                key={item.variant_id}
                className="bg-[#ffffff] shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
                onClick={() =>
                  navigate(`/product/${item.product_id}/${item.variant_id}`)
                }
              >
                <div className="p-3">
                  <img
                    src={item.variant_image}
                    alt={item.variant_name}
                    className="w-full h-58 object-cover rounded-lg"
                  />

                  <p className="mt-3 font-semibold text-black text-sm line-clamp-2">
                    {item.variant_name}
                  </p>

                  MAIN CATEGORY
                  <p className="text-lg font-medium text-black mt-1">
                    {item.main_category}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Product ID: {item.product_id}
                  </p>
                  Button

                  PRICE
                  <p className="text-sm font-bold text-black mt-2">
                    ₹ {item.price}
                  </p>
                  <button className="w-full mt-2 bg-blue-600 text-white py-1 rounded hover:bg-blue-700 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">No search history found.</p>
      )} */}
      <section className="mt-2 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm">
        {/* search history */}
        {searchHistory.length > 0 ? (
          <div>
            {/* TITLE */}
            <h2 className="text-xl font-semibold text-black mb-4">
              User Recent Search History
            </h2>

            {/* MOBILE HORIZONTAL SCROLL */}
            <div className="sm:hidden overflow-x-auto whitespace-nowrap pb-3">
              <div className="flex gap-4">
                {searchHistory.map((item) => (
                  <div
                    key={item.variant_id}
                    className="min-w-[220px] bg-[#ffffff] shadow-b hover:shadow-lg transition cursor-pointer rounded"
                    onClick={() =>
                      navigate(`/product/${item.product_id}/${item.variant_id}`)
                    }
                  >
                    <div className="">
                      <img
                        src={item.variant_image}
                        alt={item.variant_name}
                        className="w-full h-58 object-cover rounded"
                      />
                      <div className="p-3">
                        <p className="mt-3 p font-semibold text-black text-xl line-clamp-2">
                          {item.variant_name}
                        </p>

                        <p className="text-lg font-medium text-black mt-1">
                          {item.main_category}
                        </p>

                        <p className="text-xl font-bold text-black mt-2">
                          ₹ {item.price}
                        </p>

                        <button className="w-full mt-2 bg-gray-600 text-white py-2 rounded
                          text-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden sm:grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
              {searchHistory.map((item) => (
                <div
                  key={item.variant_id}
                  className="bg-[#ffffff] shadow-b hover:shadow-lg transition cursor-pointer 
                  rounded"
                  onClick={() =>
                    navigate(`/product/${item.product_id}/${item.variant_id}`)
                  }
                >
                  <div className="">
                    <img
                      src={item.variant_image}
                      alt={item.variant_name}
                      className="w-full h-58 object-cover rounded-lg"
                    />
                    <div className="p-1">
                      <p className="mt-3 font-semibold text-black text-[18px] line-clamp-2">
                        {item.variant_name}
                      </p>

                      <p className="text-lg font-medium text-black mt-1">
                        {item.main_category}
                      </p>

                      <p className="text-[18px] font-bold text-black mt-2">
                        ₹ {item.price}
                      </p>

                      <button
                        className="w-full mt-2 bg-gray-600 text-white py-2 rounded
                      text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center">No search history found.</p>
        )}
      </section>
    </CustomDiv>
  );
};

export default ProductPage;
