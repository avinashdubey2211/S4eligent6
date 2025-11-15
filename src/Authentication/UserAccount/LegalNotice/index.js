import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";
import * as DOMPurify from "dompurify";
import { useSnackbar } from "notistack";
import { CircularProgress } from "@mui/joy";

const LegalNotice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const privacyPolicy = () => {
    setIsLoading(true);
    axiosInstance
      .get(API_URLS.privacyPolicy)
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
      privacyPolicy();
    },
    // eslint-disable-next-line
    []
  );
  const clean = DOMPurify.sanitize(data?.contain);
  return isLoading ? (
    <>
      <CustomDiv className="flex h-full justify-center items-center">
        <CircularProgress size="lg" color="primary" />
      </CustomDiv>
    </>
  ) : (
    <CustomDiv className="flex flex-col gap-5">
      <Text className="text-xl font-semibold">Privacy Policy</Text>
      <div
        dangerouslySetInnerHTML={{ __html: clean }}
        className="flex flex-col gap-4"
      ></div>
    </CustomDiv>
  );
};

export default LegalNotice;
