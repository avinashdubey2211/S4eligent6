import { AddAPhoto } from "@mui/icons-material";
import { Avatar } from "@mui/joy";
import {
  Divider,
  FormControl,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import classNames from "classnames";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";
import { useQueryClient } from "react-query";

const AccountSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const handleUpdate = () => {
    setIsLoading(true);
    axiosInstance
      .get(API_URLS.profile)
      .then((response) => {
        setData(response.data.data.profile_data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(
    () => {
      handleUpdate();
    },
    // eslint-disable-next-line
    []
  );
  const client = useQueryClient();
  const initialValues = {
    first_name: data?.first_name,
    last_name: data?.last_name,
    email: data?.email,
    gender: data?.gender,
    dob: data?.dob,
    mobile_no: data?.mobile_no,
    gst_no: data?.gst_no,
    bank_account_number: data?.bank_account_number,
    ifsc_code: data?.ifsc_code,
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,

    onSubmit: (values, action) => {
      setIsUpdating(true);
      const reqBody = new FormData();
      reqBody.append("first_name", values.first_name);
      reqBody.append("last_name", values.last_name);
      reqBody.append("email", values.email);
      reqBody.append("gender", values.gender);
      reqBody.append("dob", values.dob);
      reqBody.append("profile_picture", file);
      reqBody.append("gst_no", values.gst_no);
      reqBody.append("bank_account_number", values.bank_account_number);
      reqBody.append("ifsc_code", values.ifsc_code);
      if (values.gst_no.length > 15) {
        alert("Plese Enter Valid Gst Number");
        return;
      } else if (values.gst_no.length < 15) {
        alert("Plese Enter Valid Gst Number");
        return;
      }
      if (values.first_name.length == 0) {
        alert("Invalid Form, First Name can not be empty");
        return;
      }
      if (values.last_name.length == 0) {
        alert("Invalid Form, Last Name can not be empty");
        return;
      }

      axiosInstance
        .post(API_URLS.updateProfile, reqBody)
        .then((response) => {
          client.refetchQueries("profile");
          enqueueSnackbar(response.data.status, { variant: "success" });
          setIsUpdating(false);
        })
        .catch((error) => {
          enqueueSnackbar(
            error.response.data.message === "please provide valid email data"
              ? "Email is Required"
              : error.response.data.message,
            { variant: "error" }
          );
          setIsUpdating(false);
        });
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return isLoading ? (
    <>
      <CustomDiv className="flex h-full justify-center items-center">
        <CircularProgress size="lg" color="primary" />
      </CustomDiv>
    </>
  ) : (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <CustomDiv className="flex flex-col gap-5">
        <Text className="text-xl lg:text-start text-center font-semibold">
          Personal Information
        </Text>
        <span className="flex my-5 w-full justify-center">
          <Avatar
            // alt={data?.first_name}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            component="label"
            className={classNames(
              "!w-24 !h-24 !flex !justify-center !items-center"
            )}
          >
            <TextField
              size="small"
              type="file"
              accept="image/jpeg"
              className="!w-full !rounded !hidden"
              id="profile_picture"
              name="profile_picture"
              onChange={(event) => setFile(event.target.files[0])}
            />
            {!open ? (
              <img
                src={file ? URL.createObjectURL(file) : data?.profile_picture}
                alt=""
              />
            ) : (
              <AddAPhoto
                fontSize="large"
                className={
                  open
                    ? "!scale-100 !transition-all !duration-500"
                    : "!scale-0 !transition-all !duration-500"
                }
              />
            )}
          </Avatar>
        </span>

        <span className="grid lg:grid-cols-2 gap-5 w-full">
          <span className="w-full">
            <Text>First Name*</Text>
            <TextField
              size="small"
              className="!w-full !rounded"
              id="first_name"
              name="first_name"
              type="text"
              value={formik.values["first_name"]}
              onChange={(e) =>
                !/[^a-zA-Z]/.test(e.target.value) && formik.handleChange(e)
              }
            />
          </span>

          <span className="w-full">
            <Text>Last Name*</Text>
            <TextField
              size="small"
              className="!w-full !rounded"
              id="last_name"
              name="last_name"
              type="text"
              value={formik.values["last_name"]}
              onChange={(e) =>
                !/[^a-zA-Z]/.test(e.target.value) && formik.handleChange(e)
              }
            />
          </span>
          <span className="w-full">
            <Text>Email*</Text>
            <TextField
              size="small"
              type="email"
              className="!w-full !rounded"
              id="email"
              name="email"
              value={formik.values["email"]}
              onChange={formik.handleChange}
            />
          </span>
          <span className="w-full">
            <Text>Gender*</Text>
            <FormControl fullWidth>
              <Select
                id="gender"
                size="small"
                defaultValue={data?.gender}
                name="gender"
                value={formik.values["gender"]}
                onChange={formik.handleChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </span>
          <span className="w-full">
            <Text>Date of Birth</Text>
            <TextField
              size="small"
              type="date"
              className="!w-full !rounded"
              id="dob"
              name="dob"
              value={formik.values["dob"]}
              onChange={formik.handleChange}
            />
          </span>
          <span className="w-full">
            <Text>Mobile Number</Text>
            <TextField
              size="small"
              className="!w-full !rounded"
              id="mobile_no"
              name="mobile_no"
              value={data?.mobile}
              disabled
            />
          </span>
          <span className="w-full">
            <Text>GST No.</Text>
            <TextField
              size="small"
              className="!w-full !rounded"
              id="gst_no"
              name="gst_no"
              type="text"
              value={formik.values["gst_no"]}
              onChange={formik.handleChange}
            />
          </span>
          <span className="w-full">
            <Text>Bank Acoount Number</Text>
            <TextField
              size="small"
              className="!w-full !rounded"
              id="bank_account_number"
              name="bank_account_number"
              value={formik.values["bank_account_number"]}
              onChange={formik.handleChange}
              disabled
            />
          </span>
          <span className="w-full">
            <Text>IFSC*</Text>
            <TextField
              size="small"
              className="!w-full !rounded"
              id="ifsc_code"
              name="ifsc_code"
              value={formik.values["ifsc_code"]}
              onChange={(e) =>
                !/[^A-Z0-9]/.test(e.target.value) && formik.handleChange(e)
              }
            />
          </span>
        </span>
      </CustomDiv>

      <Divider className="!my-10" />

      <span className="flex lg:justify-end justify-center my-5 ">
        <CustomButton type={isLoading ? "button" : "submit"} className="!w-52">
          <span>Saves Changes</span>
        </CustomButton>
      </span>
    </form>
  );
};

export default AccountSettings;
