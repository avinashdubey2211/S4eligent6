
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "Apple iPhone 17 Pro Max ( Cosmic Orange, 256GB )",
    price: "₹1,49,,990",
    
    img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png",
    path: "./ProductDetail"
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Fold7 5G ( Blue Shadow, 12GB-512GB )",
    color: "Carbon Black,8GB-512GB",
    price: "₹1,86,999",
    path: "./ProductDetail",
  
    img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Samsung-galaxy-z-fold-7-5g-blue-shadow-512gb-12gb-ram-Front-Back-Fold-View.png"
  },
  {
    id: 3,
    name: "Samsung Galaxy Z Flip7 5G ( Coral Red, 12GB-512GB )",
    color: "Natural Silver,8GB-512GB",
    price: "₹1.21,990",
    path: "./ProductDetail",
    // off: "17% OFF",
    img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Samsung-galaxy-z-flip7-5g-coral-red-12gb-512gb-Full-View.png"
  },
  {
    id: 4,
    name: "Apple iPhone 17 ( Black, 512GB )",
    color: "Mecha Gray,16GB-512GB",
    price: "₹1,02,990",
    path: "./ProductDetail",
    // off: "28% OFF",
  img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Apple-iphone-17-black-512gb-Front-Back-View.png"  },
  {
    id: 5,
    name: "Vivo Y400 5G ( Olive Green, 8GB-256GB )",
    color: "Mica Silver,8GB-512GB",
    price: "₹23,999",
     path: "./mobile_page",
    // off: "11% OFF",
  img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Vivo-y400-5g-olive-green-8gb-256gb-Front-Back-View.png"  },
  {
    id: 6,
    name: "Realme 15 Pro 5G ( Flowing Silver, 12GB-256GB )",
    color: "Arctic Grey,8GB-512GB",
    price: "₹35,999",
    path: "./ProductDetail",
    // off: "15% OFF",
  img: "https://img-prd-pim.poorvika.com/product/Realme-15-pro-5g-flowing-silver-12gb-256gb-Front-Back-View.webp"  },
  {
    id: 7,
    name: "Realme 15 5G ( Flowing Silver, 12GB-256GB )",
    color: "Cool Silver,16GB-512GB",
    price: "₹29,999",
    path: "./ProductDetail",
    // off: "36% OFF",
  img: "https://img-prd-pim.poorvika.com/product/Realme-15-5g-flowing-silver-12gb-256gb-Front-Back-View.webp"  },
  {
    id: 8,
    name: "Samsung Galaxy Z Flip7 FE 5G ( White, 8GB-256GB )",
    color: "Platinum Silver,16GB-512GB ",
    price: "₹95,999",
    path: "./ProductDetail",
    // off: "2% OFF",
  img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Samsung-galaxy-z-flip7-fe-5g-white-8gb-256gb-Full-View-Image.png"  },
  {
    id: 9,
    name: "Vivo V60 5G ( Auspicious Gold, 16GB-512GB )",
    color: "Luna Grey,24GB-512GB",
    price: "₹45,999",
    path: "./ProductDetail",
    // off: "10% OFF",
  img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Vivo-v60-5g-auspicious-gold-16gb-512gb-Front-Back-View.png"  },
  {
    id: 10,
    name: "Tecno Pova 7 5G ( Geek Black, 8GB-256GB )",
    color: "Cool Silver,8GB-512GB",
    price: "₹15,999",
    path: "./ProductDetail",
    // off: "20% OFF",
  img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=131,height=131,quality=75/product/Tecno-pova-7-5g-geek-black-8gb-256gb-Front-Back-View.png"  },
];


export default function RelatedProducts() {
  
    const navigate = useNavigate();

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pt-0 w-full items-center h-full py-4 bg-[#d7e0e0] ">
      {/* Title + Arrows */}
      <div className="flex w-screen justify-between items-center p-1 mb-3">
        <h2 className="text-sm sm:text-sm md:text-xl font-bold  text-gray-800"> Related Products</h2>
        <div className="flex gap-2 px-3">
        {/* <button
             onClick={() => navigate("/laptop_all")}

             className="text-blue-600 text-xs sm:text-sm md:text-base font-semibold hover:underline">
            See All
          </button> */}
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-4 scroll-smooth"
      >
        {products.map((p, i) => (
          <div
            key={p.id}
            className={`min-w-[250px] max-w-[259px] rounded-xl p-4 shadow-md flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer
            
              ${
                i % 3 === 0
                  ? "bg-gradient-to-br from-blue-50 to-blue-100"
                  : i % 3 === 1
                  ? "bg-gradient-to-br from-pink-50 to-pink-100"
                  : "bg-gradient-to-br from-green-50 to-green-100"
              }`}
                          onClick={() => p.path && navigate(p.path)}

          >
            <img
              src={p.img}
              alt={p.name}
              className="h-36 object-contain mb-3 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
            />
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
              {p.name}
            </h3>
            <p className="text-gray-500 text-xs">{p.color}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-[#ff7708] font-bold">{p.price}</span>
              {/* <span className="text-xs bg-black text-white px-2 py-1 rounded">
                {p.off}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}