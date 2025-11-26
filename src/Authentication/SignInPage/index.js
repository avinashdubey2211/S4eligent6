import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CustomButton from "../../Shared/CustomButton";
import CustomDiv from "../../Shared/CustomDiv";
import Text from "../../Shared/Text";
import CustomTextField from "../../Shared/CustomTextField";
import { IconButton, ModalClose } from "@mui/joy";
import classNames from "classnames";
import axiosInstance from "../../Config/axios";
import { API_URLS } from "../../Config/API_URLS";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import amaka from "../../Assets/amaka.png";
import logo from "../../Assets/zzz.jpeg";
import loginLogo from "../../Assets/Authentication.gif";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "../../Redux/Actions/ThemeMode";
import { useQuery, useQueryClient } from "react-query";
import loginIcon from "../../Assets/user.svg";
import {
  Avatar,
  Badge,
  BottomNavigationAction,
  Divider,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import { profileFn } from "../../Services/Profile";
import { useState } from "react";
import LogoutDialog from "../../Shared/ConfirmLogout";
import { AccountCircle } from "@mui/icons-material";
// import { MdAccountCircle } from "react-icons/md";

import { useStore } from "../../Hooks";

export default function SignIn({ iconColor = "text-white" }) {
  const [phone, setPhone] = React.useState(null);
  const [otp, setOTP] = React.useState("");
  const [page, setPage] = React.useState("login");
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { data: store } = useStore();

  const StoreData = store?.data?.data;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const isOpen = useSelector((isOpen) => isOpen.themeMode);

  const { data } = useQuery(["profile"], () => profileFn(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    axiosInstance
      .post(
        API_URLS.login,
        { mobile_number: phone },
        {
          headers: {
            "store-id": 1,
          },
        }
      )
      .then((response) => {
        response.data.message === "OTP has been send to your mobile no.!" ? (
          <>
            `${setPage("otp")} $
            {enqueueSnackbar(response.data.message, { variant: "success" })}`
          </>
        ) : (
          enqueueSnackbar(response.data.message, { variant: "success" })
        );
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!", { variant: "error" });
      });
  };

  const client = useQueryClient();
  const handleOTP = (event) => {
    event.preventDefault();
    axiosInstance
      .post(API_URLS.verifyOTP, {
        mobile_number: phone,
        mobile_otp: otp,
        registration_token: "",
        type: "web",
        device_id: "",
      })
      .then((response) => {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({
            type: "USER_INFO",
            userId: response?.data?.user_id,
            email: response?.data?.email,
          })
        );

        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("mobile", response.data.mobile);
        localStorage.setItem("username", response.data.user_full_name);
        response.data.response_code === 200
          ? dispatch(setThemeMode(false))
          : enqueueSnackbar(response.data.message);
        enqueueSnackbar(response.data.message);
        client.refetchQueries(["myCartList"]);
        client.refetchQueries("wishList");
        client.refetchQueries(["profile"]);
        setOTP(null);
        setPage("login");
        setPhone(null);
      })
      .catch((error) => {
        enqueueSnackbar("Something went wrong..!");
      });
  };

  const handleProfile = () => {
    navigate("/user-account");
    handleClose();
  };
  const handleOpen = () => {
    setOpenDialog(true);
    handleClose();
  };

  return (
    <>
      <BottomNavigationAction
        onClick={(event) =>
          localStorage.getItem("Token")
            ? navigate("/user-account")
            : dispatch(setThemeMode(true))
        }
        // icon={<AccountCircle className={'!text-[27px] ${iconColor}'} />}
        icon={<AccountCircle className={`!text-[27px]  ${iconColor} `} />}
      />

      <Modal
        open={isOpen}
        onClose={() => dispatch(setThemeMode(true))}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box
            className={classNames(
              "absolute flex lg:flex-row flex-col rounded outline-none top-1/2 left-1/2 py-16 lg:py-0 -translate-x-1/2 -translate-y-1/2 md:w-1/2 w-11/12 lg:w-3/5 lg:h-[80%] bg-white  shadow"
            )}
          >
            <ModalClose
              component={IconButton}
              onClick={() => dispatch(setThemeMode(false))}
            />

            <>
              <img
                src={loginLogo}
                alt=""
                className="rounded-l cursor-pointer lg:w-1/2 px-5 hidden lg:block"
              />

              <CustomDiv className="lg:w-1/2 flex flex-col justify-center items-center mx-auto p-5 px-[8%]">
                {page === "login" ? (
                  <>
                    <img
                      src={StoreData?.store_logo}
                      alt=""
                      className="my-3 w-1/3"
                    />
                    <Text className="text-2xl font-semibold my-5">Welcome</Text>
                    <Text className="text-sm">
                      Enter your mobile number to start shopping.
                    </Text>
                    <form
                      onSubmit={handleLogin}
                      className="flex flex-col w-full mt-6 gap-10"
                    >
                      <span className="flex flex-col">
                        <Text>Mobile Number</Text>
                        <CustomTextField
                          className="!rounded"
                          type="number"
                          value={phone}
                          onChange={(event) =>
                            event.target.value >= 0 &&
                            setPhone(event.target.value)
                          }
                        />
                      </span>

                      <CustomButton
                        disabled={phone?.length === 10 ? false : true}
                        className="!rounded"
                        type="submit"
                      >
                        Send OTP
                      </CustomButton>
                    </form>
                  </>
                ) : (
                  <>
                    <img
                      src={StoreData?.store_logo}
                      alt=""
                      className="my-3 w-1/2"
                    />
                    <Text className="text-2xl font-semibold my-5">
                      Email Verification
                    </Text>
                    <Text className="text-sm text-center">
                      We have sent a code to your mobile number {phone}
                    </Text>
                    <form
                      onSubmit={handleOTP}
                      className="flex flex-col w-full mt-6 gap-10"
                    >
                      <span className="flex flex-col">
                        <CustomTextField
                          className="!rounded w-full"
                          value={otp}
                          placeholder="Enter OTP"
                          onChange={(event) =>
                            event.target.value >= 0 &&
                            setOTP(event.target.value)
                          }
                        />
                      </span>

                      <CustomButton
                        disabled={otp?.length === 6 ? false : true}
                        className="!rounded"
                        type="submit"
                      >
                        Verify OTP
                      </CustomButton>

                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn't recieve code?</p>
                        <Link
                          className="flex flex-row items-center text-blue-600"
                          rel="noopener noreferrer"
                          onClick={() => setPage("login")}
                        >
                          Resend
                        </Link>
                      </div>
                    </form>
                  </>
                )}
              </CustomDiv>
            </>
          </Box>
        </Fade>
      </Modal>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ elevation: "2" }}
        className="!top-[18px] lg:!-left-40"
      >
        <ListItem className="!flex gap-2 outline-none">
          <span>
            <Avatar
              src={data?.data?.data?.profile_data?.[0]?.profile_picture}
              alt={data?.data?.data?.profile_data?.[0]?.first_name}
            />
          </span>
          <span className="flex flex-col">
            {data?.data?.data?.profile_data?.[0]?.first_name ? (
              <Text className="whitespace-nowrap">
                {data?.data?.data?.profile_data?.[0]?.first_name}{" "}
                {data?.data?.data?.profile_data?.[0]?.last_name}
              </Text>
            ) : (
              <Text className="whitespace-nowrap">Anonymous</Text>
            )}
            <Text className="text-xs">
              {data?.data?.data?.profile_data?.[0]?.mobile_no}
            </Text>
          </span>
        </ListItem>
        <Divider />
        <MenuItem onClick={() => handleProfile()}>My account</MenuItem>
        <MenuItem onClick={handleOpen}>Logout</MenuItem>
      </Menu>
      <LogoutDialog open={openDialog} setOpen={setOpenDialog} />
    </>
  );
}
