import * as React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CustomDiv from "../../CustomDiv";
import Text from "../../Text";
import { Divider, Tooltip } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <Tooltip
        describeChild
        title={
          <Box className="flex flex-col gap-2 w-full text-base py-1">
            {[
              {
                name: "Facewash",
                src: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/2/62ec68927278_H1_8901030773563.jpg",
              },
              {
                name: "Toner",
                src: "https://images-static.nykaa.com/media/catalog/product/4/1/41d74f8BRILL00000014.jpg",
              },
              {
                name: "Serum",
                src: "https://images-static.nykaa.com/media/catalog/product/2/c/2c828df8902979024129_1.jpg",
              },
            ].map((item) => {
              return (
                <CustomDiv
                  className="flex gap-3 items-center w-64 cursor-pointer"
                  onClick={() => navigate("/product-page")}
                >
                  <img src={item.src} alt="" className="rounded h-28" />
                  <span>
                    <Text className="text-lg font-semibold">{item.name}</Text>
                    <Text className="text-xs">Lorem ipsum dolor sit ame.</Text>
                    <Text>
                      <span className="line-through text-red-600 px-1">
                        ₹699
                      </span>
                      <span className="text-blue-600 px-1">₹499</span>
                    </Text>
                  </span>
                </CustomDiv>
              );
            })}
            <Divider />
            <Text
              className="text-center p-1 divide-y cursor-pointer hover:text-red-500"
              onClick={() => navigate("/all-products")}
            >
              View All
            </Text>
          </Box>
        }
      >
        <Typography className="cursor-pointer py-2">
          <span className="flex items-center gap-1">
            <Text>All Products</Text> <KeyboardArrowDownOutlined />
          </span>
        </Typography>
      </Tooltip>
    </>
  );
};
export default Products;
