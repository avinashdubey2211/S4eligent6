
// import React from "react";

// const CompareImage = () => {
//   const compareData = [
//     {
//       image:
//         "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png",
//       name: "Apple iPhone 17 Pro Max (Cosmic Orange, 512GB)",
//       price: "₹ 1,49,900",
//       label: "You are viewing :",
//       offer: null,
//     },
//     {
//       image:
//         "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",
//       name: "Samsung Galaxy S25 Edge 5G (Titanium Jetblack, 12GB-512GB)",
//       price: "₹ 1,21,999",
//       label: null,
//       offer: null,
//     },
//     {
//       image:
//         "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png",
//       name: "Vivo X Fold5 5G (Titanium Grey, 16GB-512GB)",
//       price: "₹ 1,49,999",
//       label: null,
//       offer: { oldPrice: "₹ 1,59,999", discount: "6% OFF" },
//     },
//     {
//       image:
//         "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",
//       name: "Apple iPhone Air (Light Gold, 1TB)",
//       price: "₹ 1,59,900",
//       label: null,
//       offer: null,
//     },
//   ];

//   return (
//     <>
//       {/* Compare with similar items */}
//       <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
//         {/* Heading */}
//         <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
//           Compare with similar items
//         </h2>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {/* Left Box */}
//           <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//             <p className="text-sm sm:text-base font-bold text-orange-600">
//               Compare Features
//             </p>
//           </div>

//           {/* Product Cards */}
//           {compareData.map((product, idx) => (
//             <div
//               key={idx}
//               className="shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
//             >
//               {/* Label */}
//               {product.label && (
//                 <p className="text-sm text-orange-600 font-semibold mb-1">
//                   {product.label}
//                 </p>
//               )}

//               {/* Remove Button */}
//               <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg">
//                 ✕
//               </button>

//               {/* Image */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-44 sm:h-48 object-contain mb-3"
//               />

//               {/* Name */}
//               <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
//                 {product.name}
//               </p>

//               {/* Price */}
//               <p className="text-lg font-bold text-orange-600">
//                 {product.price}
//               </p>

//               {/* Offer */}
//               {product.offer && (
//                 <div className="text-sm text-gray-500 mt-1">
//                   <span className="line-through mr-2">
//                     {product.offer.oldPrice}
//                   </span>
//                   <span className="text-green-600 font-bold">
//                     {product.offer.discount}
//                   </span>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CompareImage;


// import React, { useEffect, useState } from "react";
// import { CompareImgs } from "../../Services/CompareImg";
// // import { CompareImgs } from "../../Services/CompareService";

// const CompareImage = ({ variantIds }) => {
//   const [compareData, setCompareData] = useState([]);

//   useEffect(() => {
//     const fetchCompare = async () => {
//       try {
//         const body = { variant_ids: variantIds || [] };
//         const res = await CompareImgs(body);

//         console.log("COMPARE API RESPONSE:", res);

//         // FIX: Safely extract array
//         const arr =
//           Array.isArray(res?.data?.data)
//             ? res.data.data
//             : Array.isArray(res?.data)
//             ? res.data
//             : [];

