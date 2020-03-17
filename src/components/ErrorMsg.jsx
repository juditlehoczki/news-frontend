import React from "react";

const ErrorMsg = ({ status, msg }) => {
  return (
    <div>
      {status} - {msg}. 😕
    </div>
  );
};

export default ErrorMsg;
