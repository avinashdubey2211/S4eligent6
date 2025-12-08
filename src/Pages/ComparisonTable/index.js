// import { useState } from "react";

// // Modern toggle button component
// const ToggleButton = ({ on, setOn }) => (
//   <button
//     onClick={() => setOn(!on)}
//     className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
//       on ? "bg-green-500" : "bg-gray-300"
//     }`}
//   >
//     <div
//       className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
//         on ? "translate-x-6" : ""
//       }`}
//     />
//   </button>
// );

// const ComparisonTable = () => {
//   const [openSections, setOpenSections] = useState({
//     general: true,
//     dimensions: true,
//     display: true,
//   });

//   const toggleSection = (section) => {
//     setOpenSections({ ...openSections, [section]: !openSections[section] });
//   };

//   return (
//     <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md font-sans text-gray-800">
//       {/* GENERAL */}
//       <div className="mb-4 border-b pb-2 flex flex-col">
//         <div className="flex items-center font-semibold text-lg text-gray-800">
//           <ToggleButton
//             on={openSections.general}
//             setOn={() => toggleSection("general")}
//           />
//           <span className="ml-3">GENERAL</span>
//         </div>
//         {openSections.general && (
//           <div className="mt-2 text-sm">
//             <table className="w-full table-fixed text-left">
//               <tbody>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Network Type</td>
//                   <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
//                   <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
//                   <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
//                   <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">SIM Type</td>
//                   <td className="py-2">Nano SIM & eSIM</td>
//                   <td className="py-2">Nano SIM & eSIM</td>
//                   <td className="py-2">Nano-SIM (4FF), Embedded-SIM</td>
//                   <td className="py-2">Dual SIM (Single Nano SIM and eSIM)</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* DIMENSIONS */}
//       <div className="mb-4 border-b pb-2 flex flex-col">
//         <div className="flex items-center font-semibold text-lg text-gray-800">
//           <ToggleButton
//             on={openSections.dimensions}
//             setOn={() => toggleSection("dimensions")}
//           />
//           <span className="ml-3">DIMENSIONS</span>
//         </div>
//         {openSections.dimensions && (
//           <div className="mt-2 text-sm">
//             <table className="w-full table-fixed text-left">
//               <tbody>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Width x Height x Depth</td>
//                   <td className="py-2">76.5 x 161.3 x 8.3 mm</td>
//                   <td className="py-2">77.6 x 162.8 x 8.2 mm</td>
//                   <td className="py-2">75.2 x 166.7 x 6.5 mm | 75.2 x 85.5 x 13.7 mm (Folded)</td>
//                   <td className="py-2">76.6 x 162.8 x 8.5 mm</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Weight</td>
//                   <td className="py-2">224g</td>
//                   <td className="py-2">218 g</td>
//                   <td className="py-2">188 g</td>
//                   <td className="py-2">232 g</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* DISPLAY */}
//       <div className="mb-4 border-b pb-2 flex flex-col">
//         <div className="flex items-center font-semibold text-lg text-gray-800">
//           <ToggleButton
//             on={openSections.display}
//             setOn={() => toggleSection("display")}
//           />
//           <span className="ml-3">DISPLAY</span>
//         </div>
//         {openSections.display && (
//           <div className="mt-2 text-sm">
//             <table className="w-full table-fixed text-left">
//               <tbody>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Display Size</td>
//                   <td className="py-2">17.23 cm (6.78 inch)</td>
//                   <td className="py-2">17.42 cm (6.9 inch)</td>
//                   <td className="py-2">17.41 cm / 17.15 cm Main | 10.48 cm / 10.23 cm Sub</td>
//                   <td className="py-2">17.1 cm (6.8-inch)</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Display Type</td>
//                   <td className="py-2">AMOLED</td>
//                   <td className="py-2">Dynamic AMOLED 2X</td>
//                   <td className="py-2">Dynamic AMOLED 2X (Main) | Super AMOLED (Sub)</td>
//                   <td className="py-2">LTPO OLED</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Refresh Rate</td>
//                   <td className="py-2">120Hz</td>
//                   <td className="py-2">120 Hz</td>
//                   <td className="py-2">120 Hz</td>
//                   <td className="py-2">Up To 120 Hz</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Resolution</td>
//                   <td className="py-2">FHD+ (2760 × 1256)</td>
//                   <td className="py-2">3120 × 1440 (Quad HD+)</td>
//                   <td className="py-2">2520 × 1080 (FHD+)</td>
//                   <td className="py-2">QHD+ (1344 × 2992)</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="py-2 font-medium">Protection</td>
//                   <td className="py-2">Corning® Gorilla® Glass Victus® 2</td>
//                   <td className="py-2">N/A</td>
//                   <td className="py-2">N/A</td>
//                   <td className="py-2">Corning® Gorilla® Glass Victus® 2 Cover Glass</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ComparisonTable;


