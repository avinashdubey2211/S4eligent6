import React from "react";
import CustomDiv from "../../Shared/CustomDiv";
import login from "../../Assets/signup.svg";
import CustomTextField from "../../Shared/CustomTextField";
import CustomButton from "../../Shared/CustomButton";
import Text from "../../Shared/Text";
import { Chip, Divider } from "@mui/joy";
import shubhga from "../../Assets/shubhga.svg";

const SignUp = () => {
  const handleClick = () => {};
  return (
    <CustomDiv className="flex h-screen bg-white  lg:flex-row flex-col w-full">
      <CustomDiv className="flex lg:w-1/2 p-12">
        <img src={login} alt="" />
      </CustomDiv>
      <Divider orientation="vertical" />
      <CustomDiv className="centerdiv flex-col lg:w-1/2">
        <form action="" className="centerdiv flex-col w-full">
          <img src={shubhga} alt="" className="w-1/3" />
          <Text className="text-3xl font-bold mb-5">Sign Up</Text>
          <span className="flex gap-5 items-center lg:w-1/2 w-5/6">
            <CustomTextField
              type="text"
              placeholder="First Name"
              color="primary"
              className="!rounded mb-5"
            />
            <CustomTextField
              type="text"
              placeholder="Last Name"
              color="primary"
              className="!rounded mb-5"
            />
          </span>
          <CustomTextField
            type="email"
            placeholder="Email"
            color="primary"
            className="lg:!w-1/2 !rounded mb-5 w-5/6"
          />
          <CustomTextField
            placeholder="Password"
            color="primary"
            className="lg:!w-1/2 !rounded mb-5 w-5/6"
          />
          <CustomButton
            color="primary"
            className="!mb-4 !rounded lg:!w-1/2 w-5/6"
          >
            Sign Up
          </CustomButton>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <Text className="px-3 text-sm">Login with social accounts</Text>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="flex my-3 justify-center space-x-4">
            <Chip
              variant="outlined"
              className="!rounded !px-1.5"
              onClick={() => handleClick()}
              startDecorator={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png?20230305195327"
                  alt=""
                  className="w-5"
                />
              }
            >
              Sign Up with Google
            </Chip>
            <Chip
              variant="outlined"
              className="!rounded !px-1.5"
              onClick={() => handleClick()}
              startDecorator={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Facebook_Home_logo_old.svg/2048px-Facebook_Home_logo_old.svg.png"
                  alt=""
                  className="w-5"
                />
              }
            >
              Sign Up with Facebook
            </Chip>
          </div>
        </form>
      </CustomDiv>
    </CustomDiv>
  );
};

export default SignUp;
