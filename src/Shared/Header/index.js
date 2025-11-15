import React, { useEffect } from "react";
import CustomDiv from "../CustomDiv";
import brandLogo from "../../Assets/shubhga.svg";
import CustomTextField from "../CustomTextField";
import IconButton from "@mui/joy/IconButton";
import { DarkMode, LightMode, Search, ShoppingBag } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Divider } from "@mui/joy";
import Text from "../Text";
import { Paper } from "@mui/material";
import SignIn from "../../Authentication/SignInPage";

const Header = ({ theme, setTheme }) => {
  const ToggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    theme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <CustomDiv
        elevation={0}
        className="flex !rounded-none items-center fixed z-50 shadow bg-white  w-full justify-between h-20 px-[12%] 2xl:px-[22%]"
      >
        <CustomDiv className="flex gap-3 whitespace-nowrap h-full items-center font-semibold">

          <Link to="#" className="hover:text-red-600">
            <Text>Categories</Text>
          </Link>
          <Link to="#" className="hover:text-red-600">
            <Text>Brands</Text>
          </Link>
          <Link to="#" className="hover:text-red-600">
            <Text>Luxe</Text>
          </Link>
          <Link to="#" className="hover:text-red-600">
            <Text>Shubhga Fashion</Text>
          </Link>
          <Link to="#" className="hover:text-red-600">
            <Text>Beauty Advice</Text>
          </Link>
        </CustomDiv>
        <CustomDiv className="flex gap-3 h-full items-center">
          <CustomTextField
            placeholder="Search.."
            variant="soft"
            startDecorator={<Search />}
          />
          <SignIn />
          <IconButton color="primary" variant="plain">
            <ShoppingBag />
          </IconButton>
          <IconButton color="primary" variant="plain" onClick={ToggleTheme}>
            {theme ? <DarkMode /> : <LightMode />}
          </IconButton>
        </CustomDiv>
      </CustomDiv>
      <Divider />
      <Paper className="flex !rounded-none whitespace-nowrap items-center shadow justify-center pt-20 gap-6">
        {[
          "Makeup",
          "Skin",
          "Hair",
          "Appliances",
          "Bath & Body",
          "Natural",
          "Mom & Baby",
          "Health & Wellness",
          "Men",
          "Fragrance",
          "Pop Ups",
        ].map((item, index) => {
          return (
            <CustomDiv key={index} className="dropdown py-3 dropdown-hover">
              <Link
                to="#"
                className="hover:text-pink-600 border-b-2 transition-all selection:border-none duration-500 ease-linear border-opacity-0 py-3 hover:!border-opacity-100 border-pink-600"
              >
                <Text> {item}</Text>
              </Link>
              <CustomDiv
                tabIndex={0}
                className="dropdown-content -left-3 menu mt-3.5 shadow bg-base-100 rounded-sm "
              >
                <CustomDiv className="flex gap-4">
                  <CustomDiv className="w-32 p-2">
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                  </CustomDiv>
                  <CustomDiv className="w-32 p-2 bg-slate-100">
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                  </CustomDiv>
                </CustomDiv>
              </CustomDiv>
            </CustomDiv>
          );
        })}
      </Paper>
    </>
  );
};

export default Header;
