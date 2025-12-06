
// import React, { useState } from "react";
// import { MdCancel } from "react-icons/md";
// import ReactImageMagnify from "react-image-magnify";

// const images = [
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Right-View.webp",
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Processor.webp",
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Back-Camera-View.webp",
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Specs.webp",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmksYiIL4YcC0QkgCtWcXLEmjzvkru6iiIg&s",

// ];


// const ProductDetail = () => {
//   const [mainImage, setMainImage] = useState(images[0]);
//   const [selectedColor, setSelectedColor] = useState(0);

//   const colorVariants = [
//     {
//       name: "Ultra Violet",
//       img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View-Thumbnail.png",
//       large:"https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
//     },
//     {
//       name: "Sand Storm",
//       img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-sand-storm-12gb-256gb-Front-Back-View-Thumbnail.png",
//       large:"https://img-prd-pim.poorvika.com/product/Oneplus-15-sand-storm-12gb-256gb-Front-Back-View.webp",
//     },
//     {
//       name: "Infinite Black",
//       img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-infinite-black-12gb-256gb-Front-Back-View-Thumbnail.png",
//       large: "https://img-prd-pim.poorvika.com/product/Oneplus-15-infinite-black-12gb-256gb-Front-Back-View.webp",
//     },
//      {
//       name: "Infinite Black",
//       img: "https://img-prd-pim.poorvika.com/product/Oppo-find-x9-pro-5g-titanium-charcoal-16gb-512gb-Front-Back-View.webp",
//       large:"https://img-prd-pim.poorvika.com/product/Oppo-find-x9-pro-5g-titanium-charcoal-16gb-512gb-Front-Back-View.webp",
//     },
//      {
//       name: "white",
//       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmksYiIL4YcC0QkgCtWcXLEmjzvkru6iiIg&s",
//       large:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmksYiIL4YcC0QkgCtWcXLEmjzvkru6iiIg&s",
//     },
//   ];

//   return (
//     <>
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//      {/* LEFT SIDE */}
//       <div className="w-full lg:h-[80vh] flex flex-col items-center  ">
      
//       {/* Magnified Image */}
//       <div className="w-full max-w-md lg:max-w-full">
//         <ReactImageMagnify
//           {...{
//             smallImage: {
//               alt: "Product Main",
//               isFluidWidth: true,
//               src: mainImage,
//             },
//             largeImage: {
//               src: mainImage,
//               width: 1800,
//               height: 1800, 
//             },
//             enlargedImageContainerDimensions: {
//               width: '300%',
//               height: '200%',
//             },
//             isHintEnabled: true,
//             shouldUsePositiveSpaceLens: true,
//             lensStyle: { backgroundColor: 'rgba(0,0,0,0.2)' },
//           }}
//         />
//       </div>

//       {/* Thumbnail Images */}
//       <div className="flex gap-3 mt-4 justify-center overflow-x-auto py-2 w-full px-2">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             onClick={() => setMainImage(img)}
//             src={img}
//             alt="Thumb"
//             className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer object-cover transition border 
//             ${mainImage === img ? "border-orange-500 ring-2 ring-orange-300" : "border-gray-300"}`}
//           />
//         ))}
//       </div>
//     </div>
//     {/* MIDDLE SIDE */}
//     <div className="lg:col-span-1 max-w-2xl mx-auto flex flex-col gap-4">

//   {/* Title */}
//   <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
//     OnePlus 15 (Ultra Violet, 12GB-256GB)
//   </h1>

//   <p className="text-sm text-red-600 font-semibold -mt-1">Out Of Stock</p>
//   <p className="text-[11px] text-gray-500 -mt-1">(Product Code: 51805)</p>

//   {/* Price */}
//   <div className="mt-2 flex items-center gap-2">
//     <span className="text-xl md:text-2xl font-bold text-orange-600">₹72,999</span>
//     <span className="line-through text-gray-500 text-sm">₹76,999</span>
//     <span className="bg-green-500 text-white px-2 py-[2px] text-[10px] rounded">5% OFF</span>
//   </div>

