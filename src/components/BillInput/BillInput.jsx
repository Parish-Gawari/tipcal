/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./BillInput.module.css";

const BillInput = ({ billchangeHandler }) => {
  const [bill, setBill] = useState(0);
  const billHandler = (e) => billchangeHandler(e.target.value);
  return (
    <>
      <div className={styles.billAmount}>
        <label htmlFor="Bill">Enter Bill Amount Here</label>
        <input type="number" id="Bill" onChange={billHandler} />
      </div>
    </>
  );
};

export default BillInput;
