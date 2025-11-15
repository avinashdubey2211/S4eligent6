// import React, { useEffect, useRef, useState } from "react";
// import CustomDiv from "../CustomDiv";
// import logo from "../../Assets/zzz.jpeg";
// import { useNavigate } from "react-router-dom";
// import Text from "../Text";
// import { useMutation, useQuery } from "react-query";
// import { myWishList } from "../../Services/WishList";

// import {
//   Autocomplete,
//   Box,
//   Button,
//   Collapse,
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   Skeleton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import {
//   ArrowBack,
//   ExpandLess,
//   ExpandMore,
//   KeyboardArrowDownOutlined,
//   MenuTwoTone,
//   Search,
// } from "@mui/icons-material";
// import { categoryListFn } from "../../Services/CategoryList";
// import { useDispatch } from "react-redux";
// import { setThemeMode } from "../../Redux/Actions/ThemeMode";
// import { productsFn } from "../../Services/Products";
// import classNames from "classnames";
// import axiosInstance from "../../Config/axios";
// import { API_URLS } from "../../Config/API_URLS";
// import { useStore } from "../../Hooks";

// const Headers = () => {
//   const [open, setOpen] = useState(false);
//   const [collapse, setCollapse] = useState([]);

//   const [spices, setSpices] = React.useState([]);
//   const [search, setSearch] = useState(false);
//   const [value, setValue] = useState("");
//   const [header, setHeader] = useState("");
//   const [serchProduct, setSerchProduct] = useState([]);
//   const [serch, setSerch] = useState("");
//   const listEndRef = useRef(null);
//   const [activeItem, setActiveItem] = useState(0);
//   const [menu, setMenu] = useState(false);
//   const [not, setNot] = useState(true)

//   const [productId, setProductId] = useState({});
//   // const {mutate: allProducts} = useMutation(productsFn, {
//   //   onSuccess: (response) => {
//   //     setSpices(response.data.data.product_list);
//   //   },
//   // });

//   const { data: store } = useStore()

//   const StoreData = store?.data?.data
//   const CustomizationHeader = () => {
//     axiosInstance
//       .get(API_URLS.HeaderCustomization)
//       .then((response) => {
//         setHeader(response?.data?.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     CustomizationHeader();
//   }, []);



//   const setFavicon = (url) => {
//     let link =
//       document.querySelector("link[rel*='icon']") ||
//       document.createElement("link");
//     link.type = "image/x-icon";
//     link.rel = "shortcut icon";
//     link.href = url;
//     document.getElementsByTagName("head")[0].appendChild(link);
//   };

//   useEffect(() => {

//     if (StoreData?.store_favicon) {

//       setFavicon(StoreData?.store_favicon)
//     }
//     document.title = StoreData?.store_name || "Title";


//   }, [StoreData])

//   const SerchData = () => {
//     const reqbody = new FormData();
//     reqbody.append("search", value);
//     axiosInstance
//       .post(API_URLS.Serch, reqbody)
//       .then((response) => {
//         setSerchProduct(response?.data?.data?.product_list);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   React.useEffect(
//     () => {
//       serch && SerchData();
//     },
//     // eslint-disable-next-line
//     [serch]
//   );

//   const products = spices?.map((product) => {
//     return {
//       image: product.image,
//       variant: product.variant_name,
//       sub_category: product.sub_category,
//       id: product.id,
//       vid: product?.variant_id,
//     };
//   });

//   const handleClick = (id) => {
//     setCollapse((collapse) => [...collapse, id]);
//   };
//   const handleClose = (id) => {
//     setCollapse(collapse?.filter((item) => item !== id));
//   };
//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   const { data } = useQuery(["wishList"], () => myWishList(), {
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//   });

//   const { data: mainCategoryList } = useQuery(
//     ["mainCategoryList"],
//     () => categoryListFn(),
//     {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//     }
//   );

//   const handleChange = (event) => {
//     navigate(`/product/${event.currentTarget.lastChild.innerHTML}`);
//     sessionStorage.clear();
//     setOpen(false);
//   };

//   const handleLogin = () => {
//     dispatch(setThemeMode(true));
//   };
//   const handleKeyDown = (event, option) => {
//     const { key } = event;

//     if (key === "Enter") {
//       navigate(`/product/${productId?.id}/${productId?.vid}`);

//       console.log("productID", option);
//     }
//     // navigate(`/product/${option?.id}/${option?.vid}`);
//   };
//   const handleListItemKeyDown = (event, listId) => {
//     const { key } = event;
//     document
//       .getElementById(serchProduct?.[activeItem]?.variant_id)
//       ?.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     if (key === "ArrowDown") {
//       activeItem !== serchProduct?.length - 1 &&
//         setActiveItem((prevIndex) => prevIndex + 1);
//     } else if (key === "ArrowUp") {
//       activeItem !== 0 && setActiveItem((prevIndex) => prevIndex - 1);
//     } else if (key === "Enter") {
//       serchProduct?.[activeItem]?.id &&
//         serchProduct?.[activeItem]?.variant_id &&
//         navigate(
//           `/product/${serchProduct?.[activeItem]?.id}/${serchProduct?.[activeItem]?.variant_id}`
//         );

//       setSerch("");
//     }
//   };
//   const handleLooseFocus = () => {
//     setTimeout(() => {
//       setMenu(false);
//     }, 500);
//     return clearTimeout;
//   };
//   return (
//     <CustomDiv className="lg:h-16 h-[25px] sticky z-50 shadow">
//       <CustomDiv className="flex flex-col justify-between items-center py-1 fixed z-50 shadow bg-white bg-opacity-75 text-black backdrop-blur w-full px-[4%] lg:px-[8%]">
//         <CustomDiv className="flex items-center justify-between w-full">
//           <span className="flex items-center gap-5">
//             <img
//               src={StoreData?.store_logo || "https://assets-v2.lottiefiles.com/a/91cc0ece-1150-11ee-b7cb-d3afb5c0c001/QNF78Uk4YE.gif"}
//               alt=""
//               className="relative h-16 w-full   cursor-pointer"
//               onClick={() => navigate("/")}
//             />
//           </span>

//           <span className="bg-white !rounded-full py-2 outline-none shadow dropdown border-stone-50 lg:flex justify-between  items-center">
//             <input
//               className="!w-[70%] outline-none bg-transparent px-4"
//               type="text"
//               value={serch}
//               placeholder="Search for Products"
//               onChange={(e) => {
//                 setSerch(e.target.value);
//                 setSerchProduct([]);
//               }}
//             />
//             <span className="pr-3">
//               <Search />
//             </span>

//             {serch && (
//               <List className="!absolute  !h-fit top-0 !shadow-md border z-50 rounded !p-0">
//                 <span
//                   onKeyDown={(event) => handleListItemKeyDown(event, 1)}
//                   className={classNames(
//                     "bg-white lg:flex outline-none hidden shadow dropdown border-stone-50 px-3 py-2 justify-between items-center"
//                   )}
//                 >
//                   <input
//                     className={classNames(
//                       "!w-[388px] outline-none bg-transparent px-3"
//                     )}
//                     autoFocus
//                     value={serch}
//                     type="text"
//                     placeholder="Search for Products, Brands, Offers"
//                     onBlur={() => {
//                       setTimeout(() => {
//                         setSerch("");
//                         setSerchProduct([]);
//                       }, 500);
//                     }}
//                     onChange={(e) => {
//                       setSerch(e.target.value);
//                       setSerchProduct([]);
//                     }}
//                   />
//                   <Search />
//                 </span>

//                 <div className="overflow-y-auto pt-px bg-white !max-h-[390px]">
//                   {not ? (
//                     serchProduct?.map((item, index) => {
//                       return (
//                         <>
//                           <ListItemButton
//                             ref={listEndRef}
//                             id={item.variant_id}
//                             onClick={() => {
//                               navigate(
//                                 `/product/${item.id}/${item.variant_id}`
//                               ); setNot(false)
//                             }}
//                             className={classNames(
//                               activeItem === index &&
//                               "bg-gradient-to-t from-gray-50 !text-white to-gray-500"
//                             )}
//                             selected={activeItem === index}
//                           >
//                             <ListItemIcon>
//                               <img
//                                 src={item.variant_image || item.image}
//                                 alt=""
//                                 className="h-12 rounded"
//                               />
//                             </ListItemIcon>
//                             <span className="flex flex-col">
//                               <span>{item.variant_name}</span>
//                               <span>{item.brand_name}</span>
//                             </span>
//                           </ListItemButton>
//                         </>
//                       );
//                     })
//                   ) : (
//                     <>
//                       {/* {[1, 2, 3, 4, 5, 6].map((item) => {
//                         return (
//                           <ListItemButton key={item} className="flex gap-5 p-2">
//                             <Skeleton className="!scale-100 !h-12 !w-12" />
//                             <span className="flex flex-col w-full">
//                               <Skeleton className="w-4/5" />
//                               <Skeleton className="w-1/2" />
//                             </span>
//                           </ListItemButton>
//                         );
//                       })} */}
//                     </>
//                   )}
//                 </div>
//               </List>
//             )}
//           </span>


//           <span className="flex items-center gap-4 lg:gap-7">

//             <IconButton onClick={() => setOpen(true)}>
//               <MenuTwoTone className="!block lg:!hidden !text-black" />
//             </IconButton>
//             <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
//               <CustomDiv>
//                 <List className="!pr-0">
//                   <span className="!p-4 flex justify-center">
//                     <Autocomplete
//                       options={products}
//                       autoHighlight
//                       size="small"
//                       className="Product"
//                       freeSolo
//                       sx={{ width: 230 }}
//                       onChange={handleChange}
//                       disableClearable
//                       getOptionLabel={(option) => option.variant}
//                       renderOption={(props, option) => (
//                         <Box
//                           component="li"
//                           sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
//                           {...props}
//                         >
//                           <img
//                             loading="lazy"
//                             width="50"
//                             src={option.image}
//                             srcSet={option.image}
//                             alt=""
//                           />
//                           <span className="flex flex-col">
//                             <span className="text-lg">{option.variant}</span>
//                             <span className="text-sm">
//                               {option.sub_category}
//                             </span>
//                           </span>

//                           <span id="variant_id" hidden>
//                             {option.id}
//                           </span>
//                         </Box>
//                       )}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           placeholder="Search Products"
//                           inputProps={{
//                             ...params.inputProps,
//                             autoComplete: "new-password",
//                           }}
//                         />
//                       )}
//                     />
//                   </span>

//                   <ListItemButton
//                     onClick={() =>
//                       navigate("/all-products", {
//                         state: { from: "allproduct" },
//                       })
//                     }
//                     className="!flex !justify-between !w-full"
//                   >
//                     All Products
//                   </ListItemButton>
//                   {mainCategoryList?.data?.data?.main_category_list?.map(
//                     (product) => {
//                       return (
//                         <>
//                           <ListItemButton
//                             onClick={() => {
//                               return (
//                                 <>
//                                   {collapse.indexOf(product.id) === -1
//                                     ? handleClick(product.id)
//                                     : handleClose(product.id)}
//                                 </>
//                               );
//                             }}
//                             className="!flex !justify-between !w-full"
//                           >
//                             <span>{product.category}</span>

//                             {collapse ? <ExpandMore /> : <ExpandLess />}
//                           </ListItemButton>
//                           <Collapse
//                             in={collapse.indexOf(product.id) !== -1}
//                             className=""
//                           >
//                             <List>
//                               {product?.sub_category_list?.map(
//                                 (subCategory) => {
//                                   return (
//                                     <ListItemButton
//                                       className="!flex !pl-8 !justify-between !w-full"
//                                       // onClick={() =>
//                                       //   navigate(`/all-products`, {
//                                       //     state: {
//                                       //       from: "subCategory",
//                                       //       subCategory: subCategory.id,
//                                       //     },
//                                       //   })
//                                       // }

//                                       onClick={() =>
//                                         navigate(`/${subCategory.subcategory}/page`, {
//                                           state: {
//                                             from: 'category',
//                                             title: subCategory.category,
//                                             subcategory_id: subCategory.id,
//                                             page_id: subCategory?.subcategory_pagedesignsetup
//                                           },
//                                         })
//                                       }
//                                     >
//                                       {subCategory.subcategory}
//                                     </ListItemButton>
//                                   );
//                                 }
//                               )}
//                             </List>
//                           </Collapse>
//                         </>
//                       );
//                     }
//                   )}
//                 </List>
//               </CustomDiv>
//               <div className="flex fixed w-full z-50 bottom-0 border-t-2 p-2 bg-white">
//                 <Button
//                   variant="contained"
//                   className="!px-10"
//                   onClick={() => setOpen(false)}
//                 >
//                   <ArrowBack />
//                 </Button>
//               </div>
//             </Drawer>
//           </span>
//         </CustomDiv>
//       </CustomDiv>
//       <CustomDiv className="hidden lg:flex text-black justify-center gap-10 items-end lg:pt-[110px] h-[70px]">
//         <Typography
//           onClick={() =>
//             navigate("/all-products", {
//               state: { from: "allproduct" },
//             })
//           }
//           className="whitespace-nowrap cursor-pointer hover:bg-gray-200 font-semibold py-2 px-4 rounded inline-flex items-center"
//         >
//           <Text>All Products</Text>
//         </Typography>
//         {mainCategoryList?.data?.data?.main_category_list
//           ?.slice(0, 6)
//           ?.map((product) => {
//             return (
//               <div className="group inline-block relative">
//                 <Typography className="whitespace-nowrap cursor-pointer hover:bg-gray-200 font-semibold py-2 px-4 rounded inline-flex items-center">
//                   <Text>{product.category}</Text> <KeyboardArrowDownOutlined />
//                 </Typography>
//                 <ul className="absolute hidden w-96 p-2 z-50 shadow bg-white bg-opacity-80 backdrop-blur text-black border-t-4 border-[#306BDE] rounded-sm group-hover:grid group-hover:grid-cols-2">
//                   {product?.sub_category_list?.map((subCategory) => {
//                     return (
//                       <li
//                         key={subCategory.id}
//                         className="p-2 flex flex-col gap-2 cursor-pointer hover:underline"


//                         onClick={() =>
//                           navigate(`/${subCategory.subcategory}/page`, {
//                             state: {
//                               from: 'category',
//                               title: subCategory.category,
//                               subcategory_id: subCategory.id,
//                               page_id: subCategory?.subcategory_pagedesignsetup
//                             },
//                           })
//                         }
//                       >
//                         {subCategory.subcategory}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             );
//           })}
//       </CustomDiv>
//     </CustomDiv>
//   );
// };

// export default Headers;

import React, { useEffect, useRef, useState } from "react";
import CustomDiv from "../CustomDiv";
import logo from "../../Assets/zzz.jpeg";
import { useNavigate } from "react-router-dom";
import Text from "../Text";
import { useMutation, useQuery } from "react-query";
import { myWishList } from "../../Services/WishList";
import {
  Autocomplete,
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  ExpandLess,
  ExpandMore,
  KeyboardArrowDownOutlined,
  MenuTwoTone,
  Search,
} from "@mui/icons-material";
import { categoryListFn } from "../../Services/CategoryList";
import { useDispatch } from "react-redux";
import { setThemeMode } from "../../Redux/Actions/ThemeMode";
import { productsFn } from "../../Services/Products";
import classNames from "classnames";
import axiosInstance from "../../Config/axios";
import { API_URLS } from "../../Config/API_URLS";
import { useStore } from "../../Hooks";

const Headers = () => {
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState([]);
  const [spices, setSpices] = React.useState([]);
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");
  const [header, setHeader] = useState("");
  const [serchProduct, setSerchProduct] = useState([]);
  const [serch, setSerch] = useState("");
  const listEndRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);
  const [menu, setMenu] = useState(false);
  const [not, setNot] = useState(true);
  const [productId, setProductId] = useState({});

  const { data: store } = useStore();
  const StoreData = store?.data?.data;

  const CustomizationHeader = () => {
    axiosInstance
      .get(API_URLS.HeaderCustomization)
      .then((response) => {
        setHeader(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    CustomizationHeader();
  }, []);

  const setFavicon = (url) => {
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  };

  useEffect(() => {
    if (StoreData?.store_favicon) {
      setFavicon(StoreData?.store_favicon);
    }
    document.title = StoreData?.store_name || "Title";
  }, [StoreData]);

  const SerchData = () => {
    const reqbody = new FormData();
    reqbody.append("search", serch);
    axiosInstance
      .post(API_URLS.Serch, reqbody)
      .then((response) => {
        setSerchProduct(response?.data?.data?.product_list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(
    () => {
      serch && SerchData();
    },
    // eslint-disable-next-line
    [serch]
  );

  const products = spices?.map((product) => {
    return {
      image: product.image,
      variant: product.variant_name,
      sub_category: product.sub_category,
      id: product.id,
      vid: product?.variant_id,
    };
  });

  const handleClick = (id) => {
    setCollapse((collapse) => [...collapse, id]);
  };

  const handleClose = (id) => {
    setCollapse(collapse?.filter((item) => item !== id));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useQuery(["wishList"], () => myWishList(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { data: mainCategoryList } = useQuery(
    ["mainCategoryList"],
    () => categoryListFn(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const handleChange = (event) => {
    navigate(`/product/${event.currentTarget.lastChild.innerHTML}`);
    sessionStorage.clear();
    setOpen(false);
  };

  const handleLogin = () => {
    dispatch(setThemeMode(true));
  };

  const handleKeyDown = (event, option) => {
    const { key } = event;
    if (key === "Enter") {
      navigate(`/product/${productId?.id}/${productId?.vid}`);
    }
  };

  const handleListItemKeyDown = (event, listId) => {
    const { key } = event;
    document
      .getElementById(serchProduct?.[activeItem]?.variant_id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    if (key === "ArrowDown") {
      activeItem !== serchProduct?.length - 1 &&
        setActiveItem((prevIndex) => prevIndex + 1);
    } else if (key === "ArrowUp") {
      activeItem !== 0 && setActiveItem((prevIndex) => prevIndex - 1);
    } else if (key === "Enter") {
      serchProduct?.[activeItem]?.id &&
        serchProduct?.[activeItem]?.variant_id &&
        navigate(
          `/product/${serchProduct?.[activeItem]?.id}/${serchProduct?.[activeItem]?.variant_id}`
        );
      setSerch("");
    }
  };

  const handleLooseFocus = () => {
    setTimeout(() => {
      setMenu(false);
    }, 500);
    return clearTimeout;
  };

  return (
    <CustomDiv className="lg:h-16 h-[25px] sticky z-50 !bg-black">
      <style jsx>{`
        /* Glass Morphism Styles */
        .glass-header {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }

        .glass-search {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .glass-search:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
        }

        .glass-search:focus-within {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
        }

        .glass-dropdown {
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .glass-item {
          transition: all 0.3s ease;
        }

        .glass-item:hover {
          background: rgba(59, 130, 246, 0.1);
          border-left: 3px solid #3b82f6;
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          transition: transform 0.3s ease;
        }

        .nav-item:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-item:hover {
          color: #3b82f6;
        }

        /* Search Input Placeholder */
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-input {
          color: white;
        }

        /* Smooth Animations */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-menu {
          animation: slideDown 0.3s ease;
        }
      `}</style>

      <CustomDiv className="flex flex-col justify-between items-center py-3 fixed z-50 glass-header w-full px-[4%] lg:px-[8%]">
        <CustomDiv className="flex items-center justify-between w-full">
          {/* Logo */}
          <span className="flex items-center gap-5">
            <img
              src={
                StoreData?.store_logo ||
                "https://assets-v2.lottiefiles.com/a/91cc0ece-1150-11ee-b7cb-d3afb5c0c001/QNF78Uk4YE.gif"
              }
              alt="Logo"
              className="relative h-12 lg:h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/")}
            />
          </span>

          {/* Search Bar */}
          <span className="glass-search !rounded-full py-2.5 px-4 lg:flex justify-between items-center gap-3 min-w-[300px] lg:min-w-[400px]">
            <input
              className="search-input flex-1 outline-none bg-transparent text-sm"
              type="text"
              value={serch}
              placeholder="Search for Products"
              onChange={(e) => {
                setSerch(e.target.value);
                setSerchProduct([]);
              }}
            />
            <Search className="text-blue-400" />

            {serch && (
              <List className="!absolute top-14 left-0 right-0 glass-dropdown rounded-xl !p-0 max-h-[400px] overflow-hidden dropdown-menu">
                <span
                  onKeyDown={(event) => handleListItemKeyDown(event, 1)}
                  className="glass-search lg:flex hidden px-4 py-3 justify-between items-center gap-3 border-b border-white/10"
                >
                  <input
                    className="search-input flex-1 outline-none bg-transparent"
                    autoFocus
                    value={serch}
                    type="text"
                    placeholder="Search for Products, Brands, Offers"
                    onBlur={() => {
                      setTimeout(() => {
                        setSerch("");
                        setSerchProduct([]);
                      }, 500);
                    }}
                    onChange={(e) => {
                      setSerch(e.target.value);
                      setSerchProduct([]);
                    }}
                  />
                  <Search className="text-blue-400" />
                </span>

                <div className="overflow-y-auto !max-h-[350px]">
                  {not ? (
                    serchProduct?.map((item, index) => {
                      return (
                        <ListItemButton
                          key={item.variant_id}
                          ref={listEndRef}
                          id={item.variant_id}
                          onClick={() => {
                            navigate(`/product/${item.id}/${item.variant_id}`);
                            setNot(false);
                          }}
                          className={classNames(
                            "glass-item !py-3 !px-4",
                            activeItem === index && "!bg-blue-500/20"
                          )}
                          selected={activeItem === index}
                        >
                          <ListItemIcon>
                            <img
                              src={item.variant_image || item.image}
                              alt=""
                              className="h-12 w-12 rounded object-cover"
                            />
                          </ListItemIcon>
                          <span className="flex flex-col text-white">
                            <span className="text-sm font-medium">
                              {item.variant_name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {item.brand_name}
                            </span>
                          </span>
                        </ListItemButton>
                      );
                    })
                  ) : null}
                </div>
              </List>
            )}
          </span>

          {/* Mobile Menu Icon */}
          <span className="flex items-center gap-4 lg:gap-7">
            <IconButton onClick={() => setOpen(true)} className="lg:hidden">
              <MenuTwoTone className="!text-white" />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{
                className: "glass-dropdown !w-80",
              }}
            >
              <CustomDiv className="h-full flex flex-col">
                <List className="!pr-0 flex-1">
                  <span className="!p-4 flex justify-center border-b border-white/10">
                    <Autocomplete
                      options={products}
                      autoHighlight
                      size="small"
                      className="Product"
                      freeSolo
                      sx={{ width: 230 }}
                      onChange={handleChange}
                      disableClearable
                      getOptionLabel={(option) => option.variant}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          <img
                            loading="lazy"
                            width="50"
                            src={option.image}
                            srcSet={option.image}
                            alt=""
                          />
                          <span className="flex flex-col">
                            <span className="text-lg">{option.variant}</span>
                            <span className="text-sm">
                              {option.sub_category}
                            </span>
                          </span>
                          <span id="variant_id" hidden>
                            {option.id}
                          </span>
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Search Products"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </span>

                  <ListItemButton
                    onClick={() =>
                      navigate("/all-products", {
                        state: { from: "allproduct" },
                      })
                    }
                    className="glass-item !text-white !py-3"
                  >
                    All Products
                  </ListItemButton>

                  {mainCategoryList?.data?.data?.main_category_list?.map(
                    (product) => {
                      return (
                        <React.Fragment key={product.id}>
                          <ListItemButton
                            onClick={() => {
                              collapse.indexOf(product.id) === -1
                                ? handleClick(product.id)
                                : handleClose(product.id);
                            }}
                            className="glass-item !text-white !py-3 !flex !justify-between"
                          >
                            <span>{product.category}</span>
                            {collapse.indexOf(product.id) === -1 ? (
                              <ExpandMore />
                            ) : (
                              <ExpandLess />
                            )}
                          </ListItemButton>
                          <Collapse in={collapse.indexOf(product.id) !== -1}>
                            <List>
                              {product?.sub_category_list?.map((subCategory) => {
                                return (
                                  <ListItemButton
                                    key={subCategory.id}
                                    className="glass-item !text-gray-300 !pl-8 !py-2"
                                    onClick={() =>
                                      navigate(`/${subCategory.subcategory}/page`, {
                                        state: {
                                          from: "category",
                                          title: subCategory.category,
                                          subcategory_id: subCategory.id,
                                          page_id:
                                            subCategory?.subcategory_pagedesignsetup,
                                        },
                                      })
                                    }
                                  >
                                    {subCategory.subcategory}
                                  </ListItemButton>
                                );
                              })}
                            </List>
                          </Collapse>
                        </React.Fragment>
                      );
                    }
                  )}
                </List>

                <div className="border-t border-white/10 p-4">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => setOpen(false)}
                    className="!bg-blue-500 hover:!bg-blue-600"
                  >
                    <ArrowBack className="mr-2" />
                    Close
                  </Button>
                </div>
              </CustomDiv>
            </Drawer>
          </span>
        </CustomDiv>
      </CustomDiv>

      {/* Desktop Navigation */}
      <CustomDiv className="hidden lg:flex   text-white justify-center gap-8 items-center lg:pt-[90px]  glass-header">
        <Typography
          onClick={() =>
            navigate("/all-products", {
              state: { from: "allproduct" },
            })
          }
          className="nav-item whitespace-nowrap cursor-pointer font-medium py-2 px-4 rounded inline-flex items-center"
        >
          All Products
        </Typography>

        {mainCategoryList?.data?.data?.main_category_list
          ?.slice(0, 6)
          ?.map((product) => {
            return (
              <div key={product.id} className="group inline-block relative">
                <Typography className="nav-item whitespace-nowrap cursor-pointer font-medium py-2 px-4 rounded inline-flex items-center">
                  {product.category}
                  <KeyboardArrowDownOutlined className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </Typography>
                <ul className="dropdown-menu absolute hidden max-h-[60vh] overflow-y-auto w-96 p-3 z-50 glass-dropdown rounded-xl group-hover:grid group-hover:grid-cols-2 gap-1 top-full mt-2">
                  {product?.sub_category_list?.map((subCategory) => {
                    return (
                      <li
                        key={subCategory.id}
                        className="glass-item p-3 rounded-lg cursor-pointer text-white text-sm hover:text-blue-400 transition-colors duration-200"
                        onClick={() =>
                          navigate(`/${subCategory.subcategory}/page`, {
                            state: {
                              from: "category",
                              title: subCategory.category,
                              subcategory_id: subCategory.id,
                              page_id: subCategory?.subcategory_pagedesignsetup,
                            },
                          })
                        }
                      >
                        {subCategory.subcategory}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </CustomDiv>
    </CustomDiv>
  );
};

export default Headers;
