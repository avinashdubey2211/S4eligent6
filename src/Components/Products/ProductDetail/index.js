
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, } from "lucide-react";

import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom"; 
import ReactImageMagnify from "react-image-magnify";
import axiosInstance from "../../../Config/axios";
import { MdCancel } from "react-icons/md";
import ComparisonTable from "../../../Pages/ComparisonTable";
import CompareImage from "../../../Pages/ CompareImage";
import ProductSpecs from "../../../Pages/ProductSpecs";
import RelatedProducts from "../../../Pages/RelatedProducts";
// ---------------- Static data ----------------

const imagesStatic = [
  "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
  "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Right-View.webp",
  "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Processor.webp",
];

const ProductDetail = () => {
    //  const [showMore, setShowMore] = useState(false);
    //   const [open, setOpen] = useState(false);
      //  const [showGeneral, setShowGeneral] = useState(true);
  // const [showDimensions, setShowDimensions] = useState(true);
  // const [showDisplay, setShowDisplay] = useState(true);
  const { id } = useParams(); 
  const variant_id = id;
  const { enqueueSnackbar } = useSnackbar();

  // --------- States ----
  // const [mainImage, setMainImage] = useState(imagesStatic[0]); 
  const [mainImage, setMainImage] = useState(null);

const [detail, setDetail] = useState(null);
const [variantDetail, setVariantDetail] = useState(null);


  const [selectedColor, setSelectedColor] = useState(0); 
  const [selectedStorage, setSelectedStorage] = useState(0); 
  const [selectedRelated, setSelectedRelated] = useState(null);


  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [variantColor, setVariantColor] = useState(""); 
  const [variantStorage, setVariantStorage] = useState(""); 
  const [variant, setVariant] = useState(""); 

  // const storageOptions = ["12GB-256GB", "16GB-512GB"]; 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setIsLoading(true);
        const reqbody = new FormData();
        reqbody.append("product_id", 1987);
        reqbody.append("variant_id", 1362);

        const response = await axiosInstance.post(
          `api/store/new-product-deatils/?variant_color_value_id=${variantColor}&variant_storage_value_id=${variantStorage}&other_variants_value_id=${variant}`,
          reqbody
        );
                 console.log("API response:", response.data);

        const productData = response.data.data[0];
        // setDetail(productData.product_deatils[0]);
        // setRelatedProducts(productData.related_products || []);
        const productBase = productData.product_deatils?.[0];

const productVariant = productData.product_variant_value_list?.[0];

setDetail(productBase);
setVariantDetail(productVariant);
setRelatedProducts(productData?.related_products)

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      }
    };

    fetchProductDetails();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, variant_id, variantColor, variantStorage, variant, enqueueSnackbar]);


// MAKE FINAL DYNAMIC IMAGE LIST
const finalImages =
  relatedProducts?.flatMap((p) =>
    p.product_images?.length ? p.product_images : [p.product_image]
  ) || imagesStatic;

// Set default image dynamically
// useEffect(() => {
//   if (finalImages?.length) {
//     setMainImage(finalImages[0]);
//   }
// }, [finalImages]);
  
