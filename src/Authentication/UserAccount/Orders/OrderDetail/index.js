// import * as React from "react";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Drawer,
//   FormControl,
//   List,
//   ListItemButton,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import Text from "../../../../Shared/Text";
// import CustomDiv from "../../../../Shared/CustomDiv";
// import { CircularProgress, Divider } from "@mui/joy";
// import CustomButton from "../../../../Shared/CustomButton";
// import { API_URLS } from "../../../../Config/API_URLS";
// import axiosInstance from "../../../../Config/axios";
// import { useState } from "react";
// import { useSnackbar } from "notistack";
// import { Close, Visibility } from "@mui/icons-material";
// import { useFormik } from "formik";
// import { useMutation, useQuery, useQueryClient } from "react-query";
// import { resonsForCancellationFn } from "../../../../Services/ProductList";
// import { returnResonsFn } from "../../../../Services/ReturnResons";
// import { returnFn } from "../../../../Services/Returns";
// import ReturnStatus from "./ReturnStatus";

// export default function OrderDetail({ OrderId }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [items, setItems] = useState([]);
//   const [state, setState] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [status, setStatus] = useState({});
//   const [bankDetailForm, setBankDetailForm] = useState(0);
//   const [open1, setOpen1] = useState(false);
//   const [isReturn, setIsReturn] = useState(false);
//   const [isReplacement, setIsReplacement] = useState(false);
//   const [returnId, setReturnId] = useState("");
//   const [returnTo, setReturnTo] = useState("to_upi_id");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [ifsc, setIfsc] = useState("");
//   const [upiId, setUpiId] = useState("");
//   const [itemId, setItemId] = useState("");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleCloseDialog = () => {
//     setBankDetailForm(1);
//     setOpen(true);
//   };
//   const handleOpen = () => {
//     myOrderData();
//     setState(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const { enqueueSnackbar } = useSnackbar();

//   const { data: resonsForCancellation } = useQuery(
//     ["resonsForCancellation"],
//     () => resonsForCancellationFn(),
//     {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//     }
//   );
//   const { data: returnResons } = useQuery(
//     ["returnResons"],
//     () => returnResonsFn(),
//     {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//     }
//   );
//   const { mutate: returnProduct } = useMutation(returnFn, {
//     onSuccess: (res) => {
//       console.log(res.data);
//       enqueueSnackbar(res.data.message);
//       if (res.data.response_code === 200) {
//         setIsReturn(false);
//         setState(false);
//       }
//     },
//   });

//   const myOrderData = () => {
//     setIsLoading(true);
//     axiosInstance
//       .post(API_URLS.myOrders, { id: OrderId })
//       .then((response) => {
//         setData(response.data.data);
//         setItems(response.data.order_items_data);
//         setStatus(response?.data?.order_items_data?.if_live);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         enqueueSnackbar("Something went wrong..!", { variant: "error" });
//       });
//   };

//   const client = useQueryClient();
//   const initialValues = {
//     account_holder_name: "",
//     bank_account_details: "",
//     bank_ifsc_details: "",
//     reason_for_cancellation_id: "",
//   };
//   const { handleChange, handleSubmit, values } = useFormik({
//     initialValues: initialValues,

//     onSubmit: (values, action) => {
//       const reqbody = new FormData();
//       reqbody.append("order_id", data?.orderid_id);
//       reqbody.append("account_holder_name", values.account_holder_name);
//       reqbody.append("bank_account_details", values.bank_account_details);
//       reqbody.append("bank_ifsc_details", values.bank_ifsc_details);
//       reqbody.append(
//         "reason_for_cancellation_id",
//         values.reason_for_cancellation_id
//       );
//       axiosInstance
//         .post(API_URLS.orderCancellation, reqbody)
//         .then((response) => {
//           enqueueSnackbar(response.data.message);
//           client.refetchQueries("myOrderList");
//           setState(false);
//           setOpen(false);
//         })
//         .catch((error) => {
//           enqueueSnackbar("Something went wrong..!", { variant: "error" });
//         });
//     },
//   });
//   const handleReturn = (event) => {
//     event.preventDefault();
//     returnProduct({
//       order_item_id: itemId,
//       reason_for_return_id: returnId,
//       payment_refund_by: returnTo,
//       bank_account_details: accountNumber,
//       bank_ifsc_details: ifsc,
//       upi_id: upiId,
//     });
//   };

//   return (
//     <>
//       <Visibility
//         onClick={handleOpen}
//         className="cursor-pointer bg-[#306BDE] rounded text-white !p-2 !text-4xl"
//       />
//       <Drawer
//         anchor={"right"}
//         open={state}
//         onClose={() => setState(false)}
//         PaperProps={{ className: "!bg-white !bg-opacity-90 !backdrop-blur" }}
//       >
//         {isLoading ? (
//           <>
//             <CustomDiv className="flex h-full lg:w-[600px] w-screen justify-center items-center">
//               <CircularProgress size="lg" color="primary" />
//             </CustomDiv>
//           </>
//         ) : (
//           <CustomDiv className="flex gap-4 flex-col lg:w-[600px] w-screen p-6">
//             <Text className="text-lg font-semibold">Order Detail</Text>
//             <Text>Delivery Address</Text>
//             <span className="flex flex-col shadow border-2 border-[#306BDE] cursor-pointer p-5 rounded">
//               <Text className="font-semibold">
//                 {data?.user_address?.address_type}
//               </Text>
//               <Text className="font-semibold">
//                 {data?.customer_first_name} {data?.customer_last_name}
//               </Text>
//               <Text>
//                 {data?.customer_address_2}, {data?.customer_pincode},{" "}
//                 {data?.customer_city}, {data?.customer_state},{" "}
//                 {data?.customer_country},
//               </Text>
//             </span>

//             <div className="flex flex-col border-2 border-blue-200 rounded-md">
//               <p className="p-2">Delivery</p>
//               <Divider />
//               <div className="p-2">
//                 <p className="capitalize font-semibold">
//                   Status : {status?.status || data?.order_status}
//                 </p>
//                 <p>
//                   Date :{" "}
//                   {status?.order_timings?.order_ended_time ||
//                     data?.order_date?.slice(0, 10)}
//                 </p>
//               </div>
//             </div>

//             <table className="w-full">
//               <thead className="!text-center lg:text-sm  text-xs !bg-gray-300 !rounded">
//                 <tr>
//                   <th className="!p-2 !text-start">Items Name</th>
//                   <th className="!p-2 !text-center">Quantity</th>
//                   <th className="!p-2 !text-center">Price</th>
//                   <th className="!p-2 !text-center">Return/Replacement</th>
//                 </tr>
//               </thead>
//               <tbody className="!overflow-y-auto">
//                 {items?.order_items?.map((order) => {
//                   return (
//                     <tr className="border-b">
//                       <td className="!p-2 lg:text-sm text-xs lg:font-bold font-semibold flex lg:flex-row flex-col gap-2 items-start">
//                         <img
//                           src={order.product_images}
//                           alt=""
//                           className="w-16 h-16 rounded"
//                         />
//                         {order.product_name}
//                       </td>

