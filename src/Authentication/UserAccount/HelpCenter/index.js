import { CircularProgress } from "@mui/joy";
import DOMPurify from "dompurify";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";

const HelpCenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const contactUs = () => {
    setIsLoading(true);
    axiosInstance
      .get(API_URLS.contactUs)
      .then((response) => {
        setData(response.data.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(
    () => {
      contactUs();
    },
    // eslint-disable-next-line
    []
  );
  const clean = DOMPurify.sanitize(data?.address);
  return isLoading ? (
    <>
      <CustomDiv className="flex h-full justify-center items-center">
        <CircularProgress size="lg" color="primary" />
      </CustomDiv>
    </>
  ) : (
    <CustomDiv className="flex flex-col gap-5">
      <Text className="text-xl font-semibold my-5">Contact Us</Text>
      <Text>
        <span className="text-lg font-semibold">E-Mail ID :</span> {data?.email}
      </Text>
      <Text>
        <span className="text-lg font-semibold">Contact Number : </span>
        {data?.contect_number}
      </Text>
      <span className="flex gap-3">
        <Text className="text-lg font-semibold">Address : </Text>
        <span dangerouslySetInnerHTML={{ __html: clean }}></span>
      </span>
      <Text>
        <span className="text-lg font-semibold">Whatsapp Number : </span>
        {data?.whatsapp}
      </Text>
      <Text>
        <span className="text-lg font-semibold">Open: </span>
        {data?.Opening_Hours}
      </Text>
    </CustomDiv>
  );
};

export default HelpCenter;
