// import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import { Avatar, CircularProgress } from "@mui/material";
// import classNames from "classnames";
// import React, { useEffect, useState } from "react";
// import { useMutation, useQuery, useQueryClient } from "react-query";
// import { useDispatch, useSelector } from "react-redux";
// import { Carousel } from "react-responsive-carousel";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Slider from "react-slick";
// import { toast } from "react-toastify";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { productListFn } from "../../Services/CategoryWiseProduct";


// const CategorySubCategoryProducts = () => {
//     const [isMobile, setIsMobile] = useState(false);
//     const [response, setResponse] = useState(false);

//     const { title } = useParams()

//     const navigate = useNavigate();
//     const { state } = useLocation();

//     const { data, refetch, isLoading } = useQuery(
//         ["category-wise-product", state],
//         () =>
//             productListFn({
//                 sub_category_id: state?.subcategory_id,
//                 main_category_id: state?.category_id,
//             })
//     );

//     useEffect(() => {
//         const handleResize = (e) => setIsMobile(e.matches);
//         const mediaQuery = window.matchMedia("(max-width: 768px)");
//         setIsMobile(mediaQuery.matches);
//         mediaQuery.addEventListener("change", handleResize);
//         return () => {
//             mediaQuery.removeEventListener("change", handleResize);
//         };
//     }, []);

//     const settings = {
//         autoPlay: true,
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: isMobile ? 2 : 6,
//         slidesToScroll: isMobile ? 2 : 4,
//     }

//     const settings1 = {
//         autoPlay: true,
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: isMobile ? 2 : 3,
//         slidesToScroll: isMobile ? 2 : 2,
//     }
//     const handleImageClick = (link) => {
//         if (link && link !== "/") {
//             window.open(link, "_blank");
//         }
//     };

//     const client = useQueryClient();
//     // const { mutate: addToWishlist } = useMutation(addToWishlistFn, {
//     //     onSuccess: (res) => {
//     //         setResponse(!response);
//     //         toast.success(res.data.status);
//     //         client.refetchQueries("wishlist");
//     //         refetch()
//     //     },
//     // });

//     const handleWishlist = (event, id) => {
//         event.stopPropagation();
//         // addToWishlist({ product_id: id, add_quantity: 1 });
//     };

//     // const wishlist = useSelector((state) => state.wishlist);
//     // const dispatch = useDispatch();

//     // const handleWishlistWithoutLogin = (event, product) => {
//     //     event.stopPropagation();
//     //     if (wishlist?.includes(product)) {
//     //         toast.warning("Already added to WishList");
//     //     } else {
//     //         dispatch(setWishList([...wishlist, product]));
//     //         toast.success("Added to Wishlist");
//     //     }
//     // };

//     // useEffect(() => {
//     //     wishlist?.length !== 0 &&
//     //         localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     // }, [wishlist]);

//     const handleOutOfStock = (event) => {
//         event.stopPropagation();
//         toast.warning("This Product is Out-Of-Stock");
//     };

//     // const { data: PageDesignData } = useQuery(["page-design"], () => PageDesignFn({ page_format_id: 6 }))

//     // console.log(PageDesignData, "sadfkjeifgrifgr")


