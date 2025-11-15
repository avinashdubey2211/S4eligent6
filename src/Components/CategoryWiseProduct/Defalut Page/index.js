import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Avatar, CircularProgress } from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { toast } from "react-toastify";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productListFn } from "../../../Services/CategoryWiseProduct";



const CategorySubCategoryProductsDefault = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [response, setResponse] = useState(false);

    const { title } = useParams()

    const navigate = useNavigate();
    const { state } = useLocation();

    const { data, refetch, isLoading } = useQuery(
        ["category-wise-product", state],
        () =>
            productListFn({
                sub_category_id: state?.subcategory_id,
                main_category_id: state?.category_id,
            })
    );

    useEffect(() => {
        const handleResize = (e) => setIsMobile(e.matches);
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    const settings = {
        autoPlay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 6,
        slidesToScroll: isMobile ? 2 : 4,
    }

    const settings1 = {
        autoPlay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 3,
        slidesToScroll: isMobile ? 2 : 2,
    }
    const handleImageClick = (link) => {
        if (link && link !== "/") {
            window.open(link, "_blank");
        }
    };

    const client = useQueryClient();
    // const { mutate: addToWishlist } = useMutation(addToWishlistFn, {
    //     onSuccess: (res) => {
    //         setResponse(!response);
    //         toast.success(res.data.status);
    //         client.refetchQueries("wishlist");
    //         refetch()
    //     },
    // });

    const handleWishlist = (event, id) => {
        event.stopPropagation();
        // addToWishlist({ product_id: id, add_quantity: 1 });
    };

    // const wishlist = useSelector((state) => state.wishlist);
    // const dispatch = useDispatch();

    // const handleWishlistWithoutLogin = (event, product) => {
    //     event.stopPropagation();
    //     if (wishlist?.includes(product)) {
    //         toast.warning("Already added to WishList");
    //     } else {
    //         dispatch(setWishList([...wishlist, product]));
    //         toast.success("Added to Wishlist");
    //     }
    // };

    // useEffect(() => {
    //     wishlist?.length !== 0 &&
    //         localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // }, [wishlist]);

    const handleOutOfStock = (event) => {
        event.stopPropagation();
        toast.warning("This Product is Out-Of-Stock");
    };

    // const { data: PageDesignData } = useQuery(["page-design"], () => PageDesignFn({ page_format_id: 6 }))

    // console.log(PageDesignData, "sadfkjeifgrifgr")


    if (isLoading) {
        <div className=" flex h-screen items-center  justify-center"><CircularProgress color="secondary" /></div>
    }
    return (
        <>
            {/* Banner Slider */}
            {data?.data?.data?.banners?.length > 0 && (
                <div className="lg:mb-4">
                    <Carousel
                        infiniteLoop
                        autoPlay
                        showThumbs={false}
                        showStatus={false}
                        className="product"
                    >
                        {data?.data?.data?.banners?.map((item) => (
                            <div
                                key={item.id}
                                className="cursor-pointer"
                                onClick={() => handleImageClick(item?.link)}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-40 lg:h-[50vh] object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
            <div className="lg:px-8 lg:pr-9 lg:py-3">
                <p className="text-xl font-semibold">{title}</p>
                <Slider infinite autoplay {...settings1}>
                    {data?.data?.data?.product_variant_list?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="p-1"
                                onClick={() =>
                                    navigate('/all-products', {
                                        state: { from: 'category', category_id: item.main_category, title: item.category },
                                    })
                                }
                            // onClick={(event) => {
                            //     event.stopPropagation()
                            //     navigate(`/products/${item.product_id}/${item.id}/${item.slug}`)
                            // }}
                            >
                                <div className=" flex items-center flex-col  justify-center  h-[50vh] p-4  bg-gray-100">

                                    <img className="h-60 w-auto" src={item?.image || "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="} />

                                    <p className="text-2xl  text-gray-700 font-semibold  line-clamp-3">{item?.title}</p>


                                </div>

                            </div>
                        )
                    })}
                </Slider>
            </div>
            {/* Product Slider */}
            <div className="lg:px-8 lg:pr-9 lg:py-3">
                <Slider infinite autoplay {...settings}>
                    {data?.data?.data?.product_list?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="p-1"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    navigate(`/product/${Number(item.id)}/${Number(item.variant_id)}`)
                                }}
                            >
                                <div className="flex-col items-center justify-center p-2 border rounded shadow cursor-pointer">
                                    <div className="relative h-44 flex items-center justify-center">
                                        <div className="h-full w-40">
                                            {' '}
                                            <img alt="" src={item.image} className=" h-full " />
                                        </div>
                                        {/* <span className="absolute top-0 right-px">
                                            {localStorage.getItem('token') ? (
                                                item.whishlist_status !== 'yes' ? (
                                                    <FavoriteBorder
                                                        className="text-gray-500"
                                                    // onClick={(event) => {
                                                    //     event.stopPropagation()
                                                    //     handleWishlist(event, item.id)
                                                    // }}
                                                    />
                                                ) : (
                                                    <Favorite
                                                        className="text-red-500"
                                                    // onClick={(event) => {
                                                    //     event.stopPropagation()
                                                    //     toast.info('Already in wishlist')
                                                    // }}
                                                    />
                                                )
                                            ) : wishlist?.filter((product) => product.id === item.id).length ===
                                                0 ? (
                                                <FavoriteBorder
                                                    className="text-gray-500"
                                                // onClick={(event) => {
                                                //     event.stopPropagation()
                                                //     handleWishlistWithoutLogin(event, item)
                                                // }}
                                                />
                                            ) : (
                                                <Favorite
                                                    className="text-red-500"
                                                // onClick={(event) => {
                                                //     event.stopPropagation()
                                                //     toast.info('Already in wishlist')
                                                // }}
                                                />
                                            )}
                                        </span> */}
                                    </div>
                                    <p className="text-ellipsis lg:text-sm text-xs h-[54px] lg:min-h-[60px] font-bold overflow-hidden pt-1">
                                        {item.title}
                                    </p>
                                    <p
                                        className={classNames(
                                            'lg:text-sm text-xs font-semibold capitalize  pt-1',
                                            item.stock_sataus === 'In-stock' ? 'text-green-500' : 'text-red-500'
                                        )}
                                    >
                                        {item.stock_sataus}
                                    </p>
                                    <p className="lg:text-sm !font-sans text-black text-opacity-80 font-bold text-xs pt-1">
                                        ₹{item.actual_price}
                                    </p>
                                    <div className="flex items-center gap-1 pt-1 text-xs">
                                        <s className="font-bold  text-zinc-500 !font-sans text-opacity-80">₹{item.price}</s>
                                        <p className="p-px px-1 font-bold text-white bg-green-500 rounded-sm">
                                            {item.discount_percent} %off
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    );
};

export default CategorySubCategoryProductsDefault;