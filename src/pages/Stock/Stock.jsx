import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

import "./stock.scss";

function Stock() {
  const history = useHistory();

  return (
    <div>
      <Header />
      <div className="stock">
        <Button className="select add-btn" onClick={() => history.push("/add")}>
          Add item
        </Button>
        <main>
          <Table />
        </main>
      </div>
    </div>
  );
}

export default Stock;