//                       <td className="!p-2">{order.quantity}x</td>
//                       <td className="!p-2">₹{order.price}</td>
//                       <td className="">
//                         {data?.order_status === "Delivered" &&
//                           !order.is_active_return &&
//                           !order.is_active_replacement && <span>N/A</span>}
//                         <>
//                           {data?.order_status === "Delivered" &&
//                             order.is_active_return &&
//                             items?.order_return_list?.length === 0 && (
//                               <span className="flex flex-col items-center gap-1">
//                                 <Text
//                                   className="bg-blue-500 lg:cursor-pointer rounded-sm p-2 text-white"
//                                   onClick={() => {
//                                     setOpen1(true);
//                                     setItemId(order.id);
//                                   }}
//                                 >
//                                   Return
//                                 </Text>
//                               </span>
//                             )}
//                           {data?.order_status === "Delivered" &&
//                             order.is_active_return &&
//                             items?.order_return_list?.length !== 0 && (
//                               <span className="flex flex-col items-center gap-1 text-xs">
//                                 <p>Return Request Sent</p>
//                                 <ReturnStatus
//                                   items={order}
//                                   status={
//                                     items?.order_return_list?.filter(
//                                       (re) => re.sales_item === order.id
//                                     )?.[0]
//                                   }
//                                 />
//                               </span>
//                             )}
//                           {data?.order_status === "Delivered" &&
//                             order.is_active_replacement &&
//                             items?.order_replacement_list?.length === 0 && (
//                               <span className="flex flex-col items-center gap-1">
//                                 <Text
//                                   onClick={() => {

//                                   }}
//                                   className="bg-blue-500 lg:cursor-pointer rounded-sm p-1 text-white"
//                                 >
//                                   Replacement
//                                 </Text>
//                               </span>
//                             )}
//                         </>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//             <CustomDiv className="flex flex-col items-end gap-3 w-full">
//               <span className="flex justify-between gap-4 w-full">
//                 <Text>Total Amount:</Text>
//                 <Text>₹{data?.total_price}</Text>
//               </span>
//               <span className="flex justify-between gap-4 w-full">
//                 <Text>Total Tax Amount:</Text>
//                 <Text>+₹{data?.total_tax_amount}</Text>
//               </span>
//               <span className="flex justify-between gap-4 w-full">
//                 <Text>Discount:</Text>
//                 <Text>-₹{data?.total_discount}</Text>
//               </span>

//               <span className="flex justify-between gap-4 w-full">
//                 <Text>Delivery Charge:</Text>
//                 <Text>
//                   ₹
//                   {data?.total_delivery_charge
//                     ? data?.total_delivery_charge
//                     : 0}
//                 </Text>
//               </span>
//               <Divider />
//               <span className="flex font-semibold w-full justify-between gap-4">
//                 <Text>Total Order Amount:</Text>
//                 <Text>₹{data?.total_amount}</Text>
//               </span>
//             </CustomDiv>
//             <CustomDiv className="flex gap-4">
//               <CustomButton
//                 className="!w-full"
//                 onClick={() => setState(false)}
//                 variant="outlined"
//               >
//                 Back to Orders
//               </CustomButton>
//               {data?.order_status === "Pending" && (
//                 <CustomButton className="!w-full" onClick={handleClickOpen}>
//                   Cancel Order
//                 </CustomButton>
//               )}
//             </CustomDiv>
//           </CustomDiv>
//         )}
//         {bankDetailForm === 0 ? (
//           <Dialog
//             open={open}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               {"Order Cancellation"}
//             </DialogTitle>
//             <DialogContent>
//               <DialogContentText id="alert-dialog-description">
//                 Are you sure you want to cancel this order.
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>No</Button>
//               <Button onClick={handleCloseDialog} color="primary" autoFocus>
//                 Yes
//               </Button>
//             </DialogActions>
//           </Dialog>
//         ) : (
//           <Dialog
//             open={open}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogContent className="">
//               <form onSubmit={handleSubmit}>
//                 <Text className="text-xl text-center font-semibold my-5">
//                   Enter Your Bank Detail
//                 </Text>
//                 <CustomDiv className="grid grid-cols-1 lg:w-96 gap-5">
//                   <span className="w-full">
//                     <Text>Account Holder Name</Text>
//                     <TextField
//                       type="text"
//                       size="small"
//                       color="primary"
//                       id="account_holder_name"
//                       name="account_holder_name"
//                       value={values["account_holder_name"]}
//                       onChange={handleChange}
//                       className="!w-full !rounded"
//                     />
//                   </span>
//                   <span className="w-full">
//                     <Text>Account Number</Text>
//                     <TextField
//                       type="number"
//                       size="small"
//                       color="primary"
//                       id="bank_account_details"
//                       name="bank_account_details"
//                       value={values["bank_account_details"]}
//                       onChange={handleChange}
//                       className="!w-full !rounded"
//                     />
//                   </span>
//                   <span className="w-full">
//                     <Text>IFSC</Text>
//                     <TextField
//                       type="text"
//                       size="small"
//                       color="primary"
//                       id="bank_ifsc_details"
//                       name="bank_ifsc_details"
//                       value={values["bank_ifsc_details"]}
//                       onChange={handleChange}
//                       className="!w-full !rounded"
//                     />
//                   </span>
//                   <span className="w-full">
//                     <Text>Resons For Cancellation*</Text>
//                     <FormControl fullWidth>
//                       <Select
//                         size="small"
//                         color="primary"
//                         id="reason_for_cancellation_id"
//                         name="reason_for_cancellation_id"
//                         value={values["reason_for_cancellation_id"]}
//                         onChange={handleChange}
//                       >
//                         {resonsForCancellation?.data?.data?.map((resons) => {
//                           return (
//                             <MenuItem value={resons.id}>
//                               {resons.choice}
//                             </MenuItem>
//                           );
//                         })}
//                       </Select>
//                     </FormControl>
//                   </span>
//                 </CustomDiv>
//                 <span className="flex items-center gap-4">
//                   <CustomButton
//                     type="button"
//                     onClick={handleClose}
//                     className="!w-fit lg:!w-full !my-5"
//                     variant="outlined"
//                   >
//                     Back
//                   </CustomButton>
//                   <CustomButton
//                     type="submit"
//                     className="!w-full whitespace-nowrap !my-5"
//                   >
//                     Confirm Cancellation
//                   </CustomButton>
//                 </span>
//               </form>
//             </DialogContent>
//           </Dialog>
//         )}
//         <Dialog
//           open={open1}
//           onClose={() => setOpen1(false)}
//           PaperProps={{ className: "!m-0 w-1/4" }}
//         >
//           <DialogContent className="!p-0">
//             <p className="p-3 text-xl font-semibold">Return/Replacement</p>
//             <Divider />
//             <List>
//               <ListItemButton
//                 onClick={() => {
//                   setIsReturn(true);
//                   setOpen1(false);
//                 }}
//               >
//                 Return
//               </ListItemButton>
//               <ListItemButton

//               >
//                 Replacement</ListItemButton>
//             </List>
//           </DialogContent>
//         </Dialog>