//     if (isLoading) {
//         <div className=" flex h-screen items-center  justify-center"><CircularProgress color="secondary" /></div>
//     }
//     return (
//         <>
//             {/* Banner Slider */}
//             {data?.data?.data?.banners?.length > 0 && (
//                 <div className="lg:mb-4">
//                     <Carousel
//                         infiniteLoop
//                         autoPlay
//                         showThumbs={false}
//                         showStatus={false}
//                         className="product"
//                     >
//                         {data?.data?.data?.banners?.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="cursor-pointer"
//                                 onClick={() => handleImageClick(item?.link)}
//                             >
//                                 <img
//                                     src={item.image}
//                                     alt=""
//                                     className="h-40 lg:h-[50vh] object-cover rounded-lg"
//                                 />
//                             </div>
//                         ))}
//                     </Carousel>
//                 </div>
//             )}
//             <div className="lg:px-8 lg:pr-9 lg:py-3">
//                 <p className="text-xl font-semibold">{title}</p>
//                 <Slider infinite autoplay {...settings1}>
//                     {data?.data?.data?.product_variant_list?.map((item) => {
//                         return (
//                             <div
//                                 key={item.id}
//                                 className="p-1"
//                                 onClick={() =>
//                                     navigate('/all-products', {
//                                         state: { from: 'category', category_id: item.main_category, title: item.category },
//                                     })
//                                 }
//                             // onClick={(event) => {
//                             //     event.stopPropagation()
//                             //     navigate(`/products/${item.product_id}/${item.id}/${item.slug}`)
//                             // }}
//                             >
//                                 <div className=" flex items-center flex-col  justify-center  h-[50vh] p-4  bg-gray-100">

//                                     <img className="h-60 w-auto" src={item?.image || "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="} />

//                                     <p className="text-2xl  text-gray-700 font-semibold  line-clamp-3">{item?.title}</p>


//                                 </div>

//                             </div>
//                         )
//                     })}
//                 </Slider>
//             </div>
//             {/* Product Slider */}
//             <div className="lg:px-8 lg:pr-9 lg:py-3">
//                 <Slider infinite autoplay {...settings}>
//                     {data?.data?.data?.product_list?.map((item) => {
//                         return (
//                             <div
//                                 key={item.id}
//                                 className="p-1"
//                                 onClick={(event) => {
//                                     event.stopPropagation()
//                                     navigate(`/product/${Number(item.id)}/${Number(item.variant_id)}`)
//                                 }}
//                             >
//                                 <div className="flex-col items-center justify-center p-2 border rounded shadow cursor-pointer">
//                                     <div className="relative h-44 flex items-center justify-center">
//                                         <div className="h-full w-40">
//                                             {' '}
//                                             <img alt="" src={item.image} className=" h-full " />
//                                         </div>
//                                         {/* <span className="absolute top-0 right-px">
//                                             {localStorage.getItem('token') ? (
//                                                 item.whishlist_status !== 'yes' ? (
//                                                     <FavoriteBorder
//                                                         className="text-gray-500"
//                                                     // onClick={(event) => {
//                                                     //     event.stopPropagation()
//                                                     //     handleWishlist(event, item.id)
//                                                     // }}
//                                                     />
//                                                 ) : (
//                                                     <Favorite
//                                                         className="text-red-500"
//                                                     // onClick={(event) => {
//                                                     //     event.stopPropagation()
//                                                     //     toast.info('Already in wishlist')
//                                                     // }}
//                                                     />
//                                                 )
//                                             ) : wishlist?.filter((product) => product.id === item.id).length ===
//                                                 0 ? (
//                                                 <FavoriteBorder
//                                                     className="text-gray-500"
//                                                 // onClick={(event) => {
//                                                 //     event.stopPropagation()
//                                                 //     handleWishlistWithoutLogin(event, item)
//                                                 // }}
//                                                 />
//                                             ) : (
//                                                 <Favorite
//                                                     className="text-red-500"
//                                                 // onClick={(event) => {
//                                                 //     event.stopPropagation()
//                                                 //     toast.info('Already in wishlist')
//                                                 // }}
//                                                 />
//                                             )}
//                                         </span> */}
//                                     </div>
//                                     <p className="text-ellipsis lg:text-sm text-xs h-[54px] lg:min-h-[60px] font-bold overflow-hidden pt-1">
//                                         {item.title}
//                                     </p>
//                                     <p
//                                         className={classNames(
//                                             'lg:text-sm text-xs font-semibold capitalize  pt-1',
//                                             item.stock_sataus === 'In-stock' ? 'text-green-500' : 'text-red-500'
//                                         )}
//                                     >
//                                         {item.stock_sataus}
//                                     </p>
//                                     <p className="lg:text-sm !font-sans text-black text-opacity-80 font-bold text-xs pt-1">
//                                         ₹{item.actual_price}
//                                     </p>
//                                     <div className="flex items-center gap-1 pt-1 text-xs">
//                                         <s className="font-bold  text-zinc-500 !font-sans text-opacity-80">₹{item.price}</s>
//                                         <p className="p-px px-1 font-bold text-white bg-green-500 rounded-sm">
//                                             {item.discount_percent} %off
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </Slider>
//             </div>
//         </>
//     );
// };