//         setCompareData(arr);
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   return (
//     <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
//         Compare with similar items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {compareData.map((product, idx) => (
//           <div
//             key={idx}
//             className="shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
//           >
//             <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg">
//               ✕
//             </button>

//             <img
//               src={product?.image}
//               alt={product?.product_name}
//               className="w-full h-44 sm:h-48 object-contain mb-3"
//             />

//             <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
//               {product?.product_name}
//             </p>

//             <p className="text-lg font-bold text-orange-600">
//               ₹ {product?.selling_price}
//             </p>

//             {product?.mrp && (
//               <div className="text-sm text-gray-500 mt-1">
//                 <span className="line-through mr-2">₹ {product?.mrp}</span>
//                 <span className="text-green-600 font-bold">
//                   {product?.discount_percent}% OFF
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;


// import React, { useEffect, useState } from "react";
// import { CompareImgs } from "../../Services/CompareImg";
// // import { CompareImgs } from "../../Services/CompareService";

// const CompareImage = ({ variantIds = [] }) => {
//   const [compareData, setCompareData] = useState([]);

//   useEffect(() => {
//     const fetchCompare = async () => {
//       try {
//         const body = {
//           main_category_id: 409,       // REQUIRED BY BACKEND
//           variant_ids: variantIds || []  // PASS ARRAY
//         };

//         const res = await CompareImgs(body);
//         console.log("COMPARE API RESPONSE:", res);

//         // SAFE ARRAY HANDLING
//         const arr =
//           Array.isArray(res?.data?.data)
//             ? res.data.data
//             : Array.isArray(res?.data)
//             ? res.data
//             : [];

//         setCompareData(arr);
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   return (
//     <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
//         Compare with similar items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        
//         {/* LEFT BOX */}
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {/* PRODUCT CARDS */}
//         {compareData.map((product, idx) => (
//           <div
//             key={idx}
//             className="shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
//           >
//             {/* REMOVE BUTTON */}
//             <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg">
//               ✕
//             </button>

//             {/* IMAGE */}
//             <img
//               src={product?.image}
//               alt={product?.product_name}
//               className="w-full h-44 sm:h-48 object-contain mb-3"
//             />

//             {/* NAME */}
//             <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
//               {product?.product_name}
//             </p>

//             {/* PRICE */}
//             <p className="text-lg font-bold text-orange-600">
//               ₹ {product?.selling_price}
//             </p>

//             {/* MRP + DISCOUNT */}
//             {product?.mrp && (
//               <div className="text-sm text-gray-500 mt-1">
//                 <span className="line-through mr-2">₹ {product?.mrp}</span>
//                 <span className="text-green-600 font-bold">
//                   {product?.discount_percent}% OFF
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;

// import React, { useEffect, useState } from "react";
// import { CompareImgs } from "../../Services/CompareImg";

// const CompareImage = ({ variantIds = [] }) => {
//   const [compareData, setCompareData] = useState([]);
//   const [options, setOptions] = useState([]); // dropdown list

//   // INITIAL STATIC CARDS
//   const initialCards = [
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png", price: "" },
//     { name: "Please Select a Product", image: "", price: "" },
//     { name: "Please Select a Product", image: "", price: "" },
//     { name: "Please Select a Product", image: "", price: "" },
//   ];

//   useEffect(() => {
//     const fetchCompare = async () => {
//       try {
//         const body = {
//           main_category_id: 409,
//           variant_ids: variantIds || [],
//         };

//         const res = await CompareImgs(body);

//         const arr = Array.isArray(res?.data?.data)
//           ? res.data.data
//           : Array.isArray(res?.data)
//           ? res.data
//           : [];

//         setOptions(arr); // dropdown options
//         setCompareData(initialCards); // default empty cards
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   // On selecting product from dropdown
//   const handleSelect = (index, selected) => {
//     const updated = [...compareData];
//     updated[index].name = selected.product_variant_name;

//     // FUTURE USE: backend image aayegi tab uncomment karein
//     // updated[index].image = selected.variant_image;

//     updated[index].price = selected.selling_price || "";

//     setCompareData(updated);
//   };

//   return (
//     <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
//         Compare with similar items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        
//         {/* Left Box */}
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {/* Cards */}
//         {compareData.map((card, idx) => (
//           <div
//             key={idx}
//             className="shadow-lg p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
//           >
//             <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg">
//               ✕
//             </button>

//             {/* IMAGE */}
//             {card.image ? (
//               <img
//                 src={card.image}
//                 alt="product"
//                 className="w-full h-44 object-contain mb-3"
//               />
//             ) : (
//               <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400">
//                 No Image
//               </div>
//             )}

//             {/* NAME */}
//             <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
//               {card.name}
//             </p>

//             {/* PRICE */}
//             {card.price && (
//               <p className="text-lg font-bold text-orange-600">{card.price}</p>
//             )}

//             {/* SEARCH DROPDOWN */}
//             <select
//               onChange={(e) =>
//                 handleSelect(idx, JSON.parse(e.target.value))
//               }
//               className="mt-3 p-2 border rounded-md bg-gray-50 w-full"
//             >
//               <option>Select Product</option>

//               {options.map((opt, i) => (
//                 <option key={i} value={JSON.stringify(opt)}>
//                   {opt.product_variant_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;




// import React, { useEffect, useState } from "react";
// import { CompareImgs } from "../../Services/CompareImg";

// const CompareImage = ({ variantIds = [] }) => {
//   const [compareData, setCompareData] = useState([]);
//   const [options, setOptions] = useState([]); // All available products

//   // INITIAL STATIC CARDS
//   const initialCards = [
//     { name: "Please Select a Product", image: "", price: "", id: null },
//     { name: "Please Select a Product", image: "", price: "", id: null },
//     { name: "Please Select a Product", image: "", price: "", id: null },
//     { name: "Please Select a Product", image: "", price: "", id: null },
//   ];

//   useEffect(() => {
//     const fetchCompare = async () => {
//       try {
//         const body = { main_category_id: 409, variant_ids: variantIds || [] };
//         const res = await CompareImgs(body);

//         const arr = Array.isArray(res?.data?.data)
//           ? res.data.data
//           : Array.isArray(res?.data)
//           ? res.data
//           : [];

//         // Remove duplicates by product_variant_name
//         const uniqueArr = arr.filter(
//           (v, i, self) =>
//             // i === self.findIndex((t) => t.product_variant_name === v.product_variant_name)
//           i === self.findIndex((t) => t.product_var_name === v.product_var_name)

//         );

//         setOptions(uniqueArr);
//         setCompareData(initialCards);
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   // Handle product selection per card
//   const handleSelect = (index, selected) => {
//     const updated = [...compareData];
//     updated[index] = {
//       // name: selected.product_variant_name,
//      name: selected.product_var_name,

//       image: selected.variant_image || "",
//       price: selected.selling_price || "",
//       id: selected.id,
//     };
//     setCompareData(updated);
//   };

//   // Filter options for each card to exclude already selected products
//   const getAvailableOptions = (currentIndex) => {
//     const selectedIds = compareData.map((c) => c.id).filter(Boolean);
//     return options.filter((opt) => !selectedIds.includes(opt.id) || compareData[currentIndex].id === opt.id);
//   };

//   return (
//     <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
//         Compare with similar items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         {/* Left Box */}
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {/* Product Cards */}
//         {compareData.map((card, idx) => (
//           <div
//             key={idx}
//             className="shadow-lg p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
//           >
//             <button
//               className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg"
//               onClick={() => {
//                 const updated = [...compareData];
//                 updated[idx] = { name: "Please Select a Product", image: "", price: "", id: null };
//                 setCompareData(updated);
//               }}
//             >
//               ✕
//             </button>

//             {/* IMAGE */}
//             {card.image ? (
//               <img
//                 src={card.image}
//                 alt="product"
//                 className="w-full h-44 object-contain mb-3"
//               />
//             ) : (
//               <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400">
//                 No Image
//               </div>
//             )}

//             {/* NAME */}
//             <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
//               {card.name}
//             </p>

//             {/* PRICE */}
//             {card.price && (
//               <p className="text-lg font-bold text-orange-600">{card.price}</p>
//             )}

//             {/* SEARCH DROPDOWN */}
//             <select
//               onChange={(e) =>
//                 handleSelect(idx, JSON.parse(e.target.value))
//               }
//               value={card.id ? JSON.stringify({ ...options.find(o => o.id === card.id) }) : ""}
//               className="mt-3 p-2 border rounded-md bg-gray-50 w-full"
//             >
//               <option value="">Select Product</option>
//               {getAvailableOptions(idx).map((opt, i) => (
//                 <option key={i} value={JSON.stringify(opt)}>
//                   {/* {opt.product_variant_name} */}
//                                     {opt.product_var_name}

//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;




// import React, { useEffect, useState } from "react";
// import { CompareImgs } from "../../Services/CompareImg";

// const CompareImage = ({ variantIds = [] }) => {
//   const [compareData, setCompareData] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [selectedProducts, setSelectedProducts] = useState({}); 

//   // INITIAL STATIC CARDS
//   const initialCards = [
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png", price: "2343", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",price: "8421", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png", price: "9641", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",price: "1278", id: null },
//   ];

//   useEffect(() => {
//     const fetchCompare = async () => {
//       try {
//         const body = { main_category_id: 409, variant_ids: variantIds || [] };
//         const res = await CompareImgs(body);
//         const arr = Array.isArray(res?.data?.data)
//           ? res.data.data
//           : Array.isArray(res?.data)
//           ? res.data
//           : [];

//         const uniqueArr = arr.filter(
//           (v, i, self) =>
//             i === self.findIndex((t) => t.product_var_name === v.product_var_name)
//         );

//         setOptions(uniqueArr);
//         setCompareData(initialCards);
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   // Handle selection
//   const handleSelect = (index, selected) => {
//     // Update selectedProducts state
//     setSelectedProducts((prev) => ({
//       ...prev,
//       [index]: selected,
//     }));

//     // Update compareData card
//     const updated = [...compareData];
//     updated[index] = {
//       name: selected.product_var_name,
//       image: selected.variant_image || "",
//       price: selected.selling_price || "",
//       id: selected.id,
//     };
//     setCompareData(updated);
//     setOpenDropdown(null);
//   };

//   const getAvailableOptions = (currentIndex) => {
//     const selectedIds = compareData.map((c) => c.id).filter(Boolean);
//     return options.filter(
//       (opt) => !selectedIds.includes(opt.id) || compareData[currentIndex].id === opt.id
//     );
//   };

//   return (
//     <div className="bg-gray-200 p-4 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-6 text-gray-800">
//         Compare with Similar Items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         {/* Left Box */}
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {/* Product Cards */}
//         {compareData.map((card, idx) => (
//           <div
//             key={idx}
//             className="relative shadow-lg p-4 bg-white rounded-xl flex flex-col items-center text-center"
//           >
//             {/* REMOVE BUTTON */}
//             <button
//               className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg"
//               onClick={() => {
//                 const updated = [...compareData];
//                 updated[idx] = { name: "Please Select a Product", image: "", price: "", id: null };
//                 setCompareData(updated);

//                 setSelectedProducts((prev) => ({
//                   ...prev,
//                   [idx]: null,
//                 }));
//               }}
//             >
//               ✕
//             </button>

//             {/* IMAGE */}
//             {card.image ? (
//               <img
//                 src={card.image}
//                 alt="product"
//                 className="w-full h-44 object-contain mb-3"
//               />
//             ) : (
//               <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400 font-medium">
//                 No Image
//               </div>
//             )}

//             {/* NAME */}
//             <p className="text-base font-semibold text-gray-900 mb-1">
//               {selectedProducts[idx]?.product_var_name || card.name}
//             </p>

//             {/* PRICE */}
//             <p className="text-lg font-bold text-orange-600">
//               {selectedProducts[idx]?.selling_price || card.price}
//             </p>

//             {/* DROPDOWN */}
//             <div className="w-full mt-3 relative">
//               <button
//                 className="w-full p-2 border rounded-md bg-gray-50 text-left flex justify-between items-center font-medium hover:bg-gray-100"
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === idx ? null : idx)
//                 }
//               >
//                 {selectedProducts[idx]?.product_var_name || "Select Product"}
//                 <span className="ml-2">{openDropdown === idx ? "▲" : "▼"}</span>
//               </button>

