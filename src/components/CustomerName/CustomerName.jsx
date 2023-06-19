/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./CustomerName.module.css";

const CustomerName = ({
  namechangeHandler,
  servicechangeHandler,
  btnclickhandler,
}) => {
  const onNamechange = (str) => namechangeHandler(str.target.value);
  const [service, setService] = useState(0);
  const onServiceChange = (e) => {
    setService(e.target.value);
    servicechangeHandler(e.target.value);
  };
  return (
    <div className={styles.container}>
      <select
        onChange={onServiceChange}
        className={styles.common}
        id={styles.service}
        required
      >
        <option value="0">Select Service</option>
        <option value="0.2">Amazing Service-20%</option>
        <option value="0.1">Decent Service-10%</option>
        <option value="0.05">Poor Service-5%</option>
      </select>
      <input
        type="text"
        placeholder="Enter Customer Name"
        className={styles.common}
        id={styles.in}
        onChange={onNamechange}
        required
      />
      <button className={styles.common} onClick={btnclickhandler}>
        Add Customer
      </button>
    </div>
  );
};

export default CustomerName;