// export default CategorySubCategoryProducts;


// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { CircularProgress } from "@mui/material";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import { useQuery, useMutation, useQueryClient } from "react-query";
// import { toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";
// import Slider from "react-slick";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import classNames from "classnames";
// import { productListFn } from "Services/Pages/CategoryWiseProduct";
// import { addToWishlistFn } from "Services/Products/AddToWishlist";
// import { PageDesignFn } from "Services/PageDesign";
// import { setWishList } from "../../Redux/Actions/Wishlist";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const CategorySubCategoryProducts = () => {
//     const [isMobile, setIsMobile] = useState(false);
//     const [response, setResponse] = useState(false);
//     const offsetsRef = useRef({ product_varient: 0, product: 0, banner: 0 });

//     const { title } = useParams();
//     const { state, pathname } = useLocation();
//     const navigate = useNavigate();
//     const client = useQueryClient();
//     const dispatch = useDispatch();
//     const wishlist = useSelector((state) => state.wishlist);


//     const { data, isLoading } = useQuery(["category-wise-product", state], () =>
//         productListFn({
//             sub_category_id: state?.subcategory_id,
//             main_category_id: state?.category_id,
//         })
//     );


//     const { data: PageDesignData } = useQuery(["page-design", state], () =>
//         PageDesignFn({ page_format_id: state?.page_id })
//     );

//     const pageFormat = PageDesignData?.data?.data?.page_format || [];


//     useMemo(() => {
//         offsetsRef.current = { product_varient: 0, product: 0, banner: 0 };
//     }, [state?.subcategory_id, state?.category_id, pageFormat, pathname, data]);


//     const settings = {
//         autoPlay: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: isMobile ? 2 : 6,
//         slidesToScroll: isMobile ? 2 : 4,
//     };

//     const settings1 = {
//         autoPlay: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: isMobile ? 2 : 3,
//         slidesToScroll: isMobile ? 2 : 2,
//     };

//     // 🔹 Responsive detection
//     useEffect(() => {
//         const mediaQuery = window.matchMedia("(max-width: 768px)");
//         setIsMobile(mediaQuery.matches);
//         const handleResize = (e) => setIsMobile(e.matches);
//         mediaQuery.addEventListener("change", handleResize);
//         return () => mediaQuery.removeEventListener("change", handleResize);
//     }, []);

//     // 🔹 Wishlist API
//     const { mutate: addToWishlist } = useMutation(addToWishlistFn, {
//         onSuccess: (res) => {
//             setResponse(!response);
//             toast.success(res.data.status);
//             client.refetchQueries("wishlist");
//         },
//     });

//     const handleWishlist = (e, id) => {
//         e.stopPropagation();
//         addToWishlist({ product_id: id, add_quantity: 1 });
//     };

//     const handleWishlistWithoutLogin = (e, product) => {
//         e.stopPropagation();
//         if (wishlist?.some((p) => p.id === product.id)) {
//             toast.warning("Already in wishlist");
//         } else {
//             dispatch(setWishList([...wishlist, product]));
//             toast.success("Added to Wishlist");
//         }
//     };

//     const handleImageClick = (link) => {
//         if (link && link !== "/") window.open(link, "_blank");
//     };

//     if (isLoading || isLoading) {
//         return (
//             <div className="flex h-screen items-center justify-center">
//                 <CircularProgress color="secondary" />
//             </div>
//         );
//     }

//     const productList = data?.data?.data?.product_list || [];
//     const productVariantList = data?.data?.data?.product_variant_list || [];
//     const bannerList = data?.data?.data?.banners || [];

