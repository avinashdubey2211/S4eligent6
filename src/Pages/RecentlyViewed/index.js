
import React from "react";
import { CiHeart } from "react-icons/ci";

const products = [
  {
    id: 1,
    name: "Apple iPhone 17 Pro Max",
    desc: "Cosmic Orange, 2TB",
    price: "₹2,29,900",
    img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-iPhone-17-Pro-Max-Cosmic-Orange-2tB-front-back-view.png",
  },
  {
    id: 2,
    name: "Oppo Find X9 Pro 5G",
    desc: "Silk White, 16GB-512GB",
    price: "₹1,09,999",
    img: "https://img-prd-pim.poorvika.com/product/Oppo-find-x9-pro-5g-silk-white-16gb-512gb-Front-Back-View.webp",
  },
  {
    id: 3,
    name: "Oppo Find X9 Pro 5G",
    desc: "Titanium Charcoal, 16GB-512GB",
    price: "₹1,09,999",
        // offer: "5% OFF",

    img: "https://img-prd-pim.poorvika.com/product/Oppo-find-x9-pro-5g-titanium-charcoal-16gb-512gb-Front-Back-View.webp",
  },
  {
    id: 4,
    name: "OnePlus 15 (Ultra Violet)",
    desc: "12GB-256GB",
    price: "₹72,999",
    oldPrice: "₹76,999",
    // offer: "5% OFF",
    img: "https://img-prd-pim.poorvika.com/product/Oneplus-15-ultra-violet-12gb-256gb-Front-Back-View.webp",
  },
];

export default function RecentlyViewed() {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4">
        Recently Viewed
      </h2>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 w-max">
          {products.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 hover:shadow-md transition bg-white w-[200px]"
            >
              {/* ❤️ Heart Icon */}
              <CiHeart className="text-gray-700 hover:text-red-500 transition-colors" size={26} />

              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[150px] object-contain mb-3"
              />

              <p className="text-sm font-semibold leading-tight">{p.name}</p>
              <p className="text-gray-500 text-xs">{p.desc}</p>

              <div className="mt-2">
                <p className="text-green-600 font-bold">{p.price}</p>

                {p.oldPrice && (
                  <p className="text-xs text-gray-500 line-through">{p.oldPrice}</p>
                )}

                {p.offer && (
                  <span className="text-xs text-orange-600 font-bold">
                    {p.offer}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