import { useState } from "react";

// Modern toggle button component
const ToggleButton = ({ on, setOn }) => (
  <button
    onClick={() => setOn(!on)}
    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
      on ? "bg-green-500" : "bg-gray-300"
    }`}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
        on ? "translate-x-6" : ""
      }`}
    />
  </button>
);

const ComparisonTable = () => {
  const [openGeneral, setOpenGeneral] = useState(true);
  const [openDimensions, setOpenDimensions] = useState(true);
  const [openDisplay, setOpenDisplay] = useState(true);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md font-sans text-gray-800">
      {/* GENERAL */}
      <div className="mb-6 border-b pb-2">
        <div className="flex items-center font-semibold text-lg mb-2">
          <ToggleButton on={openGeneral} setOn={setOpenGeneral} />
          <span className="ml-3">GENERAL</span>
        </div>
        {openGeneral && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] table-auto text-left text-sm sm:text-base">
              <tbody>
                <tr className="border-t">
                  <td className="py-2 font-medium">Network Type</td>
                  <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
                  <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
                  <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
                  <td className="py-2">2G/3G/4G/5G/VoLTE supported</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-medium">SIM Type</td>
                  <td className="py-2">Nano SIM & eSIM</td>
                  <td className="py-2">Nano SIM & eSIM</td>
                  <td className="py-2">Nano-SIM (4FF), Embedded-SIM</td>
                  <td className="py-2">Dual SIM (Single Nano SIM and eSIM)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* DIMENSIONS */}
      <div className="mb-6 border-b pb-2">
        <div className="flex items-center font-semibold text-lg mb-2">
          <ToggleButton on={openDimensions} setOn={setOpenDimensions} />
          <span className="ml-3">DIMENSIONS</span>
        </div>
        {openDimensions && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] table-auto text-left text-sm sm:text-base">
              <tbody>
                <tr className="border-t">
                  <td className="py-2 font-medium">Width x Height x Depth</td>
                  <td className="py-2">76.5 x 161.3 x 8.3 mm</td>
                  <td className="py-2">77.6 x 162.8 x 8.2 mm</td>
                  <td className="py-2">75.2 x 166.7 x 6.5 mm | 75.2 x 85.5 x 13.7 mm (Folded)</td>
                  <td className="py-2">76.6 x 162.8 x 8.5 mm</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-medium">Weight</td>
                  <td className="py-2">224g</td>
                  <td className="py-2">218 g</td>
                  <td className="py-2">188 g</td>
                  <td className="py-2">232 g</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* DISPLAY */}
      <div className="mb-6 border-b pb-2">
        <div className="flex items-center font-semibold text-lg mb-2">
          <ToggleButton on={openDisplay} setOn={setOpenDisplay} />
          <span className="ml-3">DISPLAY</span>
        </div>
        {openDisplay && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] table-auto text-left text-sm sm:text-base">
              <tbody>
                <tr className="border-t">
                  <td className="py-2 font-medium">Display Size</td>
                  <td className="py-2">17.23 cm (6.78 inch)</td>
                  <td className="py-2">17.42 cm (6.9 inch)</td>
                  <td className="py-2">17.41 cm / 17.15 cm Main | 10.48 cm / 10.23 cm Sub</td>
                  <td className="py-2">17.1 cm (6.8-inch)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-medium">Display Type</td>
                  <td className="py-2">AMOLED</td>
                  <td className="py-2">Dynamic AMOLED 2X</td>
                  <td className="py-2">Dynamic AMOLED 2X (Main) | Super AMOLED (Sub)</td>
                  <td className="py-2">LTPO OLED</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-medium">Refresh Rate</td>
                  <td className="py-2">120Hz</td>
                  <td className="py-2">120 Hz</td>
                  <td className="py-2">120 Hz</td>
                  <td className="py-2">Up To 120 Hz</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-medium">Resolution</td>
                  <td className="py-2">FHD+ (2760 × 1256)</td>
                  <td className="py-2">3120 × 1440 (Quad HD+)</td>
                  <td className="py-2">2520 × 1080 (FHD+)</td>
                  <td className="py-2">QHD+ (1344 × 2992)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 font-medium">Protection</td>
                  <td className="py-2">Corning® Gorilla® Glass Victus® 2</td>
                  <td className="py-2">N/A</td>
                  <td className="py-2">N/A</td>
                  <td className="py-2">Corning® Gorilla® Glass Victus® 2 Cover Glass</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonTable;