useEffect(() => {
  if (finalImages?.length && !mainImage) {
    setMainImage(finalImages[0]);
  }
}, [finalImages, mainImage]);

  return (
    <>
    <div className="max-w-8xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT SIDE */}
  
{/* 
  <div className="w-full lg:h-[80vh] flex flex-col items-center">
  Main Magnified Image
  <div className="w-full max-w-md lg:max-w-full">
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Product Main",
          isFluidWidth: true,
          src: relatedProducts?.product_image || mainImage,
        },
        largeImage: {
        src: relatedProducts?.product_image || mainImage,

          width: 2500,    
          height: 2500,   
        },
        enlargedImageContainerDimensions: {
          width: "400%",   
          height: "300%",  
        },
        isHintEnabled: true,
        shouldUsePositiveSpaceLens: true,
        lensStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
      }}
    />
  </div>

  Thumbnail Images
  <div className="flex gap-3 mt-4 justify-center overflow-x-auto py-2 w-full px-2">
    {relatedProducts
      ?.flatMap((p) =>
        p.product_images?.length ? p.product_images : [p.product_image]
      )
      .map((img, index) => (
        <img
          key={index}
          onClick={() => setMainImage(img)} 
          src={img}
          alt={`Thumb ${index + 1}`}
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer object-cover transition border 
            ${mainImage === img ? "border-orange-500 ring-2 ring-orange-300" : "border-gray-300"}`}
        />
      ))}
  </div>
</div> */}

<div className="w-full lg:h-[80vh] flex flex-col items-center">
  {/* Main Magnified Image */}
  <div className="w-full max-w-md lg:max-w-full">
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Product Main",
          isFluidWidth: true,
          src: mainImage,
        },
        largeImage: {
          src: mainImage,
          width: 2500,
          height: 2500,
        },
        enlargedImageContainerDimensions: {
          width: "400%",
          height: "300%",
        },
        isHintEnabled: true,
        shouldUsePositiveSpaceLens: true,
        lensStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
      }}
    />
  </div>

  {/* Thumbnails */}
  <div className="flex gap-3 mt-4 justify-center overflow-x-auto py-2 w-full px-2">
    {finalImages.map((img, index) => (
      <img
        key={index}
        onClick={() => setMainImage(img)}
        src={img}
        alt={`Thumb ${index + 1}`}
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer object-cover transition border 
          ${mainImage === img ? "border-orange-500 ring-2 ring-orange-300" : "border-gray-300"}`}
      />
    ))}
  </div>
</div>

  {/* MIDDLE SIDE */}
      <div className="lg:col-span-1 max-w-2xl mx-auto flex flex-col gap-4">
        {/* Product Title */}
       
         <h1 className="text-sm sm:text-xl md:text-xl font-semibold leading-snug">
          {detail ? detail.title : "Product Name"} 
        </h1>
           {/* Stock Status */}
  <p
    className={
      relatedProducts?.[0]?.stock_sataus === "In-stock"
        ? "text-green-600"
        : "text-red-600"
    }
  >
    {relatedProducts?.[0]?.stock_sataus || "Out of Stock"}
  </p>


<p className="text-xl font-bold text-orange-600">
   ₹{relatedProducts?.[0]?.price || "0"}
</p>
    
  {/* Effective Price */}
  <div className="mt-2 flex gap-3">
    <div className="border border-orange-500 rounded-lg px-3 py-2 text-xs flex-1">
      <p className="font-semibold text-gray-700">Effective Price @ Online</p>
      <p className="font-bold text-green-700 text-sm">₹68,999</p>
      <p className="text-gray-400 text-[10px]">See How</p>
    </div>

    <div className="border border-green-500 rounded-lg px-3 py-2 text-xs flex-1">
      <p className="font-semibold text-gray-700">Effective Price @ Store</p>
      <p className="font-bold text-green-700 text-sm">₹68,999</p>
      <p className="text-gray-400 text-[10px]">See How</p>
    </div>
  </div>

  {/* EMI */}
  <p className="mt-2 text-xs">
    Standard EMI starts from 
    <span className="font-semibold"> ₹2,069/month</span>  
    <span className="text-blue-600 underline cursor-pointer ml-1">View Plans</span>
  </p>

  {/* OFFERS SECTION */}
  <div className="mt-4">
    <h3 className="font-semibold text-sm text-gray-800 flex items-center gap-2 mb-2">
      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
      Available Offers
    </h3>

    {/* Offers row */}
    <div className="flex flex-col sm:flex-row gap-3">

      {/* Box 1 */}
      <div className="flex-1 border border-dashed border-gray-600 rounded-xl p-4 bg-white shadow-sm">
        <p className="text-xs text-gray-700 leading-5">
          <span className="font-semibold text-gray-900">Combo Offer:</span>  
          Pay ₹2999 & get JBL Wave Beam worth ₹7499/-
        </p>
      </div>

      {/* Box 2 */}
      <div className="flex-1 border border-dashed border-gray-600 rounded-xl p-4 bg-white shadow-sm">
        <p className="text-xs text-gray-700 leading-5">
          <span className="font-semibold text-gray-900">Bank Offer:</span>  
          Get ₹4000 Instant Discount
        </p>
      </div>

    </div>
  </div>
  

  {/* color */}

  <div className="flex gap-4 mt-4">
  {detail?.variant_color?.map((item, index) => (
    <div
      key={item.id}
      className="cursor-pointer"
      onClick={() => {
        setSelectedColor(index);
        setMainImage(item.variant_image);
        setVariantColor(item.color);
      }}
    >
      <p className="text-[20px] text-center mt-0 text-orange-500 font-semibold">
        {item.title}
      </p>
    </div>
  ))}
</div>

   {/* Color selection */}
       
<div className="flex gap-4 mt-4">
  {detail?.variant_color_value?.map((item, index) => (
    <div
      key={item.id}
      className="cursor-pointer"
      onClick={() => {
        setSelectedColor(index);
        
        setMainImage(item.variant_image); 
        setVariantColor(item.color); 
      }}
    >
          <p className="text-[10px] text-center mt-1">{item.title}</p>

      <img
        src={item.variant_image}
        alt={item.color}
        className={`w-16 h-16 rounded-md border p-1 transition 
          ${selectedColor === index ? "border-orange-500" : "border-gray-300"}`}
      />
      <p className="text-[10px] text-center mt-1">{item.color}</p>

    </div>
  ))}
</div>


        {/* Storage selection */}

         {/* STORAGE SECTION  static*/}
  <div className="mt-4">
    <h3 className="font-semibold text-sm mb-1">Storage</h3>
    <div className="flex gap-3">
      {["12GB-256GB", "16GB-512GB"].map((size, i) => (
        <div
          key={i}
          className={`px-3 py-[6px] border rounded text-xs cursor-pointer ${
            i === 0
              ? "border-orange-500 text-orange-600"
              : "border-gray-300 text-gray-600"
          }`}
        >
          {size}
        </div>
      ))}
    </div>
  </div>
       
<div className="flex gap-3 mt-4">
  {detail?.variant_storage_value?.map((item, i) => (
    <div
      key={item.id}
      className={`px-3 py-[6px] border rounded text-xs cursor-pointer ${
        selectedStorage === i
          ? "border-orange-500 text-orange-600"
          : "border-gray-300 text-gray-600"
      }`}
      onClick={() => {
        setSelectedStorage(i);
        setVariantStorage(item.value); 
      }}
    >
      {item.value}
    </div>
  ))}
</div>
{/* Replacement / Warranty / GST */}
  <div className="grid grid-cols-3 gap-3 mt-3 text-[11px]">

    {/* Replacement */}
    <div className="rounded-lg py-1 bg-[#faeded] flex items-center gap-0 px-1 shadow-sm">
      <img
        src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=32,height=32,quality=75/policy/Return-Exchangee.png"
        alt="Replacement"
        className="w-8 h-8"
      />
      <div className="flex flex-col items-start">
        <p className="font-semibold text-sm">Replacement</p>
        <p className="text-gray-500 text-xs">in 7 days</p>
      </div>
    </div>

    {/* Warranty */}
    <div className="rounded-lg py-1 bg-[#faeded] flex items-center gap-1 px-3 shadow-sm">
      <img
        src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=32,height=32,quality=75/policy/Warrenty-1.png"
        alt="Warranty"
        className="w-8 h-8"
      />
      <div className="flex flex-col items-start">
        <p className="font-semibold text-sm">Warranty</p>
        <p className="text-gray-500 text-xs">1 Year</p>
      </div>
    </div>

    {/* GST Invoice */}
    <div className="rounded-lg py-1 bg-[#faeded] flex items-center gap-1 px-3 shadow-sm">
      <img
        src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=32,height=32,quality=75/policy/Gst-Invoice.png"
        alt="GST Invoice"
        className="w-8 h-8"
      />
      <div className="flex flex-col items-start">
        <p className="font-semibold text-sm">GST Invoice</p>
        <p className="text-gray-500 text-xs">Available</p>
      </div>
    </div>

  </div>



{/* KEY SPECIFICATIONS */}
<div className="mt-1">

  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
    Key Specifications
  </h3>

  <ul className="text-sm text-gray-700 space-y-2">

    <li className="flex items-start gap-2">
      <img
        src="https://img.poorvika.com/cdn-cgi/image/width=12,height=12,quality=75/common/bi_check-circle-fill.png"
        alt="check"
        className="w-3 h-3 mt-1"
      />
      Rear Camera: 50MP + 50MP + 50MP | Front Camera: 32MP
    </li>

    <li className="flex items-start gap-2">
      <img
        src="https://img.poorvika.com/cdn-cgi/image/width=12,height=12,quality=75/common/bi_check-circle-fill.png"
        alt="check"
        className="w-3 h-3 mt-1"
      />
      17.23 cm (6.78 inch) Display | 165 Hz Refresh Rate
    </li>

    <li className="flex items-start gap-2">
      <img
        src="https://img.poorvika.com/cdn-cgi/image/width=12,height=12,quality=75/common/bi_check-circle-fill.png"
        alt="check"
        className="w-3 h-3 mt-1"
      />
      Snapdragon 8 Elite Gen 5 | 7300 mAh Battery | 120W SUPERVOOC Charger
    </li>

  </ul>
</div> 

       
      


      </div>
      
       {/* RIGHT SIDE */}
    <div className="w-full lg:w-[350px] border border-gray-300 rounded-lg shadow-md p-5 bg-white h-fit mt-6 lg:mt-0">
        <h3 className="font-semibold text-[15px] mb-3 border-b pb-2">
          Frequently Bought Together:
        </h3>

        {/* Products */}
        <div className="space-y-3 border-b pb-12  border-gray-300">
          {[
            {
              name: "Sony WH-CH520 Bluetooth Headset Pink",
              price: "₹4,490",
              oldPrice: "₹5,990",
              img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=150,quality=75/product/Sony-wh-ch520-boom-headset-pink-Front-Right-View.png",
            },
            {
              name: "Noise NoiseFit Halo Jet Black",
              price: "₹4,499",
              oldPrice: "₹6,999",
              img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=150,quality=75/product/Noise-noisefit-halo-2-smartwatch-jetblack-Front-Side-View.png",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 border-b pb-2">
              <input type="checkbox" className="cursor-pointer" />
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded" />
              <div className="text-xs sm:text-sm">
                <p className="font-medium">{item.name}</p>
                {item.oldPrice && (
                  <p className="line-through text-gray-500">{item.oldPrice}</p>
                )}
                <p className="text-orange-600 font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
           <div className="mt-6 space-y-1">
    <h1 className="text-[#ff6900] text-sm font-semibold">Want to protect your product?</h1>
    <h6 className="text-black text-sm font-medium">Accidental and Liquid Damage Protection Plan</h6>

    <label className="flex items-center gap-2 mt-2 cursor-pointer">
      <input type="checkbox" className="cursor-pointer" />
      <p
        onClick={() => window.location.href = "/your-link"}
        className="text-gray-600 hover:underline text-sm font-medium"
      >
        1 Year Accidental and Liquid Damage<span className="text-green-600">₹ 6,949</span>
      </p>
    </label>
  </div>

        <button className="mt-6 w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-orange-700">
          Notify Me
        </button>
      </div>
    </div>
    
     <div className="w-full px-2 sm:px-6 lg:px-10 py-4">
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex gap-4 sm:gap-6 lg:gap-16 bg-[#fef2e6] py-3 px-4 rounded-lg shadow-sm min-w-max">
      {[
        "Overview",
        "Detail Spaces",
        "Video",
        "Rating & Reviews",
        "Related Product",
        "Compare",
        "Recently viewed",
      ].map((item, i) => (
        <p
          key={i}
          className="cursor-pointer text-sm sm:text-base lg:text-[16px] text-gray-700 hover:text-orange-500 transition-colors whitespace-nowrap"
        >
          {item}
        </p>
      ))}
    </div>
  </div>
</div>

{/*   Overview*/}
<div className="w-full bg-gray-400 px-4 sm:px-10 py-2 sm:py-4">
  <h1 className="text-start text-xl sm:text-2xl font-bold">
    Overview
  </h1>
</div>


{/* full screen img  */}
<div className="max-w-full px-1 sm:px-1 py-4">
  <div className="h-full w-full sm-w-screen p-1">
    <img
      src="https://img-prd-pim.poorvika.com/pageimg/Oppo-Find-X9-Pro-5G-W1.webp"
      alt="iPhone 17 Pro Max"
      className="w-full h-full object-contain"
    />
  </div>
</div>

{/*  Detailed Specifications */}
<div className="w-full bg-gray-400 px-4 sm:px-10 py-2 sm:py-4">
  <h1 className="text-start text-xl sm:text-2xl font-bold">
    Detailed Specifications
  </h1>
</div>
<ProductSpecs/>
 <div className="w-full">
  {/* Section Header */}
  <h1 className="text-center text-xl sm:text-2xl font-bold py-3 sm:py-4 text-white bg-gray-400">
    Videos
  </h1>
 {/* Video Container */}
  <div className="w-full h-40 sm:h-56 md:h-64 flex items-center justify-center bg-gray-100">
    <p className="text-center text-sm sm:text-base text-gray-600">
      Video not available for this product
    </p>
  </div>
</div>

<div className="w-full px-4 sm:px-10 py-4">
  {/* Header */}
  <h1 className="text-center text-xl sm:text-2xl font-bold py-3 sm:py-4 text-white bg-gray-400">
    Ratings & Reviews
  </h1>

  {/* Content */}
  <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-6">
    <h2 className="text-gray-700 text-sm sm:text-lg text-center">
      Video not available for this product
    </h2>
    <button
      className="px-4 sm:px-6 py-2 sm:py-3 bg-[#ff571a] text-white font-semibold rounded-xl shadow-md 
                 hover:bg-amber-600 hover:shadow-lg transition duration-300"
    >
      Write Review
    </button>
  </div>
  </div>
  <RelatedProducts/>

  <CompareImage/>
<ComparisonTable/>
{/* <RelatedProducts/> */}
</>
  );
};

export default ProductDetail;