//               {openDropdown === idx && (
//                 <div className="absolute bottom-full left-0 w-full mb-2 max-h-60 overflow-y-auto bg-white border rounded-md shadow-lg z-50">
//                   {getAvailableOptions(idx).map((opt) => (
//                     <div
//                       key={opt.id}
//                       className="p-2 cursor-pointer hover:bg-orange-50 flex flex-col"
//                       onClick={() => handleSelect(idx, opt)}
//                     >
//                       <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
//                         {opt.product_var_name}
//                       </span>
//                       <span className="text-orange-600 font-bold">
//                         {opt.selling_price || ""}
//                       </span>
//                     </div>
//                   ))}
//                   {getAvailableOptions(idx).length === 0 && (
//                     <div className="p-2 text-gray-500">No options available</div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;


// import React, { useEffect, useState } from "react";
// import { CompareImgs } from "../../Services/CompareImg";

// const CompareImage = ({ variantIds = [] }) => {
//   const [compareData, setCompareData] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [selectedProducts, setSelectedProducts] = useState({});
//   const [searchTerm, setSearchTerm] = useState(""); // search input value

//   // INITIAL STATIC CARDS
//   const initialCards = [
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png", price: "2343", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",price: "8421", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png", price: "9641", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",price: "1278", id: null },
//   ];

