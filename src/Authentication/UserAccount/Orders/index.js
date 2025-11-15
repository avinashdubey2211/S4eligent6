import {Search} from "@mui/icons-material";
import {CircularProgress} from "@mui/joy";
import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {myOrderList} from "../../../Services/MyOrdersList";
import CustomDiv from "../../../Shared/CustomDiv";
import CustomTextField from "../../../Shared/CustomTextField";
import Text from "../../../Shared/Text";
import OrderDetail from "./OrderDetail";
import {TablePagination} from "@mui/material";

const Orders = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const {data, isLoading} = useQuery(["myOrderList"], () => myOrderList(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
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
    <CustomDiv className="flex flex-col gap-5">
      <CustomDiv className="flex justify-between items-center gap-5">
        <Text className="text-xl whitespace-nowrap font-semibold">
          My Order List
        </Text>
        <CustomTextField
          endDecorator={<Search />}
          placeholder="Search Order History..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </CustomDiv>
      <CustomDiv className="lg:w-full overflow-x-auto">
        <table className="w-full">
          <thead className="!text-center !bg-gray-300 whitespace-nowrap !rounded">
            <tr>
              <th className="!p-2 !text-center">Order Number</th>
              <th className="!p-2 !text-center">Order Date </th>
              <th className="!p-2 !text-center">Status</th>
              <th className="!p-2 !text-center">Delivery Time </th>
              <th className="!p-2 !text-center">Total Price </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="!text-center">
            {data?.data?.data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((item) =>
                item?.orderid_id?.toLowerCase()?.includes(search?.toLowerCase())
              )
              .map((order) => {
                return (
                  <tr className="border-b">
                    <td className="!p-2">
                      {order.orderid_id ? order.orderid_id : "--"}
                    </td>
                    <td className="!p-2">
                      {order.order_date
                        ? order.order_date.slice(0, 19).replace("T", " ")
                        : "--"}
                    </td>
                    <td className="!p-2">
                      {order.order_status ? order.order_status : "--"}
                    </td>
                    {order.order_status === "Delivered" ? (
                      <td className="!p-2">Delivered</td>
                    ) : (
                      <td className="!p-2">
                        {order.delivery_date ? order.delivery_date : "--"}
                      </td>
                    )}
                    <td className="!p-2">
                      {order.total_amount ? `₹${order.total_amount}` : "--"}
                    </td>
                    <td className="!p-2">
                      <OrderDetail OrderId={order.id} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CustomDiv>
      {data?.data?.data?.length >= 10 ? (
        <TablePagination
          rowsPerPageOptions={rowsPerPage}
          component="div"
          count={data?.data?.data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </CustomDiv>
  );
};

export default Orders;
