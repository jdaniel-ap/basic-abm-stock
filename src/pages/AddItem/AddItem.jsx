import React, { useState } from "react";
import { useHistory } from "react-router";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { addItem } from "../../services/api";
import { defaultDetails } from "../../utils/defaultVars";

import "./addItem.scss";

function AddItem() {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState(defaultDetails);

  const handleDetails = ({ target }) => {
    const { name, value } = target;

    setDetails((state) => ({ ...state, [name]: value }));
  };

  const handleItem = async (e) => {
    e.preventDefault();

    try {
      if (!details.price || !details.quantity || !details.product_name) {
        throw new Error("All field must be filled");
      }

      const request = await addItem(details);

      if (request.status === 201) {
        setDetails(defaultDetails);
        setMessage({ content: "Item has been created", status: "success" });
      }
    } catch (error) {
      setMessage({ content: error.message, status: "error" });
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={(e) => handleItem(e)}>
        <Alert message={message} clear={setMessage} />
        <div className="box">
          <span>Product name</span>
          <input
            type="text"
            name="product_name"
            value={details.product_name}
            onChange={(e) => handleDetails(e)}
          />
        </div>
        <div className="box">
          <span>Quantity</span>
          <input
            type="number"
            name="quantity"
            value={details.quantity}
            onChange={(e) => handleDetails(e)}
          />
        </div>
        <div className="box">
          <span>Price</span>
          <input
            type="text"
            name="price"
            value={details.price}
            onChange={(e) => handleDetails(e)}
          />
        </div>
        <div className="btn-container">
          <Button className="delete" onClick={() => history.push("/")}>
            Back
          </Button>
          <Button className="select">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
