import React, { useState } from "react";
import Text from "../../../../../Shared/Text";
import { Dialog, DialogContent, Divider } from "@mui/material";
import CustomDiv from "../../../../../Shared/CustomDiv";

const ReturnStatus = ({ status, items,title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Text
        className="bg-gray-600 lg:cursor-pointer rounded-sm p-1 text-white"
        onClick={() => setOpen(true)}
      >
        Show Status
      </Text>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ className: "!m-0 !lg:w-1/3" }}
      >
        <DialogContent className="!p-0">
          <p className="p-3 text-xl font-semibold">{title} Status</p>
          <Divider />
          <CustomDiv className="flex flex-col">
            <Text className="px-3 py-2">You are requested for {title} :</Text>
            <Divider />
            <span className="flex gap-2 p-1">
              <img src={items?.product_images} alt="" className="w-20 h-20" />
              <span className="flex flex-col gap-1 ">
                <Text>{items?.product_name}</Text>
                <Text className="text-sm">
                  Product Code :{" "}
                  <span className="text-red-500">{items?.item_code}</span>{" "}
                </Text>
              </span>
            </span>
            <Divider />
            <span className="p-3 flex flex-col gap-1">
              <Text>
                {title } Status :{" "}
                <span
                  className={
                    status?.return_status === "Pending"
                      ? "text-orange-500 font-bold"
                      : "font-bold text-green-500"
                  }
                >
                  {status?.return_status || status?.replacement_status}
                </span>
              </Text>
              <Text>
                Requested at Date :{" "}
                <span className="font-bold">
                  {status?.return_requested_date?.replace("T", ", Time : ") ||
                    status?.replacement_requested_date?.replace(
                      "T",
                      ", Time : "
                    )}
                </span>
              </Text>
              <Text className="!capitalize">
                Reasons :{" "}
                {status?.reason_for_return_choice ||
                  status?.reason_for_replacement_choice}
              </Text>
            </span>
          </CustomDiv>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReturnStatus;
