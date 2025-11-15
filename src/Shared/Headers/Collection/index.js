import * as React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CustomDiv from "../../CustomDiv";
import Text from "../../Text";
import { Tooltip } from "@mui/joy";

const Collection = () => {
  return (
    <>
      <Tooltip
        describeChild
        title={
          <Box className="grid grid-cols-6 w-full text-base">
            <CustomDiv className="p-3 flex flex-col gap-3">
              <Text className="text-xl font-semibold">Wound Care</Text>
              <Text>Bandages</Text>
              <Text>Gypsum foundations</Text>
              <Text>Patches and tapes</Text>
              <Text>Stomatology</Text>
              <Text>Surgical sutures</Text>
              <Text>Uniforms</Text>
              <Text>Wound healing</Text>
            </CustomDiv>
            <CustomDiv className="p-3 flex flex-col gap-3">
              <Text className="text-xl font-semibold">Higiene</Text>
              <Text>Bandages</Text>
              <Text>Gypsum foundations</Text>
              <Text>Patches and tapes</Text>
              <Text>Stomatology</Text>
              <Text>Surgical sutures</Text>
              <Text>Uniforms</Text>
              <Text>Wound healing</Text>
            </CustomDiv>
            <CustomDiv className="p-3 flex flex-col gap-3">
              <Text className="text-xl font-semibold">Laboratory</Text>
              <Text>Bandages</Text>
              <Text>Gypsum foundations</Text>
              <Text>Patches and tapes</Text>
              <Text>Stomatology</Text>
              <Text>Surgical sutures</Text>
              <Text>Uniforms</Text>
              <Text>Wound healing</Text>
            </CustomDiv>
            <CustomDiv className="p-3 flex flex-col gap-3">
              <Text className="text-xl font-semibold">Tools</Text>
              <Text>Bandages</Text>
              <Text>Gypsum foundations</Text>
              <Text>Patches and tapes</Text>
              <Text>Stomatology</Text>
              <Text>Surgical sutures</Text>
              <Text>Uniforms</Text>
              <Text>Wound healing</Text>
            </CustomDiv>
            <CustomDiv className="p-3 flex flex-col gap-3">
              <Text className="text-xl font-semibold">Diagnosis</Text>
              <Text>Bandages</Text>
              <Text>Gypsum foundations</Text>
              <Text>Patches and tapes</Text>
              <Text>Stomatology</Text>
              <Text>Surgical sutures</Text>
              <Text>Uniforms</Text>
              <Text>Wound healing</Text>
            </CustomDiv>
            <CustomDiv className="p-3 flex flex-col gap-3">
              <Text className="text-xl font-semibold">Equipment</Text>
              <Text>Bandages</Text>
              <Text>Gypsum foundations</Text>
              <Text>Patches and tapes</Text>
              <Text>Stomatology</Text>
              <Text>Surgical sutures</Text>
              <Text>Uniforms</Text>
              <Text>Wound healing</Text>
            </CustomDiv>
          </Box>
        }
      >
        <Typography className="cursor-pointer">
          <span className="flex items-center gap-1">
            <Text>Collection</Text> <KeyboardArrowDownOutlined />
          </span>
        </Typography>
      </Tooltip>
    </>
  );
};
export default Collection;
