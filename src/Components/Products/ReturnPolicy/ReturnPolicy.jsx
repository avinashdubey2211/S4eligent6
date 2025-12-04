
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
        setPolicyData(response.data);
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
    <div className="py-20">
      <h1 className="text-3xl text-red-600">Return Policy</h1>
      <p>{policyData?.description || "No policy data available."}</p>
    </div>
  );
};

export default ReturnPolicy;
