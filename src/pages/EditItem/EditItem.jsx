import React, { useState, useCallback, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { editItem, getItem } from "../../services/api";
import { defaultDetails } from "../../utils/defaultVars";

function EditItem() {
  const [details, setDetails] = useState(defaultDetails);
  const [message, setMessage] = useState({ status: "" });
  const { id } = useParams();
  const history = useHistory();

  const handleDetails = ({ target }) => {
    const { name, value } = target;
    setDetails((state) => ({ ...state, [name]: value }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    const request = await editItem(id, details);

    if (request.status === 200) {
      setMessage({ content: "Item has been updated", status: "success" });
    }
  };

  const getData = useCallback(async () => {
    const request = await getItem(id);
    const { _id, ...data } = request.data;
    setDetails(data);
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Header />
      <form onSubmit={(e) => handleRequest(e)}>
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
          <Button className="select">Update</Button>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