//   {/* Effective Price */}
//   <div className="mt-2 flex gap-3">
//     <div className="border border-orange-500 rounded-lg px-3 py-2 text-xs flex-1">
//       <p className="font-semibold text-gray-700">Effective Price @ Online</p>
//       <p className="font-bold text-green-700 text-sm">₹68,999</p>
//       <p className="text-gray-400 text-[10px]">See How</p>
//     </div>

//     <div className="border border-green-500 rounded-lg px-3 py-2 text-xs flex-1">
//       <p className="font-semibold text-gray-700">Effective Price @ Store</p>
//       <p className="font-bold text-green-700 text-sm">₹68,999</p>
//       <p className="text-gray-400 text-[10px]">See How</p>
//     </div>
//   </div>

//   {/* EMI */}
//   <p className="mt-2 text-xs">
//     Standard EMI starts from 
//     <span className="font-semibold"> ₹2,069/month</span>  
//     <span className="text-blue-600 underline cursor-pointer ml-1">View Plans</span>
//   </p>

//   {/* OFFERS SECTION */}
//   <div className="mt-4">
//     <h3 className="font-semibold text-sm text-gray-800 flex items-center gap-2 mb-2">
//       <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
//       Available Offers
//     </h3>

//     {/* Offers row */}
//     <div className="flex flex-col sm:flex-row gap-3">

//       {/* Box 1 */}
//       <div className="flex-1 border border-dashed border-gray-600 rounded-xl p-4 bg-white shadow-sm">
//         <p className="text-xs text-gray-700 leading-5">
//           <span className="font-semibold text-gray-900">Combo Offer:</span>  
//           Pay ₹2999 & get JBL Wave Beam worth ₹7499/-
//         </p>
//       </div>

//       {/* Box 2 */}
//       <div className="flex-1 border border-dashed border-gray-600 rounded-xl p-4 bg-white shadow-sm">
//         <p className="text-xs text-gray-700 leading-5">
//           <span className="font-semibold text-gray-900">Bank Offer:</span>  
//           Get ₹4000 Instant Discount
//         </p>
//       </div>

//     </div>
//   </div>

//   {/* COLOR SECTION */}
//   <div className="mt-4">
//     <h3 className="font-semibold text-sm mb-1">Color</h3>

//     <div className="flex gap-4 items-start">
//       {colorVariants.map((item, index) => (
//         <div
//           key={index}
//           className="cursor-pointer"
//           onClick={() => {
//             setSelectedColor(index);
//             setMainImage(item.large); 
//           }}
//         >
//           <img
//             src={item.img}
//             alt={item.name}
//             className={`w-16 h-16 rounded-md border p-1 transition 
//             ${selectedColor === index ? "border-orange-500" : "border-gray-300"}`}
//           />
//           <p className="text-[10px] text-center mt-1">{item.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* STORAGE SECTION */}
//   <div className="mt-4">
//     <h3 className="font-semibold text-sm mb-1">Storage</h3>
//     <div className="flex gap-3">
//       {["12GB-256GB", "16GB-512GB"].map((size, i) => (
//         <div
//           key={i}
//           className={`px-3 py-[6px] border rounded text-xs cursor-pointer ${
//             i === 0
//               ? "border-orange-500 text-orange-600"
//               : "border-gray-300 text-gray-600"
//           }`}
//         >
//           {size}
//         </div>
//       ))}
//     </div>
//   </div>
//   <div className="w-full  ">
//   {/* DELIVERY OPTIONS */}
// <div className="mt-4 w-fit   px-2 bg-white border border-gray-300 rounded-lg shadow-sm  ">

//  {/* Delivery Options + Pincode on same line */}
//   <div className="flex items-center gap-3  mb-2 ">

//     <h3 className="font-semibold text-sm">
//       Delivery Options:
//     </h3>

//     <div className="flex items-center   px-1 py-2 text-sm ">
//       <img
//         src="https://img.poorvika.com/common/location.svg"
//         alt="Pincode"
//         className="w-4 h-4 mr-2"
//       />
//       <input
//         type="text"
//         placeholder="Delivery Pincode"
//         className="flex-1 outline-none text-sm"
//       />
//     </div>
//   </div>


