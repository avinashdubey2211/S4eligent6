

import React, { useEffect, useState } from "react";
import { PrivacyPolicys } from "../../../Services/ PrivacyPolicys";

const Privacy_Policy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    PrivacyPolicys()
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    // <div>
    //   <h2 >Privacy Policy</h2>
    //   <p dangerouslySetInnerHTML={{__html:data?.data?.[0]?.contain}}  />
    // </div>
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
  {/* Title */}
  <h2 className="text-xl sm:text-4xl font-extrabold text-purple-600 tracking-wide text-center mb-4">
    Privacy Policy
  </h2>

  {/* Underline */}
  <div className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded-full"></div>

  {/* Content */}
  <div
    className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-gray-800 text-lg sm:text-xl leading-relaxed font-medium"
    dangerouslySetInnerHTML={{ __html: data?.data?.[0]?.contain || "No Privacy Policy Available." }}
  />
</div>

  );
};

export default Privacy_Policy;

