// import React from "react";
// import CustomDiv from "../../Shared/CustomDiv";
// import { Carousel } from "react-responsive-carousel";
// import Text from "../../Shared/Text";
// import { Divider, Grid } from "@mui/material";
// import classNames from "classnames";
// import CustomButton from "../../Shared/CustomButton";
// import { sliderListFn } from "../../Services/SliderList";
// import { useMutation } from "react-query";
// import { useState } from "react";
// import { useEffect } from "react";
// import { testimonialFn } from "../../Services/Testimonial";
// import { bannerFn } from "../../Services/Banner";
// import { allFiltersFn } from "../../Services/AllFilters/index,";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../Config/axios";
// import { API_URLS } from "../../Config/API_URLS";

// const LandingPage = () => {
//   const [open, setOpen] = useState(null);
//   const [data, setData] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [banners, setBanners] = useState([]);
//   const [spices, setSpices] = useState([]);
//   const [data1, setData1] = useState([]);
//   const handleActiveHover = (id) => {
//     setOpen(id);
//   };
//   const handleCloseHover = () => {
//     setOpen(null);
//   };

//   const { mutate } = useMutation(sliderListFn, {
//     onSuccess: (response) => {
//       setData(response.data.data);
//     },
//   });
//   const { mutate: testimonial } = useMutation(testimonialFn, {
//     onSuccess: (response) => {
//       setTestimonials(response.data.data);
//     },
//   });

//   const { mutate: banner } = useMutation(bannerFn, {
//     onSuccess: (response) => {
//       setBanners(response.data.data);
//     },
//   });
//   useEffect(
//     () => {
//       mutate();
//       testimonial();
//       banner();
//     },
//     // eslint-disable-next-line
//     []
//   );
//   const navigate = useNavigate();
//   const { mutate: allFilters } = useMutation(allFiltersFn, {
//     onSuccess: (response) => {
//       setSpices(response.data.data.product_list);
//     },
//   });

//   useEffect(
//     () => {
//       allFilters({
//         category_id: 5,
//         sub_category_id: "",
//         brand_id: "",
//         color_id: "",
//         max_price: "",
//         min_price: "",
//         rating: "",
//       });
//     },
//     // eslint-disable-next-line
//     []
//   );
//   const Product = () => {
//     const reqBody = {
//       add_quantity: 1,
//     };
//     axiosInstance.post(API_URLS.productList, reqBody).then((response) => {
//       setData1(response.data.data.product_list);
//     });
//   };

//   useEffect(() => {
//     Product();
//   }, []);

//   return (
//     <CustomDiv className="flex flex-col w-full">
//       <Carousel
//         autoPlay
//         showStatus={false}
//         showThumbs={false}
//         className="shubhga-carousel"
//       >
//         {data?.map((slider) => {
//           return (
//             <div key={slider.id}>
//               <img alt="" src={slider.image} className="relative lg:h-auto" />
//             </div>
//           );
//         })}
//       </Carousel>

//       {/* <CustomDiv className="flex flex-col-reverse gap-10 justify-center items-center my-4 bg-[#F2F8F9] p-4 ">
//         {banners?.map((banner) => {
//           return (
//             <div className="flex flex-col gap-2 lg:gap-5">
//               <Divider textAlign="left" className="font-bold lg:text-xl">
//                 {banner.category}
//               </Divider>
//               <div className="flex gap-2 lg:gap-10">
//                 {banners.map((i) => {
//                   return (
//                     <div
//                       className="flex gap-10 cursor-pointer"
//                       onClick={() =>
//                         navigate("/all-products", {
//                           state: {
//                             from: "category",
//                             category: i.category,
//                           },
//                         })
//                       }
//                     >
//                       <img
//                         src={i.image}
//                         alt=""
//                         className="rounded lg:w-[680px]"
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </CustomDiv> */}

//       <div className="my-5">
//         <div className="flex justify-center lg:text-3xl font-bold text-gray-700 px-4 ">
//           <p className="border-b-2">BEST OF EXCLUSIVE PRODUCT</p>
//         </div>

//         <Grid className=" px-2 grid lg:grid-cols-2 2xl:grid-cols-2 hide-scroll grid-cols-2 md:grid-cols-3 lg:gap-4 gap-3 my-5 py-3">
//           {data1?.slice(0, 24).map((product) => {
//             return (
//               <CustomDiv
//                 className="  h-fit lg:w-[200px] w-full lg:hover:scale-[1.02] transition-transform duration-200 shadow-md bg-white cursor-pointer  "
//                 onClick={() =>
//                   navigate(`/product/${product?.id}/${product.variant_id}`)
//                 }
//               >
//                 <span className="centerdiv">
//                   <img
//                     src={product.image}
//                     alt=""
//                     className="lg:h-52 relative object-cover shadow-sm  "
//                   />
//                 </span>
//                 <CustomDiv className="flex bg-gray-200  flex-col justify-center lg:p-4 p-2 space-y-2 ">
//                   <CustomDiv className="space-y-2">
//                     <Text className="lg:text-lg lg:block lg:w-48 text-xl w-32 overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
//                       {product.variant_name}
//                     </Text>
//                   </CustomDiv>

