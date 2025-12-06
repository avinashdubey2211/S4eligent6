
import React, { useEffect, useState } from "react";
import { ReturnPolicys } from "../../../Services/ReturnPolicys/Index";

const ReturnPolicy = () => {
  const [policyData, setPolicyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await ReturnPolicys();

        const content = response.data?.data?.[0];

        console.log("API Response:", content);

        setPolicyData(content);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-4xl font-extrabold text-red-600 tracking-wide">
      Return Policy
    </h1>

    {/* Title underline */}
    <div className="w-24 h-1 bg-red-600 mx-auto mt-3 mb-10 rounded-full"></div>
  </div>

  {/* Content Card */}
  <div 
    className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-300 text-gray-800 leading-relaxed text-lg"
    dangerouslySetInnerHTML={{
      __html: policyData?.contain || "<p>No return policy available.</p>",
    }}
  />
</div>

  );
};

export default ReturnPolicy;