// </div>
//   {/* Out of Stock Text */}
//   <p className="text-red-500 text-xs  px-4  mt-1 font-semibold">
//     Currently Out Of Stock
//   </p>
//   </div>
  

//   {/* Replacement / Warranty / GST */}
//   <div className="grid grid-cols-3 gap-3 mt-3 text-[11px]">

//     {/* Replacement */}
//     <div className="rounded-lg py-1 bg-[#faeded] flex items-center gap-0 px-1 shadow-sm">
//       <img
//         src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=32,height=32,quality=75/policy/Return-Exchangee.png"
//         alt="Replacement"
//         className="w-8 h-8"
//       />
//       <div className="flex flex-col items-start">
//         <p className="font-semibold text-sm">Replacement</p>
//         <p className="text-gray-500 text-xs">in 7 days</p>
//       </div>
//     </div>

//     {/* Warranty */}
//     <div className="rounded-lg py-1 bg-[#faeded] flex items-center gap-1 px-3 shadow-sm">
//       <img
//         src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=32,height=32,quality=75/policy/Warrenty-1.png"
//         alt="Warranty"
//         className="w-8 h-8"
//       />
//       <div className="flex flex-col items-start">
//         <p className="font-semibold text-sm">Warranty</p>
//         <p className="text-gray-500 text-xs">1 Year</p>
//       </div>
//     </div>

//     {/* GST Invoice */}
//     <div className="rounded-lg py-1 bg-[#faeded] flex items-center gap-1 px-3 shadow-sm">
//       <img
//         src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=32,height=32,quality=75/policy/Gst-Invoice.png"
//         alt="GST Invoice"
//         className="w-8 h-8"
//       />
//       <div className="flex flex-col items-start">
//         <p className="font-semibold text-sm">GST Invoice</p>
//         <p className="text-gray-500 text-xs">Available</p>
//       </div>
//     </div>

//   </div>



// {/* KEY SPECIFICATIONS */}
// <div className="mt-1">

//   <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
//     <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
//     Key Specifications
//   </h3>

//   <ul className="text-sm text-gray-700 space-y-2">

//     <li className="flex items-start gap-2">
//       <img
//         src="https://img.poorvika.com/cdn-cgi/image/width=12,height=12,quality=75/common/bi_check-circle-fill.png"
//         alt="check"
//         className="w-3 h-3 mt-1"
//       />
//       Rear Camera: 50MP + 50MP + 50MP | Front Camera: 32MP
//     </li>

//     <li className="flex items-start gap-2">
//       <img
//         src="https://img.poorvika.com/cdn-cgi/image/width=12,height=12,quality=75/common/bi_check-circle-fill.png"
//         alt="check"
//         className="w-3 h-3 mt-1"
//       />
//       17.23 cm (6.78 inch) Display | 165 Hz Refresh Rate
//     </li>

//     <li className="flex items-start gap-2">
//       <img
//         src="https://img.poorvika.com/cdn-cgi/image/width=12,height=12,quality=75/common/bi_check-circle-fill.png"
//         alt="check"
//         className="w-3 h-3 mt-1"
//       />
//       Snapdragon 8 Elite Gen 5 | 7300 mAh Battery | 120W SUPERVOOC Charger
//     </li>

//   </ul>
// </div>


//     </div>
     
//      {/* RIGHT SIDE (No Changes) */}
//        <div className="w-full lg:w-[350px] border border-gray-300 rounded-lg shadow-md p-5 bg-white h-fit mt-6 lg:mt-0">
//         <h3 className="font-semibold text-[15px] mb-3 border-b pb-2">
//           Frequently Bought Together:
//         </h3>