//                   <CustomDiv className="flex items-center gap-2">
//                     <Text className="font-bold text-sm lg:text-xl">
//                       ₹{product.actual_price}
//                     </Text>
//                   </CustomDiv>
//                 </CustomDiv>
//               </CustomDiv>
//             );
//           })}
//         </Grid>
//       </div>
//       {/*
//       <CustomDiv className="flex flex-col justify-center items-center gap-1 my-10">
//         <Text className="text-center text-xl font-semibold">
//           Discount On Every Single Item On Our Site.
//         </Text>
//         <Text className="text-center text-blue-800 lg:text-4xl text-xl font-bold">
//           <span className="text-blue-400 px-2 !font-semibold">
//             OMG! JUST LOOK AT THE
//           </span>
//           GREAT DEALS!
//         </Text>
//         <span className="p-2 my-3 border-4 border-[#D32F2F] border-dashed rounded-full mx-3">
//           <Text className="p-3 font-semibold text-center rounded-full text-white lg:text-xl gradient">
//             HOW DOES IT FEEL, WHEN YOU SEE GREAT DISCOUNT DEALS FOR EACH
//             PRODUCT?
//           </Text>
//         </span>
//       </CustomDiv>

//       <CustomDiv className="flex lg:flex-row flex-col gap-5 justify-between items-center px-[12%] gradient py-10 mx-3">
//         <span className="text-white text-center">
//           <Text className="font-semibold lg:text-2xl text-xl">
//             SAVE UP TO 30% TO 40% OFF
//           </Text>
//           <Text className="font-bold lg:text-3xl text-xl">
//             OMG! JUST LOOK AT THE GREAT DEALS!
//           </Text>
//         </span>
//         <CustomButton className="!bg-white !p-3 !px-8 !text-black !rounded-full">
//           View More
//         </CustomButton>
//       </CustomDiv> */}

//       <CustomDiv className="bg-[rgb(242,251,254)] whitespace-nowrap overflow-x-auto hide-scroll m-3 flex gap-5 px-[8%]">
//         {[
//           "10% OFF",
//           "Only $49",
//           "Under @150",
//           "Save Money",
//           "80% OFF",
//           "Free Shipping",
//           "$79 Cashback",
//           "Extra 10% OFF",
//           "On Sale",
//           "Free Shipping",
//           "$79 Cashback",
//           "Extra 10% OFF",
//           "On Sale",
//         ].map((item) => {
//           return (
//             <span className="flex justify-center items-center h-20 hover:bg-blue-300 hover:text-white transition-all duration-200 ease-linear p-3 px-5">
//               <Text className="text-xl font-bold">{item}</Text>
//             </span>
//           );
//         })}
//       </CustomDiv>

//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         className="testimonial-carousel"
//       >
//         {testimonials?.map((testimonial) => {
//           return (
//             <CustomDiv className="flex flex-col h-96 lg:h-44 gap-2 lg:flex-row gradient justify-center items-center lg:px-[20%] px-[4%] py-3 mx-3">
//               <img
//                 src={testimonial.image}
//                 alt=""
//                 style={{ border: "5px solid black" }}
//                 className="rounded-full !w-52 !p-2 !border-2 !border-white"
//               />

//               <CustomDiv className="flex flex-col text-white">
//                 <Text className="text-xl font-bold text-center">
//                   {testimonial.name}
//                 </Text>
//                 <Text className="lg:pr-[10%] text-center">
//                   {testimonial.message}
//                 </Text>
//               </CustomDiv>
//             </CustomDiv>
//           );
//         })}
//       </Carousel>

//       <CustomDiv className="flex overflow-x-auto hide-scroll m-3">
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => {
//           return (
//             <CustomDiv className="lg:w-1/2 h-80" key={item}>
//               <img
//                 src={`https://source.unsplash.com/random/900×700/?food/${item}`}
//                 alt=""
//                 className="relative w-[295px] h-[295px] cursor-pointer"
//               />
//               <span
//                 onMouseEnter={() => handleActiveHover(item)}
//                 onMouseLeave={() => handleCloseHover(item)}
//                 className="relative overflow-hidden flex cursor-pointer justify-center items-center bottom-[19rem] pb-[108px] p-24 bg-white bg-opacity-0 hover:bg-opacity-20"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="100"
//                   height="100"
//                   fill="currentColor"
//                   class="bi bi-instagram"
//                   viewBox="0 0 16 16"
//                   className={classNames(
//                     "text-[#00BAF2] transition-all duration-700",
//                     open === item
//                       ? "scale-100 rotate-0"
//                       : "scale-0 rotate-[-270deg]"
//                   )}
//                 >
//                   <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//                 </svg>
//               </span>
//             </CustomDiv>
//           );
//         })}
//       </CustomDiv>
//     </CustomDiv>
//   );
// };

// export default LandingPage;

// import React, { useState, useEffect } from "react";
// import CustomDiv from "../../Shared/CustomDiv";
// import { Carousel } from "react-responsive-carousel";
// import Text from "../../Shared/Text";
// import { Divider, Grid } from "@mui/material";
// import classNames from "classnames";
// import CustomButton from "../../Shared/CustomButton";
// import { sliderListFn } from "../../Services/SliderList";
// import { useMutation } from "react-query";
// import { testimonialFn } from "../../Services/Testimonial";
// import { bannerFn } from "../../Services/Banner";
// import { allFiltersFn } from "../../Services/AllFilters/index,";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../Config/axios";
// import { API_URLS } from "../../Config/API_URLS";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const LandingPage = () => {
//   const [open, setOpen] = useState(null);
//   const [data, setData] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [banners, setBanners] = useState([]);
//   const [spices, setSpices] = useState([]);
//   const [data1, setData1] = useState([]);
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();

//   console.log(data1)

//   const handleActiveHover = (id) => setOpen(id);
//   const handleCloseHover = () => setOpen(null);

//   const { mutate } = useMutation(sliderListFn, {
//     onSuccess: (response) => setData(response.data.data),
//   });

//   const { mutate: testimonial } = useMutation(testimonialFn, {
//     onSuccess: (response) => setTestimonials(response.data.data),
//   });

//   const { mutate: banner } = useMutation(bannerFn, {
//     onSuccess: (response) => setBanners(response.data.data),
//   });

//   const { mutate: allFilters } = useMutation(allFiltersFn, {
//     onSuccess: (response) => setSpices(response.data.data.product_list),
//   });

//   const Product = () => {
//     const reqBody = { add_quantity: 1 };
//     axiosInstance.post(API_URLS.productList, reqBody).then((response) => {
//       setData1(response.data.data.product_list);
//     });
//   };

//   useEffect(() => {
//     mutate();
//     testimonial();
//     banner();
//     Product();
//     allFilters({
//       category_id: 5,
//       sub_category_id: "",
//       brand_id: "",
//       color_id: "",
//       max_price: "",
//       min_price: "",
//       rating: "",
//     });
//     setTimeout(() => setIsVisible(true), 100);
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <CustomDiv className="flex flex-col w-full bg-gradient-to-b from-gray-50 to-white">
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }

