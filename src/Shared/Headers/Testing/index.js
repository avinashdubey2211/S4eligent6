import * as React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CustomDiv from "../../CustomDiv";
import Text from "../../Text";
import { ModalClose, Tooltip } from "@mui/joy";

const Testing = () => {
  return (
    <>
      <Tooltip
        describeChild
        title={
            <Box className="flex flex-col gap-2 p-8 w-full">
            <ModalClose />
            <CustomDiv className="flex gap-5 w-64">
              <img
                src="https://mymedi.noudeveloper.com/uploads/4_106d381a80.jpg"
                alt=""
                className="h-20 w-20"
              />
              <CustomDiv className="flex flex-col gap-2">
                <Text className="text-xl font-semibold">M.A.C Lipglass</Text>
                <span className="flex gap-5 justify-between w-full px-4 text-xl font-bold py-1 rounded-full bg-gray-200">
                  <Text> +</Text> <Text>1</Text> <Text>-</Text>
                </span>
                <Text className="text-xl font-semibold"> ₹295</Text>
              </CustomDiv>
            </CustomDiv>
            <span className="w-full font-bold flex justify-between items-center">
              <Text>Subtotal</Text>
              <Text>₹295.00</Text>
            </span>
            <CustomButton variant="outlined">View Cart</CustomButton>
            <CustomButton
              className="!rounded"
            >
              Checkout
            </CustomButton>
          </Box>
        }
      >
        <Typography className="cursor-pointer">
          <span className="flex items-center gap-1">
            <Text>Testing</Text> <KeyboardArrowDownOutlined />
          </span>
        </Typography>
      </Tooltip>
    </>
  );
};
export default Testing;