//     // 🔹 Section Rendering Function
//     const renderSection = (section, index) => {
//         const { key, value } = section;
//         const count = Number(value);

//         let groupKey = null;
//         if (key.includes("product_varient")) groupKey = "product_varient";
//         else if (key.includes("product")) groupKey = "product";
//         else if (key.includes("banner")) groupKey = "banner";
//         if (!groupKey) return null;

//         const offset = offsetsRef.current[groupKey] || 0;
//         let itemsToShow = [];

//         if (groupKey === "banner")
//             itemsToShow = bannerList.slice(offset, offset + count);
//         else if (groupKey === "product_varient")
//             itemsToShow = productVariantList.slice(offset, offset + count);
//         else if (groupKey === "product")
//             itemsToShow = productList.slice(offset, offset + count);

//         offsetsRef.current[groupKey] = offset + itemsToShow.length;
//         if (!itemsToShow.length) return null;


//         if (groupKey === "banner") {
//             return (
//                 <div key={index} className="mb-6">
//                     <div className="grid grid-cols-1 gap-4">
//                         {itemsToShow.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="cursor-pointer"
//                                 onClick={() => handleImageClick(item?.link)}
//                             >
//                                 <img
//                                     src={item.image}
//                                     alt=""
//                                     className="h-40 lg:h-full object-cover rounded-lg"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             );
//         }


//         if (groupKey === "product_varient") {
//             return (
//                 <div key={index} className="lg:px-8 lg:py-3">
//                     <Slider {...settings}>
//                         {itemsToShow.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="p-1"
//                                 onClick={() =>
//                                     navigate(`/products/${item.product_id}/${item.id}/${item.slug}`)
//                                 }
//                             >
//                                 <div className="flex-col items-center justify-center p-2 border rounded shadow cursor-pointer">
//                                     <div className="relative h-44 flex items-center justify-center">
//                                         <img alt="" src={item.variant_image} className="h-full w-40" />
//                                         <span className="absolute top-0 right-px">
//                                             {localStorage.getItem("token") ? (
//                                                 item.whishlist_status !== "yes" ? (
//                                                     <FavoriteBorder
//                                                         className="text-gray-500"
//                                                         onClick={(e) => handleWishlist(e, item.id)}
//                                                     />
//                                                 ) : (
//                                                     <Favorite
//                                                         className="text-red-500"
//                                                         onClick={(e) => toast.info("Already in wishlist")}
//                                                     />
//                                                 )
//                                             ) : wishlist?.some((p) => p.id === item.id) ? (
//                                                 <Favorite
//                                                     className="text-red-500"
//                                                     onClick={(e) => toast.info("Already in wishlist")}
//                                                 />
//                                             ) : (
//                                                 <FavoriteBorder
//                                                     className="text-gray-500"
//                                                     onClick={(e) => handleWishlistWithoutLogin(e, item)}
//                                                 />
//                                             )}
//                                         </span>
//                                     </div>
//                                     <p className="text-ellipsis lg:text-sm text-xs h-[54px] font-bold overflow-hidden pt-1">
//                                         {item.product_variant_name}
//                                     </p>
//                                     <p
//                                         className={classNames(
//                                             "lg:text-sm text-xs font-semibold capitalize pt-1",
//                                             item.stock_sataus === "In-stock"
//                                                 ? "text-green-500"
//                                                 : "text-red-500"
//                                         )}
//                                     >
//                                         {item.stock_sataus}
//                                     </p>
//                                     <p className="lg:text-sm font-bold text-xs pt-1">
//                                         ₹{item.price}
//                                     </p>
//                                     <div className="flex items-center gap-1 pt-1 text-xs">
//                                         <s className="font-bold text-zinc-500">₹{item.mrp}</s>
//                                         <p className="p-px px-1 font-bold text-white bg-green-500 rounded-sm">
//                                             {item.discount_percent}% off
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         }


