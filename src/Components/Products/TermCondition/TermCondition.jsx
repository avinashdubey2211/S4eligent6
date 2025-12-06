

import React, { useEffect, useState } from "react";
import { useStore } from "../../../Hooks";

const TermCondition = () => {
  const {data}=useStore()
  const storeData=data?.data?.data
   console.log(storeData,"store data")
  
   return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
  {/* Title */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide">
      Terms & Conditions
    </h1>

    {/* Underline */}
    <div className="w-24 h-1 bg-blue-700 mx-auto mt-3 rounded-full"></div>
  </div>

  {/* Content Card */}
  <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 p-8 rounded-2xl text-gray-800 leading-relaxed text-lg">
    <span>
      {storeData?.term_and_condition || "No Terms & Conditions Available."}
    </span>
  </div>
</div>

  );
};

export default TermCondition;
