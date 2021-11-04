import React from "react";

import "./alert.scss";

function Alert({ message, clear }) {
  return (
    <div className={`alert ${message.status} `} onClick={() => clear("")}>
      <span>{message.content}</span>
    </div>
  );
}

export default Alert;
