import * as React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CustomDiv from "../../CustomDiv";
import Text from "../../Text";
import { Tooltip } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const HomeMedicalSupply = () => {
  const navigate = useNavigate();
  return (
    <>
      <Tooltip
        describeChild
        className="mt-0"
        title={
          <Box className="flex">
            <CustomDiv
              className="p-3 flex flex-col gap-3 cursor-pointer"
              onClick={() => navigate("/product-page")}
            >
              <img
                src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/2/62ec68927278_H1_8901030773563.jpg"
                alt=""
                className="h-64"
              />
              <Text className="text-center text-xl font-semibold text-blue-600">
                Facewash
              </Text>
            </CustomDiv>
          </Box>
        }
      >
        <Typography className="cursor-pointer">
          <span className="flex items-center gap-1">
            <Text>Facewash</Text> <KeyboardArrowDownOutlined />
          </span>
        </Typography>
      </Tooltip>
    </>
  );
};
export default HomeMedicalSupply;