//         {/* Products */}
//         <div className="space-y-3 border-b pb-12  border-gray-300">
//           {[
//             {
//               name: "Sony WH-CH520 Bluetooth Headset Pink",
//               price: "₹4,490",
//               oldPrice: "₹5,990",
//               img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=150,quality=75/product/Sony-wh-ch520-boom-headset-pink-Front-Right-View.png",
//             },
//             {
//               name: "Noise NoiseFit Halo Jet Black",
//               price: "₹4,499",
//               oldPrice: "₹6,999",
//               img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=150,quality=75/product/Noise-noisefit-halo-2-smartwatch-jetblack-Front-Side-View.png",
//             },
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-3 border-b pb-2">
//               <input type="checkbox" className="cursor-pointer" />
//               <img src={item.img} alt={item.name} className="w-12 h-12 rounded" />
//               <div className="text-xs sm:text-sm">
//                 <p className="font-medium">{item.name}</p>
//                 {item.oldPrice && (
//                   <p className="line-through text-gray-500">{item.oldPrice}</p>
//                 )}
//                 <p className="text-orange-600 font-semibold">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//            <div className="mt-6 space-y-1">
//     <h1 className="text-[#ff6900] text-sm font-semibold">Want to protect your product?</h1>
//     <h6 className="text-black text-sm font-medium">Accidental and Liquid Damage Protection Plan</h6>

//     <label className="flex items-center gap-2 mt-2 cursor-pointer">
//       <input type="checkbox" className="cursor-pointer" />
//       <p
//         onClick={() => window.location.href = "/your-link"}
//         className="text-gray-600 hover:underline text-sm font-medium"
//       >
//         1 Year Accidental and Liquid Damage<span className="text-green-600">₹ 6,949</span>
//       </p>
//     </label>
//   </div>

//         <button className="mt-6 w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-orange-700">
//           Notify Me
//         </button>
//       </div>
//     </div>


//     </>
    
//   );
// };

// export default ProductDetail;

// import React, { useState, useEffect } from "react";
// import { useSnackbar } from "notistack";
// import { useParams } from "react-router-dom"; 
// import { MdCancel } from "react-icons/md";
// import ReactImageMagnify from "react-image-magnify";
// import axiosInstance from "../../../Config/axios";

// const imagesStatic = [
//   // ✅ Static thumbnails
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Right-View.webp",
//   "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Processor.webp",
// ];

// const colorVariantsStatic = [
//   // ✅ Static colors (can be made dynamic from API)
//   {
//     name: "Ultra Violet",
//     img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View-Thumbnail.png",
//     large: "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
//   },
//   {
//     name: "Sand Storm",
//     img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-sand-storm-12gb-256gb-Front-Back-View-Thumbnail.png",
//     large: "https://img-prd-pim.poorvika.com/product/Oneplus-15-sand-storm-12gb-256gb-Front-Back-View.webp",
//   },
// ];

// const ProductDetail = () => {
//  // Get product id from URL if using React Router
//   const { id } = useParams();
//   const variant_id = id; // Example, replace with your logic

//   const { enqueueSnackbar } = useSnackbar();

//   // Image & selection states
//   const [mainImage, setMainImage] = useState(images[0]);
//   const [selectedColor, setSelectedColor] = useState(0);
//   const [selectedStorage, setSelectedStorage] = useState(0);

//   // Product data states
//   const [data, setData] = useState([]);
//   const [detail, setDetail] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Variant values
//   const [variantColor, setVariantColor] = useState("");
//   const [variantStorage, setVariantStorage] = useState("");
//   const [variant, setVariant] = useState("");

//   // Fetch product details
//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         setIsLoading(true);
//         const reqbody = new FormData();
//         reqbody.append("product_id", id);
//         reqbody.append("variant_id", variant_id);

//         const response = await axiosInstance.post(
//           `api/store/new-product-deatils/?variant_color_value_id=${variantColor}&variant_storage_value_id=${variantStorage}&other_variants_value_id=${variant}`,
//           reqbody
//         );

//         const productData = response.data.data[0];
//         setDetail(productData.product_deatils[0]);
//         setData(productData.related_products);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         enqueueSnackbar("Something went wrong..!", { variant: "error" });
//       }
//     };

//     fetchProductDetails();
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, [id, variant_id, variantColor, variantStorage, variant, enqueueSnackbar]);


