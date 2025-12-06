import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import CustomButton from "../../Shared/CustomButton";
import CustomDiv from "../../Shared/CustomDiv";
import Text from "../../Shared/Text";
import contactLogo from "../../Assets/Contact us.gif";
import { useStore } from "../../Hooks";


const ContactUs = () => {
    const {data}=useStore()
      const storeData=data?.data?.data
       console.log(storeData,"store data")
      
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
<CustomDiv className="py-10 bg-gradient-to-b from-gray-50 to-gray-100">
           {/* <p className="max-w-3xl mx-auto text-center text-gray-800 text-lg sm:text-xl leading-relaxed font-medium tracking-wide">
    {storeData?.contact_us || "No information available."}
  </p> */}
  <CustomDiv className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
  {/* Title */}
  <h2 className="text-4xl sm:text-5xl font-extrabold text-green-600 tracking-wide text-center mb-4">
    Contact Us
  </h2>

  {/* Underline */}
  <div className="w-24 h-1 bg-green-600 mx-auto mb-8 rounded-full"></div>

  {/* Content */}
  <p className="max-w-3xl mx-auto text-center text-gray-800 text-lg sm:text-xl leading-relaxed font-medium tracking-wide">
    {storeData?.contact_us || "No information available."}
  </p>
</CustomDiv>

      <CustomDiv className="flex w-full bg-gray-100 p-[2%] lg:px-[8%]">

       
        <CustomDiv className="flex lg:flex-row flex-col w-full shadow">
          <CustomDiv className="flex flex-col lg:w-1/2 bg-white">
            <img src={contactLogo} alt="" className="!rounded-l" />
          </CustomDiv>
          <CustomDiv className="flex flex-col gap-5 items-center bg-white py-9 lg:w-1/2">
            <Text className="text-4xl font-semibold my-10">Contact Us</Text>
            <span className="grid lg:grid-cols-2 gap-4 lg:w-2/3 w-11/12">
              <span className="w-full">
                <Text>First Name*</Text>
                <TextField
                  placeholder="Enter First Name"
                  color="primary"
                  size="small"
                  className="w-full"
                />
              </span>
              <span className="w-full">
                <Text>Last Name*</Text>
                <TextField
                  placeholder="Enter Last Name"
                  color="primary"
                  size="small"
                  className="w-full"
                />
              </span>
            </span>
            <span className="lg:w-2/3 w-11/12">
              <Text>Email*</Text>
              <TextField
                placeholder="Enter Email"
                color="primary"
                size="small"
                className="w-full"
              />
            </span>
            <span className="lg:w-2/3 w-11/12">
              <Text>Phone Number*</Text>
              <TextField
                placeholder="Enter Phone Number"
                color="primary"
                size="small"
                className="w-full"
              />
            </span>
            <span className="lg:w-2/3 w-11/12">
              <Text>Message*</Text>
              <TextField
                placeholder="Enter Message"
                color="primary"
                size="small"
                multiline
                rows={4}
                className="w-full"
              />
            </span>
            <CustomButton className="w-1/4">Submit</CustomButton>
          </CustomDiv>
        </CustomDiv>
      </CustomDiv>
      </CustomDiv>
    </>
  );
};

export default ContactUs;