//   useEffect(() => {
//     const fetchCompare = async () => {
//       try {
//         const body = { main_category_id: 409, variant_ids: variantIds || [] };
//         const res = await CompareImgs(body);
//         const arr = Array.isArray(res?.data?.data)
//           ? res.data.data
//           : Array.isArray(res?.data)
//           ? res.data
//           : [];

//         const uniqueArr = arr.filter(
//           (v, i, self) =>
//             i === self.findIndex((t) => t.product_var_name === v.product_var_name)
//         );

//         setOptions(uniqueArr);
//         setCompareData(initialCards);
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   const handleSelect = (index, selected) => {
//     setSelectedProducts((prev) => ({
//       ...prev,
//       [index]: selected,
//     }));

//     const updated = [...compareData];
//     updated[index] = {
//       name: selected.product_var_name,
//       image: selected.variant_image || "",
//       price: selected.selling_price || "",
//       id: selected.id,
//     };
//     setCompareData(updated);
//     setOpenDropdown(null);
//     setSearchTerm(""); // reset search
//   };

//   const getAvailableOptions = (currentIndex) => {
//     const selectedIds = compareData.map((c) => c.id).filter(Boolean);
//     return options
//       .filter(
//         (opt) => (!selectedIds.includes(opt.id) || compareData[currentIndex].id === opt.id)
//       )
//       .filter((opt) =>
//         opt.product_var_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//   };

//   return (
//     <div className="bg-gray-200 p-4 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-6 text-gray-800">
//         Compare with Similar Items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         {/* Left Box */}
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {compareData.map((card, idx) => (
//           <div
//             key={idx}
//             className="relative shadow-lg p-4 bg-white rounded-xl flex flex-col items-center text-center"
//           >
//             {/* REMOVE BUTTON */}
//             <button
//               className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg"
//               onClick={() => {
//                 const updated = [...compareData];
//                 updated[idx] = { name: "Please Select a Product", image: "", price: "", id: null };
//                 setCompareData(updated);
//                 setSelectedProducts((prev) => ({ ...prev, [idx]: null }));
//               }}
//             >
//               ✕
//             </button>

//             {/* IMAGE */}
//             {card.image ? (
//               <img
//                 src={card.image}
//                 alt="product"
//                 className="w-full h-44 object-contain mb-3"
//               />
//             ) : (
//               <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400 font-medium">
//                 No Image
//               </div>
//             )}

//             {/* NAME */}
//             <p className="text-base font-semibold text-gray-900 mb-1">
//               {selectedProducts[idx]?.product_var_name || card.name}
//             </p>

//             {/* PRICE */}
//             <p className="text-lg font-bold text-orange-600">
//               {selectedProducts[idx]?.selling_price || card.price}
//             </p>

//             {/* DROPDOWN */}
//             <div className="w-full mt-3 relative">
//               {openDropdown === idx ? (
//                 <input
//                   type="text"
//                   autoFocus
//                   placeholder="Search And Select"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full p-2 border rounded-md bg-white focus:outline-none"
//                 />
//               ) : (
//                 <button
//                   className="w-full p-2 border rounded-md bg-gray-50 text-left flex justify-between items-center font-medium hover:bg-gray-100"
//                   onClick={() => setOpenDropdown(idx)}
//                 >
//                   {selectedProducts[idx]?.product_var_name || "Select Product"}
//                   <span className="ml-2">▼</span>
//                 </button>
//               )}

//               {/* {openDropdown === idx && (
//                 <div className="absolute top-full left-0 w-full mt-1 max-h-72 overflow-y-auto bg-white border rounded-md shadow-lg z-50">
//                   {getAvailableOptions(idx).map((opt) => (
//                     <div
//                       key={opt.id}
//                       className="p-2 cursor-pointer hover:bg-orange-50 flex flex-col"
//                       onClick={() => handleSelect(idx, opt)}
//                     >
//                       <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
//                         {opt.product_var_name}
//                       </span>
//                       <span className="text-orange-600 font-bold">
//                         {opt.selling_price || ""}
//                       </span>
//                     </div>
//                   ))}
//                   {getAvailableOptions(idx).length === 0 && (
//                     <div className="p-2 text-gray-500">No options available</div>
//                   )}
//                 </div>
//               )} */}
//               {openDropdown === idx && (
//                 <div className="absolute bottom-full left-0 mb-1 w-full max-h-72 overflow-y-auto bg-white border rounded-md shadow-lg z-50">
//                {getAvailableOptions(idx).map((opt) => (
//       <div
//         key={opt.id}
//         className="p-2 cursor-pointer hover:bg-orange-50 flex flex-col"
//         onClick={() => handleSelect(idx, opt)}
//       >
//         <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
//           {opt.product_var_name}
//         </span>
//         <span className="text-orange-600 font-bold">
//           {opt.selling_price || ""}
//         </span>
//       </div>
//     ))}
//     {getAvailableOptions(idx).length === 0 && (
//       <div className="p-2 text-gray-500">No options available</div>
//     )}
//   </div>
// )}

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;



// import React, { useEffect, useState,useRef } from "react";
// import { CompareImgs } from "../../Services/CompareImg";

// const CompareImage = ({ variantIds = [] }) => {
//   const [compareData, setCompareData] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [selectedProducts, setSelectedProducts] = useState({});
//   const [searchTerm, setSearchTerm] = useState(""); // search input value
//   const calledOnce = useRef(false);


//   // INITIAL STATIC CARDS
//   const initialCards = [
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png", price: "2343", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",price: "8421", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png", price: "9641", id: null },
//     { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",price: "1278", id: null },
//   ];

//   useEffect(() => {
//     if (calledOnce.current) return;
//   calledOnce.current = true;
//     const fetchCompare = async () => {
//       try {
//         const body = { main_category_id: 409, variant_ids: variantIds || [] };
//         const res = await CompareImgs(body);
//         const arr = Array.isArray(res?.data?.data)
//           ? res.data.data
//           : Array.isArray(res?.data)
//           ? res.data
//           : [];

//         const uniqueArr = arr.filter(
//           (v, i, self) =>
//             i === self.findIndex((t) => t.product_var_name === v.product_var_name)
//         );

//         setOptions(uniqueArr);
//         setCompareData(initialCards);
//       } catch (err) {
//         console.error("Compare API Error:", err.message);
//       }
//     };

//     fetchCompare();
//   }, [variantIds]);

//   const handleSelect = (index, selected) => {
//     setSelectedProducts((prev) => ({
//       ...prev,
//       [index]: selected,
//     }));

//     const updated = [...compareData];
//     updated[index] = {
//       name: selected.product_var_name,
//       image: selected.variant_image || "",
//       price: selected.selling_price || "",
//       id: selected.id,
//     };
//     setCompareData(updated);
//     setOpenDropdown(null);
//     setSearchTerm(""); // reset search
//   };

//   const getAvailableOptions = (currentIndex) => {
//     const selectedIds = compareData.map((c) => c.id).filter(Boolean);
//     return options
//       .filter(
//         (opt) => (!selectedIds.includes(opt.id) || compareData[currentIndex].id === opt.id)
//       )
//       .filter((opt) =>
//         opt.product_var_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//   };

//   return (
//     <div className="bg-gray-200 p-4 sm:p-5 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-6 text-gray-800">
//         Compare with Similar Items
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         {/* Left Box */}
//         <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//           <p className="text-sm sm:text-base font-bold text-orange-600">
//             Compare Features
//           </p>
//         </div>

//         {compareData.map((card, idx) => (
//           <div
//             key={idx}
//             className="relative shadow-lg p-4 bg-white rounded-xl flex flex-col items-center text-center"
//           >
//             {/* REMOVE BUTTON */}
//             <button
//               className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg"
//               onClick={() => {
//                 const updated = [...compareData];
//                 updated[idx] = { name: "Please Select a Product", image: "", price: "", id: null };
//                 setCompareData(updated);
//                 setSelectedProducts((prev) => ({ ...prev, [idx]: null }));
//               }}
//             >
//               ✕
//             </button>

//             {/* IMAGE */}
//             {card.image ? (
//               <img
//                 src={card.image}
//                 alt="product"
//                 className="w-full h-44 object-contain mb-3"
//               />
//             ) : (
//               <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400 font-medium">
//                 No Image
//               </div>
//             )}

//             {/* NAME */}
//             <p className="text-base font-semibold text-gray-900 mb-1">
//               {selectedProducts[idx]?.product_var_name || card.name}
//             </p>

//             {/* PRICE */}
//             <p className="text-lg font-bold text-orange-600">
//               {selectedProducts[idx]?.selling_price || card.price}
//             </p>

//             {/* DROPDOWN */}
//             <div className="w-full mt-3 relative">
//               {openDropdown === idx ? (
//                 <input
//                   type="text"
//                   autoFocus
//                   placeholder="Search And Select"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full p-2 border rounded-md bg-white focus:outline-none"
//                 />
//               ) : (
//                 <button
//                   className="w-full p-2 border rounded-md bg-gray-50 text-left flex justify-between items-center font-medium hover:bg-gray-100"
//                   onClick={() => setOpenDropdown(idx)}
//                 >
//                   {selectedProducts[idx]?.product_var_name || "Select Product"}
//                   <span className="ml-2">▼</span>
//                 </button>
//               )}

//               {/* {openDropdown === idx && (
//                 <div className="absolute top-full left-0 w-full mt-1 max-h-72 overflow-y-auto bg-white border rounded-md shadow-lg z-50">
//                   {getAvailableOptions(idx).map((opt) => (
//                     <div
//                       key={opt.id}
//                       className="p-2 cursor-pointer hover:bg-orange-50 flex flex-col"
//                       onClick={() => handleSelect(idx, opt)}
//                     >
//                       <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
//                         {opt.product_var_name}
//                       </span>
//                       <span className="text-orange-600 font-bold">
//                         {opt.selling_price || ""}
//                       </span>
//                     </div>
//                   ))}
//                   {getAvailableOptions(idx).length === 0 && (
//                     <div className="p-2 text-gray-500">No options available</div>
//                   )}
//                 </div>
//               )} */}
//               {openDropdown === idx && (
//                 <div className="absolute bottom-full left-0 mb-1 w-full max-h-72 overflow-y-auto bg-white border rounded-md shadow-lg z-50">
//                {getAvailableOptions(idx).map((opt) => (
//       <div
//         key={opt.id}
//         className="p-2 cursor-pointer hover:bg-orange-50 flex flex-col"
//         onClick={() => handleSelect(idx, opt)}
//       >
//         <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
//           {opt.product_var_name}
//         </span>
//         <span className="text-orange-600 font-bold">
//           {opt.selling_price || ""}
//         </span>
//       </div>
//     ))}
//     {getAvailableOptions(idx).length === 0 && (
//       <div className="p-2 text-gray-500">No options available</div>
//     )}
//   </div>
// )}

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareImage;



import React, { useEffect, useState, useRef } from "react";
import { CompareImgs } from "../../Services/CompareImg";

const CompareImage = ({ variantIds = [] }) => {
  const [compareData, setCompareData] = useState([]);
  const [options, setOptions] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const calledOnce = useRef(false);
  const updated = [...compareData];


  
  const initialCards = [
    { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png", price: "2343", id: null },
    { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",price: "8421", id: null },
    { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png", price: "9641", id: null },
    { name: "Please Select a Product", image:"https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",price: "1278", id: null },
  ];

  useEffect(() => {
    if (calledOnce.current) return;
    calledOnce.current = true;

    (async () => {
      try {
        const body = { main_category_id: 409, variant_ids: variantIds }; 

        const res = await CompareImgs(body);
        console.log("API Response:", res?.data); // <-- log API payload
        const arr = Array.isArray(res?.data?.data) ? res.data.data : Array.isArray(res?.data) ? res.data : [];
        setOptions(arr);
        setCompareData(initialCards);
      } catch (err) {
        console.error("Compare API Error:", err.message);
      }
    })();
  }, [variantIds]);

  const handleSelect = (index, selected) => {
    console.log("Selected Product:", selected); 
    setSelectedProducts((prev) => ({ ...prev, [index]: selected }));
    // const updated = [...compareData];
    // updated[index] = {
    //   name: selected.product_var_name,
    //   image: selected.variant_image || "",
    //   price: selected.selling_price || "",
    //   id: selected.id,
    // };
    // setCompareData(updated);
    const updated = [...compareData];
updated[index] = {
  name: selected.product_var_name || compareData[index].name,
  image: selected.variant_image || compareData[index].image,
  price: selected.selling_price || compareData[index].price,
  id: selected.id,
};
setCompareData(updated);

    setOpenDropdown(null);
    setSearchTerm("");
  };

  const getAvailableOptions = (index) => {
    const selectedIds = compareData.map((c) => c.id).filter(Boolean);
    return options
      .filter((opt) => !selectedIds.includes(opt.id) || compareData[index].id === opt.id)
      .filter((opt) => opt.product_var_name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Compare with Similar Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
          <p className="text-sm sm:text-base font-bold text-orange-600">Compare Features</p>
        </div>

        {compareData.map((card, idx) => (
          <div key={idx} className="relative shadow-lg p-4 bg-white rounded-xl flex flex-col items-center text-center">
            <button
              className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg"
              onClick={() => {
                const updated = [...compareData];
                updated[idx] = { name: "Please Select a Product", image: "", price: "", id: null };
                setCompareData(updated);
                setSelectedProducts((prev) => ({ ...prev, [idx]: null }));
              }}
            >
              ✕
            </button>

            {card.image ? (
              <img src={card.image} alt="product" className="w-full h-44 object-contain mb-3" />
            ) : (
              <div className="w-full h-44 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400 font-medium">
                No Image
              </div>
            )}

            <p className="text-base font-semibold text-gray-900 mb-1">
              {selectedProducts[idx]?.product_var_name || card.name}
            </p>
            <p className="text-lg font-bold text-orange-600">{selectedProducts[idx]?.selling_price || card.price}</p>

            <div className="w-full mt-3 relative">
              {openDropdown === idx ? (
                <input
                  type="text"
                  autoFocus
                  placeholder="Search And Select"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white focus:outline-none"
                />
              ) : (
                <button
                  className="w-full p-2 border rounded-md bg-gray-50 text-left flex justify-between items-center font-medium hover:bg-gray-100"
                  onClick={() => setOpenDropdown(idx)}
                >
                  {selectedProducts[idx]?.product_var_name || "Select Product"} <span className="ml-2">▼</span>
                </button>
              )}

              {openDropdown === idx && (
                <div className="absolute bottom-full left-0 mb-1 w-full max-h-72 overflow-y-auto bg-white border rounded-md shadow-lg z-50">
                  {getAvailableOptions(idx).map((opt) => (
                    <div key={opt.id} className="p-2 cursor-pointer hover:bg-orange-50 flex flex-col" onClick={() => handleSelect(idx, opt)}>
                      <span className="font-bold text-gray-800 text-sm sm:text-base truncate">{opt.product_var_name}</span>
                      <span className="text-orange-600 font-bold">{opt.selling_price || ""}</span>
                    </div>
                  ))}
                  {getAvailableOptions(idx).length === 0 && <div className="p-2 text-gray-500">No options available</div>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareImage;
