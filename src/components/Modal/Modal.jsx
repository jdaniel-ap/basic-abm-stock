import React from "react";
import Button from "../Button/Button";

function Modal({ data, remove }) {
  return (
    <div className={data._id ? "modal" : "hide"}>
      <span>Id: {data._id}</span>
      <span>Product name: {data.product_name}</span>
      <div className="details">
        <span>Qty: {data.quantity}</span>
        <span>Price: {data.price}</span>
      </div>
      <Button className="delete" onClick={() => remove({ _id: undefined })}>
        Close
      </Button>
    </div>
  );
}

export default Modal;
