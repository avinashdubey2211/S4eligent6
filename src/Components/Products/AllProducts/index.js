// import {
//   ExpandMore,
//   Favorite,
//   FavoriteBorder,
//   FilterAlt,
//   Search,
//   Sort,
// } from "@mui/icons-material";
// import {
//   Button,
//   CircularProgress,
//   Divider,
//   Drawer,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   Pagination,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CustomButton from "../../../Shared/CustomButton";
// import CustomDiv from "../../../Shared/CustomDiv";
// import Text from "../../../Shared/Text";
// import { IconButton } from "@mui/joy";
// import axiosInstance from "../../../Config/axios";
// import { API_URLS } from "../../../Config/API_URLS";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";
// import { useMutation, useQuery, useQueryClient } from "react-query";
// import { categoryListFn } from "../../../Services/CategoryList";
// import { allFiltersFn } from "../../../Services/AllFilters/index,";
// import { productsFn } from "../../../Services/Products";
// import { sortByFn } from "../../../Services/SortBy";
// import { useDispatch } from "react-redux";
// import { setThemeMode } from "../../../Redux/Actions/ThemeMode";
// import classNames from "classnames";
// import CustomTextField from "../../../Shared/CustomTextField";

// const AllProducts = () => {
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [filterDrawer, setFilterDrawer] = useState(false);
//   const [count, setCount] = useState(0);
//   const [page, setPage] = useState(1);
//   const { enqueueSnackbar } = useSnackbar();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const client = useQueryClient();
//   const [isCart, setIsCart] = useState(false);
//   const [isWhislist, setInWhislist] = useState(false);
//   const [categoryId, setCategoryId] = useState("");
//   const [subCategoryId, setSubCategoryId] = useState("");
//   const [brandId, setBrandId] = useState({ title: "", value: "" });
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [rating, setRating] = useState("");
//   const [sortBy, setSortBy] = useState("");