//         if (groupKey === "product") {
//             return (
//                 <div key={index} className="lg:px-8 lg:py-3">
//                     <Slider {...settings1}>
//                         {itemsToShow.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="p-1"
//                                 onClick={() =>
//                                     navigate("/products", {
//                                         state: {
//                                             from: "category",
//                                             category_id: item.main_category,
//                                             title: item.category,
//                                         },
//                                     })
//                                 }
//                             >
//                                 <div className="flex flex-col items-center justify-center bg-gray-100 p-3 h-[50vh] rounded-lg">
//                                     <img
//                                         src={
//                                             item.image ||
//                                             "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg"
//                                         }
//                                         className="h-60 object-contain"
//                                         alt=""
//                                     />
//                                     <p className="text-lg font-semibold text-gray-700 mt-2 line-clamp-2">
//                                         {item.title}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         }

//         return null;
//     };

//     return (
//         <div className="pb-8">
//             <p className="text-xl font-semibold px-8 py-3">{title}</p>
//             {pageFormat.map((section, idx) => renderSection(section, idx))}
//         </div>
//     );
// };

// export default CategorySubCategoryProducts;





import React, { useState, useEffect, useRef, useMemo } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
// import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";
import classNames from "classnames";
// import { productListFn } from "Services/Pages/CategoryWiseProduct";
// import { addToWishlistFn } from "Services/Products/AddToWishlist";
// import { PageDesignFn } from "Services/PageDesign";
// import { setWishList } from "../../Redux/Actions/Wishlist";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PageDesignFn, productListFn } from "../../Services/CategoryWiseProduct";



import { enqueueSnackbar } from "notistack";
import CategorySubCategoryProductsDefault from "./Defalut Page";
import axiosInstance from "../../Config/axios";
import { API_URLS } from "../../Config/API_URLS";

