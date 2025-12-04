

import React, { useEffect, useState } from "react";
import { Terms_Conditions } from "../../../Services/Terms_Conditions";

const TermCondition = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    Terms_Conditions()
      .then((res) => {
        setData(res.data?.data);  
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Terms & Conditions</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default TermCondition;
