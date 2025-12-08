// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const ProductSpecs = () => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="w-full border rounded-lg overflow-hidden p-4 sm:p-5">

//       {/* ===== GENERAL ===== */}
//       <div className="border-b flex flex-col sm:flex-row">
//         <h3 className="sm:w-40 px-3 py-2 font-semibold border-r bg-gray-200">
//           GENERAL
//         </h3>

//         <div className="overflow-x-auto w-full">
//           <table className="w-full text-sm min-w-[300px] sm:min-w-full">
//             <tbody>
//               <tr className="border-b">
//                 <td className="sm:w-1/3 px-3 py-2 font-medium">Network Type</td>
//                 <td className="px-3 py-2">2G/3G/4G/5G/VoLTE supported</td>
//               </tr>

//               <tr>
//                 <td className="px-3 py-2 font-medium bg-gray-200">SIM Type</td>
//                 <td className="px-3 py-2 bg-gray-200">
//                   Dual SIM (nano-SIM and eSIM)
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ===== DIMENSIONS ===== */}
//       <div className="border-b flex flex-col sm:flex-row">
//         <h3 className="sm:w-40 bg-gray-200 px-3 py-2 font-semibold border-r">
//           DIMENSIONS
//         </h3>

//         <div className="overflow-x-auto w-full">
//           <table className="w-full text-sm min-w-[300px] sm:min-w-full">
//             <tbody>
//               <tr className="border-b">
//                 <td className="sm:w-1/3 px-3 py-2 font-medium">Size</td>
//                 <td className="px-3 py-2">78 x 163.4 x 8.75 mm</td>
//               </tr>

//               <tr>
//                 <td className="px-3 py-2 font-medium bg-gray-200">Weight</td>
//                 <td className="px-3 py-2 bg-gray-200">231 g</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ===== DISPLAY ===== */}
//       <div className="border-b flex flex-col sm:flex-row">
//         <h3 className="sm:w-40 bg-gray-200 px-3 py-2 font-semibold border-r">
//           DISPLAY
//         </h3>

//         <div className="overflow-x-auto w-full">
//           <table className="w-full text-sm min-w-[300px] sm:min-w-full">
//             <tbody>
//               <tr className="border-b">
//                 <td className="sm:w-1/3 px-3 py-2 font-medium">Display Size</td>
//                 <td className="px-3 py-2">6.9 inch (17.42 cm)</td>
//               </tr>

//               <tr className="border-b">
//                 <td className="px-3 py-2 font-medium bg-gray-200">Type</td>
//                 <td className="px-3 py-2 bg-gray-200">Super Retina XDR</td>
//               </tr>

//               <tr className="border-b">
//                 <td className="px-3 py-2 font-medium">Refresh Rate</td>
//                 <td className="px-3 py-2">120Hz</td>
//               </tr>

//               <tr>
//                 <td className="px-3 py-2 font-medium bg-gray-200">Resolution</td>
//                 <td className="px-3 py-2 bg-gray-200">
//                   2868×1320 px at 460ppi
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ===== SHOW MORE BUTTON ===== */}
//       <div className="flex justify-end p-2 sm:p-4">
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="flex items-center gap-2 text-red-600 font-semibold"
//         >
//           {showMore ? "Show Less" : "Read More"}
//           {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//         </button>
//       </div>

//       {/* ===== EXTRA CONTENT WHEN SHOW MORE ===== */}
//       {showMore && (
//         <div className="p-4 text-sm text-gray-700">
//           {/* Add more tables or details here */}
//           <p>Additional specifications will appear here...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductSpecs;


// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { Specification } from "../../Services/ Specifications";
// // import { Specification } from "../../Services/Specification";

// const ProductSpecs = ({ productId }) => {
//   const [specs, setSpecs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     const fetchSpecs = async () => {
//       setLoading(true);
//       const data = await Specification(productId);
//       setSpecs(data || []);
//       setLoading(false);
//     };

//     if (productId) fetchSpecs();
//   }, [productId]);

//   if (loading) return <div className="p-4">Loading specifications...</div>;
//   if (!specs.length) return <div className="p-4">No specifications available.</div>;

//   return (
//     <div className="w-full border rounded-lg overflow-hidden p-4 sm:p-5">
//       {specs.map((section, idx) => (
//         <div key={idx} className="border-b flex flex-col sm:flex-row">
//           <h3 className="sm:w-40 px-3 py-2 font-semibold border-r bg-gray-200">
//             {section.section_name || "Section"}
//           </h3>
//           <div className="overflow-x-auto w-full">
//             <table className="w-full text-sm min-w-[300px] sm:min-w-full">
//               <tbody>
//                 {section.specifications?.map((spec, i) => (
//                   <tr
//                     key={i}
//                     className={i % 2 === 0 ? "border-b" : "border-b bg-gray-200"}
//                   >
//                     <td className="sm:w-1/3 px-3 py-2 font-medium">{spec.title}</td>
//                     <td className="px-3 py-2">{spec.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}

