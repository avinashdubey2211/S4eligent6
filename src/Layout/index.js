import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Paper,
} from "@mui/material";
import React from "react";
import Footer from "../Shared/Footer";
import Headers from "../Shared/Headers";
import {
  AccountCircle,
  Favorite,
  Home,
  KeyboardArrowUp,
  ShoppingBag,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddToCart from "../Shared/Headers/AddToCart";
import SignIn from "../Authentication/SignInPage";

const Layout = ({ theme, setTheme, component }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Headers theme={theme} setTheme={setTheme} />
      <Paper
        elevation={0}
        className="w-full h-full lg:pt-12 pt-10 pb-14 !rounded-none "
      >
        {component}
      </Paper>
      <Fab
        color="inherit"
        onClick={handleTop}
        className="!fixed lg:!block !hidden !p-2 !z-50 bottom-10 right-10"
      >
        <KeyboardArrowUp fontSize="large" />
      </Fab>
      {/* <Footer /> */}
      <BottomNavigation
        showLabels
        value={value}
        className="!fixed bottom-0 w-full bg-white z-50 shadow border-t-2"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<Home className="!text-[27px]" />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={<Favorite className="!text-[27px]" />}
          onClick={() => navigate("/wish-list")}
        />
        <AddToCart from={"BottomNav"} />
        <SignIn />
      </BottomNavigation>
    </>
  );
};

export default Layout;
