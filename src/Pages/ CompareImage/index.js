// import React from 'react'

// const CompareImage = () => {
//   return (
//     <>

// {/* Compare with similar items */}
// <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
//   {/* Heading */}
//   <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
//     Compare with similar items
//   </h2>

//   {/* Main Wrapper */}
//   <div className="overflow-x-auto">
//     <div className="grid grid-cols-2 py-8 px-4 bg-gray-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 min-w-[600px] md:min-w-0">
      
//       {/* Left Column */}
//       <div className="flex items-center justify-center sm:justify-start bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
//         <p className="text-sm sm:text-base font-bold text-orange-600">
//           Compare Features
//         </p>
//       </div>

//       {/* Product Cards */}
//       {[
//         {
//           image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png",
//           name: "Apple iPhone 17 Pro Max (Cosmic Orange, 512GB)",
//           price: "₹ 1,49,900",
//           label: "You are viewing :",
//           offer: null
//         },
//         {
//           image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",
//           name: "Samsung Galaxy S25 Edge 5G (Titanium Jetblack, 12GB-512GB)",
//           price: "₹ 1,21,999",
//           label: null,
//           offer: null
//         },
//         {
//           image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png",
//           name: "Vivo X Fold5 5G (Titanium Grey, 16GB-512GB)",
//           price: "₹ 1,49,999",
//           label: null,
//           offer: { oldPrice: "₹ 1,59,999", discount: "6% OFF" }
//         },
//         {
//           image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",
//           name: "Apple iPhone Air (Light Gold, 1TB)",
//           price: "₹ 1,59,900",
//           label: null,
//           offer: null
//         }
//       ].map((product, idx) => (
//         <div
//           key={idx}
//           className="shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
//         >
//           {product.label && (
//             <p className="text-sm text-orange-600 font-semibold mb-1">{product.label}</p>
//           )}
//           <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg">
//             ✕
//           </button>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-44 sm:h-48 object-contain mb-3"
//           />
//           <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
//             {product.name}
//           </p>
//           <p className="text-lg font-bold text-orange-600">{product.price}</p>
//           {product.offer && (
//             <div className="text-sm text-gray-500 mt-1">
//               <span className="line-through mr-2">{product.offer.oldPrice}</span>
//               <span className="text-green-600 font-bold">{product.offer.discount}</span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default CompareImage


import React from "react";

const CompareImage = () => {
  const compareData = [
    {
      image:
        "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png",
      name: "Apple iPhone 17 Pro Max (Cosmic Orange, 512GB)",
      price: "₹ 1,49,900",
      label: "You are viewing :",
      offer: null,
    },
    {
      image:
        "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/samsung-galaxy-s25-edge-5g-titanium-Jet-Black-512gb-12gb-ram-front-back-view.png",
      name: "Samsung Galaxy S25 Edge 5G (Titanium Jetblack, 12GB-512GB)",
      price: "₹ 1,21,999",
      label: null,
      offer: null,
    },
    {
      image:
        "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Vivo-x-fold5-5g-titanium-grey-16gb-512gb-Front-Back-Fold-View.png",
      name: "Vivo X Fold5 5G (Titanium Grey, 16GB-512GB)",
      price: "₹ 1,49,999",
      label: null,
      offer: { oldPrice: "₹ 1,59,999", discount: "6% OFF" },
    },
    {
      image:
        "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=175,height=175,quality=75/product/Apple-iphone-air-light-gold-1tb-Front-Back-View.png",
      name: "Apple iPhone Air (Light Gold, 1TB)",
      price: "₹ 1,59,900",
      label: null,
      offer: null,
    },
  ];

  return (
    <>
      {/* Compare with similar items */}
      <div className="bg-white p-4 py-6 sm:p-5 rounded-lg shadow-md">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-800">
          Compare with similar items
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* Left Box */}
          <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
            <p className="text-sm sm:text-base font-bold text-orange-600">
              Compare Features
            </p>
          </div>

          {/* Product Cards */}
          {compareData.map((product, idx) => (
            <div
              key={idx}
              className="shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 bg-white rounded-xl relative flex flex-col items-center text-center"
            >
              {/* Label */}
              {product.label && (
                <p className="text-sm text-orange-600 font-semibold mb-1">
                  {product.label}
                </p>
              )}

              {/* Remove Button */}
              <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500 text-lg">
                ✕
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 sm:h-48 object-contain mb-3"
              />

              {/* Name */}
              <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                {product.name}
              </p>

              {/* Price */}
              <p className="text-lg font-bold text-orange-600">
                {product.price}
              </p>

              {/* Offer */}
              {product.offer && (
                <div className="text-sm text-gray-500 mt-1">
                  <span className="line-through mr-2">
                    {product.offer.oldPrice}
                  </span>
                  <span className="text-green-600 font-bold">
                    {product.offer.discount}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompareImage;
