import classNames from "classnames";
import React from "react";

const CustomDiv = ({ className = "", onClick, children }) => {
  return (
    <div className={classNames("rounded-none", className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomDiv;