//   const { state } = useLocation();

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   const { mutate, isLoading } = useMutation(productsFn, {
//     onSuccess: (response) => {
//       setData(response.data.data.product_list);
//       setCount(response.data.total_pages);
//     },
//   });

//   const { mutate: filter, isLoading: isLoading2 } = useMutation(sortByFn, {
//     onSuccess: (response) => {
//       setData(response.data.data.product_list);
//       setCount(0);
//     },
//   });

//   const { mutate: allFilters, isLoading: isLoading1 } = useMutation(
//     allFiltersFn,
//     {
//       onSuccess: (response) => {
//         setData(response.data.data.product_list);
//         setCount(response.data.total_pages);
//       },
//     }
//   );

//   const handleLogin = (event) => {
//     event.stopPropagation();
//     dispatch(setThemeMode(true));
//   };

//   useEffect(() => {
//     if (
//       categoryId ||
//       state?.subCategory ||
//       brandId?.value ||
//       minPrice ||
//       maxPrice ||
//       rating ||
//       sortBy ||
//       state
//     ) {
//       allFilters({
//         category_id: categoryId || state?.category_id || "",
//         sub_category_id: state?.subCategory || "",
//         brand_id: brandId?.value,
//         max_price:
//           state?.priceRange === "2"
//             ? 100
//             : state?.priceRange === "3"
//               ? 200
//               : state?.priceRange === "4"
//                 ? 500
//                 : state?.priceRange === "5"
//                   ? 100000
//                   : "",
//         min_price:
//           state?.priceRange === "2"
//             ? 1
//             : state?.priceRange === "3"
//               ? 100
//               : state?.priceRange === "4"
//                 ? 200
//                 : state?.priceRange === "5"
//                   ? 500
//                   : "",
//         rating: rating,
//         page: 1,
//         color_id: "",
//         sortby: sortBy,
//       });
//     } else {
//       allFilters({
//         category_id: "",
//         sub_category_id: "",
//         brand_id: "",
//         max_price: "",
//         min_price: "",
//         rating: "",
//         page: 1,
//         color_id: "",
//         order_by: "",
//       });
//     }
//   }, [
//     categoryId,
//     subCategoryId,
//     brandId,
//     minPrice,
//     maxPrice,
//     rating,
//     sortBy,
//     state,
//   ]);

//   // useEffect(
//   //   () => {
//   //     if (state?.from === "sortby")
//   //       filter({
//   //         order_by:
//   //           state?.sortby !== "price_low_to_high" &&
//   //           state?.sortby !== "price_high_to_low"
//   //             ? state?.sortby
//   //             : "None",
//   //         price_low_to_high:
//   //           state?.sortby === "price_low_to_high"
//   //             ? "price_low_to_high"
//   //             : "None",
//   //         price_high_to_low:
//   //           state?.sortby === "price_high_to_low"
//   //             ? "price_high_to_low"
//   //             : "None",
//   //       });
//   //   },
//   //   // eslint-disable-next-line
//   //   [state?.from, state?.sortby]
//   // );

//   // useEffect(
//   //   () => {
//   //     if (state?.from === "search")
//   //       filter({
//   //         search: state?.search,
//   //       });
//   //   },
//   //   // eslint-disable-next-line
//   //   [state?.search, state?.from]
//   // );

//   // useEffect(
//   //   () => {
//   //     if (state?.from === "allproduct")
//   //       allFilters({
//   //         page: page,
//   //         category_id: "",
//   //         sub_category_id: "",
//   //         brand_id: "",
//   //         color_id: "",
//   //         max_price: "",
//   //         min_price: "",
//   //         rating: "",
//   //       });
//   //     window.scrollTo({
//   //       top: 0,
//   //       left: 0,
//   //       behavior: "smooth",
//   //     });
//   //   },
//   //   // eslint-disable-next-line
//   //   [state?.from, page]
//   // );

//   // useEffect(
//   //   () => {
//   //     if (state?.from === "subCategory")
//   //       allFilters({
//   //         page: page,
//   //         category_id: "",
//   //         sub_category_id: state?.subCategory,
//   //         brand_id: "",
//   //         color_id: "",
//   //         max_price: "",
//   //         min_price: "",
//   //         rating: "",
//   //       });
//   //   },
//   //   // eslint-disable-next-line
//   //   [state?.from, state?.subCategory, page]
//   // );

//   // useEffect(
//   //   () => {
//   //     if (state?.from === "category")
//   //       allFilters({
//   //         page: page,
//   //         category_id: state?.category,
//   //         sub_category_id: "",
//   //         brand_id: "",
//   //         color_id: "",
//   //         max_price: "",
//   //         min_price: "",
//   //         rating: "",
//   //       });
//   //   },
//   //   // eslint-disable-next-line
//   //   [state?.from, state?.category, page]
//   // );

//   // useEffect(
//   //   () => {
//   //     if (state?.from === "priceRange")
//   //       allFilters({
//   //         page: page,
//   //         category_id: state?.category,
//   //         sub_category_id: "",
//   //         brand_id: "",
//   //         color_id: "",
//   //         rating: "",
//   //         min_price:
//   //           state?.priceRange === "2"
//   //             ? 1
//   //             : state?.priceRange === "3"
//   //             ? 100
//   //             : state?.priceRange === "4"
//   //             ? 200
//   //             : state?.priceRange === "5"
//   //             ? 500
//   //             : "",
//   //         max_price:
//   //           state?.priceRange === "2"
//   //             ? 100
//   //             : state?.priceRange === "3"
//   //             ? 200
//   //             : state?.priceRange === "4"
//   //             ? 500
//   //             : state?.priceRange === "5"
//   //             ? 100000
//   //             : "",
//   //       });
//   //   },
//   //   // eslint-disable-next-line
//   //   [state?.from, state?.priceRange, page]
//   // );

//   const handleWishList = (variant_id, event) => {
//     event.stopPropagation();
//     const reqBody = {
//       add_quantity: 1,
//       product_id: variant_id,
//     };
//     setInWhislist(true);
//     axiosInstance
//       .post(API_URLS.addToWishList, reqBody)
//       .then((response) => {
//         client.refetchQueries("wishList");
//         response.data.msg === "Data get Successfully"
//           ? allFilters({
//             page: page,
//             category_id: "",
//             sub_category_id: "",
//             brand_id: "",
//             color_id: "",
//             max_price: "",
//             min_price: "",
//             rating: "",
//           })
//           : response.data.msg === "Something Wrong with the quanity !"
//             ? enqueueSnackbar("Product is Out-of-Stock", { variant: "error" })
//             : enqueueSnackbar(response.data.msg, { variant: "success" });
//         enqueueSnackbar(response.data.msg, { variant: "success" });
//         setInWhislist(false);
//       })
//       .catch((error) => {
//         enqueueSnackbar("Something went wrong..!", { variant: "error" });
//       });
//   };
//   const addToCart = (event, variantId) => {
//     event.stopPropagation();
//     const reqBody = new FormData();
//     reqBody.append("product_id", variantId);
//     reqBody.append("add_quantity", 1);
//     setIsCart(true);
//     axiosInstance
//       .post(API_URLS.addToCart, reqBody)
//       .then((response) => {
//         client.refetchQueries(["myCartList"]);
//         enqueueSnackbar(response.data.status);
//         setIsCart(false);
//       })
//       .catch((error) => {
//         enqueueSnackbar("Something went wrong..!", { variant: "error" });
//       });
//   };
//   const { data: mainCategoryList } = useQuery(
//     ["mainCategoryList"],
//     () => categoryListFn(),
//     {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//     }
//   );

//   return (
//     <CustomDiv className="bg-white  flex lg:flex-row flex-col justify-between lg:gap-5 shadow px-[3%]  lg:py-[8%] w-full mt-10">
//       <CustomDiv className="flex sticky flex-col accordion min-w-[250px] lg:w-1/5">
//         {/* <CustomTextField
//           startDecorator={<Search color="primary" />}
//           placeholder="Search"
//           value={state?.search}
//           onChange={(event) =>
//             navigate("/all-products", {
//               state: {from: "search", search: event.target.value},
//             })
//           }
//           className="!hidden lg:!flex"
//         /> */}

//         <Accordion expanded className="lg:block hidden">
//           {/* <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
//             <Text className="whitespace-nowrap">
//               <span className="font-bold"> Sort By :</span>
//               {state?.sortby === "All Products"
//                 ? state?.sortby
//                 : state?.sortby === "sort_by_popularity"
//                 ? " Popularity"
//                 : state?.sortby === "sort_by_rating"
//                 ? " Rating"
//                 : state?.sortby === "sort_by_newness"
//                 ? " Newest First"
//                 : state?.sortby === "price_low_to_high"
//                 ? " Price: Low to High"
//                 : state?.sortby === "price_high_to_low"
//                 ? " Price: High to Low"
//                 : " None"}
//             </Text>
//           </AccordionSummary> */}
//           <AccordionDetails>
//             {/* <Divider /> */}

//             <FormControl className="!p-2">
//               <RadioGroup onChange={(event) => setSortBy(event.target.value)}>
//                 <FormControlLabel
//                   value="recommended"
//                   control={<Radio color="primary" />}
//                   label="Popularity"
//                 />
//                 <FormControlLabel
//                   value="top_rated"
//                   control={<Radio color="primary" />}
//                   label="Rating"
//                 />
//                 <FormControlLabel
//                   value="recently_added"
//                   control={<Radio color="primary" />}
//                   label="Newest First"
//                 />
//                 {/* <FormControlLabel
//                   value="price_low_to_high"
//                   control={<Radio color="primary" />}
//                   label="Price: Low to High"
//                 />
//                 <FormControlLabel
//                   value="price_high_to_low"
//                   control={<Radio color="primary" />}
//                   label="Price: High to Low"
//                 /> */}
//               </RadioGroup>
//             </FormControl>
//           </AccordionDetails>
//         </Accordion>
//         <CustomDiv className="bg-white mt-5 dark:bg-[#121212] hidden lg:flex flex-col !rounded">
//           <span className="flex justify-between p-3 px-4">
//             <Text className="font-bold">Filters</Text>
//           </span>
//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMore />}>
//               <Text className="font-bold">Categories</Text>
//             </AccordionSummary>
//             <AccordionDetails>
//               <AccordionDetails>
//                 <FormControl>
//                   <RadioGroup
//                     onChange={(event) => setCategoryId(event.target.value)}
//                   >
//                     {mainCategoryList?.data?.data?.main_category_list?.map(
//                       (product) => {
//                         return (
//                           <FormControlLabel
//                             value={product.id}
//                             control={<Radio color="primary" />}
//                             label={product.category}
//                           />
//                         );
//                       }
//                     )}
//                   </RadioGroup>
//                 </FormControl>
//               </AccordionDetails>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion expanded>
//             <AccordionSummary>
//               <Text className="font-bold">Price Range</Text>
//             </AccordionSummary>
//             <AccordionDetails>
//               <AccordionDetails>
//                 <FormControl>
//                   <RadioGroup
//                     onChange={(event) =>
//                       navigate("/all-products", {
//                         state: {
//                           from: "priceRange",
//                           priceRange: event.target.value,
//                         },
//                       })
//                     }
//                   >
//                     <FormControlLabel
//                       value="2"
//                       control={<Radio color="primary" />}
//                       label="₹0 to ₹100"
//                     />
//                     <FormControlLabel
//                       value="3"
//                       control={<Radio color="primary" />}
//                       label="₹100 to ₹200"
//                     />
//                     <FormControlLabel
//                       value="4"
//                       control={<Radio color="primary" />}
//                       label="₹200 to ₹500"
//                     />
//                     <FormControlLabel
//                       value="5"
//                       control={<Radio color="primary" />}
//                       label="More than ₹500"
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </AccordionDetails>
//             </AccordionDetails>
//           </Accordion>
//         </CustomDiv>

//         <CustomDiv className="flex lg:hidden bg-white p-1 my-2 w-full">
//           <Button
//             variant="text"
//             color="primary"
//             className="w-1/2 !p-2.5 !border-r-2 !border-solid !border-gray-100 !rounded-none"
//             onClick={() => setOpen(true)}
//             startIcon={<Sort />}
//           >
//             Sort
//           </Button>
//           <Drawer
//             anchor="bottom"
//             open={open}
//             onClose={() => setOpen(false)}
//             className="!p-10"
//           >
//             <CustomDiv className="py-3">
//               <Text className="whitespace-nowrap px-5 py-3">
//                 <span className="font-bold"> Sort By :</span>
//                 {state?.sortby === "All Products"
//                   ? state?.sortby
//                   : state?.sortby === "recommended"
//                     ? " Popularity"
//                     : state?.sortby === "top_rated"
//                       ? " Rating"
//                       : state?.sortby === "recently_added"
//                         ? " Newest First"
//                         : state?.sortby === "price_low_to_high"
//                           ? " Price: Low to High"
//                           : state?.sortby === "price_high_to_low"
//                             ? " Price: High to Low"
//                             : " None"}
//               </Text>
//               <Divider />
//               <FormControl className="!px-5 !py-3">
//                 <RadioGroup
//                   onChange={(event) => setSortBy(event.target.value)}
//                   onClick={() => setOpen(false)}
//                 >
//                   <FormControlLabel
//                     value="recommended"
//                     control={<Radio color="primary" />}
//                     label="Popularity"
//                   />
//                   <FormControlLabel
//                     value="top_rated"
//                     control={<Radio color="primary" />}
//                     label="Rating"
//                   />
//                   <FormControlLabel
//                     value="recently_added"
//                     control={<Radio color="primary" />}
//                     label="Newest First"
//                   />
//                   {/* <FormControlLabel
//                     value="price_low_to_high"
//                     control={<Radio color="primary" />}
//                     label="Price: Low to High"
//                   />
//                   <FormControlLabel
//                     value="price_high_to_low"
//                     control={<Radio color="primary" />}
//                     label="Price: High to Low"
//                   /> */}
//                 </RadioGroup>
//               </FormControl>
//             </CustomDiv>
//           </Drawer>

//           <Button
//             variant="text"
//             color="primary"
//             className="w-1/2 !p-2.5"
//             startIcon={<FilterAlt />}
//             onClick={() => setFilterDrawer(true)}
//           >
//             Filter
//           </Button>
//           <Drawer
//             anchor="right"
//             open={filterDrawer}
//             onClose={() => setFilterDrawer(false)}
//           >
//             <CustomDiv className="py-3 w-64">
//               <Text className="whitespace-nowrap font-bold px-5 py-3">
//                 Categories
//               </Text>
//               <Divider />
//               <FormControl className="!px-5 !py-3">
//                 <RadioGroup
//                   onChange={(event) => setCategoryId(event.target.value)}
//                   onClick={() => setFilterDrawer(false)}
//                 >
//                   {mainCategoryList?.data?.data?.main_category_list?.map(
//                     (product) => {
//                       return (
//                         <FormControlLabel
//                           value={product.id}
//                           control={<Radio color="primary" />}
//                           label={product.category}
//                         />
//                       );
//                     }
//                   )}
//                 </RadioGroup>
//               </FormControl>
//               <Divider />
//               <Text className="whitespace-nowrap font-bold px-5 py-3">
//                 Price Range
//               </Text>
//               <Divider />
//               <FormControl className="!px-5 !py-3">
//                 <RadioGroup
//                   onChange={(event) =>
//                     navigate("/all-products", {
//                       state: {
//                         from: "priceRange",
//                         priceRange: event.target.value,
//                       },
//                     })
//                   }
//                   onClick={() => setFilterDrawer(false)}
//                 >
//                   <FormControlLabel
//                     value="2"
//                     control={<Radio color="primary" />}
//                     label="₹0 to ₹100"
//                   />
//                   <FormControlLabel
//                     value="3"
//                     control={<Radio color="primary" />}
//                     label="₹100 to ₹200"
//                   />
//                   <FormControlLabel
//                     value="4"
//                     control={<Radio color="primary" />}
//                     label="₹200 to ₹500"
//                   />
//                   <FormControlLabel
//                     value="5"
//                     control={<Radio color="primary" />}
//                     label="More than ₹500"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </CustomDiv>
//           </Drawer>
//         </CustomDiv>
//         <CustomTextField
//           startDecorator={<Search color="primary" />}
//           placeholder="Search"
//           value={state?.search}
//           onChange={(event) =>
//             navigate("/all-products", {
//               state: { from: "search", search: event.target.value },
//             })
//           }
//           className="!flex !mb-2 lg:!hidden"
//         />
//       </CustomDiv>
//       <CustomDiv className="flex flex-col lg:w-4/5">
//         {isLoading1 || isLoading || isLoading2 ? (
//           <Grid className="grid lg:grid-cols-4 2xl:grid-cols-5 hide-scroll grid-cols-2 md:grid-cols-3 lg:gap-4 gap-1 ">
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => {
//               return (
//                 <div className="rounded-md h-auto lg:w-[200px] w-full lg:hover:scale-[1.02] transition-transform duration-200 shadow bg-white cursor-pointer  animate-pulse">
//                   <div className="lg:h-52 h-40 bg-gray-300"></div>
//                   <div className="flex flex-col gap-3 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
//                     <div className="w-full h-6 bg-gray-300"></div>
//                     <div className="w-full h-6 bg-gray-300"></div>
//                     <div className="w-3/4 h-6 bg-gray-300"></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Grid>
//         ) : (
//           <Grid className=" grid lg:grid-cols-4 2xl:grid-cols-5 hide-scroll grid-cols-2 md:grid-cols-3 lg:gap-4 gap-1">
//             {data?.map((product) => {
//               return (
//                 <CustomDiv
//                   className="group-item group hover:border border-black h-fit lg:w-[200px] w-full  transition-transform duration-200 bg-white cursor-pointer "
//                   onClick={() =>
//                     navigate(`/product/${product?.id}/${product.variant_id}`)
//                   }
//                 >
//                   <span className="centerdiv">
//                     <img
//                       src={product.variant_image || product.image}
//                       alt=""
//                       className="lg:h-52 w-full relative"
//                     />
//                   </span>

//                   <CustomDiv className="flex flex-col justify-between lg:p-4 p-2 space-y-1">
//                     <CustomDiv className="space-y-1">
//                       <Text className="!lg:text-lg lg:block lg:w-45 w-40 !overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
//                         {product.variant_name}
//                       </Text>
//                     </CustomDiv>

//                     <Text className="!text-sm text-green-600 uppercase">
//                       {product.main_category}
//                     </Text>

//                     <Text
//                       className={classNames(
//                         "!text-xs  uppercase",
//                         product.stock_sataus === "In-stock"
//                           ? "text-gray-600"
//                           : "text-red-600"
//                       )}
//                     >
//                       {product.stock_sataus === "In-stock"
//                         ? "In-Stock"
//                         : "Out-Of-Stock"}
//                     </Text>

//                     <CustomDiv className="flex items-center gap-2">
//                       <Text className="line-through !lg:text-base !text-xs">
//                         {product.discount_percent !== "0.0"
//                           ? `₹${product.price}`
//                           : null}
//                       </Text>

//                       <Text className="font-bold text-sm !lg:text-lg">
//                         ₹{product.actual_price}
//                       </Text>

//                       <Text className="text-green-600 lg:text-base !text-xs">
//                         {product.discount_percent !== "0.0"
//                           ? `(${product.discount_percent})%`
//                           : null}
//                       </Text>
//                     </CustomDiv>
//                     <span className="invisible group-hover:visible flex lg:gap-2">
//                       {isWhislist ? (
//                         <CircularProgress size={25} color="inherit" />
//                       ) : (
//                         <IconButton
//                           color="primary"
//                           variant="solid"
//                           onClick={(event) => {
//                             localStorage.getItem("token") ? (
//                               product.whishlist_status === "yes" ? (
//                                 <>{` ${enqueueSnackbar(
//                                   "Product is already in wishlist"
//                                 )}
//                               ${event.stopPropagation()}`}</>
//                               ) : (
//                                 handleWishList(product?.variant_id, event)
//                               )
//                             ) : (
//                               handleLogin(event)
//                             );
//                           }}
//                           className="!rounded !bg-gray-500 scale-90 lg:scale-100"
//                         >
//                           {product.whishlist_status === "yes" ? (
//                             <Favorite className="!text-red-500" />
//                           ) : (
//                             <FavoriteBorder className="!text-red-500" />
//                           )}
//                         </IconButton>
//                       )}

//                       {isCart ? (
//                         <CustomButton
//                           type="button"
//                           className={
//                             " !bg-gray-700 whitespace-nowrap scale-90 lg:scale-100 w-full"
//                           }
//                         >
//                           <CircularProgress size={35} color="inherit" />
//                         </CustomButton>
//                       ) : (
//                         <CustomButton
//                           type="button"
//                           className={
//                             " !bg-gray-700 whitespace-nowrap scale-90 lg:scale-100 w-full"
//                           }
//                           onClick={(event) =>
//                             localStorage.getItem("token")
//                               ? addToCart(event, product.variant_id)
//                               : handleLogin(event)
//                           }
//                         >
//                           Add To Cart
//                         </CustomButton>
//                       )}
//                     </span>
//                   </CustomDiv>
//                 </CustomDiv>
//               );
//             })}
//           </Grid>
//         )}
//         <span className="flex my-3 justify-between w-full items-center">
//           {count <= 1 ? null : (
//             <Pagination
//               count={count}
//               page={page}
//               onChange={handleChange}
//               variant="outlined"
//               shape="rounded"
//               color="primary"
//               className="w-full"
//             />
//           )}
//         </span>
//       </CustomDiv>
//     </CustomDiv>
//   );
// };
// export default AllProducts;

import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  FilterAlt,
  Search,
  Sort,
  Close,
} from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  Chip,
  Box,
} from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";
import { IconButton } from "@mui/joy";
import axiosInstance from "../../../Config/axios";
import { API_URLS } from "../../../Config/API_URLS";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { categoryListFn } from "../../../Services/CategoryList";
import { allFiltersFn } from "../../../Services/AllFilters/index,";
import { productsFn } from "../../../Services/Products";
import { sortByFn } from "../../../Services/SortBy";
import { useDispatch } from "react-redux";
import { setThemeMode } from "../../../Redux/Actions/ThemeMode";
import classNames from "classnames";
import CustomTextField from "../../../Shared/CustomTextField";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const client = useQueryClient();
  const [isCart, setIsCart] = useState(false);
  const [isWhislist, setInWhislist] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [brandId, setBrandId] = useState({ title: "", value: "" });
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { state } = useLocation();

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { mutate, isLoading } = useMutation(productsFn, {
    onSuccess: (response) => {
      setData(response.data.data.product_list);
      setCount(response.data.total_pages);
    },
  });

  const { mutate: filter, isLoading: isLoading2 } = useMutation(sortByFn, {
    onSuccess: (response) => {
      setData(response.data.data.product_list);
      setCount(0);
    },
  });

  const { mutate: allFilters, isLoading: isLoading1 } = useMutation(
    allFiltersFn,
    {
      onSuccess: (response) => {
        setData(response.data.data.product_list);
        setCount(response.data.total_pages);
      },
    }
  );

  const handleLogin = (event) => {
    event.stopPropagation();
    dispatch(setThemeMode(true));
  };

  const clearFilters = () => {
    setCategoryId("");
    setSubCategoryId("");
    setBrandId({ title: "", value: "" });
    setMinPrice("");
    setMaxPrice("");
    setRating("");
    setSortBy("");
  };

  const activeFiltersCount = [
    categoryId,
    brandId.value,
    rating,
    sortBy,
    state?.priceRange,
  ].filter(Boolean).length;

  useEffect(() => {
    if (
      categoryId ||
      state?.subCategory ||
      brandId?.value ||
      minPrice ||
      maxPrice ||
      rating ||
      sortBy ||
      state
    ) {
      allFilters({
        category_id: categoryId || state?.category_id || "",
        sub_category_id: state?.subCategory || "",
        brand_id: brandId?.value,
        product: state?.product_id,
        max_price:
          state?.priceRange === "2"
            ? 100
            : state?.priceRange === "3"
            ? 200
            : state?.priceRange === "4"
            ? 500
            : state?.priceRange === "5"
            ? 100000
            : "",
        min_price:
          state?.priceRange === "2"
            ? 1
            : state?.priceRange === "3"
            ? 100
            : state?.priceRange === "4"
            ? 200
            : state?.priceRange === "5"
            ? 500
            : "",
        rating: rating,
        page: 1,
        color_id: "",
        sortby: sortBy,
      });
    } else {
      allFilters({
        category_id: "",
        sub_category_id: "",
        brand_id: "",
        max_price: "",
        min_price: "",
        rating: "",
        page: 1,
        color_id: "",
        order_by: "",
      });
    }
  }, [
    categoryId,
    subCategoryId,
    brandId,
    minPrice,
    maxPrice,
    rating,
    sortBy,
    state,
  ]);

  const handleWishList = (variant_id, event) => {
    event.stopPropagation();
    const reqBody = {
      add_quantity: 1,
      product_id: variant_id,
    };
    setInWhislist(true);
    axiosInstance
      .post(API_URLS.addToWishList, reqBody)
      .then((response) => {
        client.refetchQueries("wishList");
        response.data.msg === "Data get Successfully"
          ? allFilters({
              page: page,
              category_id: "",
              sub_category_id: "",
              brand_id: "",
              color_id: "",
              max_price: "",
              min_price: "",
              rating: "",
            })
          : response.data.msg === "Something Wrong with the quanity !"
          ? enqueueSnackbar("Product is Out-of-Stock", { variant: "error" })
          : enqueueSnackbar(response.data.msg, { variant: "success" });
        enqueueSnackbar(response.data.msg, { variant: "success" });
        setInWhislist(false);
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

  const { data: mainCategoryList } = useQuery(
    ["mainCategoryList"],
    () => categoryListFn(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <CustomDiv className="bg-black min-h-screen py-6 px-[3%] ">
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glass-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card-hover:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
          transform: translateY(-4px);
        }

        .product-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card-hover:hover .product-image {
          transform: scale(1.08);
        }

        .shimmer {
          position: relative;
          overflow: hidden;
        }

        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          animation: slideRight 3s infinite;
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .MuiAccordion-root {
          background: transparent !important;
          color: white !important;
        }

        .MuiRadio-root {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .MuiRadio-root.Mui-checked {
          color: #3b82f6 !important;
        }

        .MuiPagination-root .MuiPaginationItem-root {
          color: white;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .MuiPagination-root .MuiPaginationItem-root.Mui-selected {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }
      `}</style>

      <CustomDiv className="max-w-[1600px] bg-inherit mx-auto">
        {/* Header Section */}
        <CustomDiv className="mb-8">
          <Text className="text-3xl font-bold text-white mb-2">
            All Products
          </Text>
          <Text className="text-gray-400">
            {data?.length || 0} products found
          </Text>
        </CustomDiv>

        <CustomDiv className="flex lg:flex-row flex-col gap-6">
          {/* Desktop Sidebar */}
          <CustomDiv className="hidden lg:block lg:w-[280px] flex-shrink-0">
            <CustomDiv className="glass-card rounded-xl sticky top-6 overflow-hidden">
              {/* Filter Header */}
              <CustomDiv className="flex justify-between items-center p-4 border-b border-white/10">
                <Text className="font-bold text-lg text-white">Filters</Text>
                {activeFiltersCount > 0 && (
                  <Button
                    size="small"
                    onClick={clearFilters}
                    className="!text-xs !text-blue-400"
                  >
                    Clear All
                  </Button>
                )}
              </CustomDiv>

              <CustomDiv className="max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* Sort Section */}
                <Accordion defaultExpanded className="!shadow-none">
                  <AccordionSummary
                    expandIcon={<ExpandMore className="text-white" />}
                  >
                    <Text className="font-semibold text-white">Sort By</Text>
                  </AccordionSummary>
                  <AccordionDetails className="!pt-0">
                    <FormControl className="w-full">
                      <RadioGroup
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <FormControlLabel
                          value="recommended"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              Popularity
                            </Text>
                          }
                        />
                        <FormControlLabel
                          value="top_rated"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              Rating
                            </Text>
                          }
                        />
                        <FormControlLabel
                          value="recently_added"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              Newest First
                            </Text>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>

                <Divider className="!border-white/10" />

                {/* Categories Section */}
                <Accordion defaultExpanded className="!shadow-none">
                  <AccordionSummary
                    expandIcon={<ExpandMore className="text-white" />}
                  >
                    <Text className="font-semibold text-white">Categories</Text>
                  </AccordionSummary>
                  <AccordionDetails className="!pt-0">
                    <FormControl className="w-full">
                      <RadioGroup
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        {mainCategoryList?.data?.data?.main_category_list?.map(
                          (product) => (
                            <FormControlLabel
                              key={product.id}
                              value={product.id}
                              control={<Radio size="small" />}
                              label={
                                <Text className="!text-sm text-gray-300">
                                  {product.category}
                                </Text>
                              }
                            />
                          )
                        )}
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>

                <Divider className="!border-white/10" />

                {/* Price Range Section */}
                <Accordion defaultExpanded className="!shadow-none">
                  <AccordionSummary
                    expandIcon={<ExpandMore className="text-white" />}
                  >
                    <Text className="font-semibold text-white">
                      Price Range
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails className="!pt-0">
                    <FormControl className="w-full">
                      <RadioGroup
                        value={state?.priceRange || ""}
                        onChange={(e) =>
                          navigate("/all-products", {
                            state: {
                              from: "priceRange",
                              priceRange: e.target.value,
                            },
                          })
                        }
                      >
                        <FormControlLabel
                          value="2"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              ₹0 - ₹100
                            </Text>
                          }
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              ₹100 - ₹200
                            </Text>
                          }
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              ₹200 - ₹500
                            </Text>
                          }
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio size="small" />}
                          label={
                            <Text className="!text-sm text-gray-300">
                              Above ₹500
                            </Text>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
              </CustomDiv>
            </CustomDiv>
          </CustomDiv>

          {/* Mobile Filter/Sort Bar */}
          <CustomDiv className="lg:hidden glass-card rounded-xl mb-4 flex overflow-hidden">
            <Button
              variant="text"
              className="flex-1 !py-3 !border-r !border-white/10 !rounded-none !text-white"
              onClick={() => setOpen(true)}
              startIcon={<Sort />}
            >
              Sort
            </Button>
            <Button
              variant="text"
              className="flex-1 !py-3 !rounded-none !text-white"
              startIcon={<FilterAlt />}
              onClick={() => setFilterDrawer(true)}
            >
              Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>
          </CustomDiv>

          {/* Sort Drawer (Mobile) */}
          <Drawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              className: "!bg-gray-900",
            }}
          >
            <CustomDiv className="p-4">
              <CustomDiv className="flex justify-between items-center mb-4">
                <Text className="font-bold text-lg text-white">Sort By</Text>
                <IconButton onClick={() => setOpen(false)}>
                  <Close className="text-white" />
                </IconButton>
              </CustomDiv>
              <Divider className="!mb-4 !border-white/10" />
              <FormControl className="w-full">
                <RadioGroup
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setOpen(false);
                  }}
                >
                  <FormControlLabel
                    value="recommended"
                    control={<Radio />}
                    label={<Text className="text-white">Popularity</Text>}
                  />
                  <FormControlLabel
                    value="top_rated"
                    control={<Radio />}
                    label={<Text className="text-white">Rating</Text>}
                  />
                  <FormControlLabel
                    value="recently_added"
                    control={<Radio />}
                    label={<Text className="text-white">Newest First</Text>}
                  />
                </RadioGroup>
              </FormControl>
            </CustomDiv>
          </Drawer>

          {/* Filter Drawer (Mobile) */}
          <Drawer
            anchor="right"
            open={filterDrawer}
            onClose={() => setFilterDrawer(false)}
            PaperProps={{
              className: "!bg-gray-900",
            }}
          >
            <CustomDiv className="w-80 h-full flex flex-col">
              <CustomDiv className="flex justify-between items-center p-4 border-b border-white/10">
                <Text className="font-bold text-lg text-white">Filters</Text>
                <CustomDiv className="flex gap-2">
                  {activeFiltersCount > 0 && (
                    <Button
                      size="small"
                      onClick={clearFilters}
                      className="!text-xs !text-blue-400"
                    >
                      Clear
                    </Button>
                  )}
                  <IconButton onClick={() => setFilterDrawer(false)}>
                    <Close className="text-white" />
                  </IconButton>
                </CustomDiv>
              </CustomDiv>

              <CustomDiv className="flex-1 overflow-y-auto p-4">
                <Text className="font-semibold mb-3 text-white">
                  Categories
                </Text>
                <FormControl className="w-full mb-6">
                  <RadioGroup
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    {mainCategoryList?.data?.data?.main_category_list?.map(
                      (product) => (
                        <FormControlLabel
                          key={product.id}
                          value={product.id}
                          control={<Radio />}
                          label={
                            <Text className="text-gray-300">
                              {product.category}
                            </Text>
                          }
                        />
                      )
                    )}
                  </RadioGroup>
                </FormControl>

                <Divider className="!my-4 !border-white/10" />

                <Text className="font-semibold mb-3 text-white">
                  Price Range
                </Text>
                <FormControl className="w-full">
                  <RadioGroup
                    value={state?.priceRange || ""}
                    onChange={(e) => {
                      navigate("/all-products", {
                        state: {
                          from: "priceRange",
                          priceRange: e.target.value,
                        },
                      });
                      setFilterDrawer(false);
                    }}
                  >
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label={<Text className="text-gray-300">₹0 - ₹100</Text>}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label={<Text className="text-gray-300">₹100 - ₹200</Text>}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label={<Text className="text-gray-300">₹200 - ₹500</Text>}
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label={<Text className="text-gray-300">Above ₹500</Text>}
                    />
                  </RadioGroup>
                </FormControl>
              </CustomDiv>
            </CustomDiv>
          </Drawer>

          {/* Products Grid */}
          <CustomDiv className="flex-1">
            {isLoading1 || isLoading || isLoading2 ? (
              <Grid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <CustomDiv
                    key={item}
                    className="glass-card rounded-xl overflow-hidden shimmer"
                  >
                    <CustomDiv className="h-48 bg-gray-800" />
                    <CustomDiv className="p-4 space-y-3">
                      <CustomDiv className="h-4 bg-gray-800 rounded w-3/4" />
                      <CustomDiv className="h-4 bg-gray-800 rounded w-1/2" />
                      <CustomDiv className="h-4 bg-gray-800 rounded w-full" />
                    </CustomDiv>
                  </CustomDiv>
                ))}
              </Grid>
            ) : data?.length > 0 ? (
              <Grid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {data.map((product) => (
                  <CustomDiv
                    key={product.id}
                    className="glass-card glass-card-hover rounded-xl overflow-hidden cursor-pointer"
                    onClick={() =>
                      navigate(`/product/${product?.id}/${product.variant_id}`)
                    }
                  >
                    {/* Product Image */}
                    <CustomDiv className="relative overflow-hidden bg-gray-900">
                      {/* <img
                        src={product.variant_image || product.image}
                        alt={product.variant_name}
                        className="product-image w-full h-48 object-cover"
                        
                      /> */}
                      <img
                        src={product?.variant_image || product?.image || ""}
                        alt={product?.variant_name}
                        className="product-image w-full h-53 object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";
                        }}
                      />

                      {product.discount_percent !== "0.0" && (
                        <Chip
                          label={`${product.discount_percent}% OFF`}
                          size="small"
                          className="!absolute !top-2 !right-2 !bg-red-500 !text-white !font-semibold"
                        />
                      )}
                      <CustomDiv className="absolute top-2 left-2">
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            if (localStorage.getItem("token")) {
                              product.whishlist_status === "yes"
                                ? enqueueSnackbar(
                                    "Product is already in wishlist"
                                  ) && e.stopPropagation()
                                : handleWishList(product?.variant_id, e);
                            } else {
                              handleLogin(e);
                            }
                          }}
                          className="!bg-white/10 !backdrop-blur-sm hover:!bg-white/20"
                        >
                          {product.whishlist_status === "yes" ? (
                            <Favorite className="!text-red-500 !text-xl" />
                          ) : (
                            <FavoriteBorder className="!text-white !text-xl" />
                          )}
                        </IconButton>
                      </CustomDiv>
                    </CustomDiv>

                    {/* Product Details */}
                    <CustomDiv className="p-4">
                      <Text className="text-xs text-blue-400 font-medium uppercase mb-1">
                        {product.main_category}
                      </Text>
                      <Text className="font-semibold text-white mb-2 line-clamp-2 min-h-[2.5rem]">
                        {product.variant_name}
                      </Text>

                      <CustomDiv className="flex items-center gap-2 mb-3">
                        <Text className="text-lg font-bold text-white">
                          ₹{product.actual_price}
                        </Text>
                        {product.discount_percent !== "0.0" && (
                          <Text className="text-sm text-gray-500 line-through">
                            ₹{product.price}
                          </Text>
                        )}
                      </CustomDiv>

                      <Chip
                        label={
                          product.stock_sataus === "In-stock"
                            ? "In Stock"
                            : "Out of Stock"
                        }
                        size="small"
                        className={classNames(
                          "!text-xs !font-medium !mb-3",
                          product.stock_sataus === "In-stock"
                            ? "!bg-green-500/20 !text-green-400 !border !border-green-500/30"
                            : "!bg-red-500/20 !text-red-400 !border !border-red-500/30"
                        )}
                      />

                      {/* Add to Cart Button */}
                      <CustomButton
                        onClick={(e) =>
                          localStorage.getItem("token")
                            ? addToCart(e, product.variant_id)
                            : handleLogin(e)
                        }
                        disabled={isCart || product.stock_sataus !== "In-stock"}
                        className="w-full !py-2 !bg-blue-500 hover:!bg-blue-600 !text-white !rounded-lg !font-medium !text-sm disabled:!bg-gray-700 disabled:!text-gray-500"
                      >
                        {isCart ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          "Add to Cart"
                        )}
                      </CustomButton>
                    </CustomDiv>
                  </CustomDiv>
                ))}
              </Grid>
            ) : (
              <CustomDiv className="glass-card rounded-xl p-12 text-center">
                <Text className="text-xl text-white mb-2">
                  No products found
                </Text>
                <Text className="text-gray-400 mb-4">
                  Try adjusting your filters
                </Text>
                <Button
                  onClick={clearFilters}
                  variant="outlined"
                  className="!text-blue-400 !border-blue-400"
                >
                  Clear Filters
                </Button>
              </CustomDiv>
            )}

            {/* Pagination */}
            {count > 1 && (
              <CustomDiv className="flex justify-center mt-8">
                <Pagination
                  count={count}
                  page={page}
                  onChange={handleChange}
                  variant="outlined"
                  shape="rounded"
                  size="large"
                  className="glass-card !rounded-xl !p-4"
                />
              </CustomDiv>
            )}
          </CustomDiv>
          
        </CustomDiv>
      </CustomDiv>
     
    </CustomDiv>
  );
};

export default AllProducts;