//         .animate-pulse-slow {
//           animation: pulse 3s ease-in-out infinite;
//         }

//         .hide-scroll::-webkit-scrollbar {
//           display: none;
//         }

//         .hide-scroll {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         .carousel .slider-wrapper {
//           transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .carousel .control-dots .dot {
//           background: white !important;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
//           width: 12px;
//           height: 12px;
//           margin: 0 6px;
//         }

//         .carousel .control-dots .dot.selected {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
//           transform: scale(1.3);
//         }

//         .product-card {
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .product-card:hover {
//           transform: translateY(-8px) scale(1.02);
//         }

//         .product-image {
//           transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .product-card:hover .product-image {
//           transform: scale(1.1) rotate(2deg);
//         }

//         .badge-slide {
//           transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           transform: translateX(100%);
//         }

//         .product-card:hover .badge-slide {
//           transform: translateX(0);
//         }

//         .cart-icon {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           transform: scale(0) rotate(-180deg);
//         }

//         .product-card:hover .cart-icon {
//           transform: scale(1) rotate(0deg);
//         }

//         .gradient-text {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .glass-effect {
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
//       `}</style>

//       {/* Hero Carousel with Overlay */}
//       <CustomDiv className="relative overflow-hidden shadow-2xl">
//         <Carousel
//           autoPlay
//           infiniteLoop
//           interval={5000}
//           showStatus={false}
//           showThumbs={false}
//           showIndicators={true}
//           transitionTime={800}
//           className="hero-carousel"
//         >
//           {data?.map((slider) => (
//             <CustomDiv key={slider.id} className="relative">
//               <img
//                 alt=""
//                 src={slider.image}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
//               />
//               <CustomDiv className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//             </CustomDiv>
//           ))}
//         </Carousel>
//       </CustomDiv>

//       {/* Animated Title Section */}
//       <CustomDiv
//         className={classNames(
//           "my-8 md:my-16 px-4 transform transition-all duration-1000",
//           isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         )}
//       >
//         <CustomDiv className="flex flex-col items-center gap-4">
//           <Text className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center relative pb-4">
//             <span className="gradient-text">BEST OF EXCLUSIVE PRODUCTS</span>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse-slow" />
//           </Text>
//           <Text className="text-gray-600 text-sm md:text-base text-center">
//             Discover our handpicked collection of premium products
//           </Text>
//         </CustomDiv>
//       </CustomDiv>

//       {/* Product Grid with Stagger Animation */}
//       <CustomDiv className="px-4 md:px-8 lg:px-16 xl:px-24 mb-16">
//         <Grid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5 lg:gap-6">
//           {data1?.slice(0, 24).map((product, idx) => (
//             <CustomDiv
//               key={product.id}
//               className={classNames(
//                 "product-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer",
//                 isVisible ? "animate-fadeInUp" : "opacity-0"
//               )}
//               style={{
//                 animationDelay: `${idx * 50}ms`,
//               }}
//               onClick={() =>
//                 navigate(`/product/${product?.id}/${product.variant_id}`)
//               }
//             >
//               <CustomDiv className="relative overflow-hidden aspect-square bg-gray-100">
//                 <img
//                   src={product.image}
//                   alt={product.variant_name}
//                   className="product-image w-full h-full object-cover"
//                 />
//                 <CustomDiv className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
//                 <CustomDiv className="badge-slide absolute top-3 right-3 glass-effect px-3 py-1.5 rounded-full shadow-lg">
//                   <Text className="text-xs font-bold text-purple-600">NEW</Text>
//                 </CustomDiv>
//               </CustomDiv>

//               <CustomDiv className="p-3 md:p-4 bg-gradient-to-b from-white to-gray-50">
//                 <Text className="text-sm md:text-base font-semibold text-gray-800 truncate mb-2 hover:text-purple-600 transition-colors duration-300">
//                   {product.variant_name}
//                 </Text>
//                 <CustomDiv className="flex items-center justify-between">
//                   <Text className="text-lg md:text-xl font-bold gradient-text">
//                     ₹{product.actual_price}
//                   </Text>
//                   <CustomDiv className="cart-icon w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
//                     <svg
//                       className="w-5 h-5 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </CustomDiv>
//                 </CustomDiv>
//               </CustomDiv>
//             </CustomDiv>
//           ))}
//         </Grid>
//       </CustomDiv>

//       {/* Animated Offers Bar */}
//       <CustomDiv className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-8 my-12 overflow-hidden shadow-inner">
//         <CustomDiv className="flex gap-4 md:gap-6 animate-scroll whitespace-nowrap">
//           {[...Array(2)].map((_, setIdx) => (
//             <React.Fragment key={setIdx}>
//               {[
//                 "10% OFF",
//                 "Only $49",
//                 "Under ₹150",
//                 "Save Money",
//                 "80% OFF",
//                 "Free Shipping",
//                 "$79 Cashback",
//                 "Extra 10% OFF",
//                 "On Sale",
//               ].map((item, idx) => (
//                 <CustomDiv
//                   key={`${setIdx}-${idx}`}
//                   className="inline-flex items-center justify-center min-w-[140px] px-6 md:px-8 py-3 md:py-4 glass-effect rounded-2xl shadow-md hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group"
//                 >
//                   <Text className="text-sm md:text-lg font-bold gradient-text">
//                     {item}
//                   </Text>
//                 </CustomDiv>
//               ))}
//             </React.Fragment>
//           ))}
//         </CustomDiv>
//       </CustomDiv>

//       {/* Testimonials with Fade Animation */}
//       <CustomDiv className="my-16 px-4">
//         <CustomDiv className="text-center mb-10">
//           <Text className="text-3xl md:text-4xl font-bold gradient-text mb-2">
//             What Our Customers Say
//           </Text>
//           <Text className="text-gray-600 text-sm md:text-base">
//             Real experiences from real people
//           </Text>
//         </CustomDiv>
//         <Carousel
//           autoPlay
//           infiniteLoop
//           interval={6000}
//           showThumbs={false}
//           showStatus={false}
//           transitionTime={1000}
//           className="testimonial-carousel"
//         >
//           {testimonials?.map((testimonial) => (
//             <CustomDiv
//               key={testimonial.id}
//               className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-6 md:p-10 lg:p-16 mx-4 md:mx-12 lg:mx-24 xl:mx-32 shadow-2xl"
//             >
//               <CustomDiv className="relative group flex-shrink-0">
//                 <CustomDiv className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 md:border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <CustomDiv className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
//                   <svg
//                     className="w-6 h-6 md:w-8 md:h-8 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 </CustomDiv>
//               </CustomDiv>

//               <CustomDiv className="flex flex-col text-white text-center lg:text-left flex-1 space-y-4">
//                 <Text className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                   {testimonial.name}
//                 </Text>
//                 <Text className="text-sm md:text-base lg:text-lg leading-relaxed opacity-95 italic">
//                   "{testimonial.message}"
//                 </Text>
//                 <CustomDiv className="flex justify-center lg:justify-start gap-1 mt-2">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-200"
//                       viewBox="0 0 20 20"
//                       style={{ animationDelay: `${i * 100}ms` }}
//                     >
//                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                     </svg>
//                   ))}
//                 </CustomDiv>
//               </CustomDiv>
//             </CustomDiv>
//           ))}
//         </Carousel>
//       </CustomDiv>

//       {/* Instagram Gallery with Hover Effects */}
//       <CustomDiv className="mb-16 px-4">
//         <CustomDiv className="text-center mb-10">
//           <Text className="text-3xl md:text-4xl font-bold gradient-text mb-2">
//             Follow Us On Instagram
//           </Text>
//           <Text className="text-gray-600 text-sm md:text-base">
//             Join our community and get inspired
//           </Text>
//         </CustomDiv>
//         <CustomDiv className="flex overflow-x-auto gap-3 md:gap-4 pb-4 hide-scroll px-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
//             <CustomDiv
//               key={item}
//               className="relative flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
//               onMouseEnter={() => handleActiveHover(item)}
//               onMouseLeave={handleCloseHover}
//             >
//               <img
//                 src={`https://source.unsplash.com/random/400×400/?food/${item}`}
//                 alt=""
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <CustomDiv className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="70"
//                   height="70"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   className={classNames(
//                     "text-white drop-shadow-2xl transition-all duration-700",
//                     open === item
//                       ? "scale-100 rotate-0 opacity-100"
//                       : "scale-0 rotate-[-270deg] opacity-0"
//                   )}
//                 >
//                   <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//                 </svg>
//               </CustomDiv>
//               <CustomDiv className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                 <Text className="text-white text-sm font-semibold">
//                   Food #{item}
//                 </Text>
//               </CustomDiv>
//             </CustomDiv>
//           ))}
//         </CustomDiv>
//       </CustomDiv>
//     </CustomDiv>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect } from "react";
import CustomDiv from "../../Shared/CustomDiv";
import { Carousel } from "react-responsive-carousel";
import Text from "../../Shared/Text";
import { Divider, Grid } from "@mui/material";
import classNames from "classnames";
import CustomButton from "../../Shared/CustomButton";
import { sliderListFn } from "../../Services/SliderList";
import { useMutation } from "react-query";
import { testimonialFn } from "../../Services/Testimonial";
import { bannerFn } from "../../Services/Banner";
import { allFiltersFn } from "../../Services/AllFilters/index,";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Config/axios";
import { API_URLS } from "../../Config/API_URLS";

import "react-responsive-carousel/lib/styles/carousel.min.css";

// social media
import { SocialMedia } from "../../Services/SocialMedia/Index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  // faFacebook,
  faYoutube,
  faWhatsapp,
  faSnapchat,
  faLinkedin,
  faTiktok,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { productSortBy } from "../../Services/productSortBy";

const LandingPage = () => {
  const [open, setOpen] = useState(null);
  // const [gallery, setGallery] = useState([]); // social media
  const [socialLinks, setSocialLinks] = useState({});

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const [data, setData] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [banners, setBanners] = useState([]);
  const [spices, setSpices] = useState([]);
  const [data1, setData1] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleActiveHover = (id) => setOpen(id);
  const handleCloseHover = () => setOpen(null);

  const { mutate } = useMutation(sliderListFn, {
    onSuccess: (response) => setData(response.data.data),
  });

  const { mutate: testimonial } = useMutation(testimonialFn, {
    onSuccess: (response) => setTestimonials(response.data.data),
  });

  const { mutate: banner } = useMutation(bannerFn, {
    onSuccess: (response) => setBanners(response.data.data),
  });

  const { mutate: allFilters } = useMutation(allFiltersFn, {
    onSuccess: (response) => setSpices(response.data.data.product_list),
  });

  const Product = () => {
    const reqBody = { add_quantity: 1 };
    axiosInstance.post(API_URLS.productList, reqBody).then((response) => {
      setData1(response.data.data.product_variant_list);
    });
  };

  useEffect(() => {
    mutate();
    testimonial();
    banner();
    Product();
    productList();
    allFilters({
      category_id: 5,
      sub_category_id: "",
      brand_id: "",
      color_id: "",
      max_price: "",
      min_price: "",
      rating: "",
    });
    setTimeout(() => setIsVisible(true), 100);
    // eslint-disable-next-line
  }, []);

  // ================= PRODUCT LIST API =================
  const productList = () => {
    axiosInstance
      .post(API_URLS.productList, { page: 1, limit: 40 })
      .then((res) => {
        const list = res?.data?.data?.product_list || [];
        setProducts(list);
      })
      .catch((err) => console.log("Product List Error:", err));
  };

  // API call with filter
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productSortBy({
          sortBy: "price",
          order: "asc",
        });

        // Correct: actual array is inside product_list
        setProduct(res?.data?.product_list || []);
      } catch (err) {
        console.log("Error:", err.message);
        setProduct([]);
      }
    };

    fetchProduct();
  }, []);

  //  SocialMedia

  // API CALL HERE
  useEffect(() => {
    SocialMedia()
      .then((res) => {
        setSocialLinks(res?.data?.data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  console.log(socialLinks, "links");

  return (
    <CustomDiv className="flex flex-col w-full bg-black min-h-screen">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .hide-scroll::-webkit-scrollbar {
          display: none;
        }

        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Professional Glass Effect */
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
        }

        /* Product Card Effects */
        .product-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover {
          transform: translateY(-8px);
        }

        .product-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-image {
          transform: scale(1.08);
        }

        /* Shimmer Effect */
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

        /* Blue Accent Glow */
        .blue-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .blue-glow-hover {
          transition: box-shadow 0.3s ease;
        }

        .blue-glow-hover:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        /* Carousel Styling */
        .carousel .control-dots {
          margin-bottom: 20px;
        }

        .carousel .control-dots .dot {
          background: rgba(255, 255, 255, 0.3) !important;
          width: 10px;
          height: 10px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .carousel .control-dots .dot.selected {
          background: #3b82f6 !important;
          width: 32px;
          border-radius: 5px;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Grid Line Effect */
        .grid-line {
          background-image: linear-gradient(
              rgba(59, 130, 246, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59, 130, 246, 0.03) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>

      {/* Hero Carousel */}
      <CustomDiv className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          transitionTime={700}
          className="hero-carousel"
        >
          {data?.map((slider) => (
            <CustomDiv key={slider.id} className="relative">
              <img
                alt=""
                src={slider.image}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
              />
              <CustomDiv className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </CustomDiv>
          ))}
        </Carousel>
      </CustomDiv>

      {/* product list */}
      {/* <div
        className={`w-full ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <h2 className="text-2xl font-bold p-4">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 pb-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 
          transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col"
              onClick={() =>
                navigate(`/all-products`, { state: { product_id: p.id } })
              }
            >
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl bg-gray-100">
                <img
                  src={p.variant_image || p.image}
                  alt={p.title}
                  className="w-fit h-fit object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg";
                  }}
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2">
                  {p.title}
                </h3>

              

                <button className="mt-3 w-full bg-black text-white py-2 rounded-xl text-sm font-medium shadow-md hover:bg-gray-800 active:scale-95 transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div
        className={`w-full py-4 lg:px-10 px-2 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        {/* <h2 className="text-2xl font-bold p-4 text-red-700"> Products List</h2> */}

        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 
                  gap-7  pb-10"
        >
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() =>
                navigate(`/all-products`, { state: { product_id: p.id } })
              }
              className="bg-white rounded-lg md:rounded-3xl lg:rounded-2xl 2xl:rounded-3xl   sm:rounded-xl      
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        transition-all duration-500 cursor-pointer overflow-hidden group 
        flex flex-col"
            >
              {/* ================= IMAGE ================= */}
              {/* <div className="relative w-full h-[360px]  2xl:h-[730px]  bg-gray-100 overflow-hidden"> */}
              <div
                className="relative w-full 
     h-[180px]     
     sm:h-[160px]  
     md:h-[330px]   
     lg:h-[250px]   
  
     xl:h-[360px]
     2xl:h-[730px]  
     bg-gray-100 overflow-hidden"
              >
                <img
                  src={p.variant_image || p.image}
                  alt={p.title}
                  className="w-full h-full object-cover 
    group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.src =
                      "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg";
                  }}
                />
              </div>

              {/* ================= CONTENT ================= */}
              {/* <div className="p-5 flex flex-col flex-1">
                TITLE
                <h3 className="font-semibold text-gray-900 text-base line-clamp-2 min-h-[48px]">
                  {p.title}
                </h3>

                OPTIONAL PRICE (IF YOU WANT)
                <p className="text-[15px] text-green-700 font-bold mt-2">
            ₹{p.price}
          </p>

                BUTTON
                <button
                  className="mt-auto w-full bg-blue-600 text-white py-2.5 rounded-xl 
            text-sm font-medium shadow hover:bg-blue-700 active:scale-95 
            transition-all"
                >
                  View Details
                </button>
              </div> */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                {/* TITLE */}
                {/* <h3
                  className="
        font-semibold text-gray-900 
        text-sm sm:text-base       
        line-clamp-2 
        min-h-[36px] sm:min-h-[48px] 
      "
                >
                  {p.title}
                </h3> */}
                <h3
                  className="
    font-semibold text-gray-900 
    text-sm          
    sm:text-xs            
    md:text-sm           
    lg:text-base         
    2xl:text-[25px]          
    line-clamp-2 
    min-h-[28px] sm:min-h-[36px] md:min-h-[48px]
  "
                >
                  {p.title}
                </h3>

                {/* BUTTON */}
                <button
                  className="
    mt-auto w-full 
    bg-gray-600 text-white 
    py-2 text-xs sm:text-xs md:text-sm lg:text-sm 2xl:text-base    
    rounded-lg sm:rounded-xl 
    font-medium shadow 
    hover:bg-gray-600 active:scale-95 
    transition-all
  "
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title Section */}
      <CustomDiv
        className={classNames(
          "my-12 md:my-20 px-4 transform transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <CustomDiv className="max-w-4xl mx-auto text-center space-y-4">
          <Text className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-tight">
            BEST OF EXCLUSIVE PRODUCTS
          </Text>
          <CustomDiv className="flex justify-center">
            <CustomDiv className="h-1 w-24 bg-blue-500 rounded-full" />
          </CustomDiv>
          <Text className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Discover our handpicked collection of premium products
          </Text>
        </CustomDiv>
      </CustomDiv>

      {/* Product Grid */}
      <CustomDiv className="px-4 md:px-8 lg:px-16 xl:px-24 mb-20 grid-line ">
        <Grid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {data1?.slice(0, 24).map((product, idx) => (
            <CustomDiv
              key={product.id}
              className={classNames(
                "product-card glass-card glass-card-hover rounded-xl overflow-hidden cursor-pointer shimmer",
                isVisible ? "animate-fadeInUp" : "opacity-0"
              )}
              style={{
                animationDelay: `${idx * 40}ms`,
              }}
              onClick={() =>
                navigate(`/product/${product.product_id}/${product.id}`)
              }
            >
              <CustomDiv className="relative overflow-hidden aspect-square bg-gray-900">
                {/* <img
                  src={product.variant_image  }
                  alt={product.product_variant_name}
                  className="product-image w-full h-full object-cover"
                /> */}
                <img
                  src={product?.variant_image || ""}
                  alt={product.product_variant_name}
                  className="product-image w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko= ")
                  }
                />

                <CustomDiv className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* NEW Badge */}
                <CustomDiv className="absolute top-3 right-3 bg-blue-500 px-3 py-1 rounded-md">
                  <Text className="text-xs font-bold text-white uppercase tracking-wide">
                    New
                  </Text>
                </CustomDiv>
              </CustomDiv>

              <CustomDiv className="p-4 space-y-3">
                <Text className="text-sm md:text-base font-medium text-white truncate hover:text-blue-400 transition-colors duration-300">
                  {product.product_variant_name}
                </Text>

                <CustomDiv className="flex items-center justify-between">
                  <CustomDiv>
                    <Text className="text-xl md:text-2xl font-bold text-white">
                      ₹{product.price}
                    </Text>
                  </CustomDiv>

                  <CustomDiv className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center blue-glow-hover cursor-pointer">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </CustomDiv>
                </CustomDiv>
              </CustomDiv>
            </CustomDiv>
          ))}
        </Grid>
      </CustomDiv>

      {/*  filter  */}
      <div className="p-4">
        <Text className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold gradient-text tracking-tight text-center mt-6 mb-4">
          MOST VIEW PRODUCT
        </Text>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:px-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 ">
          {product.length > 0 ? (
            product.map((p) => (
              <div
                key={p.id}
                // className="border rounded-lg shadow hover:shadow-lg transition bg-white p-2"
                // style={{ width: "100%", maxWidth: "260px", margin: "auto" }}
                className="border rounded-lg shadow hover:shadow-lg transition bg-white p-2  w-full"
                style={{
                  maxWidth: "100%", // Let it grow naturally in grid
                }}
                onClick={() => navigate(`/product/${p.id}/${p.variant_id}`)}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[3/3] overflow-hidden rounded-lg">
                  <img
                    src={p?.variant_image || p?.image}
                    alt={p?.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Wishlist */}
                  {/* <button className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 text-sm hover:bg-black">
                    {p.whishlist_status === "Yes" ? "❤️" : "🤍"}
                  </button> */}

                  {/* Discount Badge */}
                  {Number(p.discount_percent) > 0 && (
                    <span className="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-br-lg">
                      {p.discount_percent}% OFF
                    </span>
                  )}
                </div>

                {/* Title */}
                {/* <h3 className="text-sm  font-semibold mt-2 truncate">
                  {p.title}
                </h3> */}
                <h3
                  className="
      font-semibold mt-2 truncate
      text-[12px] sm:text-[14px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl
    "
                >
                  {p.title}
                </h3>

                {/* Brand */}
                {/* {p.brand_name && (
                  <p className="text-xs text-gray-500">{p.brand_name}</p>
                )} */}

                {/* Price */}
                {/* <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-bold text-green-600">
                    ₹{p.price}
                  </span>
                  {Number(p.actual_price) > 0 && (
                    <span className="line-through text-gray-400 text-sm">
                      ₹{p.actual_price}
                    </span>
                  )}
                </div> */}
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="
        font-bold text-green-600
        text-[12px] sm:text-[14px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl
      "
                  >
                    ₹{p.price}
                  </span>
                  {Number(p.actual_price) > 0 && (
                    <span
                      className="
          line-through text-gray-400
          text-[10px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl
        "
                    >
                      ₹{p.actual_price}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                {/* <p
                  className={`text-xs mt-1 ${
                    p.stock_sataus === "In-stock"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {p.stock_sataus}
                </p> */}
                <p
                  className={`
      mt-1
      text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
      ${p.stock_sataus === "In-stock" ? "text-green-600" : "text-red-600"}
    `}
                >
                  {p.stock_sataus}
                </p>
                {/* Button */}
                {/* <button className="w-full mt-2 bg-blue-600 text-white py-1 rounded hover:bg-blue-700 text-sm">
                  Add to Cart
                </button> */}
                <button
                  className="
      w-full mt-2 py-1 rounded text-white
      bg-gray-600 
      text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
    "
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>

      {/* Offers Bar */}
      <CustomDiv className="glass-card py-8 my-16 overflow-hidden mx-4 md:mx-8 rounded-2xl ">
        <CustomDiv className="flex gap-6 animate-scroll whitespace-nowrap px-4">
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {[
                "10% OFF",
                "Only $49",
                "Under ₹150",
                "Save Money",
                "80% OFF",
                "Free Shipping",
                "$79 Cashback",
                "Extra 10% OFF",
                "On Sale",
              ].map((item, idx) => (
                <CustomDiv
                  key={`${setIdx}-${idx}`}
                  className="inline-flex items-center justify-center min-w-[140px] px-8 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <Text className="text-base md:text-lg font-bold text-white">
                    {item}
                  </Text>
                </CustomDiv>
              ))}
            </React.Fragment>
          ))}
        </CustomDiv>
      </CustomDiv>

      {/* Testimonials */}
      <CustomDiv className="my-20 px-4">
        <CustomDiv className="max-w-4xl mx-auto text-center space-y-3 mb-12">
          <Text className="text-3xl md:text-4xl font-bold text-white">
            What Our Customers Say
          </Text>
          <Text className="text-gray-400 text-sm md:text-base">
            Real experiences from real people
          </Text>
        </CustomDiv>

        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          transitionTime={800}
          className="testimonial-carousel"
        >
          {testimonials?.map((testimonial) => (
            <CustomDiv
              key={testimonial.id}
              className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 glass-card rounded-3xl p-8 md:p-12 lg:p-16 mx-4 md:mx-12 lg:mx-24 xl:mx-32"
            >
              <CustomDiv className="relative flex-shrink-0">
                <CustomDiv className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="relative w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                />
              </CustomDiv>

              <CustomDiv className="flex flex-col text-center lg:text-left flex-1 space-y-4">
                <Text className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {testimonial.name}
                </Text>
                <Text className="text-base md:text-lg text-gray-300 leading-relaxed italic">
                  "{testimonial.message}"
                </Text>
                <CustomDiv className="flex justify-center lg:justify-start gap-1 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-blue-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </CustomDiv>
              </CustomDiv>
            </CustomDiv>
          ))}
        </Carousel>
      </CustomDiv>

      {/* Instagram Gallery */}
      {/* <CustomDiv className="mb-20 px-4 ">
        <CustomDiv className="max-w-4xl mx-auto text-center space-y-3 mb-12">
          <Text className="text-3xl md:text-4xl font-bold text-white">
            Follow Us On Instagram
          </Text>
          <Text className="text-gray-400 text-sm md:text-base">
            Join our community and get inspired
          </Text>
        </CustomDiv>

        <CustomDiv className="flex overflow-x-auto gap-4 pb-4  px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
            <CustomDiv
              key={item}
              className="relative flex-shrink-0 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 glass-card rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => handleActiveHover(item)}
              onMouseLeave={handleCloseHover}
            >
              <img
                src={`https://images.unsplash.com/photo-1683721003111-070bcc053d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8`}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <CustomDiv className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className={classNames(
                    "text-white transition-all duration-700",
                    open === item
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 rotate-[-180deg] opacity-0"
                  )}
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </CustomDiv>
            </CustomDiv>
          ))}
        </CustomDiv>
      </CustomDiv> */}
      {/* <CustomDiv className="flex overflow-x-auto gap-4 pb-4 px-4">
        {[...Array(13)].map((_, index) => {
          const icons = [
            {
              name: "Facebook",
              icon: faFacebook,
              link: socialLinks?.fb_url,
              color: "#1877F2",
            },
            {
              name: "YouTube",
              icon: faYoutube,
              link: socialLinks?.youtube_url,
              color: "#FF0000",
            },
            {
              name: "WhatsApp",
              icon: faWhatsapp,
              link: socialLinks?.whatsapp_url,
              color: "#25D366",
            },
            {
              name: "Snapchat",
              icon: faSnapchat,
              link: socialLinks?.snapchat_url,
              color: "#FFFC00",
            },
            {
              name: "LinkedIn",
              icon: faLinkedin,
              link: socialLinks?.LinkedIn_url,
              color: "#0077B5",
            },
            {
              name: "TikTok",
              icon: faTiktok,
              link: socialLinks?.TikTok_url,
              color: "#000000",
            },
          ];

          const showIcon = index < 6; 
          const iconData = showIcon ? icons[index] : null;

          return (
            <CustomDiv
              key={index}
              className="relative flex-shrink-0 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 glass-card rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() =>
                iconData?.link && window.open(iconData.link, "_blank")
              }
            >
              <img
                src={`https://images.unsplash.com/photo-1683721003111-070bcc053d8b?fm=jpg&q=60&w=3000`}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <CustomDiv className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                {showIcon && iconData ? (
                  <FontAwesomeIcon
                    icon={iconData.icon}
                    className="text-4xl transition-transform duration-500 hover:scale-125"
                    style={{ color: iconData.color }}
                  />
                ) : null}
              </CustomDiv>
            </CustomDiv>
          );
        })}
      </CustomDiv> */}

      {/* <CustomDiv className="flex overflow-x-auto gap-4 pb-4 px-8 py-8">
        {[
          {
            name: "Facebook",
            icon: faFacebook,
            link: socialLinks?.fb_url,
            color: "#1877F2",
          },
          {
            name: "YouTube",
            icon: faYoutube,
            link: socialLinks?.youtube_url,
            color: "#FF0000",
          },
          {
            name: "WhatsApp",
            icon: faWhatsapp,
            link: socialLinks?.whatsapp_url,
            color: "#25D366",
          },
          {
            name: "Snapchat",
            icon: faSnapchat,
            link: socialLinks?.snapchat_url,
            color: "#FFFC00",
          },
          {
            name: "LinkedIn",
            icon: faLinkedin,
            link: socialLinks?.LinkedIn_url,
            color: "#0077B5",
          },

          {
            name: "Instagram",
            icon: faInstagram,
            link: socialLinks?.insta_url,
            color: "#E1306C",
          },
          {
            name: "Twitter",
            icon: faTwitter,
            link: socialLinks?.twitter_url,
            color: "#1DA1F2",
          },
          {
            name: "Telegram",
            icon: faTelegram,
            link: socialLinks?.Telegram_url,
            color: "#0088cc",
          },
        ].map((iconData, index) => (
          <CustomDiv
            key={index}
            className="group relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0
             cursor-pointer rounded-xl flex items-center justify-center shadow-lg transition-transform 
             duration-300 hover:scale-105"
            onClick={
              () => iconData?.link && window.open(iconData.link, "_blank")

              // window.open("https://www.facebook.com/", "_blank")
            }
            style={{ backgroundColor: "#ffffff" }}
          >
            <FontAwesomeIcon
              icon={iconData.icon}
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ color: iconData.color }}
            />

            <div
              className="absolute inset-0 rounded-xl pointer-events-none 
            group-hover:shadow-[0_0_20px_#ffffff] transition-shadow duration-300"
            ></div>
          </CustomDiv>
        ))}
      </CustomDiv> */}

      <CustomDiv className="flex overflow-x-auto gap-4 pb-4 px-8 py-8">
        {[
          {
            name: "Facebook",
            icon: faFacebook,
            link: socialLinks?.fb_url,
            color: "#1877F2",
          },
          {
            name: "YouTube",
            icon: faYoutube,
            link: socialLinks?.youtube_url,
            color: "#FF0000",
          },
          {
            name: "WhatsApp",
            icon: faWhatsapp,
            link: socialLinks?.whatsapp_url,
            color: "#25D366",
          },
          {
            name: "Snapchat",
            icon: faSnapchat,
            link: socialLinks?.snapchat_url,
            color: "#FFFC00",
          },
          {
            name: "LinkedIn",
            icon: faLinkedin,
            link: socialLinks?.LinkedIn_url,
            color: "#0077B5",
          },
          {
            name: "Instagram",
            icon: faInstagram,
            link: socialLinks?.insta_url,
            color: "#E1306C",
          },
          {
            name: "Twitter",
            icon: faTwitter,
            link: socialLinks?.twitter_url,
            color: "#1DA1F2",
          },
          {
            name: "Telegram",
            icon: faTelegram,
            link: socialLinks?.Telegram_url,
            color: "#0088cc",
          },
        ].map((iconData, index) => (
          <CustomDiv
            key={index}
            className="group relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex-shrink-0
            cursor-pointer rounded-xl flex items-center justify-center shadow-lg transition-transform 
            duration-300 hover:scale-105"
            onClick={() => {
              console.log("Clicked → ", iconData.name, iconData.link);

              if (iconData?.link) {
                window.open(iconData.link, "_blank");
              }
            }}
            style={{ backgroundColor: "#ffffff" }}
          >
            <FontAwesomeIcon
              icon={iconData.icon}
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ color: iconData.color }}
            />

            <div
              className="absolute inset-0 rounded-xl pointer-events-none 
              group-hover:shadow-[0_0_20px_#ffffff] transition-shadow duration-300"
            ></div>
          </CustomDiv>
        ))}
      </CustomDiv>
    </CustomDiv>
  );
};

export default LandingPage;