//         <Dialog
//           open={isReturn}
//           onClose={() => setIsReturn(false)}
//           PaperProps={{ className: "!m-0 w-1/4" }}
//         >
//           <DialogContent className="!p-0">
//             <span className="flex justify-between">
//               <p className="p-3 text-xl font-semibold">Return</p>
//               <Close />
//             </span>

//             <Divider />
//             <form onSubmit={handleReturn} className="p-3 flex flex-col gap-2">
//               <span>
//                 <Text>Refund To*</Text>
//                 <FormControl fullWidth>
//                   <Select
//                     size="small"
//                     color="primary"
//                     value={returnTo}
//                     onChange={(event) => setReturnTo(event.target.value)}
//                   >
//                     <MenuItem value={"to_account_number"}>
//                       Bank Account
//                     </MenuItem>
//                     <MenuItem value={"to_upi_id"}>UPI</MenuItem>
//                   </Select>
//                 </FormControl>
//               </span>

//               <span>
//                 <Text>Resons For Return*</Text>
//                 <FormControl fullWidth>
//                   <Select
//                     size="small"
//                     color="primary"
//                     value={returnId}
//                     onChange={(event) => setReturnId(event.target.value)}
//                   >
//                     {returnResons?.data?.data?.map((resons) => {
//                       return (
//                         <MenuItem value={resons.id}>{resons.choice}</MenuItem>
//                       );
//                     })}
//                   </Select>
//                 </FormControl>
//               </span>

//               {returnTo === "to_account_number" ? (
//                 <>
//                   <span>
//                     <Text>Account No*</Text>
//                     <TextField
//                       type="text"
//                       size="small"
//                       color="primary"
//                       value={accountNumber}
//                       onChange={(event) => setAccountNumber(event.target.value)}
//                       className="!w-full !rounded"
//                     />
//                   </span>
//                   <span>
//                     <Text>IFSC*</Text>
//                     <TextField
//                       type="text"
//                       size="small"
//                       color="primary"
//                       value={ifsc}
//                       onChange={(event) => setIfsc(event.target.value)}
//                       className="!w-full !rounded"
//                     />
//                   </span>
//                 </>
//               ) : (
//                 <>
//                   <span>
//                     <Text>UPI*</Text>
//                     <TextField
//                       type="text"
//                       size="small"
//                       color="primary"
//                       value={upiId}
//                       onChange={() => setUpiId}
//                       className="!w-full !rounded"
//                     />
//                   </span>
//                 </>
//               )}

//               <span className="flex justify-center p-2">
//                 <CustomButton type="submit">Submit</CustomButton>
//               </span>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </Drawer>
//     </>
//   );
// }

import * as React from "react";
import {
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  FormControl,
  Grow,
  List,
  ListItemButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  CircularProgress,
  Rating,
  Checkbox,
} from "@mui/material";
import Text from "../../../../Shared/Text";
import CustomDiv from "../../../../Shared/CustomDiv";
import { Box, Divider, ModalClose, Sheet, Typography } from "@mui/joy";
import CustomButton from "../../../../Shared/CustomButton";
import { API_URLS } from "../../../../Config/API_URLS";
import axiosInstance from "../../../../Config/axios";
import { useState } from "react";
import { useSnackbar } from "notistack";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Add,
  BorderColor,
  Close,
  Recommend,
  TaskAlt,
  Visibility,
} from "@mui/icons-material";
import { useFormik } from "formik";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { resonsForCancellationFn } from "../../../../Services/ProductList";
import { returnResonsFn } from "../../../../Services/ReturnResons";
import { returnFn } from "../../../../Services/Returns";
import ReturnStatus from "./ReturnStatus";
import { returnReplacementFn } from "../../../../Services/ReplacementResons";
import { useEffect } from "react";
import { myAddressList } from "../../../../Services/AddressList";
import classNames from "classnames";
import { addAddressSchema } from "../../../../Schemas";
import { paymentReceiptFn } from "../../../../Services/PaymentReceipt";
import { replacementFn } from "../../../../Services/Replacement";
import { useNavigate } from "react-router-dom";

