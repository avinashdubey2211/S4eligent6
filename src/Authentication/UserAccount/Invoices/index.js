import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomDiv from "../../../Shared/CustomDiv";
import CustomTextField from "../../../Shared/CustomTextField";
import Text from "../../../Shared/Text";
import InvoiceDetail from "./InvoiceDetail";
import { useMutation } from "react-query";
import { invoiceListFn } from "../../../Services/InvoiceList";

const Invoices = () => {
  const [data, setData] = useState([]);
  const ref = React.createRef();
  const { mutate, isLoading } = useMutation(invoiceListFn, {
    onSuccess: (response) => {

      setData(response.data.order_invoice_details || []);
    },
  });

  useEffect(
    () => {
      mutate();
    },
    // eslint-disable-next-line
    []
  );

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
        <p className="font-bold text-2xl text-red-500">Invoice is Empty...!</p>
      </CustomDiv>
    </>
  ) : (
    <>
      <CustomDiv className="flex flex-col gap-5">
        <CustomDiv className="flex justify-between gap-5 items-center">
          <Text className="text-xl whitespace-nowrap font-semibold">
            My Invoice List
          </Text>
          {/* <CustomTextField
            endDecorator={<Search />}
            placeholder="Search Invoice History..."
          /> */}
        </CustomDiv>
        <CustomDiv className="lg:w-full overflow-x-auto">
          <table className="w-full">
            <thead className="!text-center whitespace-nowrap !bg-gray-300 !rounded">
              <tr>
                <th className="!p-2 !text-center">Invoice Number</th>
                <th className="!p-2 !text-center">Order ID</th>
                <th className="!p-2 !text-center">Order Date</th>
                <th className="!p-2 !text-center">Status</th>
                <th className="!p-2 !text-center">Delivery Time</th>
                <th className="!p-2 !text-center">Total Price</th>
                <th className="!p-2 !text-center"></th>
              </tr>
            </thead>
            <tbody className="!text-center">
              {data?.map((order) => {
                return (
                  <tr className="border-b">
                    <td className="!p-2">
                      {order?.invoice_data?.invoice_no
                        ? order?.invoice_data?.invoice_no
                        : "--"}
                    </td>
                    <td className="!p-2">
                      {order?.order_id ? order?.order_id : "--"}
                    </td>
                    <td className="!p-2">
                      {order?.invoice_data?.date
                        ? order?.invoice_data?.date
                        : "--"}
                    </td>
                    <td className="!p-2">
                      {order?.order_status ? order?.order_status : "--"}
                    </td>

                    <td className="!p-2">
                      {order?.delivery_date ? order?.delivery_date : "--"}
                    </td>

                    <td className="!p-2">
                      {order?.total_price ? `₹${order?.total_price}` : "--"}
                    </td>

                    {/* <td className="!p-2">
                    {order?.total_price -
                    order?.coupon_discount_amount +
                    order?.total_tax_amount}
                    </td> */}

                    {/* <Text>
                  ₹
                  {data?.total_price -
                    data?.coupon_discount_amount +
                    data?.total_tax_amount}
                </Text>
                     */}

                    <td className="!p-2">
                      {<InvoiceDetail OrderId={order?.order_id} ref={ref} />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CustomDiv>
      </CustomDiv>
    </>
  );
};

export default Invoices;
