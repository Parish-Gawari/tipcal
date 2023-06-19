/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./CustomerOutput.module.css";

const CustomerOutput = ({ customerList }) => {
  const list = customerList.map((ele, index) => <li key={index}> {ele} </li>);
  return (
    <div className={styles.container}>
      <h3>Customers List</h3>
      <hr />
      <ol>{list}</ol>
    </div>
  );
};

export default CustomerOutput;