//       {/* Show More / Show Less */}
//       <div className="flex justify-end p-2 sm:p-4">
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="flex items-center gap-2 text-red-600 font-semibold"
//         >
//           {showMore ? "Show Less" : "Read More"}
//           {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//         </button>
//       </div>

//       {showMore &&
//         specs
//           .filter((section) => section.extra?.length)
//           .map((section, idx) => (
//             <div key={idx} className="p-4 text-sm text-gray-700">
//               <h4 className="font-semibold mt-2">{section.section_name}</h4>
//               <ul className="list-disc ml-5">
//                 {section.extra.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//     </div>
//   );
// };

// export default ProductSpecs;

// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { Specification } from "../../Services/ Specifications";

// const ProductSpecs = ({ productId }) => {
//   const [specs, setSpecs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchSpecs = async () => {
//       setLoading(true);
//       const data = await Specification(productId);
//       setSpecs(data);
//       setLoading(false);
//     };

//     fetchSpecs();
//   }, [productId]);

//   if (!productId) return <div className="p-4">Loading product ID...</div>;
//   if (loading) return <div className="p-4">Loading specifications...</div>;
//   if (!specs.length) return <div className="p-4">No specifications available.</div>;

//   return (
//     <div className="w-full border rounded-lg overflow-hidden p-4 sm:p-5">
//       {specs.map((section, idx) => (
//         <div key={idx} className="border-b flex flex-col sm:flex-row">
//           <h3 className="sm:w-40 px-3 py-2 font-semibold border-r bg-gray-200">
//             {section.section_name || "Section"}
//           </h3>

//           <div className="overflow-x-auto w-full">
//             <table className="w-full text-sm min-w-[300px] sm:min-w-full">
//               <tbody>
//                 {section.specifications?.map((spec, i) => (
//                   <tr
//                     key={i}
//                     className={i % 2 === 0 ? "border-b" : "border-b bg-gray-200"}
//                   >
//                     <td className="sm:w-1/3 px-3 py-2 font-medium">{spec.title}</td>
//                     <td className="px-3 py-2">{spec.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}

//       {/* Show More / Show Less */}
//       <div className="flex justify-end p-2 sm:p-4">
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="flex items-center gap-2 text-red-600 font-semibold"
//         >
//           {showMore ? "Show Less" : "Read More"}
//           {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//         </button>
//       </div>

//       {showMore &&
//         specs
//           .filter((section) => section.extra?.length)
//           .map((section, idx) => (
//             <div key={idx} className="p-4 text-sm text-gray-700">
//               <h4 className="font-semibold mt-2">{section.section_name}</h4>
//               <ul className="list-disc ml-5">
//                 {section.extra.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//     </div>
//   );
// };

// export default ProductSpecs;

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Specification } from "../../Services/ Specifications";
// import { Specification } from "../../Services/Specification"; // correct import

const ProductSpecs = ({ productId }) => {
  const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  // Hardcoded test variant_id if no productId passed
  const testVariantId = 1364;

  useEffect(() => {
    const idToUse = productId || testVariantId; // use prop or test id
    if (!idToUse) return;

    const fetchSpecs = async () => {
      setLoading(true);
      const data = await Specification(idToUse); // call service
      setSpecs(data);
      setLoading(false);
    };

    fetchSpecs();
  }, [productId]);

  if (!productId && !testVariantId) return <div className="p-4">Loading product ID...</div>;
  if (loading) return <div className="p-4">Loading specifications...</div>;
  if (!specs.length) return <div className="p-4">No specifications available.</div>;

  return (
    <div className="w-full border rounded-lg overflow-hidden p-4 sm:p-5">
      {specs.map((section, idx) => (
        <div key={idx} className="border-b flex flex-col sm:flex-row">
          <h3 className="sm:w-40 px-3 py-2 font-semibold border-r bg-gray-200">
            {section.section_name || "Section"}
          </h3>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-sm min-w-[300px] sm:min-w-full">
              <tbody>
                {section.specifications?.map((spec, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "border-b" : "border-b bg-gray-200"}
                  >
                    <td className="sm:w-1/3 px-3 py-2 font-medium">{spec.title}</td>
                    <td className="px-3 py-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Show More / Show Less */}
      <div className="flex justify-end p-2 sm:p-4">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 text-red-600 font-semibold"
        >
          {showMore ? "Show Less" : "Read More"}
          {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {showMore &&
        specs
          .filter((section) => section.extra?.length)
          .map((section, idx) => (
            <div key={idx} className="p-4 text-sm text-gray-700">
              <h4 className="font-semibold mt-2">{section.section_name}</h4>
              <ul className="list-disc ml-5">
                {section.extra.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  );
};

export default ProductSpecs;
