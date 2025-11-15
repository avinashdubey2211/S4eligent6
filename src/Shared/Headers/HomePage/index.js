import * as React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CustomDiv from "../../CustomDiv";
import Text from "../../Text";
import { Tooltip } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  const navigate = useNavigate();
  return (
    <>
      <Tooltip
        describeChild
        title={
          <Box className="flex">
            <CustomDiv
              className="p-3 flex flex-col gap-3 cursor-pointer"
              onClick={() => navigate("/product-page")}
            >
              <img
                src="https://images-static.nykaa.com/media/catalog/product/4/1/41d74f8BRILL00000014.jpg"
                alt=""
                className="h-64"
              />
              <Text className="text-center text-xl font-semibold text-blue-600">
                Toner
              </Text>
            </CustomDiv>
          </Box>
        }
      >
        <Typography className="cursor-pointer">
          <span className="flex items-center gap-1">
            <Text>Toner</Text> <KeyboardArrowDownOutlined />
          </span>
        </Typography>
      </Tooltip>
    </>
  );
};
export default HomePages;
