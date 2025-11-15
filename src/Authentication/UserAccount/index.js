import React, { useEffect, useState } from "react";
import CustomDiv from "../../Shared/CustomDiv";
import { List, ListItem } from "@mui/material";
import Text from "../../Shared/Text";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { accountData } from "../../Mock";
import LogoutDialog from "../../Shared/ConfirmLogout";

const UserAccount = () => {
  const { state } = useLocation();
  const [navItem, setNavItem] = useState(state?.navItem ? state?.navItem : 1);
  const [open, setOpen] = useState(false);
  const handleClick = (id) => {
    setNavItem(id);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  // useEffect(() => {
  //   setNavItem(id);
  // }, []);

  return (
    <CustomDiv className="flex flex-col lg:flex-row gap-10 min-h-screen bg-[#F2F8F9] px-[3%] lg:px-[6%] py-[3%]">
      <CustomDiv className="lg:w-1/4 border-2 bg-white border-gray-100 !rounded">
        <List className="!p-0">
          {accountData.map((item) => {
            return (
              <ListItem
                className={classNames(
                  "flex gap-3 !p-4 text-gray-600 cursor-pointer",
                  navItem === item.id ? "bg-gray-100 !text-black" : ""
                )}
                onClick={() =>
                  item.title === "Logout" ? setOpen(true) : handleClick(item.id)
                }
              >
                {item.icon}
                <Text>{item.title}</Text>
              </ListItem>
            );
          })}
        </List>
      </CustomDiv>
      <CustomDiv className="lg:w-3/4 border-2 bg-white border-gray-100 p-6 lg:p-10 !rounded">
        {accountData
          .filter((id) => id.id === navItem)
          .map((nav) => {
            return <>{nav.component}</>;
          })}
      </CustomDiv>
      <LogoutDialog open={open} setOpen={setOpen} />
    </CustomDiv>
  );
};

export default UserAccount;