const CategorySubCategoryProducts = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [filterPayload, setFilterPayload] = useState(null);

    // const [response, setResponse] = useState(false);
    const offsetsRef = useRef({ product_varient: 0, product: 0, banner: 0 });




    const { title } = useParams();
    const { state, pathname } = useLocation()

    const navigate = useNavigate()


    console.log(state, "state ka maaa.,,m")

    const dispatch = useDispatch()

    // const { mutate: GetProduct, data, isLoading } = useMutation(getFilterProductListFn, {

    // })

    const { data: PageDesignData } = useQuery(["page-design", state], () =>
        PageDesignFn({ page_format_id: state?.page_id })
    );

    let pageFormat = [];
    let showDefaultPage = false;

    if (PageDesignData?.data?.data) {
        if (state?.page_id) {
            pageFormat = PageDesignData?.data?.data?.page_format || [];
        } else {
            const defaultPage = PageDesignData?.data?.data?.find(
                (i) => i?.page_type_name === "default"
            );
            if (defaultPage) pageFormat = defaultPage?.page_format || [];
            else showDefaultPage = true;
        }
    }


    // useEffect(() => {

    //     const filterPayload = {
    //         category_id: Number(state?.category_id) || "",
    //         sub_category_id: Number(state?.subcategory_id) || "",
    //         brand_id: Number(state?.brand_id) || "",
    //         min_price: "",
    //         max_price: "",
    //         rating: "",
    //         color_id: "",
    //         min_discount: "",
    //         max_discount: "",
    //         page: 1
    //     };



    //     GetProduct(filterPayload, {
    //         onSuccess: (res) => {
    //             setResponse(res);
    //         },
    //         onError: (err) => {
    //             console.error("Failed to fetch filtered products:", err);
    //         }
    //     });


    // }, [state])

    useEffect(() => {
        if (state) {
            const payload = {
                category_id: Number(state?.category_id) || "",
                sub_category_id: Number(state?.subcategory_id) || "",
                brand_id: Number(state?.brand_id) || "",
                min_price: "",
                max_price: "",
                rating: "",
                color_id: "",
                min_discount: "",
                max_discount: "",
                page: 1
            };
            setFilterPayload(payload);
        }
    }, [state]);



    const {
        data: response,
        isLoading,
        isError,
        refetch
    } = useQuery(
        ['filtered-products', filterPayload],
        () => productListFn(filterPayload),
        {
            enabled: !!filterPayload,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            keepPreviousData: true
        }
    );












    useMemo(() => {
        offsetsRef.current = { product_varient: 0, product: 0, banner: 0 };
    }, [state?.subcategory_id, state?.category_id, pageFormat, pathname, response]);


    const settings = {
        autoPlay: true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 2 : 6,
        slidesToScroll: isMobile ? 2 : 4,
    };

    const settings1 = {
        autoPlay: true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 2 : 3,
        slidesToScroll: isMobile ? 2 : 2,
    };

    // 🔹 Responsive detection
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);
        const handleResize = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    // 🔹 Wishlist API




    const banners = [
        {
            id: 1,
            image: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/power-adapters-view-accesories.jpg',
            alt: 'Banner 1',
        },
        {
            id: 2,
            image: 'https://img-prd-pim.poorvika.com/pageimg/Reno-14-Series-5G-1900-x-600.webp',
            alt: 'Banner 2',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/1200x400?text=Banner+3',
            alt: 'Banner 3',
        },
    ];





    // const settings = {
    //     dots: false,
    //     infinite: data?.data?.banner_data?.length > 0 && true,
    //     speed: 800,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     arrows: true,
    //     appendDots: dots => (
    //         <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
    //             <ul className="custom-dots flex justify-center">{dots}</ul>
    //         </div>
    //     ),
    //     customPaging: i => (
    //         <div className="w-3 h-3 bg-black rounded-full opacity-70 hover:opacity-100" />
    //     ),
    // };







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
                enqueueSnackbar(response.data.status, { variant: "success" });
            })
            .catch((error) => {
                enqueueSnackbar("Something went wrong..!", { variant: "error" });
            });
    };
    const cart = useSelector((cart) => cart.cart);

    const handleAddToCartWithoutLogin = (event, variant) => {
        event.stopPropagation();
        // if (cart?.map((item) => item?.item)?.includes(variant)) {
        //     enqueueSnackbar("Already added to Cart", { variant: "warning" });
        // } else {
        //     dispatch(setCart([...cart, { item: variant, quantity: 1 }]));
        //     enqueueSnackbar("Added to Cart", { variant: "success" });
        // }
    };
    useEffect(() => {
        cart?.length !== 0 && localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleImageClick = (link) => {
        if (link && link !== "/") window.open(link, "_blank");
    };

    if (isLoading || isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <CircularProgress color="secondary" />
            </div>
        );
    }


    if (showDefaultPage) {
        return <CategorySubCategoryProductsDefault />;
    }

    const productList = response?.data?.data?.product_variant_list || [];
    const productVariantList = response?.data?.data?.product_list || [];
    const bannerList = response?.data?.data?.banners || [];
    const CategoryproductList = response?.data?.data?.category_variant || [];
    const SubCategoryproductList = response?.data?.data?.subcategory_variant || [];
    const BrandproductList = response?.data?.data?.brand_variant || [];





    // console.log(bannerList, productList, productVariantList, "sgdjegfuiefg")

    // 🔹 Section Rendering Function
    const renderSection = (section, index) => {




        //             (section) => {
        //     console.log(section, "sections")
        // }

        const { key, value } = section;
        const count = Number(value);

        let groupKey = null;
        if (key.includes("product_varient")) groupKey = "product_varient";
        else if (key.includes("product")) groupKey = "product";
        else if (key.includes("banner")) groupKey = "banner";
        if (!groupKey) return null;

        const offset = offsetsRef.current[groupKey] || 0;
        let itemsToShow = [];

        if (groupKey === "banner")
            itemsToShow = bannerList.slice(offset, offset + count);
        else if (groupKey === "product_varient")
            itemsToShow = productVariantList.slice(offset, offset + count);
        else if (groupKey === "product")
            itemsToShow = productList.slice(offset, offset + count);

        offsetsRef.current[groupKey] = offset + itemsToShow.length;
        if (!itemsToShow.length) return null;


        if (groupKey === "banner") {
            return (
                <div key={index} className="mb-6">

                    <div className="grid grid-cols-1 gap-4">
                        {itemsToShow.map((item) => (
                            <div
                                key={item.id}
                                className="cursor-pointer"
                                onClick={() => handleImageClick(item?.link)}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-40 lg:h-full  mx-auto object-cover "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }


        if (groupKey === "product_varient") {
            return (
              <div
                key={index}
                className="lg:px-8 flex  flex-wrap  gap-5 lg:py-3"
              >
                {/* <Slider {...settings}> */}
                {itemsToShow.map((i) => (
                  <div
                    onClick={() =>
                      navigate(
                        `/product/${Number(i?.id)}/${Number(i.variant_id)}`
                      )
                    }
                    className="w-40 border border-gray-200 rounded-md shadow-sm relative p-2 flex-shrink-0"
                    key={index}
                  >
                    {/* Top Price Bar */}
                    <div className="bg-red-500 text-white text-sm font-bold flex justify-center items-center border-t border-red-500 relative">
                      ₹{i?.price}
                      <div className="absolute w-full bottom-[-1.1rem] text-[12px] font-medium bg-yellow-300 border-b border-yellow-300 text-black text-center">
                        MRP{" "}
                        <span className="line-through">₹{i?.actual_price}</span>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="relative p-2 pt-6">
                      <img
                        src={i?.image}
                        alt="Product"
                        className="rounded-md w-full h-28 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-100"
                        
                                
                        />
                      <div className="absolute bottom-0 right-0 bg-green-600 text-white text-xs px-2 py-3 rounded-full font-semibold">
                        {i?.discount_percent}% off
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-2">
                      <p className="text-sm font-medium line-clamp-1">
                        {i?.variant_name}
                      </p>

                      <div className="w-full flex items-center  justify-between">
                        {/* <p className="text-xs text-gray-500">{i?.quantity}</p> */}
                        <p
                          className={`text-xs  font-semibold ${
                            i?.stock_sataus === "Out Of Stock"
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {i?.stock_sataus}
                        </p>
                      </div>
                      {/* <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        const token = localStorage.getItem("shubhgatoken");

                                        if (i?.stock_sataus === "Out Of Stock") {

                                            enqueueSnackbar("Item is Out Of Stock", { variant: "error" });
                                        }

                                        else {
                                            if (token) {

                                                addToCart(event, i?.variant_id);
                                            } else {
                                                handleAddToCartWithoutLogin(event, i);
                                            }
                                        }

                                    }}
                                    className={`w-full mt-2 mb-2 border border-pink-600 text-pink-600 text-sm rounded py-1 hover:bg-pink-50  `}>
                                    Add
                                </button> */}
                    </div>
                  </div>
                ))}
                {/* </Slider> */}
              </div>
            );
        }


        if (groupKey === "product") {
            return (
                <div key={index} className="lg:px-8  grid  grid-cols-2  lg:grid-cols-3 lg:py-3">
                    {/* <Slider {...settings1}> */}
                    {itemsToShow.map((item) => (
                        <div
                            key={item.id}
                            className="p-1"
                            onClick={() =>
                                navigate("/all-products", {
                                    state: {
                                        from: "category",
                                        category_id: item.main_category,
                                        title: item.category,
                                    },
                                })
                            }
                        >
                            <div className="flex flex-col items-center justify-center bg-gray-100 p-3 h-[50vh] rounded-lg">
                                <img
                                    src={
                                        item.image ||
                                        "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg"
                                    }
                                    className="h-60 object-contain"
                                    alt=""
                                />
                                <p className="text-lg font-semibold text-gray-700 mt-2 line-clamp-2">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* </Slider> */}
                </div>
            );
        }

        return null;
    };

    const ProductVarients = (itemsToShow, index) => {

        return (

            <>

                {/* sub_category_id: state?.subcategory_id,
                    main_category_id: state?.category_id, */}
                <div className="flex items-center justify-between px-8">
                    <p className="text-xl font-semibold py-3">{itemsToShow?.title}</p>
                    <button
                        onClick={() => {
                            navigate('/all-products', {
                                state: {
                                    from: itemsToShow?.subcategory_id ? 'sub_category' : itemsToShow?.category_id ? 'category' : "brand",
                                    category_id: itemsToShow?.category_id,
                                    sub_category_id: itemsToShow?.subcategory_id,
                                    brand_id: itemsToShow?.brand_id,
                                    title: itemsToShow?.title,
                                },
                            });
                        }}
                        className="hover:underline text-orange-500 font-semibold
        hover:bg-orange-100 hover:text-orange-700 border border-orange-500 rounded-md px-4 py-2 transition-all duration-300 transform hover:scale-105"
                    >
                        See All
                    </button>
                </div>




                <div key={index} className="lg:px-8 flex flex-wrap  gap-5 lg:py-3">
                    {/* <Slider {...settings}> */}
                    {itemsToShow?.variants?.map((i) => (
                        <div onClick={() =>
                            navigate(
                                `/product/${Number(i?.product)}/${Number(i.id)}`
                            )
                        } className="w-40 border border-gray-200 rounded-md shadow-sm relative p-2 flex-shrink-0" key={index}>
                            {/* Top Price Bar */}
                            <div className="bg-red-500 text-white text-sm font-bold flex justify-center items-center border-t border-red-500 relative">
                                ₹{i?.price}
                                <div className="absolute w-full bottom-[-1.1rem] text-[12px] font-medium bg-yellow-300 border-b border-yellow-300 text-black text-center">
                                    MRP <span className="line-through">₹{i?.mrp}</span>
                                </div>
                            </div>

                            {/* Product Image */}
                            <div className="relative p-2 pt-6">
                                <img
                                    src={i?.product_image}
                                    alt="Product"
                                    className="rounded-md w-full h-28 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-100"
                                    
                                    

                                    />
                                <div className="absolute bottom-0 right-0 bg-green-600 text-white text-xs px-2 py-3 rounded-full font-semibold">
                                    {i?.discount_percent}% off
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="px-2">
                                <p className="text-sm font-medium line-clamp-1">{i?.product_variant_name}</p>

                                <div className="w-full flex items-center  justify-between">
                                    {/* <p className="text-xs text-gray-500">{i?.quantity}</p> */}
                                    <p className={`text-xs  font-semibold ${i?.stock_sataus === "Out Of Stock" ? "text-red-500" : "text-green-500"}`}>{i?.stock_sataus}</p>
                                </div>
                                {/* <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        const token = localStorage.getItem("shubhgatoken");

                                        if (i?.stock_sataus === "Out Of Stock") {

                                            enqueueSnackbar("Item is Out Of Stock", { variant: "error" });
                                        }

                                        else {
                                            if (token) {

                                                addToCart(event, i?.variant_id);
                                            } else {
                                                handleAddToCartWithoutLogin(event, i);
                                            }
                                        }

                                    }}
                                    className={`w-full mt-2 mb-2 border border-pink-600 text-pink-600 text-sm rounded py-1 hover:bg-pink-50  `}>
                                    Add
                                </button> */}
                            </div>
                        </div>))}
                    {/* </Slider> */}
                </div>
            </>
        )
    }

    return (
        <div className="pb-8">
            <p className="text-xl font-semibold px-8 py-3">{title}</p>
            {pageFormat.map((section, idx) => renderSection(section, idx))}
            {CategoryproductList?.map((i, index) => i?.variants?.length > 0 && ProductVarients(i, index))}
            {SubCategoryproductList?.map((i, index) => i?.variants?.length > 0 && ProductVarients(i, index))}
            {BrandproductList?.map((i, index) => i?.variants?.length > 0 && ProductVarients(i, index))}

        </div>
    );
};

export default CategorySubCategoryProducts;

