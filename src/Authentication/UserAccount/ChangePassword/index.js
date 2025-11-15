import React from "react";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import CustomTextField from "../../../Shared/CustomTextField";
import Text from "../../../Shared/Text";

const ChangePassword = () => {
  return (
    <CustomDiv className="flex flex-col gap-7">
      <Text className="text-xl font-semibold">Change Password</Text>
      <span className="w-full">
        <Text>Old Password*</Text>
        <CustomTextField className="!w-5/6 !rounded" />
      </span>
      <span className="w-full">
        <Text>New Password*</Text>
        <CustomTextField className="!w-5/6 !rounded" />
      </span>
      <span className="flex my-5">
        <CustomButton>Change Password</CustomButton>
      </span>
    </CustomDiv>
  );
};

export default ChangePassword;
