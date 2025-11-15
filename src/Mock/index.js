import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  FmdGoodOutlined,
  LockOutlined,
  NotificationsActiveOutlined,
  ReceiptOutlined,
  ShoppingBagOutlined,
  Share
} from "@mui/icons-material";
import React from "react";
import AccountSettings from "../Authentication/UserAccount/AccountSettings";
import Orders from "../Authentication/UserAccount/Orders";
import Wishlist from "../Authentication/UserAccount/Wishlist";
import Address from "../Authentication/UserAccount/Address";
import Notifications from "../Authentication/UserAccount/Notifications";
import Invoices from "../Authentication/UserAccount/Invoices";
import ReferralAndEarn from "../Authentication/UserAccount/ReferralAndEarn";

export const accountData = [
  {
    id: 1,
    title: "Account Settings",
    icon: <AccountCircleOutlined className="!text-gray-500" />,
    component: <AccountSettings />,
  },
  {
    id: 3,
    title: "Orders",
    icon: <ShoppingBagOutlined className="!text-gray-500" />,
    component: <Orders />,
  },
  {
    id: 4,
    title: "Invoices",
    icon: <ReceiptOutlined className="!text-gray-500" />,
    component: <Invoices />,
  },
  {
    id: 8,
    title: "Referral & Earn",
    icon: <Share className="!text-gray-500" />,
    component: <ReferralAndEarn />,
  },
  {
    id: 5,
    title: "Wishlist",
    icon: <FavoriteBorderOutlined className="!text-gray-500" />,
    component: <Wishlist />,
  },
  {
    id: 6,
    title: "Address",
    icon: <FmdGoodOutlined className="!text-gray-500" />,
    component: <Address />,
  },
  {
    id: 7,
    title: "Notifications",
    icon: <NotificationsActiveOutlined className="!text-gray-500" />,
    component: <Notifications />,
  },

  // {
  //   id: 6,
  //   title: "Privacy Policy",
  //   icon: <DescriptionOutlined className="!text-gray-500" />,
  //   component: <LegalNotice />,
  // },
  // {
  //   id: 7,
  //   title: "Contact Us",
  //   icon: <HelpCenterOutlined className="!text-gray-500" />,
  //   component: <HelpCenter />,
  // },
  // {
  //   id: 8,
  //   title: "Change Password",
  //   icon: <SettingsOutlined className="!text-gray-500" />,
  //   component: <ChangePassword />,
  // },
  {
    id: 8,
    title: "Logout",
    icon: <LockOutlined className="!text-gray-500" />,
  },
];