export default function OrderDetail({ OrderId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [status, setStatus] = useState({});
  const [bankDetailForm, setBankDetailForm] = useState(0);
  const [open1, setOpen1] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [isReplacement, setIsReplacement] = useState(false);
  const [returnId, setReturnId] = useState("");
  const [returnTo, setReturnTo] = useState("to_upi_id");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [upiId, setUpiId] = useState("");
  const [selectedRepReasons, setSelectedRepReasons] = useState(null);
  const [productId, setProductId] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [variantColor, setVariantColor] = useState("None");
  const [variantStorage, setVariantStorage] = useState("None");
  const [variantOther, setVariantOther] = useState("None");
  const [detail, setDetail] = useState([]);
  const [addressId, setAddressId] = useState(null);
  const [country, setCountry] = useState(null);
  const [stateListData, setStateListData] = useState(null);
  const [city, setCity] = useState(null);
  const [isRefund, setIsRefund] = useState(false);
  const [variantPrice, setVariantPrice] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [razorPay, setRazorPay] = useState(false);
  const [variantId, setVariantId] = useState("");
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [value, setValue] = React.useState(2);
  const [vid, setVid] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [recommend, setRecommend] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 1,
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setBankDetailForm(1);
    setOpen(true);
  };
  const handleOpen = () => {
    myOrderData();
    setState(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { enqueueSnackbar } = useSnackbar();
  const { data: resonsForCancellation } = useQuery(
    ["resonsForCancellation"],
    () => resonsForCancellationFn(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log("value", value);
  const { data: returnReplacement } = useQuery(
    ["replacementResons"],
    () => returnReplacementFn(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  const { data: returnResons } = useQuery(
    ["returnResons"],
    () => returnResonsFn(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const { mutate: returnProduct } = useMutation(returnFn, {
    onSuccess: (res) => {
      enqueueSnackbar(res.data.message);
      if (res.data.response_code === 200) {
        setIsReturn(false);
        setState(false);
      }
    },
  });

  const productDetail = () => {
    axiosInstance
      .post(
        `api/store/product-deatils/?variant_color_value_id=${variantColor}&variant_storage_value_id=${variantStorage}&other_variants_value_id=${variantOther}`,
        { id: productId }
      )
      .then((response) => {
        setDetail(response.data.data[0].product_deatils[0]);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const variant = detail?.product_variant_value_list?.[0];

  useEffect(
    () => {
      productId && productDetail();
    },
    // eslint-disable-next-line
    [productId, variantColor, variantStorage, variantOther]
  );

  const myOrderData = () => {
    setIsLoading(true);
    axiosInstance
      .post(API_URLS.myOrders, { id: OrderId })
      .then((response) => {
        setData(response.data.data);
        setItems(response.data.order_items_data);
        setStatus(response?.data?.order_items_data?.if_live);
        setIsLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const handleUpdate = (addressId) => {
    setAddressModal(true);
    setAddressId(addressId);
  };
  const handleAddAddress = () => {
    setAddressId(null);
    setAddressModal(true);
  };

  const { data: addressList } = useQuery(["myAddress"], () => myAddressList(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const address = addressList?.data?.data?.my_address_list?.filter(
    (data) => data.id === addressId
  );

  const initialValues2 = addressId
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
    }
    : {
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

  useEffect(() => {
    setTotalAmount(0);
  }, [selectedRepReasons]);

  const formik = useFormik({
    initialValues: initialValues2,
    enableReinitialize: true,
    validationSchema: addAddressSchema,
    onSubmit: () => {
      const reqBody = {
        address_id: addressId,
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
      };
      addressId
        ? axiosInstance
          .post(API_URLS.updateAddress, reqBody)
          .then((response) => {
            client.refetchQueries("myAddressList");
            enqueueSnackbar("Address Updated", { variant: "success" });
            setAddressModal(false);
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
            setAddressModal(false);
          })
          .catch((error) => {
            enqueueSnackbar("Something went wrong..!", {
              variant: "error",
            });
          });
    },
  });
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
  useEffect(
    () => {
      addressModal && countryList();
    },
    // eslint-disable-next-line
    [addressModal]
  );
  const stateList = () => {
    axiosInstance
      .post(API_URLS.stateList, { country_id: formik.values.country_id })
      .then((response) => {
        setStateListData(response.data.data);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const cityList = () => {
    axiosInstance
      .post(API_URLS.cityList, { state_id: formik.values.state_id })
      .then((response) => {
        setCity(response.data.data);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  useEffect(
    () => {
      formik.values.country_id !== "" && stateList();
    },
    // eslint-disable-next-line
    [formik.values.country_id]
  );
  useEffect(
    () => {
      formik.values.state_id !== "" && cityList();
    },
    // eslint-disable-next-line
    [formik.values.state_id]
  );

  useEffect(() => {
    setAddressId(addressList?.data?.data?.my_address_list?.[0]?.id);
  }, [addressList]);

  const { mutate: paymentReceipt, isLoading: isLoadingOnline } = useMutation(
    paymentReceiptFn,
    {
      onSuccess: (response) => {
        setReceipt(response.data.data.payment_receipt[0]);
      },
    }
  );
  useEffect(
    () => {
      receipt &&
        !razorPay &&
        replacement({
          order_item_id: itemId,
          reason_for_replacement_id: selectedRepReasons,
          variant_id: productId,
          address_id: addressId,
          payment_receipt_id: receipt?.payment_receipt_id,
          payment_refund_by: returnTo,
          bank_account_details: accountNumber,
          bank_ifsc_details: ifsc,
          upi_id: upiId,
        });
    },
    // eslint-disable-next-line
    [receipt, razorPay]
  );
  const { mutate: replacement, isLoading: isLoadingReplacement } = useMutation(
    replacementFn,
    {
      onSuccess: (response) => {
        console.log(response.data.message);
        if (response.data.response_code === 200) {
          setState(false);
          setIsReplacement(false);
          setIsRefund(false);
          setRazorPay(false);
          client.refetchQueries("myOrderList");
        }
        enqueueSnackbar(response?.data?.message);
        enqueueSnackbar(response?.data?.replacement_response);
      },
    }
  );

  const RazorPay = () => {
    const options = {
      // key: "rzp_live_WjOufVCBRpvN9u",
      key: "rzp_test_vDJzs5kXvURgrY",
      currency: "INR",
      amount: totalAmount,
      name: "Bhaarat Store",
      order_id: receipt?.razorpay_order_id,
      handler: function (response) {
        replacement({
          order_item_id: itemId,
          reason_for_replacement_id: selectedRepReasons,
          variant_id: variant?.variant_id,
          address_id: addressId,
          payment_receipt_id: receipt?.payment_receipt_id,
        });
      },

      theme: {
        color: "#800120",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  useEffect(
    () => {
      receipt && razorPay && RazorPay();
    },
    // eslint-disable-next-line
    [receipt, razorPay]
  );

  const client = useQueryClient();
  const initialValues = {
    account_holder_name: "",
    bank_account_details: "",
    bank_ifsc_details: "",
    reason_for_cancellation_id: "",
  };
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: initialValues,

    onSubmit: (values, action) => {
      const reqbody = new FormData();
      reqbody.append("order_id", data?.orderid_id);
      reqbody.append("account_holder_name", values.account_holder_name);
      reqbody.append("bank_account_details", values.bank_account_details);
      reqbody.append("bank_ifsc_details", values.bank_ifsc_details);
      reqbody.append(
        "reason_for_cancellation_id",
        values.reason_for_cancellation_id
      );
      axiosInstance
        .post(API_URLS.orderCancellation, reqbody)
        .then((response) => {
          enqueueSnackbar(response.data.message);
          client.refetchQueries("myOrderList");
          setState(false);
          setOpen(false);
        })
        .catch((error) => {
          enqueueSnackbar("Something went wrong..!", { variant: "error" });
        });
    },
  });
  const handleReturn = (event) => {
    event.preventDefault();
    returnProduct({
      order_item_id: itemId,
      reason_for_return_id: returnId,
      payment_refund_by: returnTo,
      bank_account_details: accountNumber,
      bank_ifsc_details: ifsc,
      upi_id: upiId,
    });
  };
  const handleSubmitReplacement = (event) => {
    event.preventDefault();
  };

  useEffect(
    () => {
      selectedRepReasons === 2 || selectedRepReasons === 5
        ? setTotalAmount(variantPrice - variant?.actual_price)
        : setTotalAmount(0);
    },
    // eslint-disable-next-line
    [variant, selectedRepReasons]
  );

  const SentReview = () => {
    const reqbody = new FormData();
    reqbody.append("product_id", vid);
    reqbody.append("rating", value);
    reqbody.append("subject", subject);
    reqbody.append("comment", comment);
    reqbody.append("reccomendation", recommend ? "True" : "False");
    reqbody.append("review_img", image);
    axiosInstance
      .post(API_URLS.WriteReview, reqbody)
      .then((response) => {
        alert(response.data.msg);
        handleClose2();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("recommend", recommend);

  return (
    <>
      <Visibility
        onClick={handleOpen}
        className="cursor-pointer bg-[#306BDE] rounded text-white !p-2 !text-4xl "
      />
      <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
        {isLoading ? (
          <>
            <CustomDiv className="flex h-full lg:w-[600px] w-screen justify-center items-center">
              <CircularProgress size="lg" color="primary" />
            </CustomDiv>
          </>
        ) : (
          <CustomDiv className="flex gap-4 flex-col lg:w-full w-screen p-6  ">
            <Text className="text-lg font-semibold">Order Detail</Text>
            <Text>Delivery Address</Text>
            <span className="flex flex-col shadow border-2 border-[#306BDE] cursor-pointer p-5 rounded">
              <Text className="font-semibold">
                {data?.user_address?.address_type}
              </Text>
              <Text className="font-semibold">
                {data?.customer_first_name} {data?.customer_last_name}
              </Text>
              <Text>
                {data?.customer_address_2}, {data?.customer_pincode},{" "}
                {data?.customer_city}, {data?.customer_state},{" "}
                {data?.customer_country},
              </Text>
            </span>

            <div className="flex flex-col border-2 border-blue-200 rounded-md">
              <p className="p-2">Delivery</p>
              <Divider />
              <div className="p-2">
                <p className="capitalize font-semibold">
                  Status : {status?.status || data?.order_status}
                </p>
                <p>
                  Date :{" "}
                  {status?.order_timings?.order_ended_time ||
                    data?.order_date?.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="overflow-y-auto w-[300]">
              <table className="w-full ">
                <thead className="!text-center lg:text-sm  text-xs !bg-gray-300 !rounded">
                  <tr>
                    <th className="!p-2 !text-start">Items Name</th>
                    <th className="!p-2 !text-center">Quantity</th>
                    <th className="!p-2 !text-center">Price</th>
                    <th className="!p-2 !text-center">Status</th>

                    <th className="!p-2 !text-center">Return/Replacement</th>
                    {data?.order_status === "Delivered" && (
                      <th className="!p-2 !text-center">Write Review</th>
                    )}
                  </tr>
                </thead>
                <tbody className="!overflow-y-auto">
                  {items?.order_items?.map((order) => {
                    return (
                      <tr className="border-b">
                        <td className="!p-2 lg:text-sm text-xs lg:font-bold font-semibold flex lg:flex-row flex-col gap-2 items-start">
                          <img
                            onClick={() => {
                              navigate(
                                `/product/${order?.product_id}/${order?.product_variant_id}`
                              );
                              handleClose();
                            }}
                            src={order.product_images}
                            alt=""
                            className="w-16 h-16 rounded"
                          />
                          {order.product_name}
                        </td>

                        <td className="!p-2">{order.quantity}x</td>
                        <td className="!p-2">₹{order.price}</td>
                        <td className="!p-2">{order.order_status}</td>
                        <td className="">
                          {data?.order_status === "Delivered" &&
                            !order.is_active_return &&
                            !order.is_active_replacement && (
                              <span className="flex flex-col items-center gap-1">
                                <span>N/A</span>
                              </span>
                            )}
                          {data?.order_status !== "Delivered" && (
                            <span className="flex flex-col items-center gap-1">
                              <span>N/A</span>
                            </span>
                          )}
                          <>
                            {data?.order_status === "Delivered" &&
                              order.is_active_return &&
                              items?.order_return_list?.length === 0 && (
                                <span className="flex flex-col items-center gap-1">
                                  <Text
                                    className="bg-blue-500 lg:cursor-pointer text-xs p-2 rounded-sm text-white"
                                    onClick={() => {
                                      setOpen1(true);
                                      setItemId(order.id);
                                    }}
                                  >
                                    Return
                                  </Text>
                                </span>
                              )}
                            {data?.order_status === "Delivered" &&
                              order.is_active_return &&
                              items?.order_return_list?.length !== 0 && (
                                <span className="flex flex-col items-center gap-1 text-xs">
                                  <p>Return Request Sent</p>
                                  <ReturnStatus
                                    items={order}
                                    title="Return"
                                    status={
                                      items?.order_return_list?.filter(
                                        (re) => re.sales_item === order.id
                                      )?.[0]
                                    }
                                  />
                                </span>
                              )}
                            {data?.order_status === "Delivered" &&
                              order.is_active_replacement &&
                              items?.order_replacement_list?.length === 0 && (
                                <span className="flex flex-col items-center gap-1">
                                  <Text
                                    className="bg-blue-500 lg:cursor-pointer text-xs p-2 rounded-sm text-white"
                                    onClick={() => {
                                      setProductId(order?.product_id);
                                      setItemId(order.id);
                                      setIsReplacement(true);
                                      setVariantPrice(order?.price);
                                    }}
                                  >
                                    Replacement
                                  </Text>
                                </span>
                              )}
                            {data?.order_status === "Delivered" &&
                              order.is_active_replacement &&
                              items?.order_replacement_list?.length !== 0 && (
                                <span className="flex flex-col items-center gap-1 text-xs">
                                  <p>Replacement Request Sent</p>
                                  <ReturnStatus
                                    items={order}
                                    title="Replacement"
                                    status={
                                      items?.order_replacement_list?.filter(
                                        (re) => re.sales_item === order.id
                                      )?.[0]
                                    }
                                  />
                                </span>
                              )}
                          </>
                        </td>
                        {data?.order_status === "Delivered" && (
                          <td onClick={handleOpen2} className="!p-2  !pl-10  ">
                            <StarOutlineIcon
                              onClick={() => setVid(order?.product_variant_id)}
                              className="!bg-yellow-400 py-1 px-2 !text-4xl text-white"
                            />
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="!bg-white">
                  <div className="flex flex-col justify-center items-center px-10">
                    <p className="text-2xl font-bold my-2">Write Review</p>
                    <div className="flex flex-col w-full my-5 ">
                      <label>Rating </label>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        className="my-2"
                      />
                    </div>
                    <div className="flex flex-col w-full my-2">
                      <label>Subject </label>
                      <input
                        type="text"
                        className="py-2 border-2 border-gray-300 my-2 rounded-md"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-full my-2 ">
                      <label>Comment </label>
                      <input
                        type="text"
                        className="py-2 border-2 border-gray-300 my-2  rounded-md"
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-full my-2 ">
                      <label>Select Image </label>
                      <input
                        type="file"
                        className="py-2 border-2 border-gray-300 my-2  rounded-md"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="flex flex-row w-full my-2 ">
                      <Checkbox
                        value={recommend}
                        className="!p-1 !pl-0"
                        onChange={(e) => setRecommend(e.target.checked)}
                      />
                      <p>Reccomendation</p>
                    </div>

                    <div className="flex flex-col my-2">
                      <button
                        className="py-2 px-5 font-bold bg-green-400"
                        type="submit"
                        onClick={SentReview}
                      >
                        Send Review
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
            <CustomDiv className="flex flex-col items-end gap-3 w-full">
              <span className="flex justify-between gap-4 w-full">
                <Text>Total Price:</Text>
                <Text>₹{data?.total_price}</Text>
              </span>
              <span className="flex justify-between gap-4 w-full">
                <Text>Discount:</Text>
                <Text>-₹{data?.total_discount}</Text>
              </span>
              <span className="flex justify-between gap-4 w-full">
                <Text>Sub Total:</Text>
                <Text>₹{data?.sub_total}</Text>
              </span>

              <span className="flex justify-between gap-4 w-full">
                <Text>Total Tax Amount:</Text>
                <Text>+₹{data?.total_tax_amount}</Text>
              </span>

              <span className="flex justify-between gap-4 w-full">
                <Text>Delivery Charge:</Text>
                <Text>
                  ₹
                  {data?.total_delivery_charge
                    ? data?.total_delivery_charge
                    : 0}
                </Text>
              </span>
              <Divider />
              <span className="flex font-semibold w-full justify-between gap-4">
                <Text>Total Order Amount:</Text>
                <Text>₹{data?.total_amount}</Text>
              </span>
            </CustomDiv>
            <CustomDiv className="flex gap-4">
              <CustomButton
                className="!w-full"
                onClick={() => setState(false)}
                variant="outlined"
              >
                Back to Orders
              </CustomButton>
              {data?.order_status === "Pending" && (
                <CustomButton className="!w-full" onClick={handleClickOpen}>
                  Cancel Order
                </CustomButton>
              )}
            </CustomDiv>
          </CustomDiv>
        )}
        {bankDetailForm === 0 ? (
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Order Cancellation"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to cancel this order.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleCloseDialog} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent className="">
              <form onSubmit={handleSubmit}>
                <Text className="text-xl text-center font-semibold my-5">
                  Enter Your Bank Detail
                </Text>
                <CustomDiv className="grid grid-cols-1 lg:w-96 gap-5">
                  {data?.payment_type === "Prepaid" && (
                    <div>
                      <span className="w-full">
                        <Text>Account Holder Name</Text>
                        <TextField
                          type="text"
                          size="small"
                          color="primary"
                          id="account_holder_name"
                          name="account_holder_name"
                          value={values["account_holder_name"]}
                          onChange={handleChange}
                          className="!w-full !rounded"
                        />
                      </span>
                      <span className="w-full">
                        <Text>Account Number</Text>
                        <TextField
                          type="number"
                          size="small"
                          color="primary"
                          id="bank_account_details"
                          name="bank_account_details"
                          value={values["bank_account_details"]}
                          onChange={handleChange}
                          className="!w-full !rounded"
                        />
                      </span>
                      <span className="w-full">
                        <Text>IFSC</Text>
                        <TextField
                          type="text"
                          size="small"
                          color="primary"
                          id="bank_ifsc_details"
                          name="bank_ifsc_details"
                          value={values["bank_ifsc_details"]}
                          onChange={handleChange}
                          className="!w-full !rounded"
                        />
                      </span>
                    </div>
                  )}

                  <span className="w-full">
                    <Text>Resons For Cancellation*</Text>
                    <FormControl fullWidth>
                      <Select
                        size="small"
                        color="primary"
                        id="reason_for_cancellation_id"
                        name="reason_for_cancellation_id"
                        value={values["reason_for_cancellation_id"]}
                        onChange={handleChange}
                      >
                        {resonsForCancellation?.data?.data?.map((resons) => {
                          return (
                            <MenuItem value={resons.id}>
                              {resons.choice}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </span>
                </CustomDiv>
                <span className="flex items-center gap-4">
                  <CustomButton
                    type="button"
                    onClick={handleClose}
                    className="!w-fit lg:!w-full !my-5"
                    variant="outlined"
                  >
                    Back
                  </CustomButton>
                  <CustomButton
                    type="submit"
                    className="!w-full whitespace-nowrap !my-5"
                  >
                    Confirm Cancellation
                  </CustomButton>
                </span>
              </form>
            </DialogContent>
          </Dialog>
        )}
        <Dialog
          open={open1}
          onClose={() => setOpen1(false)}
          PaperProps={{ className: "!m-0 lg:w-1/4" }}
        >
          <DialogContent className="!p-0">
            <p className="p-3 text-xl font-semibold">Return/Replacement</p>
            <Divider />
            <List>
              <ListItemButton
                onClick={() => {
                  setIsReturn(true);
                  setOpen1(false);
                }}
              >
                Return
              </ListItemButton>
              <ListItemButton onClick={() => setIsReplacement(true)}>
                Replacement
              </ListItemButton>
            </List>
          </DialogContent>
        </Dialog>

        <Dialog open={isReturn} PaperProps={{ className: "!m-0 lg:w-1/4" }}>
          <DialogContent className="!p-0">
            <span className="flex justify-between items-center pr-3">
              <p className="p-3 text-xl font-semibold">Return</p>
              <Close
                className="hover:!text-red-600 !cursor-pointer"
                onClick={() => setIsReturn(false)}
              />
            </span>

            <Divider />
            <form onSubmit={handleReturn} className="p-3 flex flex-col gap-2">
              <span className={data?.payment_type === "Prepaid" && "hidden"}>
                <Text>Refund To*</Text>
                <FormControl fullWidth>
                  <Select
                    size="small"
                    color="primary"
                    value={returnTo}
                    onChange={(event) => setReturnTo(event.target.value)}
                  >
                    <MenuItem value={"to_account_number"}>
                      Bank Account
                    </MenuItem>
                    <MenuItem value={"to_upi_id"}>UPI</MenuItem>
                  </Select>
                </FormControl>
              </span>

              <span>
                <Text>Resons For Return*</Text>
                <FormControl fullWidth>
                  <Select
                    size="small"
                    color="primary"
                    value={returnId}
                    onChange={(event) => setReturnId(event.target.value)}
                  >
                    {returnResons?.data?.data?.map((resons) => {
                      return (
                        <MenuItem value={resons.id}>{resons.choice}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </span>

              {returnTo === "to_account_number" ? (
                <>
                  <span
                    className={data?.payment_type === "Prepaid" && "hidden"}
                  >
                    <Text>Account No*</Text>
                    <TextField
                      type="text"
                      size="small"
                      color="primary"
                      value={accountNumber}
                      onChange={(event) => setAccountNumber(event.target.value)}
                      className="!w-full !rounded"
                    />
                  </span>
                  <span
                    className={data?.payment_type === "Prepaid" && "hidden"}
                  >
                    <Text>IFSC*</Text>
                    <TextField
                      type="text"
                      size="small"
                      color="primary"
                      value={ifsc}
                      onChange={(event) => setIfsc(event.target.value)}
                      className="!w-full !rounded"
                    />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={data?.payment_type === "Prepaid" && "hidden"}
                  >
                    <Text>UPI*</Text>
                    <TextField
                      type="text"
                      size="small"
                      color="primary"
                      value={upiId}
                      onChange={(event) => setUpiId(event.target.value)}
                      className="!w-full !rounded"
                    />
                  </span>
                </>
              )}

              <span className="flex justify-center p-2">
                <CustomButton type="submit">Submit Return Request</CustomButton>
              </span>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog
          open={isReplacement}
          PaperProps={{ className: "!m-0 !max-w-[1800px] lg:w-1/2" }}
        >
          <DialogContent className="!p-0">
            <span className="flex items-center pr-3  justify-between">
              <p className="p-3 text-xl font-semibold">Replacement</p>
              <Close
                onClick={() => setIsReplacement(false)}
                className="lg:cursor-pointer hover:text-red-500"
              />
            </span>

            <Divider />
            <form
              onSubmit={handleSubmitReplacement}
              className="p-3 flex flex-col  gap-2"
            >
              <span>
                <Text>Resons For Replacement*</Text>
                <FormControl fullWidth>
                  <Select
                    size="small"
                    color="primary"
                    value={selectedRepReasons}
                    onChange={(event) =>
                      setSelectedRepReasons(event.target.value)
                    }
                  >
                    {returnReplacement?.data?.data?.map((resons) => {
                      return (
                        <MenuItem value={resons.id}>{resons.choice}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </span>
              {(selectedRepReasons === 2 || selectedRepReasons === 5) && (
                <>
                  <Divider className="text-xl text-blue-500 font-semibold">
                    Select Product Variant
                  </Divider>
                  {detail?.variant_color_value?.length !== 0 && (
                    <span>
                      <Text>{detail?.variant_color?.[0]?.title}</Text>
                      <FormControl fullWidth>
                        <Select
                          size="small"
                          color="primary"
                          value={variantColor}
                          onChange={(event) =>
                            setVariantColor(event.target.value)
                          }
                        >
                          {detail?.variant_color_value?.map((variant) => {
                            return (
                              <MenuItem value={variant.id}>
                                {variant.color}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </span>
                  )}
                  {detail?.variant_storage_value?.length !== 0 && (
                    <span>
                      <Text>{detail?.variant_storage?.[0]?.title}</Text>
                      <FormControl fullWidth>
                        <Select
                          size="small"
                          color="primary"
                          value={variantStorage}
                          onChange={(event) =>
                            setVariantStorage(event.target.value)
                          }
                        >
                          {detail?.variant_storage_value?.map((variant) => {
                            return (
                              <MenuItem value={variant.id}>
                                {variant.value}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </span>
                  )}
                  {detail?.other_variants_value?.length !== 0 && (
                    <span>
                      <Text>{detail?.other_variants?.[0]?.title}</Text>
                      <FormControl fullWidth>
                        <Select
                          size="small"
                          color="primary"
                          value={variantOther}
                          onChange={(event) =>
                            setVariantOther(event.target.value)
                          }
                        >
                          {detail?.other_variants_value?.map((variant) => {
                            return (
                              <MenuItem value={variant.id}>
                                {variant.value}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </span>
                  )}
                  <>
                    <span className="flex gap-2 border p-2">
                      <img
                        src={
                          variant?.varients_multiple_image?.[0]?.variant_image
                        }
                        alt=""
                        className="h-20 w-20"
                      />
                      <span className="flex flex-col">
                        <Text>{variant?.variant_name}</Text>
                        {Number(variant?.discount_percent) === 0 ? (
                          <Text className="">
                            <span className="font-bold">
                              ₹{variant?.variant_price}
                            </span>
                          </Text>
                        ) : (
                          <Text className="text-sm">
                            <span className="line-through">
                              ₹{variant?.variant_price?.replace(".0", "")}
                            </span>
                            <span className="font-bold px-1">
                              ₹{variant?.actual_price?.replace(".0", "")}
                            </span>
                            <span className="text-green-600 pr-1">
                              <span className="mx-1">
                                {variant?.discount_percent?.replace(".0", "")}%
                                OFF
                              </span>
                            </span>
                          </Text>
                        )}
                      </span>
                      <p>Old Variant Price : {variantPrice}</p>
                      <p>New Variant Price : {variant?.actual_price}</p>
                    </span>
                  </>
                </>
              )}
              <Collapse in={selectedRepReasons}>
                <Divider className="text-xl text-blue-500 font-semibold">
                  Select Address
                </Divider>
                <CustomDiv className="flex flex-col gap-1 bg-white">
                  {addressList?.data?.data?.my_address_list?.map((address) => {
                    return (
                      <CustomDiv
                        className={classNames(
                          "flex justify-between cursor-pointer p-2 border-2 border-blue-100 !rounded",
                          addressId === address.id && "border-blue-400"
                        )}
                        onClick={() => setAddressId(address.id)}
                      >
                        <span className="flex-col flex">
                          <Text className="font-semibold h-fit">
                            {address.address_type}
                          </Text>

                          <Text>
                            {address.name} {address.last_name}
                          </Text>
                          <span className="flex justify-between items-end">
                            <Text>
                              {address.address}, {address.area},{" "}
                              {address.street_address}, {address.city},{" "}
                              {address.state}, {address.country},{" "}
                              {address.pincode}
                            </Text>
                          </span>
                        </span>
                        <div className="flex flex-col justify-between">
                          {addressId === address.id && (
                            <Grow in={addressId}>
                              <TaskAlt color="success" />
                            </Grow>
                          )}
                          {addressId === address.id && (
                            <Grow in={addressId}>
                              <BorderColor
                                color="primary"
                                onClick={() => handleUpdate(address.id)}
                              />
                            </Grow>
                          )}
                        </div>
                      </CustomDiv>
                    );
                  })}
                  <span
                    className="flex gap-2 cursor-pointer p-2 border-2 border-blue-100 !rounded"
                    onClick={handleAddAddress}
                  >
                    <Add />
                    <Text>Add Address</Text>
                  </span>
                </CustomDiv>
              </Collapse>

              <span className="flex justify-center p-2">
                <CustomButton
                  type="submit"
                  variant={
                    isLoadingReplacement || isLoadingOnline
                      ? "outlined"
                      : "contained"
                  }
                  className="!px-10"
                  onClick={() => {
                    if (totalAmount === 0) {
                      paymentReceipt({
                        address_id: addressId,
                        total_amount: variantPrice,
                      });
                      setRazorPay(false);
                    }
                    if (totalAmount > 0) {
                      setIsRefund(true);
                      setRazorPay(false);
                    }
                    if (totalAmount < 0) {
                      setRazorPay(true);
                      paymentReceipt({
                        address_id: addressId,
                        total_amount: Math.abs(totalAmount),
                      });
                    }
                  }}
                >
                  {isLoadingReplacement || isLoadingOnline ? (
                    <CircularProgress size={25} />
                  ) : (
                    <>
                      {totalAmount > 0 && `Refund ₹${totalAmount}`}
                      {totalAmount === 0 && `Submit Replacement Request`}
                      {totalAmount < 0 && `Pay ₹${Math.abs(totalAmount)}`}
                    </>
                  )}
                </CustomButton>
              </span>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog open={isRefund} PaperProps={{ className: "!m-0 lg:w-1/4" }}>
          <DialogContent className="!p-0">
            <span className="flex justify-between items-center pr-3">
              <p className="p-3 text-xl font-semibold">Refund</p>
              <Close
                className="hover:!text-red-600 !cursor-pointer"
                onClick={() => setIsRefund(false)}
              />
            </span>

            <Divider />
            <div className="p-3 flex flex-col gap-2">
              <span className={data?.payment_type === "Prepaid" && "hidden"}>
                <Text>Refund To*</Text>
                <FormControl fullWidth>
                  <Select
                    size="small"
                    color="primary"
                    value={returnTo}
                    onChange={(event) => setReturnTo(event.target.value)}
                  >
                    <MenuItem value={"to_account_number"}>
                      Bank Account
                    </MenuItem>
                    <MenuItem value={"to_upi_id"}>UPI</MenuItem>
                  </Select>
                </FormControl>
              </span>

              {returnTo === "to_account_number" ? (
                <>
                  <span
                    className={data?.payment_type === "Prepaid" && "hidden"}
                  >
                    <Text>Account No*</Text>
                    <TextField
                      type="text"
                      size="small"
                      color="primary"
                      value={accountNumber}
                      onChange={(event) => setAccountNumber(event.target.value)}
                      className="!w-full !rounded"
                    />
                  </span>
                  <span
                    className={data?.payment_type === "Prepaid" && "hidden"}
                  >
                    <Text>IFSC*</Text>
                    <TextField
                      type="text"
                      size="small"
                      color="primary"
                      value={ifsc}
                      onChange={(event) => setIfsc(event.target.value)}
                      className="!w-full !rounded"
                    />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={data?.payment_type === "Prepaid" && "hidden"}
                  >
                    <Text>UPI*</Text>
                    <TextField
                      type="text"
                      size="small"
                      color="primary"
                      value={upiId}
                      onChange={(event) => setUpiId(event.target.value)}
                      className="!w-full !rounded"
                    />
                  </span>
                </>
              )}

              <span className="flex justify-center p-2">
                <CustomButton
                  type="submit"
                  variant={isLoadingReplacement ? "outlined" : "contained"}
                  onClick={() => {
                    paymentReceipt({
                      address_id: addressId,
                      total_amount: Math.abs(totalAmount),
                    });
                  }}
                >
                  {isLoadingReplacement ? (
                    <CircularProgress size={25} />
                  ) : (
                    "Submit Replacement Request"
                  )}
                </CustomButton>
              </span>
            </div>
          </DialogContent>
        </Dialog>
        <Modal
          open={addressModal}
          onClose={() => setAddressModal(false)}
          className="flex justify-center h-4/6 !outline-none my-auto"
        >
          <Sheet
            variant="outlined"
            className="lg:w-1/2 w-11/12 !outline-none p-8 rounded"
          >
            <ModalClose
              variant="outlined"
              onClick={() => setAddressModal(false)}
            />
            <form onSubmit={formik.handleSubmit} className="h-full">
              <Text className="text-xl font-semibold my-3">
                {!addressId ? "Add Address" : "Update Address"}
              </Text>
              <CustomDiv className="grid lg:grid-cols-2 gap-5 h-4/6 overflow-y-auto lg:pr-0 pr-1 py-2">
                <span className="w-full">
                  <Text>Address Type*</Text>
                  <FormControl fullWidth>
                    <Select
                      id="address_type"
                      name="address_type"
                      size="small"
                      defaultValue={address?.[0]?.address_type}
                      color="warning"
                      value={formik.values["address_type"]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      FormHelperTextProps={{ className: "!text-red-500" }}
                      error={
                        formik.errors["address_type"] &&
                          formik.touched["address_type"]
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched["address_type"] &&
                        formik.errors["address_type"]
                      }
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
                    type="number"
                    onBlur={formik.handleBlur}
                    size="small"
                    color="warning"
                    className="!w-full !rounded"
                    id="mobile_number"
                    name="mobile_number"
                    value={formik.values["mobile_number"]}
                    onChange={formik.handleChange}
                    error={
                      formik.errors["mobile_number"] &&
                        formik.touched["mobile_number"]
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched["mobile_number"] &&
                      formik.errors["mobile_number"]
                    }
                    FormHelperTextProps={{ className: "!text-red-500" }}
                  />
                </span>
                <span className="w-full">
                  <Text>Flat/House No./Compnay Name*</Text>
                  <TextField
                    type="text"
                    onBlur={formik.handleBlur}
                    size="small"
                    color="warning"
                    id="address"
                    name="address"
                    value={formik.values["address"]}
                    onChange={formik.handleChange}
                    className="!w-full !rounded"
                    error={
                      formik.errors["address"] && formik.touched["address"]
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched["address"] && formik.errors["address"]
                    }
                    FormHelperTextProps={{ className: "!text-red-500" }}
                  />
                </span>
                <span className="w-full">
                  <Text>Area/Landmark*</Text>
                  <TextField
                    type="text"
                    onBlur={formik.handleBlur}
                    size="small"
                    color="warning"
                    id="area"
                    name="area"
                    value={formik.values["area"]}
                    onChange={formik.handleChange}
                    className="!w-full !rounded"
                    error={
                      formik.errors["area"] && formik.touched["area"]
                        ? true
                        : false
                    }
                    helperText={formik.touched["area"] && formik.errors["area"]}
                    FormHelperTextProps={{ className: "!text-red-500" }}
                  />
                </span>

                <span className="w-full">
                  <Text>Street/Sector/Village*</Text>
                  <TextField
                    type="text"
                    onBlur={formik.handleBlur}
                    size="small"
                    color="warning"
                    id="street_address"
                    name="street_address"
                    value={formik.values["street_address"]}
                    onChange={formik.handleChange}
                    className="!w-full !rounded"
                    error={
                      formik.errors["street_address"] &&
                        formik.touched["street_address"]
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched["street_address"] &&
                      formik.errors["street_address"]
                    }
                    FormHelperTextProps={{ className: "!text-red-500" }}
                  />
                </span>
                <span className="w-full">
                  <Text>Pincode*</Text>
                  <TextField
                    type="number"
                    onBlur={formik.handleBlur}
                    size="small"
                    color="warning"
                    id="pincode"
                    name="pincode"
                    value={formik.values["pincode"]}
                    onChange={formik.handleChange}
                    className="!w-full !rounded"
                    error={
                      formik.errors["pincode"] && formik.touched["pincode"]
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched["pincode"] && formik.errors["pincode"]
                    }
                    FormHelperTextProps={{ className: "!text-red-500" }}
                  />
                </span>
                <span className="w-full">
                  <Text>Email*</Text>
                  <TextField
                    type="text"
                    onBlur={formik.handleBlur}
                    size="small"
                    color="warning"
                    className="!w-full !rounded"
                    id="email"
                    name="email"
                    value={formik.values["email"]}
                    onChange={formik.handleChange}
                    error={
                      formik.errors["email"] && formik.touched["email"]
                        ? true
                        : false
                    }
                    helperText={
                      formik.touched["email"] && formik.errors["email"]
                    }
                    FormHelperTextProps={{ className: "!text-red-500" }}
                  />
                </span>

                <span className="w-full">
                  <Text>Country*</Text>
                  <FormControl fullWidth>
                    <Select
                      id="country_id"
                      onBlur={formik.handleBlur}
                      size="small"
                      color="warning"
                      name="country_id"
                      value={formik.values["country_id"]}
                      onChange={formik.handleChange}
                      error={
                        formik.errors["country_id"] &&
                          formik.touched["country_id"]
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched["country_id"] &&
                        formik.errors["country_id"]
                      }
                      FormHelperTextProps={{ className: "!text-red-500" }}
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
                      onBlur={formik.handleBlur}
                      name="state_id"
                      size="small"
                      color="warning"
                      value={formik.values["state_id"]}
                      onChange={formik.handleChange}
                      error={
                        formik.errors["state_id"] && formik.touched["state_id"]
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched["state_id"] && formik.errors["state_id"]
                      }
                      FormHelperTextProps={{ className: "!text-red-500" }}
                    >
                      {stateListData?.map((state) => {
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
                      onBlur={formik.handleBlur}
                      name="city_id"
                      size="small"
                      color="warning"
                      value={formik.values["city_id"]}
                      onChange={formik.handleChange}
                      error={
                        formik.errors["city_id"] && formik.touched["city_id"]
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched["city_id"] && formik.errors["city_id"]
                      }
                      FormHelperTextProps={{ className: "!text-red-500" }}
                    >
                      {city?.map((city) => {
                        return <MenuItem value={city.id}>{city.city}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </span>
              </CustomDiv>
              <CustomButton
                disabled={formik.isValid ? false : true}
                type="submit"
                className="!w-full !my-5"
              >
                Save Address
              </CustomButton>
            </form>
          </Sheet>
        </Modal>
      </Drawer>
    </>
  );
}
