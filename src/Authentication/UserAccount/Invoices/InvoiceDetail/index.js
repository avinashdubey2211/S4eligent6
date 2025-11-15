import * as React from "react";
import { Drawer } from "@mui/material";
import Text from "../../../../Shared/Text";
import CustomDiv from "../../../../Shared/CustomDiv";
import { CircularProgress } from "@mui/joy";
import CustomButton from "../../../../Shared/CustomButton";
import { API_URLS } from "../../../../Config/API_URLS";
import axiosInstance from "../../../../Config/axios";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Visibility } from "@mui/icons-material";
import Pdf from "react-to-pdf";
import { useMutation } from "react-query";
import { createInvoiceFn } from "../../../../Services/CreateInvoice";
import logo from "../../../../Assets/zzz.jpeg";

const InvoiceDetail = ({ OrderId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const ref = React.createRef();

  const handleOpen = () => {
    createInvoice({ order_id: OrderId });
    setState(true);
  };

  const { enqueueSnackbar } = useSnackbar();

  const myOrderData = () => {
    setIsLoading(true);
    axiosInstance
      .post(API_URLS.invoiceDetail, { order_id: OrderId })
      .then((response) => {
        setData(response?.data?.data);

        setIsLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };
  const { mutate: createInvoice, isLoading: isLoadingInvoice } = useMutation(
    createInvoiceFn,
    {
      onSuccess: (response) => {
        myOrderData();
      },
    }
  );

  return (
    <>
      <Visibility
        onClick={handleOpen}
        className="cursor-pointer bg-[#306BDE] rounded text-white !p-2 !text-4xl"
      />
      <Drawer anchor="right" open={state} onClose={() => setState(false)}>
        {isLoading || isLoadingInvoice ? (
          <>
            <CustomDiv className="flex h-full lg:w-[790px] justify-center items-center">
              <CircularProgress size="lg" color="primary" />
            </CustomDiv>
          </>
        ) : (
          <div
            ref={ref}
            className="flex gap-5 flex-col lg:w-[790px] w-[340px] p-5 lg:p-16"
          >
            <Text className="font-semibold text-center p-1 w-full bg-black rounded text-white uppercase tracking-[0.7rem]">
              Invoice
            </Text>
            <span className="flex justify-between items-center my-2">
              <div>
                <img src={logo} alt="" className="w-1/3" />
                <p className="font-bold">{data[0]?.store_name}</p>
                <p>{data[0]?.store_address}</p>
              </div>

              {data?.map((itemss) => {
                return (
                  <span className="flex flex-col gap-2">
                    <Text className="font-semibold">
                      Invoice Number : #{itemss?.invoice_no}
                    </Text>
                    <Text className="font-semibold">
                      Invoice Date : {itemss?.date}
                    </Text>
                  </span>
                );
              })}
            </span>
            <span className="flex gap-5 w-full">
              <span className="flex flex-col gap-3 w-full">
                <Text className="font-bold">Billing Address</Text>

                {data?.map((item) => {
                  return (
                    <span className="flex flex-col text-sm">
                      <Text>
                        {item?.customer?.first_name}
                        {item?.customer?.last_name === "" ? (
                          ""
                        ) : (
                          <>{item?.customer?.last_name}</>
                        )}
                      </Text>

                      <Text>{item?.customer?.phone}</Text>
                      <Text>{item?.customer?.email}</Text>
                      <Text>
                        {item?.customer?.address}, {item?.customer?.address2},
                        {item?.customer?.city}
                      </Text>

                      <Text>{item?.customer?.state}</Text>
                      <Text>
                        {item?.customer?.country}-{item?.customer?.pincode}
                      </Text>
                    </span>
                  );
                })}
              </span>
              <span className="flex flex-col gap-3 w-full">
                <Text className="font-bold">Shipping Address</Text>

                {data?.map((item) => {
                  return (
                    <span className="flex flex-col text-sm">
                      <Text>
                        {item?.customer?.first_name}
                        {item?.customer?.last_name === "" ? (
                          ""
                        ) : (
                          <>{item?.customer?.last_name}</>
                        )}
                      </Text>

                      <Text>{item?.customer?.phone}</Text>
                      <Text>{item?.customer?.email}</Text>
                      <Text>
                        {item?.customer?.address}, {item?.customer?.address2},
                        {item?.customer?.city}
                      </Text>

                      <Text>{item?.customer?.state}</Text>
                      <Text>
                        {item?.customer?.country}-{item?.customer?.pincode}
                      </Text>
                    </span>
                  );
                })}
              </span>
            </span>
            <span className="border-y py-2 font-bold">Shipping Details</span>
            {data?.map((item) => {
              return (
                <span className="flex flex-col gap-1">
                  <Text className="">Order Number : {item?.order_id}</Text>
                  <Text className="">Order Date : {item?.date}</Text>
                </span>
              );
            })}
            <div className="overflow-y-auto w-[300px]">
              <table className="w-full">
                <thead className="border-y border-gray-300 !rounded">
                  <tr>
                    <th className="!p-2 !text-left">Items Name</th>
                    {data[0]?.type_tax === "GST" && (
                      <>
                        <th className="!p-2 !text-left">CGST</th>
                        <th className="!p-2 !text-left">SGST</th>
                        <th className="!p-2 !text-left">GST</th>
                      </>
                    )}
                    {data[0]?.type_tax === "IGST" && (
                      <>
                        <th className="!p-2 !text-left">IGST</th>
                      </>
                    )}

                    <th className="!p-2 !text-left">Quantity</th>
                    <th className="!p-2 !text-left">Price</th>
                  </tr>
                </thead>
                <tbody className="!overflow-y-auto">
                  {data[0]?.items?.map((order) => {
                    return (
                      <tr className="border-b border-gray-300">
                        <td className="!p-2">{order.product_name}</td>
                        {order?.type_tax === "GST" && (
                          <>
                            <td className="!p-2">{order.cgst}</td>
                            <td className="!p-2">{order.sgst}</td>
                            <td className="!p-2">{order.gst}</td>
                          </>
                        )}
                        {order?.type_tax === "IGST" && (
                          <td className="!p-2">{order.igst}</td>
                        )}

                        <td className="!p-2">{order.quantity}x</td>
                        <td className="!p-2">₹{order.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {data?.map((item) => {
              return (
                <CustomDiv className="flex flex-col items-end gap-2 w-full">
                  <span className="flex justify-between w-full">
                    <Text>Total Price:</Text>
                    <Text>₹{item?.total_price}</Text>
                  </span>
                  <span className="flex justify-between w-full">
                    <Text>Discount:</Text>
                    <Text>-₹{item?.total_discount}</Text>
                  </span>
                  <span className="flex justify-between w-full">
                    <Text>Sub total:</Text>
                    <Text>₹{item?.sub_total}</Text>
                  </span>
                  {item?.type_tax === "GST" && (
                    <>
                      <span className="flex justify-between w-full">
                        <Text>CGST:</Text>
                        <Text>+₹{item?.cgst}</Text>
                      </span>
                      <span className="flex justify-between w-full">
                        <Text>SGST:</Text>
                        <Text>+₹{item?.sgst}</Text>
                      </span>
                      <span className="flex justify-between w-full">
                        <Text>Total GST:</Text>
                        <Text>+₹{item?.gst}</Text>
                      </span>
                    </>
                  )}

                  {item?.type_tax === "IGST" && (
                    <span className="flex justify-between w-full">
                      <Text>Total IGST:</Text>
                      <Text>+₹{item?.igst}</Text>
                    </span>
                  )}
                  <span className="flex justify-between w-full">
                    <Text>Delivery Fee:</Text>
                    <Text>
                      ₹
                      {item?.total_delivery_charge
                        ? item?.total_delivery_charge
                        : 0}
                    </Text>
                  </span>
                  <span className="flex border-t border-gray-300 py-2 font-semibold w-full justify-between gap-4">
                    <Text>Total Cost:</Text>
                    <Text>₹{item?.total_amount}</Text>
                  </span>
                </CustomDiv>
              );
            })}

            <CustomDiv className="flex text-sm flex-col">
              <Text>
                Description : Thank you for your order! Payment is expected
                within 31 days; please process this invoice within that time.
              </Text>
            </CustomDiv>
          </div>
        )}
        <CustomDiv className="flex lg:px-16 px-5 mb-5">
          <Pdf targetRef={ref} filename={`Griffon-${data[0]?.invoice_no}.pdf`}>
            {({ toPdf }) => (
              <CustomButton className="!w-full" onClick={toPdf}>
                Generate Invoice
              </CustomButton>
            )}
          </Pdf>
        </CustomDiv>
      </Drawer>
    </>
  );
};
export default InvoiceDetail;
