import { Add, BorderColor, Delete } from "@mui/icons-material";
import { CircularProgress, Modal, ModalClose, Sheet } from "@mui/joy";
import { useFormik } from "formik";
import { useEffect } from "react";
import React, { useState } from "react";
import { API_URLS } from "../../../Config/API_URLS";
import axiosInstance from "../../../Config/axios";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import {
  MenuItem,
  TextField,
  FormControl,
  Select,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Text from "../../../Shared/Text";
import { useSnackbar } from "notistack";
import { myAddressList } from "../../../Services/AddressList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import classNames from "classnames";
import { deleteUpdateFn } from "../../../Services/DeleteAddress";
import { addAddressSchema } from "../../../Schemas";

const Address = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [value, setValue] = useState(null);
  const [addressID, setAddressID] = useState(null);
  const [option, setOption] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [addressType, setAddressType] = useState("");

  const client = useQueryClient();
  const { data: addressListData } = useQuery(
    ["myAddressList"],
    () => myAddressList(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const countryList = () => {
    axiosInstance
      .get(API_URLS.countryList)
      .then((response) => {
        setCountry(response.data.data);
        stateList();
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };

  const emptyFunction = () => { };

  const handleUpdate = (addressId) => {
    setOpen(true);
    setAddressID(addressId);
  };

  const handleAddAddress = () => {
    setOpen(true);
    setAddressID(null);
    setValue(null);
  };

  const { mutate } = useMutation(deleteUpdateFn, {
    onSuccess: () => {
      client.refetchQueries("myAddressList");
      enqueueSnackbar("Address Deleted", { variant: "success" });
      setIsLoading(false);
    },
  });

  const handleDelete = (addressId) => {
    mutate({ address_id: addressId });
  };

  const address = addressListData?.data?.data?.my_address_list?.filter(
    (data) => data.id === value
  );

  const initialValues = value
    ? {
      address_type: address?.[0]?.address_type,
      area: address?.[0]?.area,
      street_address: address?.[0]?.street_address,
      city_id: address?.[0]?.city_id,
      state_id: address?.[0]?.state_id,
      country_id: address?.[0]?.country_id,
      pincode: address?.[0]?.pincode,
      email: address?.[0]?.email,
      mobile_number: address?.[0]?.mobile_number,
      address: address?.[0]?.address,
      name: address?.[0]?.name,
      address_type2: "",
    }
    : {
      name: "",
      address_type: "",
      area: "",
      street_address: "",
      city_id: null,
      state_id: null,
      country_id: null,
      pincode: null,
      email: "",
      mobile_number: null,
      address: "",
      address_type2: "",
      address_type3: "",
    };

  const {
    handleChange,
    handleSubmit,
    values,
    isValid,
    errors,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addAddressSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const reqBody = {
        name: values.name,
        address_id: addressID,
        address_type: values.address_type,
        area: values.area,
        address: values.address,
        street_address: values.street_address,
        city_id: values.city_id,
        state_id: values.state_id,
        country_id: values.country_id,
        pincode: values.pincode,
        email: values.email,
        mobile_number: values.mobile_number,
        is_same_as_billing_address:
          values.address_type3 === "address" ? "True" : "False",
        is_only_billing_address: "False",
        is_only_delivery_address:
          values.address_type3 === "billing" ? "True" : "False",
      };

      addressID
        ? axiosInstance
          .post(API_URLS.updateAddress, reqBody)
          .then((response) => {
            client.refetchQueries("myAddressList");
            enqueueSnackbar(response.data.status, { variant: "success" });
            setIsLoading(false);
            setOpen(false);
          })
          .catch((error) => {
            enqueueSnackbar("Something went wrong..!", {
              variant: "error",
            });
          })
        : axiosInstance
          .post(API_URLS.addAddress, reqBody)
          .then((response) => {
            client.refetchQueries("myAddressList");
            enqueueSnackbar(response.data.status, { variant: "success" });
            setIsLoading(false);
            setOpen(false);
            resetForm();
          })
          .catch((error) => {
            enqueueSnackbar("Something went wrong..!", {
              variant: "error",
            });
          });
    },
  });

  useEffect(
    () => {
      open ? countryList() : emptyFunction();
    },
    // eslint-disable-next-line
    [open]
  );
  const stateList = () => {
    axiosInstance
      .post(API_URLS.stateList, { country_id: values.country_id })
      .then((response) => {
        setState(response.data.data);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const cityList = () => {
    axiosInstance
      .post(API_URLS.cityList, { state_id: values.state_id })
      .then((response) => {
        setCity(response.data.data);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };

  useEffect(
    () => {
      values.country_id !== "" ? stateList() : emptyFunction();
    },
    // eslint-disable-next-line
    [values.country_id]
  );

  useEffect(
    () => {
      values.state_id !== "" ? cityList() : emptyFunction();
    },
    // eslint-disable-next-line
    [values.state_id]
  );
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  console.log(values.address_type2, "mkx");

  console.log(values.address_type3, "mkx");

  return isLoading ? (
    <>
      <CustomDiv className="flex h-full justify-center items-center">
        <CircularProgress size="lg" color="primary" />
      </CustomDiv>
    </>
  ) : (
    <CustomDiv className="flex flex-col gap-5">
      <Text className="text-xl lg:text-start text-center font-semibold">
        Your Address
      </Text>
      <CustomDiv className="grid lg:grid-cols-2 gap-5 w-full">
        {addressListData?.data?.data?.my_address_list?.map((address) => {
          return (
            <span
              className="flex flex-col border border-opacity-0 hover:!border-opacity-100 shadow cursor-pointer p-3 lg:p-5 rounded"
              onMouseEnter={() => setOption(address?.id)}
              onMouseLeave={() => setOption(false)}
              onClick={() => setValue(address?.id)}
            >
              <span className="flex items-center justify-between">
                <Text className="font-semibold">{address.address_type}</Text>
                <Text className="font-semibold">
                  {address.is_same_as_billing_address === "True" &&
                    address.is_only_billing_address === "True" ? (
                    "Shipping & Billing Address"
                  ) : (
                    <>
                      {address.is_same_as_billing_address === "True"
                        ? "shipping & Billing Address"
                        : null}
                      {address.is_only_delivery_address === "True"
                        ? "Shipping Address"
                        : null}
                      {address.is_only_billing_address === "True"
                        ? "Billing Address"
                        : null}
                    </>
                  )}
                </Text>
              </span>
              <Text className="font-bold">{address.name}</Text>

              <Text>
                {address.address}, {address.area}, {address.street_address},
                {address.city}, {address.state}, {address.country},
                {address.pincode}
              </Text>

              <span className="flex gap-5 justify-end">
                <BorderColor
                  className={classNames(
                    "relative hover:!text-blue-500 top-[12px] left-[10px]",
                    option === address?.id ? "!scale-100" : "!scale-0"
                  )}
                  fontSize="small"
                  onClick={() => handleUpdate(Number(address?.id))}
                />
                <Delete
                  onClick={() => handleDelete(Number(address?.id))}
                  className={classNames(
                    "relative hover:!text-red-600 top-[12px] left-[10px]",
                    option === address?.id
                      ? "!scale-100 transition-all duration-500"
                      : "!scale-0 transition-all duration-500"
                  )}
                  fontSize="small"
                />
              </span>
            </span>
          );
        })}

        <span
          onClick={() => handleAddAddress()}
          className="flex items-center !text-[#306BDE] border-2 border-[#306BDE] cursor-pointer border-opacity-0 hover:!border-opacity-100 shadow p-9 rounded"
        >
          <Add />
          <Text>Add Address</Text>
        </span>
      </CustomDiv>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        className="flex justify-center lg:h-4/6 h-5/6 !outline-none my-auto"
      >
        <Sheet
          variant="outlined"
          className="lg:w-1/2 w-11/12 !outline-none p-8 rounded"
        >
          <ModalClose variant="outlined" />
          <form onSubmit={handleSubmit} className="h-full">
            <Text className="text-xl font-semibold my-3">
              {!value ? "Add Address" : "Update Address"}
            </Text>
            <CustomDiv className="grid lg:grid-cols-2 gap-5 h-4/6  overflow-y-auto lg:pr-0 pr-1 py-2">
              <span className="w-full">
                <Text>Name*</Text>
                <TextField
                  required
                  size="small"
                  color="primary"
                  className="!w-full !rounded"
                  id="name"
                  name="name"
                  value={values["name"]}
                  onChange={(e) =>
                    !/[^a-zA-Z]/.test(e.target.value) && handleChange(e)
                  }
                  error={errors["name"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["name"]}
                />
              </span>

              <span className="w-full">
                <Text>Address Type*</Text>
                <FormControl fullWidth>
                  <Select
                    id="address_type"
                    name="address_type"
                    size="small"
                    color="primary"
                    defaultValue={address?.[0]?.address_type}
                    value={values.address_type}
                    onChange={handleChange}
                    error={errors["address_type"] ? true : false}
                    FormHelperTextProps={{ className: "!text-red-500" }}
                    helperText={errors["address_type"]}
                  >
                    <MenuItem value={"home"}>Home</MenuItem>
                    <MenuItem value={"office"}>Office</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <span className="w-full">
                <Text>Contact Number*</Text>
                <TextField
                  size="small"
                  color="primary"
                  className="!w-full !rounded"
                  id="mobile_number"
                  name="mobile_number"
                  type="number"
                  value={values["mobile_number"]}
                  onChange={handleChange}
                  error={errors["mobile_number"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["mobile_number"]}
                />
              </span>
              <span className="w-full">
                <Text>Flat/House No./Company Name*</Text>
                <TextField
                  type="text"
                  size="small"
                  color="primary"
                  id="address"
                  name="address"
                  value={values["address"]}
                  onChange={handleChange}
                  className="!w-full !rounded"
                  error={errors["address"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["address"]}
                />
              </span>
              <span className="w-full">
                <Text>Area/Landmark*</Text>
                <TextField
                  type="text"
                  size="small"
                  color="primary"
                  id="area"
                  name="area"
                  value={values["area"]}
                  onChange={handleChange}
                  className="!w-full !rounded"
                  error={errors["area"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["area"]}
                />
              </span>

              <span className="w-full">
                <Text>Street/Sector/Village*</Text>
                <TextField
                  type="text"
                  size="small"
                  color="primary"
                  id="street_address"
                  name="street_address"
                  value={values["street_address"]}
                  onChange={handleChange}
                  className="!w-full !rounded"
                  error={errors["street_address"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["street_address"]}
                />
              </span>
              <span className="w-full">
                <Text>Pincode*</Text>
                <TextField
                  type="number"
                  size="small"
                  color="primary"
                  id="pincode"
                  name="pincode"
                  value={values["pincode"]}
                  onChange={handleChange}
                  className="!w-full !rounded"
                  error={errors["pincode"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["pincode"]}
                />
              </span>
              <span className="w-full">
                <Text>Email*</Text>
                <TextField
                  type="text"
                  size="small"
                  color="primary"
                  className="!w-full !rounded"
                  id="email"
                  name="email"
                  value={values["email"]}
                  onChange={handleChange}
                  error={errors["email"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["email"]}
                />
              </span>

              <span className="w-full">
                <Text>Country*</Text>
                <FormControl fullWidth>
                  <Select
                    id="country_id"
                    size="small"
                    color="primary"
                    name="country_id"
                    value={values["country_id"]}
                    onChange={handleChange}
                    error={errors["country_id"] ? true : false}
                    FormHelperTextProps={{ className: "!text-red-500" }}
                    helperText={errors["country_id"]}
                  >
                    {country?.map((country) => {
                      return (
                        <MenuItem value={country.id}>
                          {country.country}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </span>
              <span className="w-full">
                <Text>State*</Text>
                <FormControl fullWidth>
                  <Select
                    id="state_id"
                    name="state_id"
                    size="small"
                    color="primary"
                    value={values["state_id"]}
                    onChange={handleChange}
                    error={errors["state_id"] ? true : false}
                    FormHelperTextProps={{ className: "!text-red-500" }}
                    helperText={errors["state_id"]}
                  >
                    {state?.map((state) => {
                      return (
                        <MenuItem value={state.id}>{state.state}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </span>
              <span className="w-full">
                <Text>City*</Text>
                <FormControl fullWidth>
                  <Select
                    id="city_id"
                    name="city_id"
                    size="small"
                    color="primary"
                    value={values["city_id"]}
                    onChange={handleChange}
                    error={errors["city_id"] ? true : false}
                    FormHelperTextProps={{ className: "!text-red-500" }}
                    helperText={errors["city_id"]}
                  >
                    {city?.map((city) => {
                      return <MenuItem value={city.id}>{city.city}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </span>
            </CustomDiv>

            <FormControl>
              <RadioGroup
                row
                id="address_type3"
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="address_type3"
                value={values.address_type3}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="address"
                  control={<Radio size="small" />}
                  className="!text-xs text-gray-500"
                  label="Same As Billing/Shipping Address"
                />
                <FormControlLabel
                  value="billing"
                  control={<Radio size="small" />}
                  className="!text-xs text-gray-500"
                  label="Only Shipping Address"
                />
              </RadioGroup>
            </FormControl>

            <CustomButton
              disabled={isValid ? false : true}
              type="submit"
              className="!w-full !my-5"
            >
              Save Address
            </CustomButton>
          </form>
        </Sheet>
      </Modal>
    </CustomDiv>
  );
};

export default Address;
