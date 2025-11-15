import React from "react";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";

const PaymentMethods = () => {
  const [value, setValue] = React.useState("female");
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <CustomDiv className="flex w-80 lg:w-auto flex-col gap-5">
      <Text className="text-xl text-center font-semibold">
        Select a payment method
      </Text>
      <FormControl>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="Online" control={<Radio />} label="Online" />
          <Text onClick={ Pyamantgat} value="Online" control={<Radio />} label="Online" />
         
          <FormControlLabel
            value="COD"
            control={<Radio />}
            label="Cash on Delivery"
          />
        </RadioGroup>
      </FormControl>
    </CustomDiv>
  );
};

export default PaymentMethods;
