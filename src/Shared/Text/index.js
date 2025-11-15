import classNames from "classnames";
import React from "react";

const Text = ({ className = "", onClick, children, key }) => {
  return (
    <p className={classNames("", className)} onClick={onClick} key={key}>
      {children}
    </p>
  );
};

export default Text;
