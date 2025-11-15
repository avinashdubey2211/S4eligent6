import { Button, ThemeProvider, createTheme } from "@mui/material";
import classNames from "classnames";
import React from "react";

const CustomButton = ({
  className = "",
  onClick,
  children,
  variant = "contained",
  color = "primary",
  endIcon,
  startIcon,
  type = "",
  disabled = false,
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#306BDE",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        type={type}
        disableElevation
        variant={variant}
        color={color}
        disabled={disabled}
        className={classNames("!capitalize", className)}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
