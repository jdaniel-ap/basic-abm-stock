import React, { useEffect, useCallback, useState } from "react";
import { deleteItem, getItems } from "../../services/api";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import emptyData from "../../assets/images/notfound.svg";
import noData from "../../assets/images/nodata.png";
import { useHistory } from "react-router";
import "./table.scss";

function Table() {
  const [error, setError] = useState("");
  const [items, setItems] = useState(undefined);
  const [details, setDetails] = useState({});
  const history = useHistory();

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadData();
  };

  const loadData = useCallback(async () => {
    try {
      const request = await getItems();
      setItems(request.data);
    } catch (err) {
      setError(err.message);
    }
  }, [setError]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const spinnerOrNot = () => {
    if (error) {
      return (
        <div>
          <img src={emptyData} alt="error connection" />
          <h2>Not connection or the CRUDCRUD endpoint is inactive</h2>
        </div>
      );
    } else {
      return (
        <div className="spinner-container">
          <span>Fetching data...</span>
          <div className="spinner"></div>
        </div>
      );
    }
  };

  const tableOrNot = () => {
    if (items.length === 0) {
      return (
        <div>
          <img src={noData} alt="empty data" />
          <h3>Any data registered</h3>
        </div>
      );
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <th>_Id</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </tbody>
          {items.map((item) => (
            <tbody key={item._id}>
              <tr>
                <td>{item._id}</td>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td className="btn-container">
                  <Button
                    className="delete"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="select"
                    onClick={() => history.push(`/items/${item._id}`)}
                  >
                    Select
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      );
    }
  };

  return (
    <section className="content">
      <Modal data={details} remove={setDetails} />
      {!items ? spinnerOrNot() : tableOrNot()}
    </section>
  );
}

export default Table;