//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {/* LEFT SIDE */}
//       <div className="w-full lg:h-[80vh] flex flex-col items-center">
//         {/* Magnified Image */}
//         <div className="w-full max-w-md lg:max-w-full">
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 alt: "Product Main",
//                 isFluidWidth: true,
//                 src: mainImage,
//               },
//               largeImage: {
//                 src: mainImage,
//                 width: 1800,
//                 height: 1800,
//               },
//               enlargedImageContainerDimensions: {
//                 width: "300%",
//                 height: "200%",
//               },
//               isHintEnabled: true,
//               shouldUsePositiveSpaceLens: true,
//               lensStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
//             }}
//           />
//         </div>

//         {/* Thumbnail Images */}
//         <div className="flex gap-3 mt-4 justify-center overflow-x-auto py-2 w-full px-2">
//           {imagesStatic.map((img, index) => (
//             <img
//               key={index}
//               onClick={() => setMainImage(img)}
//               src={img}
//               alt="Thumb"
//               className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer object-cover transition border 
//                 ${mainImage === img ? "border-orange-500 ring-2 ring-orange-300" : "border-gray-300"}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* MIDDLE SIDE */}
//       <div className="lg:col-span-1 max-w-2xl mx-auto flex flex-col gap-4">
//         {/* Dynamic product title */}
//         <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
//           {detail ? detail.name : "Product Name"} {/* Dynamic */}
//         </h1>

//         {/* Dynamic price */}
//         <p className="text-xl font-bold text-orange-600">
//           {detail ? `₹${detail.price}` : "₹0"}
//         </p>

//         {/* Color selection */}
//         <div className="flex gap-4 mt-4">
//           {colorVariantsStatic.map((item, index) => (
//             <div
//               key={index}
//               className="cursor-pointer"
//               onClick={() => {
//                 setSelectedColor(index);
//                 setMainImage(item.large);
//                 setVariantColor(item.name); // Dynamic
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className={`w-16 h-16 rounded-md border p-1 transition 
//                   ${selectedColor === index ? "border-orange-500" : "border-gray-300"}`}
//               />
//               <p className="text-[10px] text-center mt-1">{item.name}</p>
//             </div>
//           ))}
//         </div>

//         {/* Storage selection */}
//         <div className="flex gap-3 mt-4">
//           {["12GB-256GB", "16GB-512GB"].map((size, i) => (
//             <div
//               key={i}
//               className={`px-3 py-[6px] border rounded text-xs cursor-pointer ${
//                 i === 0
//                   ? "border-orange-500 text-orange-600"
//                   : "border-gray-300 text-gray-600"
//               }`}
//               onClick={() => setVariantStorage(size)} // Dynamic
//             >
//               {size}
//             </div>
//           ))}
//         </div>

//         {/* Related Products (Dynamic) */}
//         <div className="mt-6">
//           <h3 className="font-semibold mb-2">Related Products:</h3>
//           <div className="flex gap-4 overflow-x-auto">
//             {relatedProducts.length
//               ? relatedProducts.map((p, i) => (
//                   <div key={i} className="w-36 p-2 border rounded">
//                     <img src={p.img} alt={p.name} className="w-full h-24 object-cover" />
//                     <p className="text-xs">{p.name}</p>
//                     <p className="text-orange-600 text-sm font-semibold">₹{p.price}</p>
//                   </div>
//                 ))
//               : "No related products."}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="w-full lg:w-[350px] border border-gray-300 rounded-lg shadow-md p-5 bg-white h-fit mt-6 lg:mt-0">
//         <h3 className="font-semibold text-[15px] mb-3 border-b pb-2">Frequently Bought Together:</h3>
//         {/* Static example products */}
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom"; 
import ReactImageMagnify from "react-image-magnify";
import axiosInstance from "../../../Config/axios";

// ---------------- Static data ----------------
const imagesStatic = [
  "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
  "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Right-View.webp",
  "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Processor.webp",
];

