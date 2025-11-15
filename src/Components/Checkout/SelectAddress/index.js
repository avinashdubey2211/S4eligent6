import { Add, Edit } from "@mui/icons-material";
import { Modal, ModalClose, Sheet } from "@mui/joy";
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
  FormControlLabel,
  Radio,
  RadioGroup,
  CircularProgress,
  Divider,
  Switch,
  Button,
  Collapse,
} from "@mui/material";
import Text from "../../../Shared/Text";
import { useSnackbar } from "notistack";
import classNames from "classnames";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { paymentReceiptFn } from "../../../Services/PaymentReceipt";
import { checkOutFn } from "../../../Services/CheckOut";
import { myAddressList } from "../../../Services/AddressList";
import { codCheckoutFn } from "../../../Services/CODCheckout";
import accpt from "../../../Assets/accept.png";
import { addAddressSchema } from "../../../Schemas";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { myCouponFn } from "../../../Services/Coupon";

const SelectAddress = ({
  setPage,
  totalAmount,
  texCharge,
  deleveryCharge,
  subTotal,
  discountOnMrp,
  totleMrp,
  setOrderDetail,
}) => {
  const [opens, setOpens] = useState(false);
  const [open, setOpen] = useState(false);
  const [addressID, setAddressID] = useState(null);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [value, setValue] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [method, setMethod] = useState("Online");
  const [pyamtList, setPyamtList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [blingAdd, setBlingAdd] = useState(false);
  const [onlyBlingAdd, setOnlyBlingAdd] = useState(false);
  const [delAdd, setDelAdd] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [coponData, setCoponData] = useState();
  const [copen, setCopen] = useState(false);
  const [copenId, setCopenId] = useState("");

  const [checked2, setChecked2] = React.useState(false);
  const handleChange1 = () => {
    setChecked((prev) => !prev);
  };
  const handleChange2 = () => {
    setChecked2((prev) => !prev);
  };
  const handlePaymentMethod = (event) => {
    setMethod(event.target.value);
  };

  const handleUpdate = (addressId) => {
    setOpen(true);
    setAddressID(addressId);
  };

  const handleAddAddress = () => {
    setOpen(true);
    setAddressID(null);
    setValue(null);
  };

  const handleNewAddAddress = () => {
    setOpens(true);
    setAddressID(null);
    setValue(null);
  };
  const { data } = useQuery(["Coupon"], () => myCouponFn());
  const coupon = data?.data?.data;
  const btn = () => {
    setToggle(true);
  };

  const btnn = () => {
    setToggle(false);
  };

  const { enqueueSnackbar } = useSnackbar();
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
  const address = addressListData?.data?.data?.my_address_list?.filter(
    (data) => data.id === value
  );

  const initialValues = value
    ? {
      name: address?.[0]?.name,
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
    }
    : {
      name: "",
      address_type: "",
      area: "",
      street_address: "",
      city_id: "",
      state_id: "",
      country_id: "",
      pincode: "",
      email: "",
      mobile_number: "",
      address: "",
    };

  const { handleChange, isValid, handleSubmit, values, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addAddressSchema,
      enableReinitialize: true,

      onSubmit: (values, action) => {
        const reqBody = {
          name: values.name,
          address_id: addressID,
          address_type: values.address_type,
          address: values.address,
          area: values.area,
          street_address: values.street_address,
          city_id: values.city_id,
          state_id: values.state_id,
          country_id: values.country_id,
          pincode: values.pincode,
          email: values.email,
          mobile_number: values.mobile_number,
          is_same_as_billing_address: blingAdd ? "True" : "False",
          is_only_billing_address: onlyBlingAdd ? "True" : "False",
          is_only_delivery_address: delAdd ? "True" : "False",
        };
        addressID
          ? axiosInstance
            .post(API_URLS.updateAddress, reqBody)
            .then((response) => {
              client.refetchQueries("myAddressList");
              enqueueSnackbar("Address Updated", { variant: "success" });
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
              enqueueSnackbar("Address Added", { variant: "success" });
              setOpen(false);
            })
            .catch((error) => {
              enqueueSnackbar("Something went wrong..!", {
                variant: "error",
              });
            });
        action.resetForm();
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
  const { mutate: paymentReceipt } = useMutation(paymentReceiptFn, {
    onSuccess: (response) => {
      setReceipt(response.data.data.payment_receipt[0]);
    },
  });

  const { mutate: checkOut, isLoading: isLoadingOnline } = useMutation(
    checkOutFn,
    {
      onSuccess: (response) => {
        setReceipt(response.data.data);
      },
    }
  );
  const { mutate: codCheckOut, isLoading: isLoadingCOD } = useMutation(
    codCheckoutFn,
    {
      onSuccess: (response) => {
        setPage(3);
      },
    }
  );

  const orderIdOnline = () => {
    paymentReceipt({
      address_id: value,
      total_amount: copen ? coponData.cart_total_amount : totalAmount,
    });
  };

  const orderIdCOD = () => {
    codCheckOut({
      address_id: value,
      coupon_id: "None",
    });
  };

  const RazorPay = () => {
    const options = {
      //key: "rzp_test_vDJzs5kXvURgrY",
      // key: "rzp_test_5AJBhMjZsst5JG",
      //key: "rzp_test_QOX9qreyce5Ewm",
      key: `${pyamtList?.payment_key}`,
      currency: "INR",
      amount: copen ? coponData.cart_total_amount : totalAmount,
      name: "ZZZ living",
      order_id: receipt?.razorpay_order_id,
      handler: function (response) {
        setOrderDetail(response);
        enqueueSnackbar("Order Placed", { variant: "success" });
        setPage(3);
        const reqbody = new FormData();
        reqbody.append("address_id", value);
        reqbody.append("coupon_id", "None");
        reqbody.append("payment_receipt_id", receipt?.payment_receipt_id);
        checkOut(reqbody);
        client.refetchQueries("myOrderList");
      },
      theme: {
        color: "#306BDE",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const PaymentGateway = () => {
    axiosInstance
      .get(API_URLS.Store)
      .then((response) => {
        setPyamtList(response.data?.data?.store_data);
        stateList();
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };

  const emptyFunction = () => { };
  useEffect(() => {
    receipt && method === "Online" ? RazorPay() : PaymentGateway();
  }, [receipt]);
  const [cpid, setCpid] = useState("");
  const [cpid1, setCpid1] = useState("");

  const ApplidCoupons = () => {
    const reqbody = new FormData();
    reqbody.append("coupon_code", cpid);
    axiosInstance
      .post(API_URLS.ApplyCoupon, reqbody)
      .then((response) => {
        setCoponData(response.data.data);
        response.data.response_code === 200 && setCopen(true);
        enqueueSnackbar(response.data.msg, { variant: "success" });
      })

      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const UnApplidCoupons = () => {
    const reqbody = new FormData();
    reqbody.append("coupon_code", cpid);
    axiosInstance
      .post(API_URLS.UnApplyCoupon, reqbody)
      .then((response) => {
        setCoponData(response.data.data);
        response.data.response_code === 200 && setCopen(false);
        enqueueSnackbar(response.data.msg, { variant: "success" });
      })

      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(() => {
    cpid && ApplidCoupons();
  }, [cpid]);
  useEffect(() => {
    cpid1 && UnApplidCoupons();
  }, [cpid1]);

  return paymentMethod ? (
    <>
      <CustomDiv className="flex justify-center items-center w-full flex-col gap-5">
        <Text className="text-xl text-center font-semibold">
          Select A Payment Method
        </Text>
        <CustomDiv className="flex flex-col gap-2  w-full lg:pl-0 pl-5">
          <FormControl fullWidth>
            <RadioGroup
              value={method}
              onChange={handlePaymentMethod}
              className="gap-1 flex flex-col justify-center !w-full"
            >
              <FormControlLabel
                value="Online"
                control={<Radio />}
                label="Online"
                className="p-3 rounded border-2 !w-full shadow"
                onClick={btn}
              />

              <FormControlLabel
                value="COD"
                control={<Radio />}
                label="Cash On Delivery"
                className="p-3 rounded border-2 !w-full shadow"
                onClick={btnn}
              />
            </RadioGroup>
          </FormControl>

          {toggle === true ? (
            <Text className="flex flex-col justify-start bg-sky-400 w-full text-white p-3 items-center">
              <p
                className=" py-1"
                value={pyamtList?.is_store_payment_accepted_by}
              >
                Pay with {pyamtList?.is_store_payment_accepted_by}
              </p>
            </Text>
          ) : null}
        </CustomDiv>
        <CustomDiv className="flex flex-col w-full  ">
          <Button onClick={handleChange2} color="info">
            {" "}
            My Coupons
          </Button>
          {/* <p
            onClick={handleChange2}
            className="font-bold text-xl text-center border rounded-md cursor-pointer py-2 px-2 hover:nderline"
          >
            My Coupons
          </p> */}
          <div className=" overflow-y-auto  lg:px-0 px-5">
            {coupon?.map((item) => {
              return (
                <Collapse
                  in={checked2}
                  className="flex flex-col w-full my-5 lg:border-b border-b-2 "
                >
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-xl font-bold text-green-400">
                      {item?.offer_tag}
                    </p>
                    <p className="text-xl font-bold text-black hover:text-pink-500">
                      {item?.coupon_code}
                    </p>
                  </div>

                  <div className="flex flex-col my-3 ">
                    <div className="flex justify-between lg:border-b border-b-2">
                      <p>Purchase upto :</p>
                      <p className="font-bold text-pink-500 pl-2">
                        ₹{item?.purchase_upto}
                      </p>
                    </div>
                    <div className="flex justify-between lg:border-b border-b-2 ">
                      <p>Discount :</p>
                      <p className="font-bold text-pink-500 pl-2">
                        ₹{item?.discount}
                      </p>
                    </div>
                  </div>
                  {copen ? (
                    <Button
                      onClick={() => setCpid1(item?.coupon_code)}
                      color="secondary"
                    >
                      Remove Coupons
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        setCpid(item?.coupon_code);
                        setCopenId(item.id);
                      }}
                      color="secondary"
                    >
                      Apply Coupons
                    </Button>
                  )}

                  <p
                    onClick={handleChange1}
                    className="text-sm text-red-400 hover:text-red-600 cursor-pointer"
                  >
                    Terms and Conditions
                  </p>
                  <Collapse in={checked}>{item?.term_condition}</Collapse>
                </Collapse>
              );
            })}
          </div>
        </CustomDiv>
        {copen ? (
          <div className="flex flex-col justify-between gap-5">
            <p className="text-xl font-bold border-b">
              {" "}
              Cart Amount with Copone Summary
            </p>

            <CustomDiv className="flex flex-col justify-between items-center w-full gap-2">
              <div className="flex justify-between w-full">
                <p>Total MRP:</p>
                <span className="font-semibold mx-2">
                  ₹{coponData?.[0]?.cart_total_price}
                </span>
              </div>
              {discountOnMrp > "0.0" && (
                <div className="flex justify-between  w-full">
                  <p> Discount On MRP:</p>
                  <span className="font-semibold mx-2 text-green-800">
                    -₹{coponData?.[0]?.cart_total_discount}
                  </span>
                </div>
              )}

              <div className="flex justify-between  w-full">
                <p>Sub Total:</p>
                <span className="font-semibold mx-2">
                  ₹{coponData?.[0]?.cart_subtotal}
                </span>
              </div>

              <div className="flex justify-between  w-full">
                <p> Delivery Charge:</p>
                <span className="font-semibold mx-2">
                  {coponData?.[0]?.cart_delivery_charges !== "Free" ? (
                    <>₹{coponData?.[0]?.cart_delivery_charges}</>
                  ) : (
                    coponData?.[0]?.cart_delivery_charges
                  )}
                </span>
              </div>
              <div className="flex justify-between  w-full">
                <p> Tax Charge:</p>
                <span className="font-semibold mx-2">
                  + ₹{coponData?.[0]?.cart_tax}
                </span>
              </div>
              <Divider />
              <Text className="pb-2 flex justify-between  w-full">
                <p> Total Amount:</p>
                <span className="font-semibold mx-2">
                  ₹{coponData?.[0]?.cart_total_amount}
                </span>
              </Text>
            </CustomDiv>
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full ">
            <p className="!font-bold text-center my-3 ">Cart Amount Summary </p>
            <Divider />
            <CustomDiv className="flex flex-col justify-between items-center w-full gap-2 lg:px-0 px-5">
              <div className="flex justify-between w-full">
                <p className="!text-black">Total MRP:</p>
                <span className="font-semibold mx-2">₹{totleMrp}</span>
              </div>
              {discountOnMrp > "0.0" && (
                <div className="flex justify-between  w-full">
                  <p> Discount On MRP:</p>
                  <span className="font-semibold mx-2 text-green-800">
                    -₹{discountOnMrp}
                  </span>
                </div>
              )}

              <div className="flex justify-between  w-full">
                <p className="text-black">Sub Total:</p>
                <span className="font-semibold mx-2">₹{subTotal}</span>
              </div>

              <div className="flex justify-between  w-full">
                <p className="text-black"> Delivery Charge:</p>
                <span className="font-semibold mx-2">
                  {deleveryCharge !== "Free" ? (
                    <>₹{deleveryCharge}</>
                  ) : (
                    deleveryCharge
                  )}
                </span>
              </div>
              <div className="flex justify-between  w-full">
                <p className="text-black"> Tax Charge:</p>
                <span className="font-semibold mx-2">+ ₹{texCharge}</span>
              </div>
              <Divider />
              <Text className="pb-2 flex justify-between  w-full">
                <p className="!font-bold"> Total Amount:</p>
                <span className="!font-bold mx-2">₹{totalAmount}</span>
              </Text>
            </CustomDiv>
          </div>
        )}

        <span className="flex w-full whitespace-nowrap gap-3">
          <CustomButton
            className="lg:w-full w-44"
            variant="outlined"
            onClick={() => setPaymentMethod(false)}
          >
            Back to Address
          </CustomButton>
          <CustomButton
            className="lg:w-full w-44"
            variant={isLoadingCOD || isLoadingOnline ? "outlined" : "contained"}
            onClick={() =>
              method === "Online" ? orderIdOnline() : orderIdCOD()
            }
          >
            {isLoadingCOD || isLoadingOnline ? (
              <CircularProgress size={25} />
            ) : (
              <span>Place Your Order</span>
            )}
          </CustomButton>
        </span>
      </CustomDiv>
    </>
  ) : (
    <CustomDiv className="flex lg:w-auto flex-col gap-5">
      <Text className="text-xl text-center font-semibold">Select Address</Text>
      <Divider />
      <CustomDiv className="flex flex-col gap-2 lg:h-[79vh] h-[75vh] overflow-scroll">
        {addressListData?.data?.data?.my_address_list?.map((address) => {
          return (
            <CustomDiv
              className={classNames(
                "flex flex-col cursor-pointer hover:shadow-md transition-all duration-200 shadow p-4 !rounded",
                value === address.id ? "shadow-md" : ""
              )}
              onClick={() => setValue(address.id)}
            >
              <Text className="font-bold text-xs p-1 bg-gray-100 rounded-md">
                {address.is_same_as_billing_address === "True" &&
                  address.is_only_billing_address === "True" ? (
                  "Shipping & Billing Address"
                ) : (
                  <>
                    {address.is_same_as_billing_address === "True"
                      ? "Shipping & Billing Address"
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
              <span className="flex !text-xs justify-between items-end">
                {value === address.id ? (
                  <>
                    <RadioGroup
                      row
                      className="!flex !p-0 justify-around"
                      name="radio-button-group"
                    >
                      <FormControlLabel
                        value="billing"
                        control={
                          <Radio name="abcd" checked="checked" size="small" />
                        }
                        className="!text-xs text-gray-500"
                        label="Billing Address Same"
                      />
                      <FormControlLabel
                        value="address"
                        control={<Radio name="abcd" size="small" />}
                        className="!text-xs text-gray-500"
                        label="Other"
                        onClick={() => handleNewAddAddress()}
                      />
                    </RadioGroup>
                  </>
                ) : null}
              </span>
              <span className="flex justify-between">
                <Text className="font-semibold">{address.address_type}</Text>
                {value === address.id ? (
                  <img src={accpt} alt="" className="h-5" />
                ) : null}
              </span>
              <Text>
                {address.first_name} {address.last_name}
              </Text>

              <span className="flex justify-between items-end">
                <Text>
                  {address.address}, {address.area}, {address.street_address},
                  {address.city}, {address.state}, {address.country},
                  {address.pincode}
                </Text>
                {value === address.id ? (
                  <Edit
                    fontSize="small"
                    color="primary"
                    onClick={() => handleUpdate(Number(address?.id))}
                  />
                ) : null}
              </span>
            </CustomDiv>
          );
        })}
        <span
          onClick={() => handleAddAddress()}
          className="flex items-center !text-gray-600 cursor-pointer hover:shadow-md shadow p-9 rounded"
        >
          <Add />
          <Text> Add Address</Text>
        </span>
      </CustomDiv>
      <span className="flex w-full gap-5">
        <CustomButton
          variant="outlined"
          onClick={() => setPage(1)}
          className="!w-full !text-gray-900"
        >
          Back to cart
        </CustomButton>
        <CustomButton
          onClick={() => setPaymentMethod(true)}
          disabled={value ? false : true}
          className="!w-full"
        >
          Continue
        </CustomButton>
      </span>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        className="flex justify-center h-4/6 !outline-none my-auto"
      >
        <Sheet
          variant="outlined"
          className="lg:w-1/2 w-11/12 !outline-none p-8 rounded py-5"
        >
          <ModalClose variant="outlined" />
          <form onSubmit={handleSubmit} className="h-full">
            <Text className="text-xl font-semibold my-1">
              {!value ? "Add Delivery Address" : "Update Delivery Address"}
            </Text>
            <div className="flex flex-row">
              <div className="flex flex-row w-full my-2 ">
                <Checkbox
                  value={blingAdd}
                  className="!p-1 !pl-0"
                  onChange={(e) => setBlingAdd(e.target.checked)}
                />
                <p>Billing Address</p>
              </div>
              <div className="flex flex-row w-full my-2 ">
                <Checkbox
                  value={onlyBlingAdd}
                  className="!p-1 !pl-0"
                  onChange={(e) => setOnlyBlingAdd(e.target.checked)}
                />
                <p>Only Billing Address</p>
              </div>
              <div className="flex flex-row w-full my-2 ">
                <Checkbox
                  value={delAdd}
                  className="!p-1 !pl-0"
                  onChange={(e) => setDelAdd(e.target.checked)}
                />
                <p>Only Delivery Address</p>
              </div>
            </div>
            <CustomDiv className="grid lg:grid-cols-2 gap-5 h-4/6 overflow-y-auto lg:pr-0 pr-1 py-3">
              <span className="w-full">
                <Text>Name*</Text>
                <TextField
                  required
                  type="text"
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
                    type="text"
                    id="address_type"
                    name="address_type"
                    size="small"
                    defaultValue={address?.[0]?.address_type}
                    color="primary"
                    value={values["address_type"]}
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
                  type="number"
                  size="small"
                  color="primary"
                  className="!w-full !rounded"
                  id="mobile_number"
                  name="mobile_number"
                  value={values["mobile_number"]}
                  onChange={handleChange}
                  error={errors["mobile_number"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["mobile_number"]}
                />
              </span>
              <span className="w-full">
                <Text>Flat/House No./Compnay Name*</Text>
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
            <CustomButton
              disabled={isValid ? false : true}
              type="submit"
              className="!w-full !my-10"
            >
              Save Address
            </CustomButton>
          </form>
        </Sheet>
      </Modal>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={opens}
        onClose={() => setOpens(false)}
        className="flex justify-center h-5/6 !outline-none my-auto"
      >
        <Sheet
          variant="outlined"
          className="lg:w-1/2 w-11/12 !outline-none p-8 rounded"
        >
          <ModalClose variant="outlined" />
          <form onSubmit={handleSubmit} className="h-full">
            <Text className="text-xl font-semibold my-3">
              Add Billing Address
            </Text>
            <CustomDiv className="grid lg:grid-cols-2 gap-5 h-5/6 overflow-y-auto lg:pr-0 pr-1">
              <span className="w-full">
                <Text>Name*</Text>
                <TextField
                  type="text"
                  size="small"
                  color="primary"
                  className="!w-full !rounded"
                  id="name"
                  name="name"
                  value={values["name"]}
                  onChange={handleChange}
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
                    defaultValue={address?.[0]?.address_type}
                    color="primary"
                    value={values["address_type"]}
                    onChange={handleChange}
                    error={errors["address_type"] ? true : false}
                    FormHelperTextProps={{ className: "!text-red-500" }}
                    helperText={errors["address_type"]}
                  >
                    <MenuItem value={"Home"}>Home</MenuItem>
                    <MenuItem value={"Office"}>Office</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <span className="w-full">
                <Text>Contact Number*</Text>
                <TextField
                  type="text"
                  size="small"
                  color="primary"
                  className="!w-full !rounded"
                  id="mobile_number"
                  name="mobile_number"
                  value={values["mobile_number"]}
                  onChange={handleChange}
                  error={errors["mobile_number"] ? true : false}
                  FormHelperTextProps={{ className: "!text-red-500" }}
                  helperText={errors["mobile_number"]}
                />
              </span>
              <span className="w-full">
                <Text>Flat/House No./Compnay Name*</Text>
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
                  type="text"
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
            <CustomButton
              disabled={isValid ? false : true}
              type="submit"
              className="!w-full !my-5 "
            >
              Save Address
            </CustomButton>
          </form>
        </Sheet>
      </Modal>
    </CustomDiv>
  );
};

export default SelectAddress;
