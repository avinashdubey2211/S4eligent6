import React from "react";
import CustomButton from "../../../Shared/CustomButton";
import CustomDiv from "../../../Shared/CustomDiv";
import Text from "../../../Shared/Text";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

const OrderPlaced = ({ setState, setPage }) => {
  const client = useQueryClient();
  const navigate = useNavigate();
  const handleClose = () => {
    setState(false);
    setPage(1);
    client.refetchQueries("myCartList");
    client.refetchQueries("myOrderList");
    navigate(`/user-account`, { state: { navItem: 2 } });
  };
  return (
    <>
      <CustomDiv className="flex flex-col h-[80vh] w-full gap-5 items-center justify-center">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
        >
          <circle className="circle" cx="30" cy="30" r="30" fill="none" />
          <path className="check" fill="none" d="m12.5 28l10.0 13 24-22.2" />
        </svg>
        <Text className="text-center text-3xl font-semibold">Order Placed</Text>

        <CustomButton onClick={handleClose}>Go to My Orders</CustomButton>
      </CustomDiv>
    </>
  );
};

export default OrderPlaced;