const colorVariantsStatic = [
  {
    name: "Ultra Violet",
    img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View-Thumbnail.png",
    large: "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
  },
  {
    name: "Sand Storm",
    img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=300,quality=75/prodvarval/Oneplus-15-sand-storm-12gb-256gb-Front-Back-View-Thumbnail.png",
    large: "https://img-prd-pim.poorvika.com/product/Oneplus-15-sand-storm-12gb-256gb-Front-Back-View.webp",
  },
];

// ---------------- Main Component ----------------
const ProductDetail = () => {
  const { id } = useParams(); 
  const variant_id = id;

  const { enqueueSnackbar } = useSnackbar();

  // --------- States ----
  const [mainImage, setMainImage] = useState(imagesStatic[0]); 
  const [selectedColor, setSelectedColor] = useState(0); 
  const [selectedStorage, setSelectedStorage] = useState(0); 

  const [detail, setDetail] = useState(null); 
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [variantColor, setVariantColor] = useState(""); 
  const [variantStorage, setVariantStorage] = useState(""); 
  const [variant, setVariant] = useState(""); 

  const storageOptions = ["12GB-256GB", "16GB-512GB"]; 

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

        const productData = response.data.data[0];
        setDetail(productData.product_deatils[0]);
        setRelatedProducts(productData.related_products || []);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      }
    };

    fetchProductDetails();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, variant_id, variantColor, variantStorage, variant, enqueueSnackbar]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDE */}
      <div className="w-full lg:h-[80vh] flex flex-col items-center">
        {/* Magnified Image */}
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
                width: 1800,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "300%",
                height: "200%",
              },
              isHintEnabled: true,
              shouldUsePositiveSpaceLens: true,
              lensStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
            }}
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-3 mt-4 justify-center overflow-x-auto py-2 w-full px-2">
          {imagesStatic.map((img, index) => (
            <img
              key={index}
              onClick={() => setMainImage(img)}
              src={img}
              alt="Thumb"
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer object-cover transition border 
                ${mainImage === img ? "border-orange-500 ring-2 ring-orange-300" : "border-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* MIDDLE SIDE */}
      <div className="lg:col-span-1 max-w-2xl mx-auto flex flex-col gap-4">
        {/* Product Title */}
        {/* <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
          {detail ? detail.name : "Product Name"} 
        </h1> */}
         <h1 className="text-sm sm:text-xl md:text-sm font-semibold leading-snug">
          {detail ? detail.title : "Product Name"} {/* Dynamic */}
        </h1>
        
        {/* Price */}
        <p className="text-xl font-bold text-orange-600">
          {detail ? `₹${detail.price}` : "₹0"}            
        </p>

        {/* Color selection */}
        <div className="flex gap-4 mt-4">
          {colorVariantsStatic.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setSelectedColor(index);
                setMainImage(item.large);
                setVariantColor(item.name); //  Dynamic
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`w-16 h-16 rounded-md border p-1 transition 
                  ${selectedColor === index ? "border-orange-500" : "border-gray-300"}`}
              />
              <p className="text-[10px] text-center mt-1">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Storage selection */}
        <div className="flex gap-3 mt-4">
          {storageOptions.map((size, i) => (
            <div
              key={i}
              className={`px-3 py-[6px] border rounded text-xs cursor-pointer ${
                selectedStorage === i
                  ? "border-orange-500 text-orange-600"
                  : "border-gray-300 text-gray-600"
              }`}
              onClick={() => {
                setSelectedStorage(i);
                setVariantStorage(size); //  Dynamic
              }}
            >
              {size}
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Related Products:</h3>
          <div className="flex gap-4 overflow-x-auto">
            {relatedProducts.length
              ? relatedProducts.map((p, i) => (
                  <div key={i} className="w-36 p-2 border rounded">
                    <img src={p.img} alt={p.name} className="w-full h-24 object-cover" />
                    <p className="text-xs">{p.name}</p>
                    <p className="text-orange-600 text-sm font-semibold">₹{p.price}</p>
                  </div>
                ))
              : "No related products."}
          </div>
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
  );
};

export default ProductDetail;


