import { Switch } from "@mui/joy";
import { Divider } from "@mui/material";
import React from "react";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";

const Notifications = () => {
  return (
    <CustomDiv className="flex flex-col">
      <CustomDiv className="flex flex-col gap-5">
        <Text className="text-xl font-semibold">Personal Information</Text>
        <CustomDiv className="flex py-2 justify-between items-center">
          <span className="">
            <Text className="font-semibold">Text messages</Text>
            <Text>
              Share your profile information to collect the product search
              result
            </Text>
          </span>
          <Switch color="primary" />
        </CustomDiv>
        <CustomDiv className="flex py-2 justify-between items-center">
          <span className="">
            <Text className="font-semibold">Call before checkout</Text>
            <Text>
              To improve your ads search result we need to collect your cookies
              behavior
            </Text>
          </span>
          <Switch color="primary" />
        </CustomDiv>
      </CustomDiv>
      <Divider className="!my-10" />
      <CustomDiv className="flex flex-col gap-5">
        <Text className="text-xl font-semibold">Account Information</Text>

        <CustomDiv className="flex py-2 justify-between items-center">
          <span className="">
            <Text className="font-semibold">Latest update about product</Text>
            <Text>I am sure about taking the latest update of the product</Text>
          </span>
          <Switch color="primary" />
        </CustomDiv>
        <CustomDiv className="flex py-2 justify-between items-center">
          <span className="">
            <Text className="font-semibold">Website Maintenance</Text>
            <Text>
              I am totally responsible for my Website Maintenance service toggle
            </Text>
          </span>
          <Switch color="primary" />
        </CustomDiv>
      </CustomDiv>

      <span className="flex justify-end my-5">
        <CustomButton>Saves Changes</CustomButton>
      </span>
    </CustomDiv>
  );
};

export default Notifications;
