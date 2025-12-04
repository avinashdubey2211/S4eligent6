

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
    <div>
      <h2>Privacy Policy</h2>
      <div>{data ? data.content : "Loading..."}</div>
    </div>
  );
};

export default Privacy_Policy;

