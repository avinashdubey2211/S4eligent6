import { Input } from "@mui/joy";
import React from "react";
import classNames from "classnames";

const CustomTextField = ({
  variant = "outlined",
  value,
  id = "",
  name = "",
  onChange,
  className = "",
  placeholder = "",
  startDecorator,
  endDecorator,
  type = "text",
  color = "primary",
  hidden = false,
  accept = "",
  disabled = false,
  onBlur,
  autoFocus = false,
}) => {
  return (
    <Input
      autoFocus={autoFocus}
      type={type}
      id={id}
      name={name}
      accept={accept}
      value={value}
      hidden={hidden}
      onChange={onChange}
      color={color}
      onBlur={onBlur}
      disabled={disabled}
      variant={variant}
      className={classNames("!rounded", className)}
      placeholder={placeholder}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
    />
  );
};

export default CustomTextField;
